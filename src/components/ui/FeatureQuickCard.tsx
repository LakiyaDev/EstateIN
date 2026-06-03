import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  Building2,
  Home,
  Sun,
} from "lucide-react";
import type { FeatureIcon } from "@/data/content";
import { cn } from "@/lib/utils";

const icons = {
  home: Home,
  value: Banknote,
  building: Building2,
  invest: Sun,
};

type FeatureQuickCardProps = {
  title: string;
  href: string;
  icon: FeatureIcon;
  variant?: "standalone" | "grid";
};

export function FeatureQuickCard({
  title,
  href,
  icon,
  variant = "standalone",
}: FeatureQuickCardProps) {
  const Icon = icons[icon];
  const isGrid = variant === "grid";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[130px] flex-col items-center justify-between px-4 py-5 text-center transition sm:min-h-[160px] sm:px-5 sm:py-6 lg:min-h-[172px]",
        isGrid
          ? "rounded-none border-0 bg-surface hover:bg-surface-elevated/40"
          : "rounded-xl border border-border bg-surface hover:border-text-muted",
      )}
    >
      <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-text-muted/70 transition group-hover:text-white sm:right-4 sm:top-4" />
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_24px_rgba(112,59,247,0.35)] sm:h-12 sm:w-12">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <p className="px-1 text-xs font-medium leading-snug text-white sm:text-sm">
        {title}
      </p>
    </Link>
  );
}

export function FeatureQuickGrid({
  features,
  layout = "default",
}: {
  features: { title: string; href: string; icon: FeatureIcon }[];
  layout?: "default" | "hero";
}) {
  if (layout === "hero") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureQuickCard
            key={feature.title}
            {...feature}
            variant="standalone"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
        {features.map((feature) => (
          <FeatureQuickCard key={feature.title} {...feature} variant="standalone" />
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-xl border border-border lg:grid lg:grid-cols-4 lg:divide-x lg:divide-border">
        {features.map((feature) => (
          <FeatureQuickCard key={feature.title} {...feature} variant="grid" />
        ))}
      </div>
    </>
  );
}
