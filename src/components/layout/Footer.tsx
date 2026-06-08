import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const footerLinks = {
  Home: [
    { label: "Hero Section", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Properties", href: "/properties" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ's", href: "/faqs" },
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
      <h4 className="mb-4 text-sm font-medium text-white">{title}</h4>
      <ul className="space-y-3">
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

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="page-container py-12 sm:py-16 lg:py-20">
        <div className="hidden lg:grid lg:grid-cols-[minmax(220px,1.2fr)_repeat(5,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-8">
          <div className="pr-4">
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
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="space-y-10">
              {mobileLeftGroups.map((title) => (
                <FooterLinkGroup
                  key={title}
                  title={title}
                  links={footerLinks[title]}
                />
              ))}
            </div>
            <div className="space-y-10">
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
      </div>

      <div className="border-t border-border/40 bg-surface">
        <div className="page-container flex flex-col items-center gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-2 text-center text-sm text-text-muted sm:flex-row sm:gap-4 sm:text-left">
            <span>@2023 Estatein. All Rights Reserved.</span>
            <Link href="#" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-elevated text-white transition hover:bg-border"
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
