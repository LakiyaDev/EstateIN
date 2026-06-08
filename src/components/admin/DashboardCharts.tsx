import type { DashboardStats } from "@/lib/supabase/types";

export function DashboardCharts({ stats }: { stats: DashboardStats }) {
  const maxType = Math.max(...stats.messagesByType.map((t) => t.count), 1);
  const maxMonth = Math.max(...stats.messagesByMonth.map((m) => m.count), 1);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="font-semibold text-white">Messages by Type</h3>
        <p className="mt-1 text-xs text-text-muted">Contact, inquiry & simple forms</p>
        <div className="mt-6 space-y-4">
          {stats.messagesByType.map(({ type, count }) => (
            <div key={type}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="capitalize text-text-secondary">{type}</span>
                <span className="text-white">{count}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${(count / maxType) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="font-semibold text-white">Messages Over Time</h3>
        <p className="mt-1 text-xs text-text-muted">Last 6 months activity</p>
        <div className="mt-6 flex h-48 items-end gap-3">
          {stats.messagesByMonth.length === 0 ? (
            <p className="text-sm text-text-muted">No messages yet.</p>
          ) : (
            stats.messagesByMonth.map(({ month, count }) => (
              <div
                key={month}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t-md bg-primary/80 transition-all"
                  style={{
                    height: `${Math.max((count / maxMonth) * 100, 8)}%`,
                    minHeight: count > 0 ? "1rem" : "0.25rem",
                  }}
                  title={`${count} messages`}
                />
                <span className="text-[10px] text-text-muted">{month}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
