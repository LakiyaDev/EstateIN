"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Pagination } from "@/components/ui/Pagination";

const DESKTOP_ITEMS_PER_PAGE = 3;

type MobileCarouselSectionProps<T> = {
  items: T[];
  total: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  renderItem: (item: T, index: number) => ReactNode;
  renderDesktop?: (items: T[]) => ReactNode;
  getKey?: (item: T, index: number) => string;
};

function useLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLargeScreen(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isLargeScreen;
}

export function MobileCarouselSection<T>({
  items,
  total,
  viewAllHref,
  viewAllLabel,
  renderItem,
  renderDesktop,
  getKey,
}: MobileCarouselSectionProps<T>) {
  const [current, setCurrent] = useState(0);
  const isLargeScreen = useLargeScreen();
  const itemsPerPage = isLargeScreen ? DESKTOP_ITEMS_PER_PAGE : 1;
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const safePage = Math.min(current, pageCount - 1);
  const startIndex = safePage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);
  const paginationTotal = isLargeScreen ? pageCount : total;

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount, isLargeScreen]);

  if (isLargeScreen === null) {
    return <div className="mt-8 min-h-[320px]" aria-hidden />;
  }

  return (
    <>
      {isLargeScreen ? (
        <div className="mt-8 grid grid-cols-3 gap-6">
          {renderDesktop
            ? renderDesktop(visibleItems)
            : visibleItems.map((item, i) => (
                <div key={getKey?.(item, startIndex + i) ?? startIndex + i}>
                  {renderItem(item, startIndex + i)}
                </div>
              ))}
        </div>
      ) : (
        <div className="mt-8">
          {visibleItems[0] != null
            ? renderItem(visibleItems[0], startIndex)
            : null}
        </div>
      )}

      <Pagination
        viewAllHref={viewAllHref}
        viewAllLabel={viewAllLabel}
        viewAllMobileOnly
        current={safePage + 1}
        total={paginationTotal}
        onPrevious={() => setCurrent((prev) => Math.max(0, prev - 1))}
        onNext={() =>
          setCurrent((prev) => Math.min(pageCount - 1, prev + 1))
        }
      />
    </>
  );
}
