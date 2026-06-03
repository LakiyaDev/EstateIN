"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { HeroWaves } from "@/components/home/HeroWaves";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative overflow-hidden border-b border-border bg-background py-3">
      <HeroWaves className="opacity-60" />
      <div className="page-container relative flex items-center justify-center pr-10 text-xs text-text-secondary sm:text-sm">
        <p className="text-center leading-relaxed">
          <span>✨ Discover Your Dream Property with Estatein </span>
          <Link
            href="/properties"
            className="text-white underline underline-offset-2"
          >
            Learn More
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-text-muted transition hover:text-white sm:right-4"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
