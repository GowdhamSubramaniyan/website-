export type SectorDetailContent = {
  /** Matches the SectorCard anchor (#sector-<slug>). */
  slug: string;
  name: string;
  image: string;
  lead: string;
  pressures: string[];
  solution: string;
};

export const SECTOR_DETAILS: SectorDetailContent[] = [
  {
    slug: "healthcare",
    name: "Healthcare Facilities",
    image: "/assets/essentials/sectors/healthcare.png",
    lead: "Clinics, care homes, and hospitals run energy-intensive sites under tight compliance and procurement scrutiny.",
    pressures: [
      "Rising energy and utility costs across multiple sites",
      "ESG and procurement reporting for tenders and funding",
      "Compliance with evolving health and environmental standards",
    ],
    solution:
      "Vision Zero Connect turns building and utility data into clear emissions visibility and audit-ready reporting.",
  },
  {
    slug: "property",
    name: "Property Managers",
    image: "/assets/essentials/sectors/property.png",
    lead: "Residential and commercial portfolio managers need visibility across diverse, distributed assets.",
    pressures: [
      "Fragmented data spread across many buildings",
      "Lender and investor ESG expectations",
      "Energy performance and cost control at portfolio scale",
    ],
    solution:
      "Vision Zero Connect consolidates building performance across the portfolio into one operational and ESG view.",
  },
  {
    slug: "education",
    name: "Schools and Universities",
    image: "/assets/essentials/sectors/schools.png",
    lead: "Education estates balance tight budgets with sustainability commitments and reporting duties.",
    pressures: [
      "Energy cost pressure across campuses and buildings",
      "Sustainability and compliance reporting obligations",
      "Limited in-house ESG and reporting resource",
    ],
    solution:
      "Vision Zero Connect automates emissions and operational reporting so teams can focus on outcomes, not spreadsheets.",
  },
  {
    slug: "hospitality",
    name: "Hotels and Hospitality",
    image: "/assets/essentials/sectors/hotels.png",
    lead: "Hotels, resorts, and venues face high energy use and growing guest, investor, and brand ESG expectations.",
    pressures: [
      "High, variable energy and utility costs",
      "Multi-site performance visibility",
      "ESG credentials for partners, investors, and guests",
    ],
    solution:
      "Vision Zero Connect delivers site-level performance insight and professional ESG reporting.",
  },
  {
    slug: "retail",
    name: "Retail and Restaurants",
    image: "/assets/essentials/sectors/retail.png",
    lead: "Multi-site retail and F&B operators manage many locations on thin margins under supply-chain scrutiny.",
    pressures: [
      "Energy and operational costs across many sites",
      "Procurement and supply-chain ESG demands",
      "Manual, fragmented reporting",
    ],
    solution:
      "Vision Zero Connect standardises operational and emissions data across every site.",
  },
  {
    slug: "construction",
    name: "Construction and Contractors",
    image: "/assets/essentials/sectors/construction.png",
    lead: "Builders and contractors must demonstrate ESG and operational credentials to win tenders and financing.",
    pressures: [
      "Tender and procurement ESG requirements",
      "Scope 1–3 emissions across projects",
      "Financing and lender readiness",
    ],
    solution:
      "Vision Zero Connect produces lender- and tender-ready ESG reporting from operational data.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing and Warehouses",
    image: "/assets/essentials/sectors/manufacturing.png",
    lead: "Manufacturers operate energy-intensive sites under rising regulatory and customer pressure.",
    pressures: [
      "High energy and emissions intensity",
      "Regulatory and customer reporting requirements",
      "Operational efficiency at scale",
    ],
    solution:
      "Vision Zero Connect connects operational and emissions data for efficiency gains and compliant reporting.",
  },
  {
    slug: "logistics",
    name: "Logistics and Transport",
    image: "/assets/essentials/sectors/logistics.png",
    lead: "Fleet and distribution operators face fuel-cost volatility and growing emissions scrutiny.",
    pressures: [
      "Fuel and emissions reporting across fleets",
      "Customer and regulatory ESG demands",
      "Multi-depot operational visibility",
    ],
    solution:
      "Vision Zero Connect turns fleet and depot data into clear emissions and performance reporting.",
  },
];
