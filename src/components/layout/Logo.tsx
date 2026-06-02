import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden
        >
          <path
            d="M12 3L4 9v12h6v-7h4v7h6V9L12 3z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-white">
        Estatein
      </span>
    </Link>
  );
}
