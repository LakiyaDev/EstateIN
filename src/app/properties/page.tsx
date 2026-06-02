import { Search, MapPin, Home, DollarSign, Ruler, Calendar } from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { properties } from "@/data/properties";

const filters = [
  { label: "Location", icon: MapPin },
  { label: "Property Type", icon: Home },
  { label: "Pricing Range", icon: DollarSign },
  { label: "Property Size", icon: Ruler },
  { label: "Build Year", icon: Calendar },
];

export default function PropertiesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Find Your Dream Property
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          Welcome to Estatein, where your dream property awaits in every corner of
          our beautiful world. Explore our curated selection of properties, each
          offering a unique story and a chance to redefine your life.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            placeholder="Search for a Property"
            className="flex-1 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder:text-text-muted outline-none focus:border-primary"
          />
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            <Search className="h-4 w-4" />
            Find Property
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {filters.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-secondary transition hover:border-text-muted hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
              <span className="text-text-muted">▼</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <SectionHeading
          title="Discover a World of Possibilities"
          description="Our portfolio of properties is as diverse as your dreams. Explore the categories below to find the perfect property that resonates with your vision of home."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <Pagination current={1} total={10} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <SectionHeading
          title="Let's Make it Happen"
          description="You're one step closer to your dream property. Fill out the form below, and our real estate experts will get back to you with personalized listings."
        />
        <div className="mt-8">
          <ContactForm variant="full" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
