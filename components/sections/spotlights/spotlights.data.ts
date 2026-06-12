import type { SpotlightContent } from "./Spotlight";

/** Copy from docs/Home Page.docx; layout matches the Canva design. */

export const ESSENTIALS: SpotlightContent = {
  id: "essentials",
  background: "grey",
  z: "z-40",
  eyebrow: "Introducing Essentials",
  logo: {
    src: "/assets/home/logos/product-essentials-teal.png",
    width: 3146,
    height: 1021,
    className: "h-9 sm:h-10",
  },
  heading: "AI-Powered ESG & Operational Reporting Built for SMEs",
  paragraphs: [
    "Essentials helps SMEs generate professional ESG and operational reporting aligned to growing lender, procurement, investor, and customer expectations — without expensive consultants or manual reporting processes.",
  ],
  cta: { label: "See Essentials in Action", href: "/essentials", variant: "primary" },
  image: {
    src: "/assets/home/spotlight-essentials.png",
    alt: "Essentials ESG reporting dashboard",
    width: 1920,
    height: 1080,
    bleed: true,
  },
};

export const ESSENTIALS_PLUS: SpotlightContent = {
  id: "essentials-plus",
  background: "dark",
  z: "z-30",
  reverse: true,
  logo: {
    src: "/assets/home/logos/product-essentials-plus.png",
    width: 4325,
    height: 1250,
    className: "h-9 sm:h-10",
  },
  heading: "Advanced ESG & Operational Reporting for Growing Organisations",
  paragraphs: [
    "Essentials+ helps organisations move beyond basic ESG reporting with enhanced operational reporting, emissions visibility, and transition planning designed to support lender readiness, procurement requirements, and long-term operational resilience.",
  ],
  cta: {
    label: "See Essentials+ in Action",
    href: "/essentials-plus",
    variant: "primary",
  },
  image: {
    src: "/assets/home/spotlight-essentials.png",
    alt: "Essentials+ operational intelligence dashboard",
    width: 1920,
    height: 1080,
    bleed: true,
  },
};

export const PORTFOLIO_ONE: SpotlightContent = {
  id: "portfolio-one",
  background: "white",
  z: "z-20",
  eyebrow: "Go Beyond Essentials with Portfolio One",
  logo: {
    src: "/assets/home/logos/product-portfolio-one-teal.png",
    width: 4019,
    height: 1250,
    className: "h-8 sm:h-9",
  },
  heading: "Building performance intelligence for real asset portfolios.",
  paragraphs: [
    "Portfolio One transforms building and operational data into measurable commercial outcomes.",
    "From live utility monitoring and performance visibility to operational optimisation and ESG readiness, Portfolio One helps organisations reduce costs, improve asset performance, and make smarter portfolio decisions at scale.",
  ],
  cta: {
    label: "Explore Portfolio One",
    href: "/portfolio-one",
    variant: "dark",
  },
  image: {
    src: "/assets/home/spotlight-portfolio.png",
    alt: "Portfolio One building performance dashboard",
    width: 1920,
    height: 1080,
    bleed: true,
  },
};

export const VZ_CONSULT: SpotlightContent = {
  id: "vz-consult",
  background: "dark",
  z: "z-10",
  reverse: true,
  logo: {
    src: "/assets/home/logos/product-vzc-consult.png",
    width: 335,
    height: 183,
    className: "h-12 sm:h-14",
  },
  heading: "Expert-Led Advisory & Program Delivery",
  paragraphs: [
    "Strategic advisory support helping organisations strengthen operational performance, financing readiness, reporting capability, and long-term commercial resilience through practical, outcome-focused delivery.",
  ],
  cta: {
    label: "Explore Advisory Services",
    href: "/vz-consult",
    variant: "primary",
  },
  image: {
    src: "/assets/home/usp-collaboration.png",
    alt: "Vision Zero Consult advisory specialists",
    width: 800,
    height: 1000,
    className: "mx-auto w-full max-w-sm",
  },
};
