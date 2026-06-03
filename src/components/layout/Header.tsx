"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
];

function HamburgerIcon() {
  return (
    <span className="flex w-6 flex-col items-end gap-[5px]" aria-hidden>
      <span className="h-[2px] w-6 rounded-full bg-white" />
      <span className="h-[2px] w-5 rounded-full bg-white" />
      <span className="h-[2px] w-4 rounded-full bg-white" />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="page-container grid grid-cols-[1fr_auto] items-center gap-3 py-3.5 md:grid-cols-[1fr_auto_1fr] md:py-4">
        <Logo className="justify-self-start" />

        <nav className="hidden items-center gap-1 md:flex md:justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-[10px] px-4 py-2.5 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-surface text-white"
                  : "text-text-secondary hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3 md:justify-self-end">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-[10px] border border-border px-5 py-2.5 text-sm font-medium text-white transition hover:border-text-muted md:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border md:hidden">
          <div className="page-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-11 items-center rounded-lg px-4 text-sm font-medium",
                  pathname === link.href
                    ? "bg-surface text-white"
                    : "text-text-secondary",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex min-h-11 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
