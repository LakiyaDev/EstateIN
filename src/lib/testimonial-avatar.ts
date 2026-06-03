/** Stable portrait URL per client name (works when Unsplash URLs fail or expire). */
export function getTestimonialAvatarUrl(name: string): string {
  return `https://i.pravatar.cc/150?u=${encodeURIComponent(name.trim().toLowerCase())}`;
}
