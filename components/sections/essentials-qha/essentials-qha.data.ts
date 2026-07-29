/**
 * Content for the Essentials for QHA Members landing page. This page is
 * direct-link only (not linked from the site menu, and marked noindex), so its
 * copy lives here rather than in the shared Essentials data — it is tailored to
 * Australia's hospitality sector and QHA (Queensland Hotels Association) members.
 */

/** Annual price for the Essentials compliance report (Australian dollars). */
export const QHA_PRICE = "A$2,200";

/** "Essentials includes" — the compliance report feature list. */
export const ESSENTIALS_INCLUDES = [
  {
    title: "Scope 1, 2 and 3 reporting",
    description:
      "Measure and report emissions across your operations and supply chain.",
  },
  {
    title: "AI-guided data input",
    description:
      "Follow a simple, guided process to enter your operational data.",
  },
  {
    title: "Audit-ready data and traceability",
    description:
      "Maintain clear records and supporting information for every calculation.",
  },
  {
    title: "Regulatory updates",
    description: "Keep your reporting aligned as ESG requirements change.",
  },
  {
    title: "One-click report generation",
    description: "Export your results in PDF, PowerPoint and Excel formats.",
  },
] as const;

/** Short bullet points shown on the dark price card. */
export const PRICE_CARD_POINTS = [
  "Scope 1, 2 and 3 reporting",
  "Guided online process",
  "Audit-ready outputs",
  "Multiple report formats",
] as const;

/**
 * Essentials+ — what the expanded platform unlocks. Ordered to fill a two-column
 * grid row-by-row so the visual columns match the design.
 */
export const ESSENTIALS_PLUS_UNLOCKS = [
  "Full Scope 3 and product-level reporting.",
  "Net zero transition planning.",
  "Supplier emissions risk analysis.",
  "Decarbonisation economics.",
  "Reduction pathway modelling.",
  "24/7 phone support.",
  "Dedicated account manager.",
] as const;

/**
 * Portfolio One — what building-performance operators get. Ordered to fill a
 * two-column grid row-by-row so the visual columns match the design.
 */
export const PORTFOLIO_ONE_PROVIDES = [
  "Asset monitoring and management through automated live data integration via meters / BMS.",
  "Significant reductions in avoidable energy and utility spend.",
  "Instant data alert system.",
  "Benchmarking across hotels and recognised industry frameworks.",
  "Business cases for asset upgrades.",
  "Built-in ESG and compliance readiness.",
  "A dedicated Building Performance Specialist.",
  "Adaptability to any hotel or accommodation environment.",
] as const;

/**
 * Strategic Advisory Team — hands-on services beyond reporting. Ordered to fill a
 * three-column grid row-by-row so the numbered cards read 01–09 as in the design.
 */
export const ADVISORY_SERVICES = [
  "ESG, Sustainability Consultancy and Advisory Services, Business Cases.",
  "Asset Improvement Planning",
  "Institutional capital experience.",
  "Finance structuring.",
  "Financial and regulatory compliance.",
  "Risk assessment.",
  "Energy efficiency and reduction programs.",
  "Asset replacement and renewables product design and project management.",
  "Operational decarbonisation programs and Net Zero Planning.",
] as const;

/** "Why QHA members choose Essentials" — four value pillars. */
export const WHY_QHA = [
  {
    title: "AI-driven automation",
    description:
      "Automate ESG reporting with an intelligent, guided platform.",
    icon: "gear" as const,
  },
  {
    title: "One report, everywhere",
    description:
      "Generate a single report that can be used across multiple reporting requirements.",
    icon: "doc" as const,
  },
  {
    title: "Real-time insights",
    description:
      "Access live dashboards and monitor your ESG performance as data is added.",
    icon: "bars" as const,
  },
  {
    title: "Professional outputs",
    description: "Generate presentation-ready reports in seconds.",
    icon: "check" as const,
  },
] as const;

/** The three-step reporting flow. */
export const SIMPLE_STEPS = [
  {
    step: "1",
    title: "Data Input",
    description: "Drag and drop your utility bills. Our AI extracts key data.",
  },
  {
    step: "2",
    title: "Review Performance",
    description: "Real-time dashboard shows your ESG position instantly.",
  },
  {
    step: "3",
    title: "Report",
    description:
      "Generate lender-ready PDF or PowerPoint reports with your branding in seconds.",
  },
] as const;

/** Contact details shown in the closing CTA card. */
export const QHA_CONTACT = {
  website: "www.visionzeroconnect.com",
  email: "info@visionzeroconnect.com",
  contactEmail: "jon@visionzeroconnect.com",
  phone: "+61 409 766 700",
  regions: "Australia • UK • Europe • Hong Kong • USA",
} as const;
