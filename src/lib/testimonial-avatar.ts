import { testimonialAvatarImage } from "@/lib/images";

/** Local testimonial portrait under public/images/testimonials/. */
export function getTestimonialAvatarUrl(name: string): string {
  return testimonialAvatarImage(name);
}
