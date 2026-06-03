import Image from "next/image";
import Link from "next/link";
import { CurvedTextBadge } from "./CurvedTextBadge";
import { HeroWaves } from "./HeroWaves";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-container py-6 sm:py-10 lg:py-12">
        <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_1fr] lg:gap-0">
          <div className="relative z-[1] order-2 min-w-0 max-w-xl lg:order-1 lg:py-6 lg:pr-8">
            <h1 className="text-[1.65rem] font-semibold leading-[1.22] tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:mt-5 md:text-[15px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row">
              <Link
                href="/about"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-white transition hover:border-text-muted md:w-auto"
              >
                Learn More
              </Link>
              <Link
                href="/properties"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-primary px-6 py-3.5 text-sm font-medium text-white transition hover:bg-primary-hover md:w-auto"
              >
                Browse Properties
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 rounded-xl border border-border bg-surface px-4 py-4 sm:py-5 ${
                    index === 2 ? "col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 min-w-0 lg:order-2 lg:min-h-[540px] lg:-mr-[max(1rem,calc((100vw-80rem)/2+2rem))]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] lg:rounded-l-2xl lg:rounded-r-none lg:border-y lg:border-l lg:border-r-0">
              <HeroWaves className="text-[#333]" />
              <CurvedTextBadge
                size="sm"
                className="bottom-3 left-3 flex lg:hidden"
              />
              <CurvedTextBadge className="left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex" />
              <div className="relative flex min-h-[300px] items-end justify-center px-4 pb-2 pt-6 sm:min-h-[380px] lg:min-h-[540px] lg:px-10 lg:pb-0 lg:pt-10">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[340px] lg:mx-0 lg:h-[min(90%,500px)] lg:max-w-none lg:flex-1 lg:aspect-auto">
                  <Image
                    src={HERO_IMAGE}
                    alt="Modern glass high-rise building"
                    fill
                    className="object-contain object-bottom"
                    priority
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
