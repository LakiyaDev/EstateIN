"use client";

import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Subscription failed.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Subscription failed.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3.5 text-sm text-green-300">
        <Check className="h-4 w-4 shrink-0" />
        <span>Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 items-center overflow-hidden rounded-xl bg-surface"
      >
        <span className="flex shrink-0 items-center pl-3 sm:pl-4 text-text-muted">
          <Mail className="h-4 w-4" />
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={status === "loading"}
          className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-sm text-white placeholder:text-text-muted outline-none sm:px-3"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex shrink-0 items-center justify-center px-3 py-3.5 text-white transition hover:text-primary disabled:opacity-50 sm:px-4"
          aria-label="Subscribe to newsletter"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      {status === "error" && errorMessage && (
        <p className="mt-2 text-xs text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
