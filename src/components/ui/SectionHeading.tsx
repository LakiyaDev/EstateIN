type SectionHeadingProps = {
  title: string;
  description?: string;
  showIcon?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  showIcon: _showIcon = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 flex max-w-[861px] text-sm leading-relaxed text-text-muted sm:mt-3 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
