import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  Home: [
    { label: "Hero Section", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Properties", href: "/properties" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ's", href: "/#faq" },
  ],
  "About Us": [
    { label: "Our Story", href: "/about" },
    { label: "Our Works", href: "/about#achievements" },
    { label: "How It Works", href: "/about#experience" },
    { label: "Our Team", href: "/about#team" },
    { label: "Our Clients", href: "/about#clients" },
  ],
  Properties: [
    { label: "Portfolio", href: "/properties" },
    { label: "Categories", href: "/properties" },
  ],
  Services: [
    { label: "Valuation Mastery", href: "/services#unlock-property-value" },
    { label: "Strategic Marketing", href: "/services#unlock-property-value" },
    { label: "Negotiation Wizardry", href: "/services#unlock-property-value" },
    { label: "Closing Success", href: "/services#unlock-property-value" },
    { label: "Property Management", href: "/services#property-management" },
  ],
  "Contact Us": [
    { label: "Contact Form", href: "/contact" },
    { label: "Our Offices", href: "/contact#offices" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <div>
            <Logo />
            <form className="mt-6 flex overflow-hidden rounded-lg border border-border bg-surface">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 text-white transition hover:bg-primary-hover"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-medium text-white">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span>©2023 Estatein. All Rights Reserved.</span>
            <Link href="#" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-primary hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
