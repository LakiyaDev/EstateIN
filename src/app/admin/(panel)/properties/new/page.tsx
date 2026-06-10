import Link from "next/link";
import { PropertyForm } from "@/components/admin/PropertyForm";

export default function NewPropertyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <Link
          href="/admin/properties"
          className="text-sm text-text-muted hover:text-white"
        >
          ← Back to properties
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-white">Add Property</h1>
        <p className="mt-1 text-sm text-text-muted">
          New listings go live on the website as soon as they are published.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <PropertyForm />
      </div>
    </div>
  );
}
