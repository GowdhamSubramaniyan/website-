export type FeatureIconName =
  | "scan"
  | "calc"
  | "dashboard"
  | "report"
  | "globe"
  | "refresh";

export type Feature = {
  number: string;
  title: string;
  description: string;
  icon: FeatureIconName;
  /** Visual shown on the laptop screen for this feature (swap for a GIF). */
  media: string;
};

/** The six Essentials capabilities, shown as numbered cards on a teal band. */
export const FEATURES: Feature[] = [
  {
    number: "01",
    title: "AI Utility Bill Extraction",
    description:
      "Automatically reads and extracts key data from uploaded utility bills to reduce manual entry and reporting time.",
    icon: "scan",
    media: "/assets/essentials/features/feature-01.png",
  },
  {
    number: "02",
    title: "Automated ESG and Emissions Calculations",
    description:
      "Processes operational data and calculates ESG and emissions metrics with improved speed and accuracy.",
    icon: "calc",
    media: "/assets/essentials/features/feature-02.png",
  },
  {
    number: "03",
    title: "Real-time ESG Dashboards",
    description:
      "Track ESG performance, emissions visibility, and operational reporting insights through live dashboards.",
    icon: "dashboard",
    media: "/assets/essentials/features/feature-03.png",
  },
  {
    number: "04",
    title: "Professional ESG Reports",
    description:
      "Generate professional lender-ready, procurement-ready, and investor-ready ESG reports in seconds.",
    icon: "report",
    media: "/assets/essentials/features/feature-04.png",
  },
  {
    number: "05",
    title: "Regulatory & Reporting Updates",
    description:
      "Stay aligned with evolving lender, procurement, and ESG reporting expectations automatically.",
    icon: "refresh",
    media: "/assets/essentials/features/feature-06.png",
  },
];
