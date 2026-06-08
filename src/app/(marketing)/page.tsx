import { CtaBanner } from "@/components/layout/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedPropertiesSection } from "@/components/home/FeaturedPropertiesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { testimonials, faqs } from "@/data/content";
import { getFeaturedProperties } from "@/lib/data/properties";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      <HeroSection />

      <FeaturedPropertiesSection properties={featuredProperties} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />

      <CtaBanner />
    </>
  );
}
