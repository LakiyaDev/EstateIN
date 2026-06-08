import Link from "next/link";
import { Building2, Mail, Inbox, Send } from "lucide-react";
import { StatCard } from "@/components/admin/StatCard";
import { DashboardCharts } from "@/components/admin/DashboardCharts";
import { getDashboardStats } from "@/lib/data/messages";
import { getMessages } from "@/lib/data/messages";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [stats, recentMessages] = await Promise.all([
    getDashboardStats(),
    getMessages(),
  ]);

  const latest = recentMessages.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-text-muted">
          Overview of your Estatein platform activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Properties"
          value={stats.totalProperties}
          icon={Building2}
          hint={`${stats.publishedProperties} published`}
        />
        <StatCard
          label="Total Messages"
          value={stats.totalMessages}
          icon={Mail}
        />
        <StatCard
          label="New Messages"
          value={stats.newMessages}
          icon={Inbox}
          hint="Awaiting review"
        />
        <StatCard
          label="Forwarded"
          value={stats.forwardedMessages}
          icon={Send}
          hint="Sent to Estatein team"
        />
      </div>

      <DashboardCharts stats={stats} />

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-white">Recent Messages</h2>
          <Link
            href="/admin/messages"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {latest.length === 0 ? (
            <p className="text-sm text-text-muted">No messages yet.</p>
          ) : (
            latest.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {msg.first_name} {msg.last_name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {msg.type}
                    {msg.property_name ? ` · ${msg.property_name}` : ""}
                  </p>
                </div>
                <span className="text-xs capitalize text-text-muted">
                  {msg.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
