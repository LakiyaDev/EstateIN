"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ESTATEIN_TEAM_EMAIL,
  ESTATEIN_TEAM_NAME,
} from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import type { MessageStatus, PropertyInsert } from "@/lib/supabase/types";

function revalidateSite() {
  revalidatePath("/");
  revalidatePath("/properties");
  revalidatePath("/admin");
  revalidatePath("/admin/properties");
  revalidatePath("/admin/messages");
}

export async function signInAdmin(
  _prevState: { error: string },
  formData: FormData,
): Promise<{ error: string }> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect("/admin");
}

export async function signOutAdmin() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function forwardMessageToTeam(messageId: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("messages")
    .update({
      status: "forwarded" as MessageStatus,
      assigned_team: ESTATEIN_TEAM_NAME,
      forwarded_at: new Date().toISOString(),
      admin_notes: `Forwarded to ${ESTATEIN_TEAM_NAME} (${ESTATEIN_TEAM_EMAIL})`,
    })
    .eq("id", messageId);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}

export async function updateMessageStatus(
  messageId: string,
  status: MessageStatus,
) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("messages")
    .update({ status })
    .eq("id", messageId);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}

export async function deleteMessage(messageId: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("messages").delete().eq("id", messageId);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function parseList(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function createProperty(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(title);
  const price = Number(formData.get("price"));

  const payload: PropertyInsert = {
    slug,
    title,
    location: String(formData.get("location") ?? "").trim(),
    location_tag: String(formData.get("location_tag") ?? "").trim(),
    price,
    price_formatted: formatPrice(price),
    description: String(formData.get("description") ?? "").trim(),
    bedrooms: Number(formData.get("bedrooms")),
    bathrooms: Number(formData.get("bathrooms")),
    area: String(formData.get("area") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    image: String(formData.get("image") ?? "").trim(),
    gallery: parseList(String(formData.get("gallery") ?? "")),
    features: parseList(String(formData.get("features") ?? "")),
    is_published: formData.get("is_published") === "on",
    is_featured: formData.get("is_featured") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };

  const supabase = await createClient();
  const { error } = await supabase.from("properties").insert(payload);

  if (error) throw new Error(error.message);

  revalidateSite();
  redirect("/admin/properties");
}

export async function updateProperty(id: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const price = Number(formData.get("price"));

  const payload = {
    slug: String(formData.get("slug") ?? "").trim(),
    title,
    location: String(formData.get("location") ?? "").trim(),
    location_tag: String(formData.get("location_tag") ?? "").trim(),
    price,
    price_formatted: formatPrice(price),
    description: String(formData.get("description") ?? "").trim(),
    bedrooms: Number(formData.get("bedrooms")),
    bathrooms: Number(formData.get("bathrooms")),
    area: String(formData.get("area") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    image: String(formData.get("image") ?? "").trim(),
    gallery: parseList(String(formData.get("gallery") ?? "")),
    features: parseList(String(formData.get("features") ?? "")),
    is_published: formData.get("is_published") === "on",
    is_featured: formData.get("is_featured") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };

  const supabase = await createClient();
  const { error } = await supabase
    .from("properties")
    .update(payload)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidateSite();
  revalidatePath(`/properties/${payload.slug}`);
  redirect("/admin/properties");
}

export async function deleteProperty(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidateSite();
  revalidatePath("/admin/properties");
}

export async function togglePropertyPublished(id: string, published: boolean) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("properties")
    .update({ is_published: published })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidateSite();
}
