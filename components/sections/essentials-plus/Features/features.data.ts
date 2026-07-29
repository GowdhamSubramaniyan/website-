export type Feature = {
  number: string;
  title: string;
  description: string;
  /** Platform snapshot fallback shown in the showcase. */
  media: string;
  /** Looping product video shown in the showcase. */
  video: string;
};

/** Essentials+ capabilities, shown in the interactive snapshot showcase. */
export const FEATURES: Feature[] = [
  {
    number: "01",
    title: "AI Utility Bill Extraction",
    description:
      "Automatically reads and extracts key data from uploaded utility bills to reduce manual entry and reporting time.",
    media: "/assets/essentials/features/feature-01.png",
    video: "/assets/essentials-plus/videos/ai-utility-bill-extraction.mp4",
  },
  {
    number: "02",
    title: "Scope 1, 2, & 3 Reporting",
    description:
      "Track and manage operational emissions visibility across broader reporting requirements.",
    media: "/assets/essentials/features/eplus-scope.png",
    video: "/assets/essentials-plus/videos/scope-1-3-reporting.mp4",
  },
  {
    number: "03",
    title: "Transition Planning Tools",
    description:
      "Support operational and emissions reduction planning with structured reporting insights.",
    media: "/assets/essentials/features/eplus-transition.png",
    video: "/assets/essentials-plus/videos/esg-emissions-calculations.mp4",
  },
  {
    number: "04",
    title: "Real-Time Operational Dashboards",
    description:
      "Monitor ESG metrics, operational performance, and emissions visibility through live dashboards.",
    media: "/assets/essentials/features/feature-03.png",
    video: "/assets/essentials-plus/videos/real-time-esg-dashboards.mp4",
  },
  {
    number: "05",
    title: "Professional Reporting Outputs",
    description:
      "Generate lender-ready, procurement-ready, and investor-ready reports instantly.",
    media: "/assets/essentials/features/feature-04.png",
    video: "/assets/essentials-plus/videos/professional-esg-reports.mp4",
  },
];
