import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brandImages } from "@/lib/images";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Estatein | Elevate Your Real Estate Experience",
  description:
    "Discover your dream property with Estatein. Expert guidance for buying, selling, and managing real estate.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  applicationName: "Estatein",
  icons: {
    icon: [
      { url: brandImages.logo, type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: brandImages.logo,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Estatein",
    title: "Estatein | Elevate Your Real Estate Experience",
    description:
      "Discover your dream property with Estatein. Expert guidance for buying, selling, and managing real estate.",
    images: [
      {
        url: brandImages.ogImage,
        width: 1200,
        height: 630,
        alt: "Estatein",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estatein | Elevate Your Real Estate Experience",
    description:
      "Discover your dream property with Estatein. Expert guidance for buying, selling, and managing real estate.",
    images: [brandImages.ogImage],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <TopBanner />
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
