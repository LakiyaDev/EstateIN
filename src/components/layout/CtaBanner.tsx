import Link from "next/link";
import { CtaCubeDecor } from "./CtaCubeDecor";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <CtaCubeDecor />
      <div className="page-container relative flex flex-col items-start justify-between gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:gap-10 lg:py-16">
        <div className="min-w-0 max-w-3xl">
          <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Start Your Real Estate Journey Today
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
            Your dream property is just a click away. Whether you&apos;re looking
            for a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized assistance.
          </p>
        </div>
        <Link
          href="/properties"
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-[10px] bg-primary px-8 py-3.5 text-sm font-medium text-white transition hover:bg-primary-hover lg:w-auto"
        >
          Explore Properties
        </Link>
      </div>
    </section>
  );
}
