import { notFound } from "next/navigation";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Zap,
} from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqCard } from "@/components/home/FaqCard";
import { PropertyImageGallery } from "@/components/properties/PropertyImageGallery";
import { getPropertyBySlug, getProperties } from "@/lib/data/properties";
import { faqs } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.title} | Estatein`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  const additionalFees = [
    { label: "Property Transfer Tax", amount: "$25,000" },
    { label: "Legal Fees", amount: "$3,000" },
    { label: "Home Inspection", amount: "$500" },
    { label: "Property Insurance", amount: "$1,200" },
  ];

  const monthlyCosts = [
    { label: "Property Taxes", amount: "$1,250" },
    { label: "HOA Fee", amount: "$300" },
  ];

  return (
    <>
      <section className="page-container py-10 lg:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1 text-sm text-text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              {property.location}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs text-text-muted">Price</p>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              {property.priceFormatted}
            </p>
          </div>
        </div>

        <PropertyImageGallery
          title={property.title}
          image={property.image}
          gallery={property.gallery}
        />
      </section>

      <section className="page-container py-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">Description</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {property.description}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-3 min-[400px]:gap-4">
              <div className="rounded-lg border border-border bg-surface p-4 text-center">
                <BedDouble className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-text-muted">Bedrooms</p>
                <p className="text-sm font-medium text-white">
                  {String(property.bedrooms).padStart(2, "0")}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4 text-center">
                <Bath className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-text-muted">Bathrooms</p>
                <p className="text-sm font-medium text-white">
                  {String(property.bathrooms).padStart(2, "0")}
                </p>
              </div>
              <div className="min-w-0 rounded-lg border border-border bg-surface p-4 text-center">
                <Maximize2 className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-text-muted">Area</p>
                <p className="text-sm font-medium text-white">{property.area}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              Key Features and Amenities
            </h2>
            <ul className="mt-4 space-y-3">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm text-text-muted"
                >
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-container py-12">
        <SectionHeading
          title={`Inquire About ${property.title}`}
          description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details."
          showIcon={false}
        />
        <div className="mt-8">
          <ContactForm variant="inquiry" propertyName={property.title} />
        </div>
      </section>

      <section className="page-container py-12">
        <SectionHeading
          title="Comprehensive Pricing Details"
          description="At Estatein, transparency is key. We want you to have a clear understanding of the property's pricing and associated costs."
        />
        <div className="mt-6 rounded-xl border border-border bg-surface p-5 text-sm text-text-muted">
          Note: The figures provided above are estimations and may vary depending on
          property location and other factors.
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6 lg:col-span-1">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-white">Listing Price</h3>
              <button type="button" className="text-xs text-text-muted hover:text-white">
                Learn More
              </button>
            </div>
            <p className="mt-4 text-2xl font-semibold text-white">
              {property.priceFormatted}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-white">Additional Fees</h3>
              <button type="button" className="text-xs text-text-muted hover:text-white">
                Learn More
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {additionalFees.map((fee) => (
                <li
                  key={fee.label}
                  className="flex flex-col gap-1 text-sm text-text-muted min-[400px]:flex-row min-[400px]:justify-between"
                >
                  <span>{fee.label}</span>
                  <span className="font-medium text-white min-[400px]:font-normal">{fee.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-white">Monthly Costs</h3>
              <button type="button" className="text-xs text-text-muted hover:text-white">
                Learn More
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {monthlyCosts.map((cost) => (
                <li
                  key={cost.label}
                  className="flex flex-col gap-1 text-sm text-text-muted min-[400px]:flex-row min-[400px]:justify-between"
                >
                  <span>{cost.label}</span>
                  <span className="font-medium text-white min-[400px]:font-normal">{cost.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-white">Total Initial Costs</h3>
            <p className="mt-4 text-2xl font-semibold text-white">$1,279,700</p>
            <p className="mt-1 text-xs text-text-muted">Listing price + fees</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-white">Monthly Expenses</h3>
            <p className="mt-4 text-2xl font-semibold text-white">$2,500</p>
            <p className="mt-1 text-xs text-text-muted">Mortgage + costs</p>
          </div>
        </div>
      </section>

      <section className="page-container py-12">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {faqs.slice(0, 3).map((faq) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <Pagination viewAllHref="/faqs" viewAllLabel="View All FAQ's" />
      </section>

      <CtaBanner />
    </>
  );
}
