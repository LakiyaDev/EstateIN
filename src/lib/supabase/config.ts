export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export const ESTATEIN_TEAM_EMAIL =
  process.env.ESTATEIN_TEAM_EMAIL ?? "team@estatein.com";

export const ESTATEIN_TEAM_NAME = "Estatein Team";
