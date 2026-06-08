import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import type { MessageInsert } from "@/lib/supabase/types";

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Messaging is not configured yet." },
      { status: 503 },
    );
  }

  const body = await request.json();

  const payload: MessageInsert = {
    type: body.type ?? "contact",
    first_name: body.first_name?.trim(),
    last_name: body.last_name?.trim(),
    email: body.email?.trim(),
    phone: body.phone?.trim() || undefined,
    message: body.message?.trim(),
    property_name: body.property_name?.trim() || undefined,
    preferred_location: body.preferred_location || undefined,
    property_type: body.property_type || undefined,
    bathrooms: body.bathrooms || undefined,
    bedrooms: body.bedrooms || undefined,
    budget: body.budget || undefined,
    inquiry_type: body.inquiry_type || undefined,
    hear_about: body.hear_about || undefined,
    agreed_terms: Boolean(body.agreed_terms),
  };

  if (
    !payload.first_name ||
    !payload.last_name ||
    !payload.email ||
    !payload.message ||
    !payload.agreed_terms
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields and accept the terms." },
      { status: 400 },
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { error } = await supabase.from("messages").insert(payload);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
