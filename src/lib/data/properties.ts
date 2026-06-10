import type { Property } from "@/data/property-types";
import { staticProperties } from "@/data/properties";
import { requireAdmin } from "@/lib/admin/auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import type { DbProperty } from "@/lib/supabase/types";
import { unstable_noStore as noStore } from "next/cache";

function mapDbProperty(row: DbProperty): Property {
  return {
    slug: row.slug,
    title: row.title,
    location: row.location,
    locationTag: row.location_tag,
    price: row.price,
    priceFormatted: row.price_formatted,
    description: row.description,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    area: row.area,
    type: row.type,
    image: row.image,
    gallery: row.gallery ?? [],
    features: row.features ?? [],
  };
}

export async function getProperties(): Promise<Property[]> {
  noStore();

  if (!isSupabaseConfigured()) {
    return staticProperties;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return staticProperties;
  }

  return data.map((row) => mapDbProperty(row as DbProperty));
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const all = await getProperties();

  if (!isSupabaseConfigured()) {
    return all;
  }

  const supabase = await createClient();
  const { data } = await supabase
    .from("properties")
    .select("*")
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("sort_order", { ascending: true });

  if (!data?.length) {
    return all;
  }

  return data.map((row) => mapDbProperty(row as DbProperty));
}

export async function getPropertyBySlug(
  slug: string,
): Promise<Property | undefined> {
  noStore();

  if (!isSupabaseConfigured()) {
    return staticProperties.find((p) => p.slug === slug);
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) {
    return staticProperties.find((p) => p.slug === slug);
  }

  return mapDbProperty(data as DbProperty);
}

export async function getAllPropertiesAdmin(): Promise<DbProperty[]> {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as DbProperty[];
}

export async function getPropertyByIdAdmin(
  id: string,
): Promise<DbProperty | null> {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data as DbProperty) ?? null;
}
