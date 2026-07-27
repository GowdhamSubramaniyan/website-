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
    title: "Projected baseline report",
    description:
      "Establish a baseline aligned to lender and regulator expectations.",
  },
  {
    title: "Audit-ready data and traceability",
    description:
      "Clean records and supporting evidence behind every figure you submit.",
  },
  {
    title: "Regulatory updates",
    description:
      "Your reporting stays aligned to ESG frameworks as they evolve.",
  },
  {
    title: "One-click report generation",
    description:
      "Produce your report in PDF, PowerPoint and Excel formats instantly.",
  },
] as const;

/** Short bullet points shown on the dark price card. */
export const PRICE_CARD_POINTS = [
  "Scope 1, 2 and 3 reporting",
  "Guided, AI-assisted online process",
  "Audit-ready compliance report",
  "Analyst-level export formats",
] as const;

/** Essentials+ — what the expanded platform unlocks. */
export const ESSENTIALS_PLUS_UNLOCKS = [
  "Full Scope 3 and professional benchmarking",
  "Net zero transition planning",
  "Supplier emissions risk analysis",
  "Decarbonisation economics",
  "Reduction pathway modelling",
  "ESG advisory support",
  "Dedicated account manager",
] as const;

/** Portfolio One — what building-performance operators get. */
export const PORTFOLIO_ONE_PROVIDES = [
  "Asset monitoring through automated live data from meters and BMS",
  "Instant data-driven alert system",
  "Significant reductions in avoidable energy and utility costs",
  "Benchmarking across hotels and recognised industry frameworks",
  "Business cases for smart upgrades",
  "Built-in ESG and compliance readiness",
  "A dedicated Building Performance Specialist",
  "Adaptable to any hotel or accommodation environment",
] as const;

/** Strategic Advisory Team — hands-on services beyond reporting. */
export const ADVISORY_SERVICES = [
  "ESG, Sustainability Consultancy and Business Cases",
  "Finance structuring",
  "Energy efficiency and retrofit programs",
  "Asset Improvement Planning",
  "Financial and regulatory compliance",
  "Asset replacement, remediation and project management",
  "Institutional capital experience",
  "Web and building assessments",
  "Operational decarbonisation programs and Net Zero planning",
] as const;

/** "Why QHA members choose Essentials" — four value pillars. */
export const WHY_QHA = [
  {
    title: "AI-driven automation",
    description:
      "Automated ESG reporting with an intelligent, guided platform.",
    icon: "spark" as const,
  },
  {
    title: "One report, everywhere",
    description:
      "One report you can reuse across lender, insurer and framework requests.",
    icon: "layers" as const,
  },
  {
    title: "Real-time insights",
    description:
      "Live dashboards let you monitor performance as data is added.",
    icon: "pulse" as const,
  },
  {
    title: "Professional outputs",
    description:
      "Investor-ready formats built for lenders and stakeholders.",
    icon: "doc" as const,
  },
] as const;

/** The three-step reporting flow. */
export const SIMPLE_STEPS = [
  {
    step: "01",
    title: "Data Input",
    description:
      "Drag and drop your utility bills — our AI extracts the data automatically.",
  },
  {
    step: "02",
    title: "Review Performance",
    description:
      "Review live dashboards and understand your ESG position instantly.",
  },
  {
    step: "03",
    title: "Report",
    description:
      "Generate a lender-ready PDF or PowerPoint in one click and share it securely.",
  },
] as const;

/** Contact details shown in the closing CTA card. */
export const QHA_CONTACT = {
  website: "www.visionzeroconnect.com",
  email: "info@visionzeroconnect.com",
  regions: "Australia · UK · Europe · Hong Kong",
} as const;
