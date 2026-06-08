"use client";

import { MobileCarouselSection } from "@/components/home/MobileCarouselSection";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { Testimonial } from "@/data/content";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section id="testimonials" className="page-container py-10 sm:py-12 lg:py-16">
      <SectionHeader
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        showIcon={false}
        viewAllHref="/testimonials"
        viewAllLabel="View All Testimonials"
      />
      <MobileCarouselSection
        items={testimonials}
        total={testimonials.length}
        viewAllHref="/testimonials"
        viewAllLabel="View All Testimonials"
        getKey={(item) => item.name}
        renderItem={(item) => (
          <TestimonialCard
            title={item.title}
            text={item.text}
            name={item.name}
            location={item.location}
          />
        )}
        renderDesktop={(items) =>
          items.map((item) => (
            <TestimonialCard
              key={item.name}
              title={item.title}
              text={item.text}
              name={item.name}
              location={item.location}
            />
          ))
        }
      />
    </section>
  );
}
