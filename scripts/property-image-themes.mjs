/** Property image tag logic — keep in sync with src/data/property-image-themes.ts */

export const propertyCatalog = [
  { slug: "seaside-serenity-villa", type: "Villa", locationTag: "Coastal Escape", galleryCount: 4 },
  { slug: "metropolitan-haven", type: "Apartment", locationTag: "Urban Living", galleryCount: 2 },
  { slug: "rustic-retreat-cottage", type: "Cottage", locationTag: "Mountain View", galleryCount: 1 },
  { slug: "sunset-ridge-estate", type: "Estate", locationTag: "Vineyard Views", galleryCount: 3 },
  { slug: "harborview-penthouse", type: "Penthouse", locationTag: "Waterfront Living", galleryCount: 4 },
  { slug: "willow-creek-townhouse", type: "Townhouse", locationTag: "Suburban Comfort", galleryCount: 2 },
  { slug: "pinecrest-lodge", type: "Cottage", locationTag: "Lakefront", galleryCount: 3 },
  { slug: "skyline-loft", type: "Loft", locationTag: "Urban Living", galleryCount: 4 },
  { slug: "desert-oasis-villa", type: "Villa", locationTag: "Desert Retreat", galleryCount: 5 },
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
      return "villa,luxury,exterior,house";
    case "Penthouse":
      return "penthouse,luxury,exterior,skyline";
    case "Cottage":
    case "Chalet":
      return "cottage,cabin,exterior,wood";
    case "Apartment":
    case "Condo":
      return "apartment,building,exterior,modern";
    case "Loft":
      return "loft,industrial,exterior,building";
    case "Estate":
      return "mansion,estate,luxury,exterior";
    case "Townhouse":
    case "Townhome":
      return "townhouse,rowhouse,exterior,home";
    case "Bungalow":
      return "bungalow,house,exterior,porch";
    case "Duplex":
      return "duplex,house,exterior,residential";
    case "Farmhouse":
      return "farmhouse,barn,exterior,country";
    case "House":
      return "house,suburban,exterior,family";
    default:
      return "house,home,exterior,residential";
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
  // Higher-res, more accurate cover: emphasize exterior + setting.
  const tags = `${getTypeCoverTags(type)},${getSettingTags(locationTag)}`;
  const lock = lockFor(slug, "cover");
  return `https://loremflickr.com/1600/1000/${tags}?lock=${lock}`;
}

export function getPropertyGalleryUrl({ slug, type, locationTag }, index) {
  const tags = getGallerySceneTags(type, locationTag, index);
  const lock = lockFor(slug, `gallery-${index + 1}`);
  return `https://loremflickr.com/1200/900/${tags}?lock=${lock}`;
}
