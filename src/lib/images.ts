import type { Property } from "@/data/property-types";

/** Convert a display name to a filesystem-safe slug (e.g. "Wade Warren" → "wade-warren"). */
export function slugifyName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Brand & site-wide marketing assets */
export const brandImages = {
  logo: "/images/brand/logo.png",
  ogImage: "/images/brand/og-image.png",
} as const;

/** Home page hero imagery */
export const heroImages = {
  building: "/images/hero/building.png",
} as const;

/** About page imagery */
export const aboutImages = {
  journey: "/images/pages/about/journey.jpg",
} as const;

/** Contact page office gallery */
export const contactGalleryImages = [
  "/images/pages/contact/gallery-01.jpg",
  "/images/pages/contact/gallery-02.jpg",
  "/images/pages/contact/gallery-03.jpg",
  "/images/pages/contact/gallery-04.jpg",
  "/images/pages/contact/gallery-05.jpg",
  "/images/pages/contact/gallery-06.jpg",
] as const;

/** Custom PNG/SVG icon folders (home, about, services pages use Lucide by default). */
export const iconPaths = {
  home: "/images/icons/home",
  about: "/images/icons/about",
  services: "/images/icons/services",
} as const;

export function propertyCoverImage(slug: string): string {
  return `/images/properties/${slug}/cover.jpg`;
}

export function propertyGalleryImage(slug: string, index: number): string {
  const num = String(index + 1).padStart(2, "0");
  return `/images/properties/${slug}/gallery-${num}.jpg`;
}

export function propertyGalleryImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => propertyGalleryImage(slug, i));
}

/** Map property data to organized local image paths under public/images/properties/ */
export function attachPropertyImages(property: Property): Property {
  const galleryCount = property.gallery.length;
  return {
    ...property,
    image: propertyCoverImage(property.slug),
    gallery: propertyGalleryImages(property.slug, galleryCount),
  };
}

export function testimonialAvatarImage(name: string): string {
  return `/images/testimonials/${slugifyName(name)}.jpg`;
}

export function teamMemberImage(name: string): string {
  return `/images/team/${slugifyName(name)}.jpg`;
}
