import { requireAdmin } from "@/lib/admin/auth";
import { createClient } from "@/lib/supabase/server";
import type { DashboardStats, DbMessage } from "@/lib/supabase/types";

export { formatMessageStatus } from "@/lib/messages/utils";

export async function getMessages(): Promise<DbMessage[]> {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as DbMessage[];
}

export async function getMessageById(id: string): Promise<DbMessage | null> {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data as DbMessage) ?? null;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await requireAdmin();
  const supabase = await createClient();

  const [propertiesRes, messagesRes] = await Promise.all([
    supabase.from("properties").select("id, is_published"),
    supabase.from("messages").select("id, status, type, created_at"),
  ]);

  const properties = propertiesRes.data ?? [];
  const messages = (messagesRes.data ?? []) as Pick<
    DbMessage,
    "id" | "status" | "type" | "created_at"
  >[];

  const messagesByType = ["contact", "inquiry", "simple"].map((type) => ({
    type,
    count: messages.filter((m) => m.type === type).length,
  }));

  const monthMap = new Map<string, number>();
  for (const msg of messages) {
    const month = new Date(msg.created_at).toLocaleString("en-US", {
      month: "short",
      year: "2-digit",
    });
    monthMap.set(month, (monthMap.get(month) ?? 0) + 1);
  }

  const messagesByMonth = [...monthMap.entries()]
    .slice(-6)
    .map(([month, count]) => ({ month, count }));

  return {
    totalProperties: properties.length,
    publishedProperties: properties.filter((p) => p.is_published).length,
    totalMessages: messages.length,
    newMessages: messages.filter((m) => m.status === "new").length,
    forwardedMessages: messages.filter((m) => m.status === "forwarded").length,
    messagesByType,
    messagesByMonth,
  };
}
