/** Property image tag logic — keep in sync with src/data/property-image-themes.ts */

export const propertyCatalog = [
  { slug: "seaside-serenity-villa", type: "Villa", locationTag: "Coastal Escape", galleryCount: 4 },
  { slug: "metropolitan-haven", type: "Apartment", locationTag: "Urban Living", galleryCount: 2 },
  { slug: "rustic-retreat-cottage", type: "Cottage", locationTag: "Mountain View", galleryCount: 2 },
  { slug: "sunset-ridge-estate", type: "Estate", locationTag: "Vineyard Views", galleryCount: 3 },
  { slug: "harborview-penthouse", type: "Penthouse", locationTag: "Waterfront Living", galleryCount: 3 },
  { slug: "willow-creek-townhouse", type: "Townhouse", locationTag: "Suburban Comfort", galleryCount: 3 },
  { slug: "pinecrest-lodge", type: "Cottage", locationTag: "Lakefront", galleryCount: 3 },
  { slug: "skyline-loft", type: "Loft", locationTag: "Urban Living", galleryCount: 3 },
  { slug: "desert-oasis-villa", type: "Villa", locationTag: "Desert Retreat", galleryCount: 3 },
  { slug: "brookside-bungalow", type: "Bungalow", locationTag: "Garden Living", galleryCount: 3 },
  { slug: "capitol-hill-duplex", type: "Duplex", locationTag: "City Charm", galleryCount: 3 },
  { slug: "golden-gate-condo", type: "Condo", locationTag: "Bay Views", galleryCount: 3 },
  { slug: "blue-ridge-cabin", type: "Cottage", locationTag: "Mountain View", galleryCount: 3 },
  { slug: "magnolia-manor", type: "Estate", locationTag: "Historic Charm", galleryCount: 3 },
  { slug: "riverwalk-apartment", type: "Apartment", locationTag: "Downtown Living", galleryCount: 3 },
  { slug: "summit-view-chalet", type: "Chalet", locationTag: "Ski Country", galleryCount: 3 },
  { slug: "lakeside-haven", type: "Villa", locationTag: "Lakefront", galleryCount: 3 },
  { slug: "midtown-modern-flat", type: "Apartment", locationTag: "Urban Living", galleryCount: 3 },
  { slug: "cedar-grove-farmhouse", type: "Farmhouse", locationTag: "Country Living", galleryCount: 3 },
  { slug: "ocean-breeze-condo", type: "Condo", locationTag: "Coastal Escape", galleryCount: 3 },
  { slug: "elm-street-townhome", type: "Townhouse", locationTag: "Historic District", galleryCount: 3 },
  { slug: "silver-creek-ranch", type: "Estate", locationTag: "Ranch Living", galleryCount: 3 },
  { slug: "art-district-loft", type: "Loft", locationTag: "Creative Living", galleryCount: 3 },
  { slug: "palmetto-bay-villa", type: "Villa", locationTag: "Southern Comfort", galleryCount: 3 },
  { slug: "highland-park-residence", type: "Estate", locationTag: "Luxury Suburban", galleryCount: 3 },
  { slug: "bayfront-retreat", type: "Villa", locationTag: "Coastal Escape", galleryCount: 3 },
  { slug: "maplewood-family-home", type: "House", locationTag: "Family Friendly", galleryCount: 3 },
  { slug: "riverside-industrial-loft", type: "Loft", locationTag: "Urban Living", galleryCount: 3 },
  { slug: "cypress-point-cottage", type: "Cottage", locationTag: "Garden District", galleryCount: 3 },
  { slug: "emerald-city-penthouse", type: "Penthouse", locationTag: "Skyline Views", galleryCount: 3 },
];

function lockFor(slug, part) {
  let hash = 0;
  const str = `${slug}-${part}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return (hash % 9000) + 100;
}

function getSettingTags(locationTag) {
  const tag = locationTag.toLowerCase();

  if (
    tag.includes("coastal") ||
    tag.includes("waterfront") ||
    tag.includes("bay")
  ) {
    return "beach,ocean,coast";
  }
  if (tag.includes("mountain") || tag.includes("ski")) {
    return "mountain,forest,nature";
  }
  if (tag.includes("vineyard")) {
    return "vineyard,countryside,hills";
  }
  if (tag.includes("desert")) {
    return "desert,palm,landscape";
  }
  if (tag.includes("lake")) {
    return "lake,water,nature";
  }
  if (
    tag.includes("urban") ||
    tag.includes("downtown") ||
    tag.includes("skyline") ||
    tag.includes("city")
  ) {
    return "city,skyline,downtown";
  }
  if (tag.includes("country") || tag.includes("ranch") || tag.includes("farm")) {
    return "countryside,field,rural";
  }
  if (tag.includes("garden")) {
    return "garden,backyard,greenery";
  }
  return "suburb,neighborhood,street";
}

function getTypeCoverTags(type) {
  switch (type) {
    case "Villa":
      return "villa,luxury,house";
    case "Penthouse":
      return "penthouse,apartment,luxury";
    case "Cottage":
    case "Chalet":
      return "cottage,cabin,wood";
    case "Apartment":
    case "Condo":
      return "apartment,building,modern";
    case "Loft":
      return "loft,industrial,apartment";
    case "Estate":
      return "mansion,estate,luxury";
    case "Townhouse":
    case "Townhome":
      return "townhouse,rowhouse,home";
    case "Bungalow":
      return "bungalow,house,porch";
    case "Duplex":
      return "duplex,house,residential";
    case "Farmhouse":
      return "farmhouse,barn,country";
    case "House":
      return "house,suburban,family";
    default:
      return "house,home,residential";
  }
}

function interiorStyle(type) {
  if (["Cottage", "Chalet", "Farmhouse", "Bungalow"].includes(type)) {
    return "rustic";
  }
  if (["Penthouse", "Estate", "Villa"].includes(type)) {
    return "luxury";
  }
  if (["Loft"].includes(type)) {
    return "industrial";
  }
  return "modern";
}

function getGallerySceneTags(type, locationTag, index) {
  const style = interiorStyle(type);
  const setting = getSettingTags(locationTag);

  const scenes = [
    `livingroom,${style},interior`,
    `kitchen,${style},home`,
    `bedroom,${style},home`,
  ];

  if (index < scenes.length) {
    return scenes[index];
  }

  if (setting.includes("beach") || setting.includes("ocean")) {
    return "pool,terrace,outdoor";
  }
  if (setting.includes("mountain") || setting.includes("forest")) {
    return "fireplace,cabin,interior";
  }
  if (setting.includes("city") || setting.includes("skyline")) {
    return "balcony,city,view";
  }
  if (setting.includes("lake") || setting.includes("water")) {
    return "deck,lake,view";
  }
  if (setting.includes("country") || setting.includes("rural")) {
    return "porch,country,home";
  }
  return `bathroom,${style},home`;
}

export function getPropertyCoverUrl({ slug, type, locationTag }) {
  const tags = `${getTypeCoverTags(type)},${getSettingTags(locationTag)}`;
  const lock = lockFor(slug, "cover");
  return `https://loremflickr.com/800/600/${tags}?lock=${lock}`;
}

export function getPropertyGalleryUrl({ slug, type, locationTag }, index) {
  const tags = getGallerySceneTags(type, locationTag, index);
  const lock = lockFor(slug, `gallery-${index + 1}`);
  return `https://loremflickr.com/600/600/${tags}?lock=${lock}`;
}
