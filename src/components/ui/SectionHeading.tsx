import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  showIcon?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  showIcon = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-start gap-3">
        {showIcon && (
          <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
        )}
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
