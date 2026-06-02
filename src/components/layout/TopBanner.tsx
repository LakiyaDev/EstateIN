"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative border-b border-border bg-background px-4 py-2.5 text-center text-sm text-text-secondary">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 pr-8">
        <span>✨ Discover Your Dream Property with Estatein.</span>
        <Link href="/properties" className="text-white underline-offset-2 hover:underline">
          Learn More
        </Link>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-4 top-2.5 rounded p-1 text-text-muted transition hover:text-white"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
