import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureQuickCard } from "@/components/ui/FeatureQuickCard";
import {
  heroFeatures,
  values,
  experienceSteps,
  team,
  clients,
} from "@/data/content";
import { aboutImages } from "@/lib/images";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10K+", label: "Properties for Clients" },
  { value: "16+", label: "Years of Experience" },
];

const achievements = [
  {
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for setting higher standards in real estate services.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-container py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Our Journey
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we&apos;ve
              expanded our reach across the nation.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-xl border border-border bg-surface px-4 py-4 min-[400px]:px-3 min-[400px]:text-center"
                >
                  <p className="text-lg font-semibold text-white sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src={aboutImages.journey}
              alt="Hand holding house model"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map((feature) => (
            <FeatureQuickCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="page-container py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Our Values"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <Star className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="page-container py-12">
        <SectionHeading
          title="Our Achievements"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="page-container py-12">
        <SectionHeading
          title="Navigating the Estatein Experience"
          description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experienceSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <span className="text-xs font-medium text-primary">{step.step}</span>
              <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="page-container py-12">
        <SectionHeading
          title="Meet the Estatein Team"
          description="At the heart of our agency is a commitment to providing you with exceptional service and ensuring that your real estate journey is a successful and rewarding one."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-text-muted">{member.role}</p>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-between rounded-lg border border-border px-4 py-2.5 text-sm text-text-secondary transition hover:text-white"
                >
                  Say Hello
                  <MessageCircle className="h-4 w-4 text-primary" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="clients" className="page-container py-12">
        <SectionHeading
          title="Our Valued Clients"
          description="At Estatein, we've had the privilege of working with a diverse range of clients across various industries. Here are some of the companies we've partnered with."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {clients.map((client) => (
            <div
              key={client.name}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {client.name}
                  </h3>
                  <p className="text-sm text-text-muted">Since {client.since}</p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary"
                >
                  Visit Website
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-text-muted">Category</p>
                  <p className="text-sm text-white">{client.category}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">What They Said</p>
                  <p className="text-sm text-text-muted">{client.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
