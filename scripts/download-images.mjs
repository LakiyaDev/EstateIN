#!/usr/bin/env node
/**
 * Downloads site images into categorized folders under public/images/.
 * Run: node scripts/download-images.mjs
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesRoot = path.join(root, "public/images");

function slugifyName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function download(url, dest, { force = false } = {}) {
  if (!force) {
    try {
      await fs.access(dest);
      return "skipped";
    } catch {
      /* file missing — download */
    }
  }

  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await ensureDir(path.dirname(dest));
  await fs.writeFile(dest, buffer);
  return force ? "replaced" : "downloaded";
}

import {
  propertyCatalog,
  getPropertyCoverUrl,
  getPropertyGalleryUrl,
} from "./property-image-themes.mjs";

const args = process.argv.slice(2);
const forceProperties = args.includes("--force-properties");
const propertiesOnly = args.includes("--properties-only");

const testimonialNames = [
  "Wade Warren",
  "Emily Johnson",
  "Michael Chen",
  "Sophia Martinez",
  "James Patterson",
  "Priya Sharma",
  "Daniel Okonkwo",
  "Victoria Lang",
  "Ryan Cooper",
  "Hannah Brooks",
  "Marcus and Lena Fischer",
  "Aisha Rahman",
  "Robert and Elaine Hughes",
  "Tyler Nguyen",
  "Isabella Romano",
  "Gregory and Nina Walsh",
  "Olivia Grant",
  "Kevin O'Brien",
  "Jasmine Cole",
  "Ethan and Maya Thompson",
  "Laura Bennett",
  "Captain James Reid",
  "Natalie and Chris Park",
  "Eleanor Whitmore",
  "Andre Silva",
  "Brooke and Sam Keller",
  "Michelle Torres",
  "David Kim",
  "Caleb Morrison",
  "Jennifer Alves",
  "Patrick Doyle",
  "Ruth Gallagher",
  "Steven and Kara Webb",
  "Frank Deluca",
  "Monica Reyes",
  "Harper Collins",
  "Thomas and Irene Cho",
  "Zoe Campbell",
  "Brandon Hicks",
  "Helen Price",
  "Marco Santini",
  "Chloe Anders",
  "Carlos and Maria Vega",
  "Diane Foster",
  "Arjun Mehta",
  "Gina Porter",
  "Liam O'Connor",
  "Arthur and Penny Lowe",
  "Yuki Tanaka",
  "Samantha Irwin",
  "Derek and Jill Harmon",
  "Virginia Moss",
  "Noah Bernstein",
  "Teresa Wu",
  "Philip and Grace Nduku",
  "Rachel Stein",
  "George and Anita Powell",
  "Jordan Blake",
  "Mei Lin",
  "Samuel Ortiz",
];

const teamMembers = [
  { name: "Max Mitchell", url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" },
  { name: "Sarah Johnson", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" },
  { name: "David Brown", url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop" },
  { name: "Michael Turner", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
];

const contactGallerySources = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
];

async function main() {
  const iconDirs = [
    "icons/home",
    "icons/about",
    "icons/services",
  ];
  for (const dir of iconDirs) {
    await ensureDir(path.join(imagesRoot, dir));
  }

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  const track = async (label, url, dest, options) => {
    try {
      const result = await download(url, dest, options);
      if (result === "downloaded" || result === "replaced") {
        downloaded++;
        console.log(`✓ ${label}`);
      } else {
        skipped++;
      }
    } catch (err) {
      failed++;
      console.error(`✗ ${label}: ${err.message}`);
    }
  };

  for (const property of propertyCatalog) {
    const { slug, galleryCount } = property;
    const dir = path.join(imagesRoot, "properties", slug);
    const force = forceProperties;

    await track(
      `property ${slug} cover`,
      getPropertyCoverUrl(property),
      path.join(dir, "cover.jpg"),
      { force },
    );

    for (let i = 0; i < galleryCount; i++) {
      const num = String(i + 1).padStart(2, "0");
      await track(
        `property ${slug} gallery-${num}`,
        getPropertyGalleryUrl(property, i),
        path.join(dir, `gallery-${num}.jpg`),
        { force },
      );
    }
  }

  if (propertiesOnly) {
    console.log(`\nDone: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
    return;
  }

  for (const name of testimonialNames) {
    const slug = slugifyName(name);
    await track(
      `testimonial ${slug}`,
      `https://i.pravatar.cc/150?u=${encodeURIComponent(name.trim().toLowerCase())}`,
      path.join(imagesRoot, "testimonials", `${slug}.jpg`),
    );
  }

  for (const member of teamMembers) {
    const slug = slugifyName(member.name);
    await track(
      `team ${slug}`,
      member.url,
      path.join(imagesRoot, "team", `${slug}.jpg`),
    );
  }

  await track(
    "about journey",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    path.join(imagesRoot, "pages/about/journey.jpg"),
  );

  for (let i = 0; i < contactGallerySources.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    await track(
      `contact gallery-${num}`,
      contactGallerySources[i],
      path.join(imagesRoot, "pages/contact", `gallery-${num}.jpg`),
    );
  }

  console.log(`\nDone: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
