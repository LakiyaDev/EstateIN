import { CtaBanner } from "@/components/layout/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedPropertiesSection } from "@/components/home/FeaturedPropertiesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FeatureQuickGrid } from "@/components/ui/FeatureQuickCard";
import { heroFeatures, testimonials, faqs } from "@/data/content";
import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section
        id="features"
        className="page-container pb-10 pt-0 sm:pb-12 lg:pb-16"
      >
        <FeatureQuickGrid features={heroFeatures} />
      </section>

      <FeaturedPropertiesSection properties={properties} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />

      <CtaBanner />
    </>
  );
}
