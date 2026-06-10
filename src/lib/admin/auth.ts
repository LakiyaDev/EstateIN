import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export class AdminAuthError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "AdminAuthError";
  }
}

export type AdminSession = {
  userId: string;
  email: string;
  fullName: string | null;
};

/** Build a rate-limit key from email + client IP (hashed identifier). */
export async function getLoginRateLimitKey(email: string): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "local";
  return `${email.toLowerCase().trim()}:${ip}`;
}

export async function isLoginAllowed(loginKey: string): Promise<boolean> {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("check_admin_login_allowed", {
    p_login_key: loginKey,
  });

  if (error) return true;
  return data === true;
}

export async function recordLoginAttempt(
  loginKey: string,
  success: boolean,
): Promise<void> {
  const supabase = await createClient();
  await supabase.rpc("record_admin_login_attempt", {
    p_login_key: loginKey,
    p_success: success,
  });
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user?.email) return null;
  if (!user.email_confirmed_at) return null;

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("id, email, full_name")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) return null;

  return {
    userId: user.id,
    email: profile.email,
    fullName: profile.full_name,
  };
}

/** Use in Server Components — redirects to login if not authorized. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login?error=session");
  }
  return session;
}

/** Use in Server Actions — throws if not authorized. */
export async function requireAdminAction(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) {
    throw new AdminAuthError();
  }
  return session;
}
