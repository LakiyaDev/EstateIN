"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Pagination } from "@/components/ui/Pagination";

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
  const index = Math.min(current, items.length - 1);

  if (isLargeScreen === null) {
    return <div className="mt-8 min-h-[320px]" aria-hidden />;
  }

  return (
    <>
      {isLargeScreen ? (
        <div className="mt-8 grid grid-cols-3 gap-6">
          {renderDesktop
            ? renderDesktop(items.slice(0, 3))
            : items.slice(0, 3).map((item, i) => (
                <div key={getKey?.(item, i) ?? i}>{renderItem(item, i)}</div>
              ))}
        </div>
      ) : (
        <div className="mt-8">{renderItem(items[index], index)}</div>
      )}

      <Pagination
        viewAllHref={viewAllHref}
        viewAllLabel={viewAllLabel}
        viewAllMobileOnly
        current={index + 1}
        total={total}
        onPrevious={() => setCurrent((prev) => Math.max(0, prev - 1))}
        onNext={() => setCurrent((prev) => Math.min(items.length - 1, prev + 1))}
      />
    </>
  );
}
