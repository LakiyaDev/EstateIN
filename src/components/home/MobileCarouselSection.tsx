"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Pagination } from "@/components/ui/Pagination";

type ScreenSize = "mobile" | "tablet" | "desktop";

const ITEMS_PER_PAGE: Record<ScreenSize, number> = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

type MobileCarouselSectionProps<T> = {
  items: T[];
  total: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  renderItem: (item: T, index: number) => ReactNode;
  renderDesktop?: (items: T[]) => ReactNode;
  getKey?: (item: T, index: number) => string;
};

function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize | null>(null);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    const tabletMedia = window.matchMedia("(min-width: 768px)");
    const update = () =>
      setScreenSize(
        desktopMedia.matches
          ? "desktop"
          : tabletMedia.matches
            ? "tablet"
            : "mobile",
      );

    update();
    desktopMedia.addEventListener("change", update);
    tabletMedia.addEventListener("change", update);
    return () => {
      desktopMedia.removeEventListener("change", update);
      tabletMedia.removeEventListener("change", update);
    };
  }, []);

  return screenSize;
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
  const screenSize = useScreenSize();
  const itemsPerPage = screenSize ? ITEMS_PER_PAGE[screenSize] : 1;
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const safePage = Math.min(current, pageCount - 1);
  const startIndex = safePage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);
  const paginationTotal = screenSize === "mobile" ? total : pageCount;

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount, screenSize]);

  if (screenSize === null) {
    return <div className="mt-8 min-h-[320px]" aria-hidden />;
  }

  return (
    <>
      {screenSize !== "mobile" ? (
        <div
          className={
            screenSize === "desktop"
              ? "mt-8 grid grid-cols-3 gap-6"
              : "mt-8 grid grid-cols-2 gap-5"
          }
        >
          {renderDesktop && screenSize === "desktop"
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
