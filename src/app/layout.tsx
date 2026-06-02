import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Estatein | Elevate Your Real Estate Experience",
  description:
    "Discover your dream property with Estatein. Expert guidance for buying, selling, and managing real estate.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
