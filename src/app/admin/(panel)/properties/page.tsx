import Link from "next/link";
import { Plus } from "lucide-react";
import { PropertiesTable } from "@/components/admin/PropertiesTable";
import { getAllPropertiesAdmin } from "@/lib/data/properties";

export const dynamic = "force-dynamic";

export default async function AdminPropertiesPage() {
  const properties = await getAllPropertiesAdmin();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Properties</h1>
          <p className="mt-1 text-sm text-text-muted">
            Add, edit, or publish properties. Changes appear on the website
            immediately.
          </p>
        </div>
        <Link
          href="/admin/properties/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          <Plus className="h-4 w-4" />
          Add Property
        </Link>
      </div>

      <PropertiesTable properties={properties} />
    </div>
  );
}
