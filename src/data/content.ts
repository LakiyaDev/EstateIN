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

export const testimonials = [
  {
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a smooth and stress-free process. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results!",
    name: "Emily Johnson",
    location: "USA, Texas",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through every step of our investment journey. Their market knowledge and personalized approach gave us complete confidence.",
    name: "Michael Chen",
    location: "USA, New York",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const faqs = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria, from location to price range.",
  },
  {
    question: "What documents do I need to sell my property?",
    answer:
      "Find out about the necessary documentation and steps involved in listing your property with Estatein.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "Discover how to easily schedule a property viewing through our website or by contacting our team.",
  },
];

export const team = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
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
