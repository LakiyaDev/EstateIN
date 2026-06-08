"use client";

import { useState } from "react";
import type { Faq } from "@/data/content";
import { cn } from "@/lib/utils";

type FaqCardProps = Pick<Faq, "question" | "answer" | "details"> & {
  defaultExpanded?: boolean;
};

export function FaqCard({
  question,
  answer,
  details,
  defaultExpanded = false,
}: FaqCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="font-semibold leading-snug text-white">{question}</h3>
      <div className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        <p className={cn(!expanded && "line-clamp-3")}>{answer}</p>
        {expanded && (
          <p className="mt-3 border-t border-border pt-3">{details}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-6 flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm text-text-secondary transition hover:border-text-muted hover:text-white sm:w-fit sm:bg-transparent"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </article>
  );
}
