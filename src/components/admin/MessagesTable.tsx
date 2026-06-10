"use client";

import { useState } from "react";
import {
  forwardMessageToTeam,
  updateMessageStatus,
  deleteMessage,
} from "@/lib/admin/actions";
import { formatMessageStatus } from "@/lib/messages/utils";
import type { DbMessage, MessageStatus } from "@/lib/supabase/types";
import { Forward, Trash2, Eye } from "lucide-react";

export function MessagesTable({ messages }: { messages: DbMessage[] }) {
  const [selected, setSelected] = useState<DbMessage | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  async function handleForward(id: string) {
    setLoading(id);
    try {
      await forwardMessageToTeam(id);
      setSelected(null);
    } finally {
      setLoading(null);
    }
  }

  async function handleStatus(id: string, status: MessageStatus) {
    setLoading(id);
    try {
      await updateMessageStatus(id, status);
    } finally {
      setLoading(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this message permanently?")) return;
    setLoading(id);
    try {
      await deleteMessage(id);
      setSelected(null);
    } finally {
      setLoading(null);
    }
  }

  const statusColors: Record<MessageStatus, string> = {
    new: "bg-blue-500/20 text-blue-300",
    read: "bg-yellow-500/20 text-yellow-300",
    forwarded: "bg-primary/20 text-purple-300",
    resolved: "bg-green-500/20 text-green-300",
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-border bg-surface-elevated text-text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">From</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Property</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-text-muted">
                  No messages yet. Submissions from contact forms will appear here.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b border-border/60 hover:bg-surface/50"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">
                      {msg.first_name} {msg.last_name}
                    </p>
                    <p className="text-xs text-text-muted">{msg.email}</p>
                  </td>
                  <td className="px-4 py-3 capitalize text-text-secondary">
                    {msg.type}
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    {msg.property_name ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs ${statusColors[msg.status]}`}
                    >
                      {formatMessageStatus(msg.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-muted">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setSelected(msg)}
                        className="rounded-lg p-2 text-text-muted hover:bg-surface-elevated hover:text-white"
                        title="View details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {msg.status !== "forwarded" && (
                        <button
                          type="button"
                          disabled={loading === msg.id}
                          onClick={() => handleForward(msg.id)}
                          className="rounded-lg p-2 text-primary hover:bg-primary/10 disabled:opacity-50"
                          title="Forward to Estatein team"
                        >
                          <Forward className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={loading === msg.id}
                        onClick={() => handleDelete(msg.id)}
                        className="rounded-lg p-2 text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="break-words text-lg font-semibold text-white">
                {selected.first_name} {selected.last_name}
              </h3>
              <p className="break-words text-sm text-text-muted">
                {selected.email}
                {selected.phone ? ` · ${selected.phone}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="shrink-0 text-sm text-text-muted hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            <p>
              <span className="text-text-muted">Type: </span>
              <span className="capitalize text-white">{selected.type}</span>
            </p>
            {selected.property_name && (
              <p>
                <span className="text-text-muted">Property: </span>
                <span className="text-white">{selected.property_name}</span>
              </p>
            )}
            {selected.preferred_location && (
              <p>
                <span className="text-text-muted">Location: </span>
                <span className="text-white">{selected.preferred_location}</span>
              </p>
            )}
            {selected.budget && (
              <p>
                <span className="text-text-muted">Budget: </span>
                <span className="text-white">{selected.budget}</span>
              </p>
            )}
          </div>

          <p className="mt-4 rounded-lg bg-background p-4 text-sm leading-relaxed text-text-secondary">
            {selected.message}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {selected.status === "new" && (
              <button
                type="button"
                disabled={loading === selected.id}
                onClick={() => handleStatus(selected.id, "read")}
                className="rounded-lg border border-border px-4 py-2 text-sm text-white hover:border-primary"
              >
                Mark as Read
              </button>
            )}
            {selected.status !== "forwarded" && (
              <button
                type="button"
                disabled={loading === selected.id}
                onClick={() => handleForward(selected.id)}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover disabled:opacity-50"
              >
                Forward to Estatein Team
              </button>
            )}
            {selected.status !== "resolved" && (
              <button
                type="button"
                disabled={loading === selected.id}
                onClick={() => handleStatus(selected.id, "resolved")}
                className="rounded-lg border border-green-500/40 px-4 py-2 text-sm text-green-300 hover:bg-green-500/10 disabled:opacity-50"
              >
                Mark Resolved
              </button>
            )}
          </div>

          {selected.admin_notes && (
            <p className="mt-3 text-xs text-text-muted">{selected.admin_notes}</p>
          )}
        </div>
      )}
    </div>
  );
}
