import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Home } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-text-muted">{property.locationTag}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{property.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-text-muted">
          {property.description}
          <Link
            href={`/properties/${property.slug}`}
            className="ml-1 text-primary hover:underline"
          >
            Read More
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" />
            {property.bedrooms}-Bedroom
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {property.bathrooms}-Bathroom
          </span>
          <span className="flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
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
            className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </article>
  );
}
