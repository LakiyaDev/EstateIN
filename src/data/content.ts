import { teamMemberImage } from "@/lib/images";

export type FeatureIcon = "home" | "value" | "building" | "invest";

export const heroFeatures: {
  title: string;
  href: string;
  icon: FeatureIcon;
}[] = [
  {
    title: "Find Your Dream Home",
    href: "/properties",
    icon: "home",
  },
  {
    title: "Unlock Property Value",
    href: "/services#unlock-property-value",
    icon: "value",
  },
  {
    title: "Effortless Property Management",
    href: "/services#property-management",
    icon: "building",
  },
  {
    title: "Smart Investments, Informed Decisions",
    href: "/services#smart-investments",
    icon: "invest",
  },
];

export type Testimonial = {
  title: string;
  text: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a smooth and stress-free process. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
  },
  {
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results!",
    name: "Emily Johnson",
    location: "USA, Texas",
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through every step of our investment journey. Their market knowledge and personalized approach gave us complete confidence.",
    name: "Michael Chen",
    location: "USA, New York",
  },
  {
    title: "A Seamless First Purchase",
    text: "As first-time buyers we were nervous, but Estatein explained every document and deadline clearly. We closed on our condo two weeks ahead of schedule.",
    name: "Sophia Martinez",
    location: "USA, Florida",
  },
  {
    title: "Above and Beyond",
    text: "From staging advice to negotiating repairs, the agents went the extra mile. Our home sold for 8% over asking with multiple offers on day three.",
    name: "James Patterson",
    location: "USA, Washington",
  },
  {
    title: "Investment Portfolio Growth",
    text: "Estatein helped us identify high-yield rental properties in emerging neighborhoods. Their analytics reports made our decision straightforward and data-driven.",
    name: "Priya Sharma",
    location: "USA, Illinois",
  },
  {
    title: "Relocation Made Easy",
    text: "Moving across the country felt overwhelming until we partnered with Estatein. They coordinated virtual tours, inspections, and closing remotely without a hitch.",
    name: "Daniel Okonkwo",
    location: "USA, Georgia",
  },
  {
    title: "Luxury Expertise",
    text: "We needed discretion and polish for a high-value waterfront listing. Estatein marketed the property beautifully and found a qualified buyer within ten days.",
    name: "Victoria Lang",
    location: "USA, Massachusetts",
  },
  {
    title: "Responsive and Transparent",
    text: "Every question was answered the same day, and we always knew where we stood in the process. Transparency built trust from our very first consultation.",
    name: "Ryan Cooper",
    location: "USA, Colorado",
  },
  {
    title: "Perfect Rental Match",
    text: "They listened to our budget and lifestyle needs, then shortlisted apartments we actually wanted to see. Signed a lease in under a week with fair terms.",
    name: "Hannah Brooks",
    location: "USA, Oregon",
  },
  {
    title: "Family-Friendly Guidance",
    text: "School districts, commute times, and neighborhood safety mattered to us. Estatein curated options that fit our family and helped us win a competitive bid.",
    name: "Marcus and Lena Fischer",
    location: "USA, Minnesota",
  },
  {
    title: "Commercial Space Success",
    text: "We leased office space for our growing startup. Their team compared foot traffic, zoning, and lease clauses so we avoided costly surprises later on.",
    name: "Aisha Rahman",
    location: "USA, Michigan",
  },
  {
    title: "Downsizing with Dignity",
    text: "After thirty years in our family home, selling was emotional. Estatein handled everything respectfully and connected us with a wonderful bungalow community.",
    name: "Robert and Elaine Hughes",
    location: "USA, Arizona",
  },
  {
    title: "Renovation-Ready Find",
    text: "We wanted a fixer-upper with good bones. They flagged properties with solid structure and realistic renovation costs—exactly what our contractor confirmed.",
    name: "Tyler Nguyen",
    location: "USA, Nevada",
  },
  {
    title: "Outstanding Market Insight",
    text: "Pricing guidance was spot-on. We listed at the right moment and avoided months on the market while still maximizing our return.",
    name: "Isabella Romano",
    location: "USA, New Jersey",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Browse our Properties page and filter by location, type, price, and size. Save favorites, compare listings, and contact an agent from any property page for a personalized shortlist.",
  },
  {
    question: "What documents do I need to sell my property?",
    answer:
      "You will typically need proof of ownership, valid ID, recent tax records, HOA documents if applicable, and any renovation permits. Our team helps prepare your listing and guides you through required disclosures.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "Use the inquiry form on any property page or contact our office to book a tour. We arrange in-person or virtual walkthroughs and follow up with answers after your visit.",
  },
  {
    question: "What financing options are available for buyers?",
    answer:
      "We connect you with trusted lenders and explain conventional, FHA, VA, and jumbo options, including pre-approval, down payments, and monthly payment estimates before you make an offer.",
  },
  {
    question: "How does Estatein determine property valuations?",
    answer:
      "Our agents analyze comparable sales, property condition, neighborhood trends, and local demand to provide a clear, data-backed pricing recommendation for buyers and sellers.",
  },
  {
    question: "Can Estatein help me manage a rental property?",
    answer:
      "Yes. We handle tenant screening, rent collection, maintenance, and owner reporting so your rental stays profitable with less day-to-day work for you.",
  },
  {
    question: "What are the typical closing costs when buying a home?",
    answer:
      "Closing costs often include appraisal fees, title insurance, attorney fees, and transfer taxes, usually totaling 2–5% of the purchase price. We provide a clear breakdown before closing day.",
  },
  {
    question: "How long does it usually take to sell a property?",
    answer:
      "Most well-priced listings receive offers within a few weeks. We track showings and feedback closely and adjust marketing or pricing when needed to keep your sale on track.",
  },
  {
    question: "Do you assist with commercial real estate transactions?",
    answer:
      "Yes. Our commercial team supports office, retail, and investment deals with market analysis on zoning, lease terms, foot traffic, and cap rates.",
  },
];

