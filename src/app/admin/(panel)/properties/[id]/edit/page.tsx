import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyForm } from "@/components/admin/PropertyForm";
import { getPropertyByIdAdmin } from "@/lib/data/properties";

type Props = { params: Promise<{ id: string }> };

export default async function EditPropertyPage({ params }: Props) {
  const { id } = await params;
  const property = await getPropertyByIdAdmin(id);

  if (!property) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <Link
          href="/admin/properties"
          className="text-sm text-text-muted hover:text-white"
        >
          ← Back to properties
        </Link>
        <h1 className="mt-2 break-words text-xl font-semibold text-white sm:text-2xl">
          Edit {property.title}
        </h1>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <PropertyForm property={property} />
      </div>
    </div>
  );
}
