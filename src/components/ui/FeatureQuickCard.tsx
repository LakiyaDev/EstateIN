import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Home,
  TrendingUp,
} from "lucide-react";

const icons = {
  home: Home,
  chart: BarChart3,
  building: Building2,
  trending: TrendingUp,
};

type FeatureQuickCardProps = {
  title: string;
  href: string;
  icon: keyof typeof icons;
};

export function FeatureQuickCard({ title, href, icon }: FeatureQuickCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition hover:border-text-muted"
    >
      <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-text-muted transition group-hover:text-white" />
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-8 text-sm font-medium text-white">{title}</p>
    </Link>
  );
}
