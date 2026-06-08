"use client";

import { useState } from "react";
import type { MessageType } from "@/lib/supabase/types";

type ContactFormProps = {
  variant?: "full" | "simple" | "inquiry";
  propertyName?: string;
};

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  preferred_location: string;
  property_type: string;
  bathrooms: string;
  bedrooms: string;
  budget: string;
  inquiry_type: string;
  hear_about: string;
  property_name: string;
  agreed_terms: boolean;
};

const initialState: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
  preferred_location: "",
  property_type: "",
  bathrooms: "",
  bedrooms: "",
  budget: "",
  inquiry_type: "",
  hear_about: "",
  property_name: "",
  agreed_terms: false,
};

export function ContactForm({
  variant = "full",
  propertyName,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    property_name: propertyName ?? "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass =
    "w-full min-h-11 rounded-lg border border-border bg-background px-4 py-3 text-base text-white placeholder:text-text-muted outline-none transition focus:border-primary sm:text-sm";

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const type: MessageType =
      variant === "inquiry"
        ? "inquiry"
        : variant === "simple"
          ? "simple"
          : "contact";

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      setForm({ ...initialState, property_name: propertyName ?? "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message.",
      );
    }
  }

  return (
    <form
      className="rounded-xl border border-border bg-surface p-4 sm:p-5 md:p-8"
      onSubmit={handleSubmit}
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
          <input
            type="text"
            required
            value={form.first_name}
            onChange={(e) => updateField("first_name", e.target.value)}
            placeholder="Enter First Name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Last Name</label>
          <input
            type="text"
            required
            value={form.last_name}
            onChange={(e) => updateField("last_name", e.target.value)}
            placeholder="Enter Last Name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Enter your Email"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-text-muted">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Enter Phone Number"
            className={inputClass}
          />
        </div>

        {variant === "full" && (
          <>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Preferred Location
              </label>
              <select
                className={inputClass}
                value={form.preferred_location}
                onChange={(e) =>
                  updateField("preferred_location", e.target.value)
                }
              >
                <option value="">Select Location</option>
                <option>California</option>
                <option>New York</option>
                <option>Colorado</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Property Type
              </label>
              <select
                className={inputClass}
                value={form.property_type}
                onChange={(e) => updateField("property_type", e.target.value)}
              >
                <option value="">Select Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Cottage</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                No. of Bathrooms
              </label>
              <select
                className={inputClass}
                value={form.bathrooms}
                onChange={(e) => updateField("bathrooms", e.target.value)}
              >
                <option value="">Select</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                No. of Bedrooms
              </label>
              <select
                className={inputClass}
                value={form.bedrooms}
                onChange={(e) => updateField("bedrooms", e.target.value)}
              >
                <option value="">Select</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="mb-2 block text-sm text-text-muted">Budget</label>
              <select
                className={inputClass}
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
              >
                <option value="">Select Budget</option>
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
              <select
                className={inputClass}
                value={form.inquiry_type}
                onChange={(e) => updateField("inquiry_type", e.target.value)}
              >
                <option value="">Select Inquiry Type</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Renting</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-text-muted">
                How Did You Hear About Us?
              </label>
              <select
                className={inputClass}
                value={form.hear_about}
                onChange={(e) => updateField("hear_about", e.target.value)}
              >
                <option value="">Select</option>
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
            <select
              className={inputClass}
              value={form.property_name}
              onChange={(e) => updateField("property_name", e.target.value)}
            >
              <option>{propertyName}</option>
            </select>
          </div>
        )}
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm text-text-muted">Message</label>
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Enter your Message"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <p className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
          Your message was sent successfully. Our team will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-start gap-2 text-sm text-text-muted">
          <input
            type="checkbox"
            required
            checked={form.agreed_terms}
            onChange={(e) => updateField("agreed_terms", e.target.checked)}
            className="mt-1 accent-primary"
          />
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
          disabled={status === "loading"}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-primary-hover disabled:opacity-60 sm:w-auto sm:shrink-0"
        >
          {status === "loading" ? "Sending…" : "Send Your Message"}
        </button>
      </div>
    </form>
  );
}
