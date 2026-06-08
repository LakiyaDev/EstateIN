#!/usr/bin/env node
/**
 * Seeds Supabase with existing static properties.
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local
 *
 * Run: node scripts/seed-supabase.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadEnv() {
  try {
    const envPath = join(root, ".env.local");
    const content = readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    /* no .env.local */
  }
}

loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

// Import static properties via dynamic import of compiled data is hard in mjs;
// inline seed from known catalog slugs by reading TS — use simple JSON export instead.

const properties = JSON.parse(
  readFileSync(join(root, "scripts/seed-properties.json"), "utf8"),
);

async function main() {
  console.log(`Seeding ${properties.length} properties…`);

  for (const [index, property] of properties.entries()) {
    const row = {
      slug: property.slug,
      title: property.title,
      location: property.location,
      location_tag: property.locationTag,
      price: property.price,
      price_formatted: property.priceFormatted,
      description: property.description,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      type: property.type,
      image: property.image,
      gallery: property.gallery ?? [],
      features: property.features ?? [],
      is_published: true,
      is_featured: true,
      sort_order: index,
    };

    const { error } = await supabase
      .from("properties")
      .upsert(row, { onConflict: "slug" });

    if (error) {
      console.error(`Failed: ${property.slug}`, error.message);
    } else {
      console.log(`✓ ${property.title}`);
    }
  }

  console.log("Done.");
}

main();
