"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactGalleryImages } from "@/lib/images";
import { offices } from "@/data/content";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@estatein.com",
    href: "mailto:info@estatein.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Main Headquarters",
    href: "#offices",
  },
  {
    icon: Mail,
    label: "Socials",
    value: "Instagram · LinkedIn · Facebook",
    href: "#",
  },
];

const galleryImages = [...contactGalleryImages];

export default function ContactPage() {
  const [officeFilter, setOfficeFilter] = useState<"all" | "regional" | "international">("all");

  const filteredOffices =
    officeFilter === "all"
      ? offices
      : offices.filter((o) => o.region === officeFilter);

  return (
    <>
      <section className="page-container py-12 lg:py-16">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Get in Touch with Estatein
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with
          any inquiries, whether you&apos;re looking to buy, sell, rent, or invest in
          property. Reach out to us, and let&apos;s make your real estate dreams a
          reality.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group relative rounded-xl border border-border bg-surface p-5 transition hover:border-text-muted"
            >
              <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-text-muted transition group-hover:text-white" />
              <card.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-xs text-text-muted">{card.label}</p>
              <p className="mt-1 text-sm font-medium text-white">{card.value}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-container py-12">
        <SectionHeading
          title="Let's Connect"
          description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with our team."
        />
        <div className="mt-8">
          <ContactForm variant="simple" />
        </div>
      </section>

      <section id="offices" className="page-container py-12">
        <SectionHeading
          title="Discover Our Office Locations"
          description="Estatein is here to serve you across borders and time zones. Our global presence ensures that you receive exceptional service wherever you are."
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {(["all", "regional", "international"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setOfficeFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm capitalize transition ${
                officeFilter === filter
                  ? "bg-surface-elevated text-white"
                  : "border border-border text-text-muted hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredOffices.map((office) => (
            <div
              key={office.address}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="text-xs text-text-muted">{office.type}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {office.address}
              </h3>
              <p className="mt-3 text-sm text-text-muted">{office.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-primary" />
                  {office.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4 text-primary" />
                  {office.phone}
                </span>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
              >
                Get Direction
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="page-container py-12">
        <SectionHeading
          title="Explore Estatein's World"
          description="Step inside the world of Estatein, where professionalism meets warmth, and every interaction is a step toward your real estate aspirations."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl border border-border ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Estatein office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
