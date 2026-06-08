import { MessagesTable } from "@/components/admin/MessagesTable";
import { getMessages } from "@/lib/data/messages";
import { ESTATEIN_TEAM_EMAIL } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Messages</h1>
        <p className="mt-1 text-sm text-text-muted">
          Contact form and property inquiry submissions. Forward messages to the
          Estatein team at{" "}
          <span className="text-white">{ESTATEIN_TEAM_EMAIL}</span>.
        </p>
      </div>

      <MessagesTable messages={messages} />
    </div>
  );
}
