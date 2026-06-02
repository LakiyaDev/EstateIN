import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  current?: number;
  total?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function Pagination({
  current = 1,
  total = 10,
  viewAllHref,
  viewAllLabel = "View All",
}: PaginationProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {viewAllHref && (
        <a
          href={viewAllHref}
          className="rounded-lg border border-border px-5 py-2.5 text-sm text-text-secondary transition hover:border-text-muted hover:text-white"
        >
          {viewAllLabel}
        </a>
      )}
      <div className="flex items-center gap-3 sm:ml-auto">
        <span className="text-sm text-text-muted">
          {String(current).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition hover:border-text-muted hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition hover:border-text-muted hover:text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
