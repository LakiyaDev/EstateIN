"use client";

import { FaqCard } from "@/components/home/FaqCard";
import { MobileCarouselSection } from "@/components/home/MobileCarouselSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Faq } from "@/data/content";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="page-container py-10 sm:py-12 lg:py-16">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        showIcon={false}
        viewAllHref="/faqs"
        viewAllLabel="View All FAQ's"
      />
      <MobileCarouselSection
        items={faqs}
        total={faqs.length}
        viewAllHref="/faqs"
        viewAllLabel="View All FAQ's"
        getKey={(faq) => faq.question}
        renderItem={(faq) => (
          <FaqCard question={faq.question} answer={faq.answer} />
        )}
        renderDesktop={(items) =>
          items.map((faq) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))
        }
      />
    </section>
  );
}
