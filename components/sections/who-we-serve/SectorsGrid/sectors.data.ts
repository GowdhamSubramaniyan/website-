export type SectorIcon =
  | "healthcare"
  | "property"
  | "education"
  | "hotel"
  | "retail"
  | "construction"
  | "manufacturing"
  | "logistics";

export type Sector = {
  /** Slug used for the SectorDetail anchor (Prompt 5). */
  slug: string;
  name: string;
  descriptor: string;
  icon: SectorIcon;
};

export const SECTORS: Sector[] = [
  { slug: "healthcare", name: "Healthcare Facilities", descriptor: "Clinics, care homes, hospitals", icon: "healthcare" },
  { slug: "property", name: "Property Managers", descriptor: "Residential and commercial portfolios", icon: "property" },
  { slug: "education", name: "Schools and Universities", descriptor: "Educational campuses and academies", icon: "education" },
  { slug: "hospitality", name: "Hotels and Hospitality", descriptor: "Hotels, resorts, and venues", icon: "hotel" },
  { slug: "retail", name: "Retail and Restaurants", descriptor: "Multi-site retail and F&B operators", icon: "retail" },
  { slug: "construction", name: "Construction and Contractors", descriptor: "Builders, fit-out, and civil works", icon: "construction" },
  { slug: "manufacturing", name: "Manufacturing and Warehouses", descriptor: "Factories, logistics hubs, and plants", icon: "manufacturing" },
  { slug: "logistics", name: "Logistics and Transport", descriptor: "Fleet operators and distribution", icon: "logistics" },
];
