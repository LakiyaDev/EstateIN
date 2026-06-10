import type { DbProperty } from "@/lib/supabase/types";
import { createProperty, updateProperty } from "@/lib/admin/actions";

const inputClass =
  "w-full min-h-11 rounded-lg border border-border bg-background px-4 py-3 text-sm text-white outline-none focus:border-primary";

type PropertyFormProps = {
  property?: DbProperty;
};

export function PropertyForm({ property }: PropertyFormProps) {
  const isEdit = Boolean(property);
  const action = isEdit
    ? updateProperty.bind(null, property!.id)
    : createProperty;

  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-text-muted">Title</label>
          <input
            name="title"
            required
            defaultValue={property?.title}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Slug</label>
          <input
            name="slug"
            required
            defaultValue={property?.slug}
            placeholder="my-property-slug"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Location</label>
          <input
            name="location"
            required
            defaultValue={property?.location}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Location Tag</label>
          <input
            name="location_tag"
            required
            defaultValue={property?.location_tag}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Price (USD)</label>
          <input
            name="price"
            type="number"
            required
            min={0}
            defaultValue={property?.price}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Property Type</label>
          <input
            name="type"
            required
            defaultValue={property?.type}
            placeholder="Villa, Apartment, Cottage…"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Bedrooms</label>
          <input
            name="bedrooms"
            type="number"
            required
            min={0}
            defaultValue={property?.bedrooms ?? 2}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Bathrooms</label>
          <input
            name="bathrooms"
            type="number"
            required
            min={0}
            defaultValue={property?.bathrooms ?? 2}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Area</label>
          <input
            name="area"
            required
            defaultValue={property?.area}
            placeholder="2,500 Square Feet"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Sort Order</label>
          <input
            name="sort_order"
            type="number"
            defaultValue={property?.sort_order ?? 0}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-text-muted">Description</label>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={property?.description}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-text-muted">Cover Image URL</label>
        <input
          name="image"
          required
          defaultValue={property?.image}
          placeholder="/images/properties/my-property/cover.jpg"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-text-muted">
          Gallery URLs (one per line)
        </label>
        <textarea
          name="gallery"
          rows={4}
          defaultValue={property?.gallery?.join("\n")}
          placeholder="/images/properties/my-property/gallery-01.jpg"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-text-muted">
          Features (one per line)
        </label>
        <textarea
          name="features"
          rows={5}
          defaultValue={property?.features?.join("\n")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input
            type="checkbox"
            name="is_published"
            defaultChecked={property?.is_published ?? true}
            className="h-5 w-5 shrink-0 accent-primary"
          />
          Published on website
        </label>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input
            type="checkbox"
            name="is_featured"
            defaultChecked={property?.is_featured ?? true}
            className="h-5 w-5 shrink-0 accent-primary"
          />
          Featured on homepage
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover sm:w-auto"
      >
        {isEdit ? "Save Changes" : "Add Property"}
      </button>
    </form>
  );
}
