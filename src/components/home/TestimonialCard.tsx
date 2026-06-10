"use client";

import { Star } from "lucide-react";
import { getTestimonialAvatarUrl } from "@/lib/testimonial-avatar";

type TestimonialCardProps = {
  title: string;
  text: string;
  name: string;
  location: string;
};

export function TestimonialCard({
  title,
  text,
  name,
  location,
}: TestimonialCardProps) {
  const avatarSrc = getTestimonialAvatarUrl(name);

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background"
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          </span>
        ))}
      </div>
      <h3 className="mt-4 break-words font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {text}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-background">
          <img
            src={avatarSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{name}</p>
          <p className="truncate text-xs text-text-muted">{location}</p>
        </div>
      </div>
    </article>
  );
}
