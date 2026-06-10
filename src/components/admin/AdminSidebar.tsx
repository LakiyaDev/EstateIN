"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  Building2,
  LogOut,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { signOutAdmin } from "@/lib/admin/actions";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/messages", label: "Messages", icon: Mail },
  { href: "/admin/properties", label: "Properties", icon: Building2 },
];

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {links.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
              active
                ? "bg-primary/20 text-white"
                : "text-text-secondary hover:bg-surface-elevated hover:text-white"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </Link>
        );
      })}
    </>
  );
}

function SecondaryActions() {
  return (
    <>
      <Link
        href="/"
        target="_blank"
        className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition hover:bg-surface-elevated hover:text-white"
      >
        <ExternalLink className="h-4 w-4 shrink-0" />
        View Website
      </Link>
      <form action={signOutAdmin}>
        <button
          type="submit"
          className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition hover:bg-surface-elevated hover:text-white"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign Out
        </button>
      </form>
    </>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-white sm:text-lg">
              Estatein Admin
            </p>
            <p className="truncate text-xs text-text-muted">
              Platform management
            </p>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close admin menu" : "Open admin menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary transition hover:text-white"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border px-4 pb-4 pt-2 sm:px-6">
            <div className="flex flex-col gap-1">
              <NavLinks pathname={pathname} />
            </div>
            <div className="mt-2 space-y-1 border-t border-border pt-2">
              <SecondaryActions />
            </div>
          </nav>
        )}
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-surface">
        <div className="border-b border-border px-6 py-5">
          <p className="text-lg font-semibold text-white">Estatein Admin</p>
          <p className="text-xs text-text-muted">Platform management</p>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          <NavLinks pathname={pathname} />
        </nav>

        <div className="space-y-1 border-t border-border p-4">
          <SecondaryActions />
        </div>
      </aside>
    </>
  );
}
