import Image from "next/image";
import Link from "next/link";
import { CurvedTextBadge } from "@/components/home/CurvedTextBadge";
import { HeroWaves } from "@/components/home/HeroWaves";
import { FeatureQuickGrid } from "@/components/ui/FeatureQuickCard";
import { heroFeatures } from "@/data/content";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="page-container pb-8 pt-6 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
        <div className="relative grid items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
          <div className="relative z-[1] order-2 flex min-w-0 max-w-xl flex-col justify-center lg:order-1 lg:py-6 lg:pr-8">
            <h1 className="text-[1.65rem] font-extrabold leading-[1.22] tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:mt-5 md:text-[15px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="mt-6 flex flex-row flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-[10px] border border-border bg-transparent px-7 py-4 text-[15px] font-medium text-white transition hover:border-text-muted sm:min-h-14 sm:px-8 sm:text-base"
              >
                Learn More
              </Link>
              <Link
                href="/properties"
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-[10px] bg-primary px-7 py-4 text-[15px] font-medium text-white transition hover:bg-primary-hover sm:min-h-14 sm:px-8 sm:text-base"
              >
                Browse Properties
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-xl border border-border bg-surface px-2 py-4 sm:px-4 sm:py-5"
                >
                  <p className="text-lg font-semibold text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-snug text-text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 min-h-[320px] min-w-0 sm:min-h-[400px] lg:order-2 lg:min-h-[560px] lg:-mr-[max(1rem,calc((100vw-80rem)/2+2rem))]">
            <CurvedTextBadge className="left-2 top-1/2 z-20 -translate-y-1/2 sm:left-4 lg:-left-[52px] lg:translate-x-0" />
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] sm:min-h-[400px] lg:min-h-[560px] lg:rounded-l-2xl lg:rounded-r-none lg:border-y lg:border-l lg:border-r-0">
              <HeroWaves className="text-white/[0.08] opacity-100" />
              <Image
                src="/images/hero-building.png"
                alt="Modern glass high-rise building"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div id="features" className="mt-8 sm:mt-10 lg:mt-12">
          <FeatureQuickGrid features={heroFeatures} layout="hero" />
        </div>
      </div>
    </section>
  );
}
