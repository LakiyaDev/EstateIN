import type { Faq } from "@/data/content";

type FaqCardProps = Pick<Faq, "question" | "answer">;

export function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="font-semibold leading-snug text-white">{question}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {answer}
      </p>
    </article>
  );
}
