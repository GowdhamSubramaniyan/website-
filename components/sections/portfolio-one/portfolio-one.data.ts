/**
 * Portfolio One product page — all copy and lists.
 * Source of truth: docs/Prompts/portfolio_one_prompts.md
 * (captured verbatim from the Canva reference, portfolio-one-rework).
 * Sections stay content-driven; no strings are hardcoded in JSX.
 */

export type Cta = { label: string; href: string };
export type ImageRef = { src: string; alt: string };

export type Feature = {
  number: number;
  title: string;
  description: string;
  /** Looping product demo video for this capability. */
  video?: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type TwoUpCard = {
  title: string;
  description: string;
  image: ImageRef;
};

/* --- Hero --- */
export const hero = {
  eyebrow: "Real-Time Portfolio Visibility",
  headline: "Enhanced Building Performance Through Operational Intelligence",
  intro:
    "Portfolio One connects live building data, smart meters, and BMS systems into one intelligent platform, helping property and asset teams monitor performance, reduce operational waste, and optimise portfolios in real time.",
  primaryCta: { label: "Get Started Now", href: "#contact" } as Cta,
  secondaryCta: {
    label: "See Portfolio One in Action",
    href: "#contact",
  } as Cta,
  award: "2025 CRE Data Solutions of the Year — PropTech Breakthrough Awards",
  awardImage: {
    src: "/assets/portfolio-one/award-badge.png",
    alt: "2025 CRE Data Solutions of the Year — PropTech Breakthrough Awards",
  } as ImageRef,
  dashboard: {
    src: "/assets/home/spotlight-portfolio.png",
    alt: "Portfolio One building performance dashboard",
  } as ImageRef,
};

/* --- Overview / Reimagined --- */
export const overview = {
  headline: "Building Performance Management, Reimagined",
  paragraphs: [
    "Portfolio One transforms complex operational data into actionable performance insights — giving commercial real estate teams greater visibility and control across their assets.",
  ],
  listLead: "By centralising operational intelligence across your portfolio, teams can:",
  items: [
    "Reduce operational waste and inefficiencies",
    "Improve response times to building performance issues",
    "Benchmark assets against industry standards",
    "Monitor energy and utility performance in real time",
    "Automate reporting and performance analysis",
    "Prioritise operational and capital improvements with confidence",
  ],
  image: {
    src: "/assets/portfolio-one/card-reporting.png",
    alt: "A team reviewing building performance data together",
  } as ImageRef,
};

/* --- Intelligent Tools (6 numbered feature cards) --- */
export const tools = {
  heading: "Intelligent Tools Built for Real Asset Performance",
  intro:
    "Portfolio One combines live operational data, intelligent automation, and portfolio-wide analytics to help teams optimise building performance across every asset.",
};

export const FEATURES: Feature[] = [
  {
    number: 1,
    title: "Live Data Integration",
    description:
      "Connect smart meters, BMS systems, and building technologies into one centralised operational platform with real-time visibility across your portfolio.",
    video: "/assets/portfolio-one/videos/live-data-connectivity.mp4",
  },
  {
    number: 2,
    title: "Utility Manager",
    description:
      "Track electricity, gas, water, waste, and cost performance across buildings with advanced analytics and consumption monitoring.",
    video: "/assets/portfolio-one/videos/utility-dashboard.mp4",
  },
  {
    number: 3,
    title: "BMS Manager",
    description:
      "Monitor live building system performance, identify anomalies, and automate alerts before issues impact operations or occupant comfort.",
    video: "/assets/portfolio-one/videos/bms-dashboard.mp4",
  },
  {
    number: 4,
    title: "Portfolio Performance Register",
    description:
      "Benchmark and rank buildings against recognised industry frameworks to identify underperforming assets and prioritise action.",
    video: "/assets/portfolio-one/videos/homepage-benchmarking.mp4",
  },
  {
    number: 5,
    title: "Automated Reporting",
    description:
      "Generate building-level and portfolio-level reports instantly using live operational data and configurable reporting outputs.",
    video: "/assets/portfolio-one/videos/report-generation-output.mp4",
  },
  {
    number: 6,
    title: "Net Zero Tracking",
    description:
      "Monitor emissions performance and track progress against operational reduction targets and long-term Net Zero pathways.",
    video: "/assets/portfolio-one/videos/carbon-emissions-pathway-planning.mp4",
  },
];

/* --- Operational Visibility (dark, checklist) --- */
export const visibility = {
  headline: "Built for Operational Visibility and Smarter Decision-Making",
  intro:
    "Portfolio One helps property owners, facilities teams, and asset managers move beyond fragmented building data and manual reporting processes by centralising operational intelligence across their portfolio.",
  listLead: "By centralising operational intelligence across your portfolio, teams can:",
  items: [
    "Reduce operational waste and inefficiencies",
    "Improve response times to building performance issues",
    "Benchmark assets against industry standards",
    "Monitor energy and utility performance in real time",
    "Automate reporting and performance analysis",
    "Prioritise operational and capital improvements with confidence",
  ],
  image: {
    src: "/assets/portfolio-one/visibility.png",
    alt: "An asset manager presenting portfolio performance to a team",
  } as ImageRef,
};

/* --- Real-Time Monitoring (light, metric chips) --- */
export const monitoring = {
  headline: "Real-Time Monitoring Across Critical Building Systems",
  intro:
    "Portfolio One continuously monitors live building data to identify operational deviations and performance anomalies as they happen.",
  chipsLead:
    "Integrated with existing building technologies and BMS systems, the platform provides visibility across key operational metrics including:",
  chips: [
    "HVAC performance",
    "Temperature and humidity",
    "Lighting systems",
    "Occupancy trends",
    "Utility consumption",
    "Indoor environmental performance",
  ],
  note: "Automated alerts help teams respond faster, minimise downtime, and reduce unnecessary operational costs.",
  cta: { label: "See Live Monitoring in Action", href: "#contact" } as Cta,
  image: {
    src: "/assets/portfolio-one/monitoring.png",
    alt: "A portfolio of commercial high-rise buildings",
  } as ImageRef,
};

/* --- Performance Register (dark, checklist) --- */
export const register = {
  headline: "Understand Which Buildings Need Attention First",
  intro:
    "Portfolio One automatically compares building performance against recognised industry standards and internal portfolio benchmarks.",
  listLead: "The Portfolio Performance Register helps teams quickly identify:",
  items: [
    "High-performing assets",
    "Operational inefficiencies",
    "Performance gaps",
    "Buildings exceeding benchmark thresholds",
  ],
  image: {
    src: "/assets/portfolio-one/register.png",
    alt: "The light-filled lobby of a modern commercial building",
  } as ImageRef,
};

/* --- Two-up overlay cards --- */
export const twoUp: TwoUpCard[] = [
  {
    title: "Automated Reporting Without the Administrative Burden",
    description:
      "Generate professional portfolio and building performance reports in minutes using live operational data already connected within the platform. Customise reports based on your operational requirements and generate outputs instantly across individual buildings or entire portfolios.",
    image: {
      src: "/assets/portfolio-one/card-reporting.png",
      alt: "A team collaborating on performance reporting",
    },
  },
  {
    title: "Designed to Work With Your Existing Infrastructure",
    description:
      "Portfolio One integrates with your existing smart building technologies and operational systems, reducing implementation friction while improving visibility across your assets. Our engineering team works directly with your organisation to configure the most effective and reliable data connectivity approach for your buildings.",
    image: {
      src: "/assets/portfolio-one/card-infrastructure.png",
      alt: "An engineering team configuring building data connectivity",
    },
  },
];

/* --- Complex Portfolios (pill tags) --- */
export const portfolios = {
  headline: "Built for Complex Building Portfolios",
  lead: "Portfolio One supports:",
  tags: [
    "Commercial property owners",
    "Asset managers",
    "Facilities management teams",
    "Property operations teams",
    "Real estate investment groups",
    "Multi-site portfolios",
    "Commercial and mixed-use developments",
  ],
  background: {
    src: "/assets/portfolio-one/portfolios-bg.png",
    alt: "",
  } as ImageRef,
};

/* --- Implementation Process (4 steps) --- */
export const process = {
  heading: "A Structured Implementation Process",
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "We assess your building technologies, operational goals, and portfolio requirements.",
  },
  {
    number: "02",
    title: "Platform Configuration",
    description:
      "Our team configures Portfolio One to align with your infrastructure and operational workflows.",
  },
  {
    number: "03",
    title: "Integration & Connectivity",
    description:
      "We connect live data sources including BMS systems and smart meters where applicable.",
  },
  {
    number: "04",
    title: "Training & Handover",
    description:
      "Your team receives onboarding, training, and continued support to maximise platform value.",
  },
];

/* --- Closing CTA + form --- */
export const closing = {
  headline: "Ready to Optimise Your Building Portfolio?",
  intro:
    "Take the first step towards transforming your building management with Portfolio One. Our team of experts is ready to guide you through the process and create a tailored solution for your needs.",
  linework: {
    src: "/assets/portfolio-one/cta-linework.png",
    alt: "",
  } as ImageRef,
  submitLabel: "Submit",
};
