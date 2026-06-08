import { attachPropertyImages } from "@/lib/images";
import { generatedProperties } from "./generated-properties";
import type { Property } from "./property-types";

export type { Property } from "./property-types";

const coreProperties: Property[] = [
  {
    slug: "seaside-serenity-villa",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    locationTag: "Coastal Escape",
    price: 1250000,
    priceFormatted: "$1,250,000",
    description:
      "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views, and direct beach access, this coastal retreat offers the ultimate blend of luxury and tranquility.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 Square Feet",
    type: "Villa",
    image:
      "https://loremflickr.com/800/600/cottage,home?lock=28",
    gallery: [
      "https://loremflickr.com/600/600/livingroom,design?lock=2001",
      "https://loremflickr.com/600/600/kitchen,modern?lock=2002",
      "https://loremflickr.com/600/600/bedroom,home?lock=2003",
      "https://loremflickr.com/600/600/interior,home?lock=2004"
    ],
    features: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-tier appliances and finishes",
      "Private beach access for a serene coastal lifestyle",
      "Master suite with a spa-inspired bathroom and walk-in closet",
      "Integrated smart home technology for modern living",
    ],
  },
  {
    slug: "metropolitan-haven",
    title: "Metropolitan Haven",
    location: "New York, NY",
    locationTag: "Urban Living",
    price: 850000,
    priceFormatted: "$850,000",
    description:
      "A chic urban residence in the heart of the city. Floor-to-ceiling windows, premium finishes, and unbeatable skyline views make this the perfect metropolitan retreat.",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 Square Feet",
    type: "Apartment",
    image:
      "https://loremflickr.com/800/600/apartment,building?lock=29",
    gallery: [
      "https://loremflickr.com/600/600/livingroom,design?lock=2005",
      "https://loremflickr.com/600/600/kitchen,modern?lock=2006"
    ],
    features: [
      "Panoramic city skyline views",
      "Open-concept living and dining area",
      "Concierge and 24/7 security",
      "Rooftop terrace access",
      "In-unit laundry and storage",
    ],
  },
  {
    slug: "rustic-retreat-cottage",
    title: "Rustic Retreat Cottage",
    location: "Aspen, Colorado",
    locationTag: "Mountain View",
    price: 550000,
    priceFormatted: "$550,000",
    description:
      "Nestled in the mountains, this charming cottage offers cozy interiors, a stone fireplace, and sweeping views of the surrounding peaks — ideal for weekend getaways.",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,600 Square Feet",
    type: "Cottage",
    image:
      "https://loremflickr.com/800/600/mansion,house?lock=30",
    gallery: [
      "https://loremflickr.com/600/600/bedroom,home?lock=2007",
      "https://loremflickr.com/600/600/interior,home?lock=2008"
    ],
    features: [
      "Stone fireplace in the living room",
      "Wraparound deck with mountain views",
      "Updated kitchen with rustic cabinetry",
      "Heated floors in primary suite",
      "Two-car detached garage",
    ],
  },
];

export const properties: Property[] = [
  ...coreProperties,
  ...generatedProperties,
].map(attachPropertyImages);

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}
