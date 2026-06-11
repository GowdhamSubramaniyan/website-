export type Sector = {
  name: string;
  descriptor: string;
  image: string;
};

/** The eight sectors served, with their building imagery. */
export const SECTORS: Sector[] = [
  {
    name: "Healthcare Facilities",
    descriptor: "Clinics, care homes, and hospitals",
    image: "/assets/home/sector-healthcare.png",
  },
  {
    name: "Property Managers",
    descriptor: "Residential and commercial portfolios",
    image: "/assets/home/sector-property.png",
  },
  {
    name: "Schools and Universities",
    descriptor: "Educational campuses and academies",
    image: "/assets/home/sector-schools.png",
  },
  {
    name: "Hotels and Hospitality",
    descriptor: "Hotels, resorts, and venues",
    image: "/assets/home/sector-hotels.png",
  },
  {
    name: "Retail and Restaurants",
    descriptor: "Multi-site retail and F&B operators",
    image: "/assets/home/sector-retail.png",
  },
  {
    name: "Construction and Contractors",
    descriptor: "Builders, fit-out, and civil works",
    image: "/assets/home/sector-construction.png",
  },
  {
    name: "Manufacturing and Warehouses",
    descriptor: "Factories, logistics hubs, and plants",
    image: "/assets/home/sector-manufacturing.png",
  },
  {
    name: "Logistics and Transport",
    descriptor: "Fleet operators and distribution",
    image: "/assets/home/sector-logistics.png",
  },
];
