import Link from "next/link";
import { Facebook, Linkedin, Mail, Send, Twitter, Youtube } from "lucide-react";
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

const mobileLeftGroups = ["Home", "Properties", "Contact Us"] as const;
const mobileRightGroups = ["About Us", "Services"] as const;

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-white sm:mb-4">{title}</h4>
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
  );
}

function NewsletterForm() {
  return (
    <form className="mt-6 flex overflow-hidden rounded-xl border border-border bg-surface">
      <span className="flex items-center pl-4 text-text-muted">
        <Mail className="h-4 w-4" />
      </span>
      <input
        type="email"
        placeholder="Enter Your Email"
        className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-text-muted outline-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center px-4 text-white transition hover:text-primary"
        aria-label="Subscribe"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="page-container py-10 sm:py-12 lg:py-14">
        <div className="hidden lg:grid lg:grid-cols-[1.15fr_repeat(5,1fr)] lg:gap-8">
          <div>
            <Logo />
            <NewsletterForm />
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterLinkGroup key={title} title={title} links={links} />
          ))}
        </div>

        <div className="lg:hidden">
          <Logo />
          <NewsletterForm />
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            <div className="space-y-8 border-r border-border pr-4">
              {mobileLeftGroups.map((title) => (
                <FooterLinkGroup
                  key={title}
                  title={title}
                  links={footerLinks[title]}
                />
              ))}
            </div>
            <div className="space-y-8 pl-2">
              {mobileRightGroups.map((title) => (
                <FooterLinkGroup
                  key={title}
                  title={title}
                  links={footerLinks[title]}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-surface px-4 py-8 lg:mt-12 lg:rounded-none lg:border-t lg:border-border lg:bg-surface-elevated lg:px-0 lg:py-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-2 text-center text-sm text-text-muted lg:flex-row lg:gap-4 lg:text-left">
              <span>@2023 Estatein. All Rights Reserved.</span>
              <Link href="#" className="transition hover:text-white">
                Terms & Conditions
              </Link>
            </div>
            <div className="flex justify-center gap-3 lg:justify-end">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-background transition hover:bg-white/90"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
