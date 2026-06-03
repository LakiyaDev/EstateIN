import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Home } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="p-4 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {property.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-text-muted">
          {property.description}{" "}
          <Link
            href={`/properties/${property.slug}`}
            className="text-white underline-offset-2 hover:underline"
          >
            Read More
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-text-secondary">
            <BedDouble className="h-3.5 w-3.5 shrink-0" />
            {property.bedrooms}-Bedroom
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-text-secondary">
            <Bath className="h-3.5 w-3.5 shrink-0" />
            {property.bathrooms}-Bathroom
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-text-secondary">
            <Home className="h-3.5 w-3.5 shrink-0" />
            {property.type}
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-text-muted">Price</p>
            <p className="text-lg font-semibold text-white">
              {property.priceFormatted}
            </p>
          </div>
          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-hover sm:w-auto sm:shrink-0"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </article>
  );
}
