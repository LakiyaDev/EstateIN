"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import {
  deleteProperty,
  togglePropertyPublished,
} from "@/lib/admin/actions";
import type { DbProperty } from "@/lib/supabase/types";

export function PropertiesTable({ properties }: { properties: DbProperty[] }) {
  const router = useRouter();

  async function handleToggle(id: string, published: boolean) {
    await togglePropertyPublished(id, published);
    router.refresh();
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await deleteProperty(id);
    router.refresh();
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[800px] text-left text-sm">
        <thead className="border-b border-border bg-surface-elevated text-text-muted">
          <tr>
            <th className="px-4 py-3 font-medium">Property</th>
            <th className="px-4 py-3 font-medium">Location</th>
            <th className="px-4 py-3 font-medium">Price</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                No properties in database. Run the seed script or add a new property.
              </td>
            </tr>
          ) : (
            properties.map((property) => (
              <tr
                key={property.id}
                className="border-b border-border/60 hover:bg-surface/50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{property.title}</p>
                      <p className="text-xs text-text-muted">{property.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {property.location}
                </td>
                <td className="px-4 py-3 text-white">
                  {property.price_formatted}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        property.is_published
                          ? "bg-green-500/20 text-green-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {property.is_published ? "Live" : "Draft"}
                    </span>
                    {property.is_featured && (
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-purple-300">
                        Featured
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <Link
                      href={`/admin/properties/${property.id}/edit`}
                      className="rounded-lg p-2 text-text-muted hover:bg-surface-elevated hover:text-white"
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        handleToggle(property.id, !property.is_published)
                      }
                      className="rounded-lg p-2 text-text-muted hover:bg-surface-elevated hover:text-white"
                      title={property.is_published ? "Unpublish" : "Publish"}
                    >
                      {property.is_published ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(property.id, property.title)}
                      className="rounded-lg p-2 text-red-400 hover:bg-red-500/10"
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
  );
}
