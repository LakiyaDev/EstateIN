type FaqCardProps = {
  question: string;
  answer: string;
};

export function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="font-semibold leading-snug text-white">{question}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {answer}
      </p>
      <button
        type="button"
        className="mt-6 flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm text-text-secondary transition hover:border-text-muted hover:text-white sm:w-fit sm:bg-transparent"
      >
        Read More
      </button>
    </article>
  );
}
