export type Feature = {
  number: string;
  title: string;
  description: string;
};

/** The six Essentials+ capabilities, shown as numbered cards on a dark band. */
export const FEATURES: Feature[] = [
  {
    number: "01",
    title: "AI Utility Bill Extraction",
    description:
      "Automatically reads and extracts key data from uploaded utility bills to reduce manual entry and reporting time.",
  },
  {
    number: "02",
    title: "Scope 1, 2, & 3 Reporting",
    description:
      "Track and manage operational emissions visibility across broader reporting requirements.",
  },
  {
    number: "03",
    title: "Transition Planning Tools",
    description:
      "Support operational and emissions reduction planning with structured reporting insights.",
  },
  {
    number: "04",
    title: "Real-Time Operational Dashboards",
    description:
      "Monitor ESG metrics, operational performance, and emissions visibility through live dashboards.",
  },
  {
    number: "05",
    title: "Professional Reporting Outputs",
    description:
      "Generate lender-ready, procurement-ready, and investor-ready reports instantly.",
  },
  {
    number: "06",
    title: "Global & Local Framework Support",
    description:
      "Supports international ESG frameworks alongside regional reporting requirements and emission factors.",
  },
];
