import { isSupabaseConfigured } from "@/lib/supabase/config";
import Link from "next/link";

export const metadata = {
  title: "Admin | Estatein",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="max-w-md rounded-xl border border-border bg-surface p-8 text-center">
          <h1 className="text-xl font-semibold text-white">Admin Not Configured</h1>
          <p className="mt-3 text-sm text-text-muted">
            Add your Supabase environment variables to enable the admin panel.
            See <code className="text-primary">.env.example</code> for setup
            instructions.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm text-primary hover:underline"
          >
            Back to website
          </Link>
        </div>
      </div>
    );
  }

  return children;
}
