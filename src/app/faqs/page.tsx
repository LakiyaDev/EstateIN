import Link from "next/link";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { FaqCard } from "@/components/home/FaqCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";

export const metadata = {
  title: "FAQs | Estatein",
  description:
    "Find answers to frequently asked questions about Estatein's real estate services, property listings, and buying or selling process.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="page-container py-12 lg:py-16">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          showIcon={false}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              details={faq.details}
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-text-muted">
          Still have questions?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact our team
          </Link>{" "}
          and we will be happy to help.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
