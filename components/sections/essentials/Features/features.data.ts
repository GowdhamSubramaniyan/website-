export type Feature = {
  number: string;
  title: string;
  description: string;
};

/** The six Essentials capabilities, shown as numbered cards on a teal band. */
export const FEATURES: Feature[] = [
  {
    number: "01",
    title: "AI Utility Bill Extraction",
    description:
      "Automatically reads and extracts key data from uploaded utility bills to reduce manual entry and reporting time.",
  },
  {
    number: "02",
    title: "Automated ESG and Emissions Calculations",
    description:
      "Processes operational data and calculates ESG and emissions metrics with improved speed and accuracy.",
  },
  {
    number: "03",
    title: "Real-time ESG Dashboards",
    description:
      "Track ESG performance, emissions visibility, and operational reporting insights through live dashboards.",
  },
  {
    number: "04",
    title: "Professional ESG Reports",
    description:
      "Generate professional lender-ready, procurement-ready, and investor-ready ESG reports in seconds.",
  },
  {
    number: "05",
    title: "Global & Local Framework Support",
    description:
      "Supports international ESG frameworks while adapting to regional standards and local emission factors.",
  },
  {
    number: "06",
    title: "Regulatory & Reporting Updates",
    description:
      "Stay aligned with evolving lender, procurement, and ESG reporting expectations automatically.",
  },
];
