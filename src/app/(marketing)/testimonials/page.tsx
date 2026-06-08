import Link from "next/link";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export const metadata = {
  title: "Testimonials | Estatein",
  description:
    "Read success stories and testimonials from Estatein clients who bought, sold, and invested in real estate with our team.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-container py-12 lg:py-16">
        <SectionHeading
          title="What Our Clients Say"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          showIcon={false}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              title={testimonial.title}
              text={testimonial.text}
              name={testimonial.name}
              location={testimonial.location}
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-text-muted">
          Ready to start your own success story?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Get in touch with our team
          </Link>
          .
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
