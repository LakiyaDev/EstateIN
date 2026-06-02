import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { FeatureQuickCard } from "@/components/ui/FeatureQuickCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { heroFeatures, testimonials, faqs } from "@/data/content";
import { properties } from "@/data/properties";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties for Clients" },
  { value: "16+", label: "Years of Experience" },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-white transition hover:border-text-muted"
              >
                Learn More
              </Link>
              <Link
                href="/properties"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
              >
                Browse Properties
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface px-3 py-4 text-center md:px-4"
                >
                  <p className="text-lg font-semibold text-white md:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square max-h-[480px] overflow-hidden rounded-2xl border border-border lg:max-h-none lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Modern skyscraper"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 right-6 hidden h-24 w-24 items-center justify-center rounded-full border border-border bg-background/80 text-center text-[10px] leading-tight text-text-muted backdrop-blur sm:flex">
              Find Your Dream Home ↗
            </div>
          </div>
        </div>

        <div
          id="features"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroFeatures.map((feature) => (
            <FeatureQuickCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Featured Properties"
            description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
            showIcon={false}
          />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <Pagination
          viewAllHref="/properties"
          viewAllLabel="View All Properties"
          current={1}
          total={60}
        />
      </section>

      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-4 py-12 lg:px-8"
      >
        <SectionHeading
          title="What Our Clients Say"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {item.text}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Pagination
          viewAllHref="#"
          viewAllLabel="View All Testimonials"
          current={1}
          total={10}
        />
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 flex-1 text-sm text-text-muted">{faq.answer}</p>
              <button
                type="button"
                className="mt-6 w-fit rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition hover:border-text-muted hover:text-white"
              >
                Read More
              </button>
            </article>
          ))}
        </div>
        <Pagination viewAllHref="#" viewAllLabel="View All FAQ's" current={1} total={10} />
      </section>

      <CtaBanner />
    </>
  );
}
