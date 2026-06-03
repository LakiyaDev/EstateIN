import { CtaBanner } from "@/components/layout/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedPropertiesSection } from "@/components/home/FeaturedPropertiesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { testimonials, faqs } from "@/data/content";
import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedPropertiesSection properties={properties} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />

      <CtaBanner />
    </>
  );
}
