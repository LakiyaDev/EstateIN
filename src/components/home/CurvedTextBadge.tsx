import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CurvedTextBadgeProps = {
  className?: string;
  size?: "sm" | "md";
};

export function CurvedTextBadge({
  className,
  size = "md",
}: CurvedTextBadgeProps) {
  const isSmall = size === "sm";

  return (
    <div className={cn("absolute z-10 flex", className)} aria-hidden>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-background shadow-[0_0_0_6px_rgba(20,20,20,0.6)]",
          isSmall ? "h-[108px] w-[108px]" : "h-[140px] w-[140px]",
        )}
      >
        <svg
          viewBox="0 0 140 140"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <path
              id="heroBadgeCircle"
              d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          <text
            fill="currentColor"
            className={cn(
              "uppercase tracking-[0.2em] text-text-muted",
              isSmall ? "text-[8px]" : "text-[9.5px]",
            )}
          >
            <textPath href="#heroBadgeCircle" startOffset="0%">
              Discover Your Dream Property • Discover Your Dream Property •
            </textPath>
          </text>
        </svg>
        <span
          className={cn(
            "relative flex items-center justify-center rounded-full border border-border bg-surface text-white",
            isSmall ? "h-9 w-9" : "h-11 w-11",
          )}
        >
          <ArrowUpRight
            className={isSmall ? "h-4 w-4" : "h-5 w-5"}
            strokeWidth={1.5}
          />
        </span>
      </div>
    </div>
  );
}
