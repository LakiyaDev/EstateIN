import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  BarChart3,
  Handshake,
  Megaphone,
  ThumbsUp,
  Users,
  Wrench,
  Sparkles,
  Shield,
  TrendingUp,
  Flame,
  Target,
  Network,
} from "lucide-react";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureQuickCard } from "@/components/ui/FeatureQuickCard";
import { heroFeatures } from "@/data/content";

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
    </div>
  );
}

function WideCtaCard({ title }: { title: string }) {
  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-6 lg:col-span-2 lg:flex-row lg:items-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top right, rgba(112,59,247,0.15), transparent 60%)",
      }}
    >
      <div>
        <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-text-muted">
          Ready to unlock the true value of your property? Contact us today to
          learn more about our property valuation services.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-4 inline-flex w-fit rounded-lg border border-border px-5 py-2.5 text-sm text-white transition hover:border-text-muted lg:mt-0"
      >
        Learn More
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Elevate Your Real Estate Experience
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed to
          cater to your unique needs and goals.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map((feature) => (
            <FeatureQuickCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section
        id="unlock-property-value"
        className="mx-auto max-w-7xl px-4 py-12 lg:px-8"
      >
        <SectionHeading
          title="Unlock Property Value"
          description="At Estatein, we understand that every property is unique. Our services are designed to help you unlock the full potential of your real estate investments."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={BarChart3}
            title="Valuation Mastery"
            description="Accurate property valuation is the foundation of informed real estate decisions. Our experts leverage data and market insights."
          />
          <ServiceCard
            icon={Megaphone}
            title="Strategic Marketing"
            description="Selling a property requires more than just a listing. Our strategic marketing approach ensures your property reaches the right audience."
          />
          <ServiceCard
            icon={Handshake}
            title="Negotiation Wizardry"
            description="Negotiating the best deal is an art. Our negotiation experts are skilled in securing favorable terms for both buyers and sellers."
          />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <ServiceCard
            icon={ThumbsUp}
            title="Closing Success"
            description="A smooth closing process is essential. We handle all the details, ensuring a seamless transition from contract to keys."
          />
          <WideCtaCard title="Unlock the Value of Your Property Today" />
        </div>
      </section>

      <section
        id="property-management"
        className="mx-auto max-w-7xl px-4 py-12 lg:px-8"
      >
        <SectionHeading
          title="Effortless Property Management"
          description="Managing a property can be complex and time-consuming. Our property management services are designed to make your life easier."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Users}
            title="Tenant Harmony"
            description="Happy tenants mean long-term tenancies. We handle tenant relations, ensuring a harmonious living environment."
          />
          <ServiceCard
            icon={Wrench}
            title="Maintenance Ease"
            description="Property maintenance is a breeze with our proactive approach. We handle repairs and upkeep promptly."
          />
          <ServiceCard
            icon={Sparkles}
            title="Financial Peace of Mind"
            description="Managing property finances can be complex. We provide transparent financial reporting and rent collection."
          />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <ServiceCard
            icon={Shield}
            title="Legal Guardian"
            description="Stay compliant with property laws and regulations. Our legal experts ensure your property management is legally sound."
          />
          <WideCtaCard title="Experience Effortless Property Management" />
        </div>
      </section>

      <section
        id="smart-investments"
        className="mx-auto max-w-7xl px-4 py-12 lg:px-8"
      >
        <SectionHeading
          title="Smart Investments, Informed Decisions"
          description="Building wealth through real estate requires a strategic approach. Our investment services help you make informed decisions."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 lg:row-span-2"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at bottom left, rgba(112,59,247,0.15), transparent 60%)",
            }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                Unlock Your Investment Potential
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Ready to explore real estate investment opportunities? Schedule
                a consultation with our investment experts today.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit rounded-lg border border-border px-5 py-2.5 text-sm text-white transition hover:border-text-muted"
            >
              Learn More
            </Link>
          </div>
          <ServiceCard
            icon={TrendingUp}
            title="Market Insight"
            description="Stay ahead of market trends with our expert Market Analysis. We provide in-depth reports on property values and investment opportunities."
          />
          <ServiceCard
            icon={Flame}
            title="ROI Assessment"
            description="Make investment decisions with confidence. Our ROI assessment services evaluate the potential returns of your real estate investments."
          />
          <ServiceCard
            icon={Target}
            title="Customized Strategies"
            description="Every investor is unique. We develop customized investment strategies aligned with your financial goals and risk tolerance."
          />
          <ServiceCard
            icon={Network}
            title="Diversification Mastery"
            description="Diversify your real estate portfolio for long-term stability and growth. We guide you in spreading your investments across different property types."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