export const team = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image: teamMemberImage("Max Mitchell"),
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: teamMemberImage("Sarah Johnson"),
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image: teamMemberImage("David Brown"),
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image: teamMemberImage("Michael Turner"),
  },
];

export const values = [
  {
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];

export const experienceSteps = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    description:
      "Our team will schedule viewings and provide detailed insights about the neighborhoods, ensuring you're well-informed at every step.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description:
      "Our experienced agents work closely with you to understand your unique preferences and lifestyle requirements.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    description:
      "We'll arrange property viewings, allowing you to explore homes that align with your vision and lifestyle.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description:
      "We'll provide comprehensive data, including market trends, property values, and investment potential, empowering you to make informed choices.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We'll negotiate on your behalf, ensuring you get the best possible terms and price for your new property.",
  },
];

export const clients = [
  {
    name: "ABC Corporation",
    since: "2019",
    category: "Commercial Real Estate",
    industry: "Luxury Retail Development",
    quote:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    name: "GreenTech Enterprises",
    since: "2021",
    category: "Commercial Real Estate",
    industry: "Sustainable Development",
    quote:
      "Estatein's ability to identify prime commercial properties helped us expand our portfolio strategically. Their market insights are unparalleled.",
  },
];

export const offices = [
  {
    type: "Main Headquarters",
    address: "123 Estatein Plaza, City Center, Metropolis",
    description:
      "Our main headquarters serves as the hub for all our operations. Visit us to discuss your real estate needs in person.",
    email: "info@estatein.com",
    phone: "+1 (555) 123-4567",
    region: "all",
  },
  {
    type: "Regional Office",
    address: "456 Coastal Avenue, Bayview, Metropolis",
    description:
      "Our regional office specializes in coastal and waterfront properties, offering expert guidance for seaside living.",
    email: "coastal@estatein.com",
    phone: "+1 (555) 987-6543",
    region: "regional",
  },
];
