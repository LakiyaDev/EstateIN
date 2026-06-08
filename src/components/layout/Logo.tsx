import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/images/brand/logo.png"
        alt="Estatein"
        width={168}
        height={40}
        className="h-8 w-auto sm:h-9"
        priority
      />
    </Link>
  );
}
