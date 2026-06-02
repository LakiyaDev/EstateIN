import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #333 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 lg:flex-row lg:items-center lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            Start Your Real Estate Journey Today
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
            Your dream property is just a click away. Whether you&apos;re looking
            for a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way.
          </p>
        </div>
        <Link
          href="/properties"
          className="shrink-0 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Explore Properties
        </Link>
      </div>
    </section>
  );
}
