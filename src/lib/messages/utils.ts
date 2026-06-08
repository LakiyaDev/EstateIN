import { ESTATEIN_TEAM_NAME } from "@/lib/supabase/config";
import type { MessageStatus } from "@/lib/supabase/types";

export function formatMessageStatus(status: MessageStatus): string {
  const labels: Record<MessageStatus, string> = {
    new: "New",
    read: "Read",
    forwarded: `Forwarded to ${ESTATEIN_TEAM_NAME}`,
    resolved: "Resolved",
  };
  return labels[status];
}
