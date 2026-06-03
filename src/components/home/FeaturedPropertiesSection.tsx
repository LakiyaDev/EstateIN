"use client";

import { MobileCarouselSection } from "@/components/home/MobileCarouselSection";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Property } from "@/data/properties";

export function FeaturedPropertiesSection({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <section className="page-container py-10 sm:py-12 lg:py-16">
      <SectionHeader
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
        showIcon={false}
        viewAllHref="/properties"
        viewAllLabel="View All Properties"
      />
      <MobileCarouselSection
        items={properties}
        total={60}
        viewAllHref="/properties"
        viewAllLabel="View All Properties"
        getKey={(property) => property.slug}
        renderItem={(property) => <PropertyCard property={property} />}
        renderDesktop={(items) =>
          items.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))
        }
      />
    </section>
  );
}
