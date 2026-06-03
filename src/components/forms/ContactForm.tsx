"use client";

type ContactFormProps = {
  variant?: "full" | "simple" | "inquiry";
  propertyName?: string;
};

export function ContactForm({
  variant = "full",
  propertyName,
}: ContactFormProps) {
  const inputClass =
    "w-full min-h-11 rounded-lg border border-border bg-background px-4 py-3 text-base text-white placeholder:text-text-muted outline-none transition focus:border-primary sm:text-sm";

  return (
    <form
      className="rounded-xl border border-border bg-surface p-4 sm:p-5 md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        className={
          variant === "simple"
            ? "grid gap-4 sm:grid-cols-2"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        }
      >
        <div>
          <label className="mb-2 block text-sm text-text-muted">First Name</label>
          <input type="text" placeholder="Enter First Name" className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Last Name</label>
          <input type="text" placeholder="Enter Last Name" className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Email</label>
          <input type="email" placeholder="Enter your Email" className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Phone</label>
          <input type="tel" placeholder="Enter Phone Number" className={inputClass} />
        </div>

        {variant === "full" && (
          <>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Preferred Location
              </label>
              <select className={inputClass}>
                <option>Select Location</option>
                <option>California</option>
                <option>New York</option>
                <option>Colorado</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Property Type
              </label>
              <select className={inputClass}>
                <option>Select Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Cottage</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                No. of Bathrooms
              </label>
              <select className={inputClass}>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                No. of Bedrooms
              </label>
              <select className={inputClass}>
                <option>Select</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="mb-2 block text-sm text-text-muted">Budget</label>
              <select className={inputClass}>
                <option>Select Budget</option>
                <option>Under $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
          </>
        )}

        {variant === "simple" && (
          <>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Inquiry Type
              </label>
              <select className={inputClass}>
                <option>Select Inquiry Type</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Renting</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                How Did You Hear About Us?
              </label>
              <select className={inputClass}>
                <option>Select</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Referral</option>
              </select>
            </div>
          </>
        )}

        {variant === "inquiry" && propertyName && (
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-text-muted">
              Selected Property
            </label>
            <select className={inputClass} defaultValue={propertyName}>
              <option>{propertyName}</option>
            </select>
          </div>
        )}
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm text-text-muted">Message</label>
        <textarea
          rows={5}
          placeholder="Enter your Message"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-start gap-2 text-sm text-text-muted">
          <input type="checkbox" className="mt-1 accent-primary" />
          <span>
            I agree with{" "}
            <a href="#" className="text-white underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-white underline">
              Privacy Policy
            </a>
          </span>
        </label>
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-primary-hover sm:w-auto sm:shrink-0"
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
}
