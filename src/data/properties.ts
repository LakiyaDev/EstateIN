export type Property = {
  slug: string;
  title: string;
  location: string;
  locationTag: string;
  price: number;
  priceFormatted: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  gallery: string[];
  features: string[];
};

export const properties: Property[] = [
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
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
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
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
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
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
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

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}
