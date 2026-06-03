import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
          <path
            d="M18 4C11 4 6 10 6 17c0 5 3 9 7 11-1-6 2-11 8-13 6-2 10-7 10-13 0-1 0-2-.1-2C30 6 24 4 18 4Z"
            fill="#703BF7"
          />
          <path
            d="M28 20c-2 6-8 10-14 10-3 0-6-1-8-3 4 1 8 0 11-3 4-4 5-9 3-14 2 3 6 6 8 10Z"
            fill="#8255F9"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-white">
        Estatein
      </span>
    </Link>
  );
}
