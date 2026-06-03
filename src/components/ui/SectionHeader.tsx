import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SectionHeaderProps = {
  title: string;
  description?: string;
  showIcon?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function SectionHeader({
  title,
  description,
  showIcon = true,
  viewAllHref,
  viewAllLabel,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <SectionHeading
        title={title}
        description={description}
        showIcon={showIcon}
        className="flex-1"
      />
      {viewAllHref && viewAllLabel && (
        <Link
          href={viewAllHref}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm text-text-secondary transition hover:border-text-muted hover:text-white lg:bg-transparent"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}
