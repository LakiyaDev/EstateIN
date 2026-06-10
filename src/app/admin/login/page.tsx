"use client";

import { Suspense, useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { signInAdmin } from "@/lib/admin/actions";
import Link from "next/link";

function LoginForm() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const urlError =
    errorParam === "unauthorized"
      ? "Your account is not authorized for admin access. Contact the site owner."
      : errorParam === "unverified"
        ? "Please confirm your email before signing in."
        : errorParam === "session"
          ? "Your session has expired. Please sign in again."
          : "";
  const [state, formAction, pending] = useActionState(signInAdmin, {
    error: "",
  });
  const displayError = state.error || urlError;

  const inputClass =
    "w-full min-h-11 rounded-lg border border-border bg-background px-4 py-3 text-sm text-white outline-none focus:border-primary";

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div>
        <label className="mb-2 block text-sm text-text-muted">Email</label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="admin@estatein.com"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm text-text-muted">Password</label>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </div>

      {displayError && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {displayError}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition hover:bg-primary-hover disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-white">Estatein Admin</h1>
        <p className="mt-2 text-sm text-text-muted">
          Sign in to manage properties and messages.
        </p>

        <Suspense fallback={<div className="mt-8 h-48 animate-pulse rounded-lg bg-background" />}>
          <LoginForm />
        </Suspense>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-text-muted hover:text-white"
        >
          ← Back to website
        </Link>
      </div>
    </div>
  );
}
