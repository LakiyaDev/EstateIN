export type MessageType = "contact" | "inquiry" | "simple";
export type MessageStatus = "new" | "read" | "forwarded" | "resolved";

export type DbProperty = {
  id: string;
  slug: string;
  title: string;
  location: string;
  location_tag: string;
  price: number;
  price_formatted: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  gallery: string[];
  features: string[];
  is_published: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type DbMessage = {
  id: string;
  type: MessageType;
  status: MessageStatus;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  message: string;
  property_name: string | null;
  preferred_location: string | null;
  property_type: string | null;
  bathrooms: string | null;
  bedrooms: string | null;
  budget: string | null;
  inquiry_type: string | null;
  hear_about: string | null;
  agreed_terms: boolean;
  assigned_team: string | null;
  admin_notes: string | null;
  forwarded_at: string | null;
  created_at: string;
};

export type MessageInsert = {
  type: MessageType;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  property_name?: string;
  preferred_location?: string;
  property_type?: string;
  bathrooms?: string;
  bedrooms?: string;
  budget?: string;
  inquiry_type?: string;
  hear_about?: string;
  agreed_terms: boolean;
};

export type PropertyInsert = Omit<
  DbProperty,
  "id" | "created_at" | "updated_at"
>;

export type PropertyUpdate = Partial<PropertyInsert>;

export type DashboardStats = {
  totalProperties: number;
  publishedProperties: number;
  totalMessages: number;
  newMessages: number;
  forwardedMessages: number;
  messagesByType: { type: string; count: number }[];
  messagesByMonth: { month: string; count: number }[];
};
