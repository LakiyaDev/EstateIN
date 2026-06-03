"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationProps = {
  current?: number;
  total?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  viewAllMobileOnly?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
};

export function Pagination({
  current = 1,
  total = 10,
  viewAllHref,
  viewAllLabel = "View All",
  viewAllMobileOnly = false,
  onPrevious,
  onNext,
}: PaginationProps) {
  const canGoPrevious = current > 1;
  const canGoNext = current < total;

  return (
    <div className="mt-8 border-t border-border pt-6">
      {viewAllHref && (
        <a
          href={viewAllHref}
          className={cn(
            "mb-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm text-text-secondary transition hover:border-text-muted hover:text-white",
            viewAllMobileOnly && "lg:hidden",
          )}
        >
          {viewAllLabel}
        </a>
      )}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-white">
          {String(current).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-text-muted hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!canGoNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:border-text-muted hover:text-white disabled:cursor-not-allowed disabled:opacity-40 lg:bg-transparent"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
