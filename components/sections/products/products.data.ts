import type { DownloadItem } from "@/components/ui/DownloadDropdown";

export type Product = {
  /** Accessible product name (used as the logo alt text). */
  name: string;
  /** Product wordmark/logo (white, for the dark Products section). */
  logo: { src: string; width: number; height: number; className: string };
  description: string;
  cta: { label: string; href: string };
  /** Downloadable flyer(s) — one file links directly, several open a menu. */
  flyer: { label: string; items: DownloadItem[] };
};

/** The four products, in display order. Copy from docs/Home Page.docx. */
export const PRODUCTS: Product[] = [
  {
    name: "Essentials",
    logo: {
      src: "/assets/home/logos/product-essentials.png",
      width: 3146,
      height: 1021,
      className: "h-14",
    },
    description:
      "Fast, affordable ESG and emissions reporting designed for SMEs requiring lender, procurement, or compliance readiness.",
    cta: { label: "Explore Essentials", href: "https://essentials.visionzeroconnect.com/" },
    flyer: {
      label: "Essentials Flyer",
      items: [
        {
          label: "Essentials Flyer",
          href: "/assets/flyers/Essentials%20Flyer_260529.pdf",
          download: "Essentials-Flyer.pdf",
        },
        {
          label: "Essentials Flyer (QHA)",
          href: "/assets/flyers/Essentials%20Flyer_QHA_260529.pdf",
          download: "Essentials-Flyer-QHA.pdf",
        },
      ],
    },
  },
  {
    name: "Essentials +",
    logo: {
      src: "/assets/home/logos/product-essentials-plus.png",
      width: 4325,
      height: 1250,
      className: "h-14",
    },
    description:
      "Expanded operational and emissions intelligence with Scope 3 visibility, transition planning, reduction modelling, and strategic reporting support.",
    cta: { label: "Explore Essentials +", href: "https://essentials.visionzeroconnect.com/" },
    flyer: {
      label: "Essentials+ Flyer",
      items: [
        {
          label: "Essentials+ Flyer",
          href: "/assets/flyers/V4%20-%20Essentials%2B%20Flyer.pdf",
          download: "Essentials-Plus-Flyer.pdf",
        },
      ],
    },
  },
  {
    name: "Portfolio One",
    logo: {
      src: "/assets/home/logos/product-portfolio-one.png",
      width: 4019,
      height: 1250,
      className: "h-14",
    },
    description:
      "Enterprise-grade building performance and portfolio intelligence platform designed to optimise operational efficiency, asset performance, and sustainability outcomes across large portfolios.",
    cta: { label: "Explore Portfolio One", href: "https://portfolio.visionzeroconnect.com/" },
    flyer: {
      label: "Portfolio One Flyer",
      items: [
        {
          label: "Portfolio One Flyer",
          href: "/assets/flyers/Porfolio%20One%20Flyer%20(6.17.26).pdf",
          download: "Portfolio-One-Flyer.pdf",
        },
      ],
    },
  },
  {
    name: "Vision Zero Consult",
    logo: {
      src: "/assets/home/logos/product-vzc-consult.png",
      width: 335,
      height: 183,
      className: "h-20",
    },
    description:
      "Strategic advisory services supporting organisations with strategy, implementation, transition planning, and complex reporting requirements.",
    cta: { label: "Compare Solutions", href: "https://visionzeroconsult.com/" },
    flyer: {
      label: "Consult Flyer",
      items: [
        {
          label: "VZC Consult Flyer",
          href: "/assets/flyers/VZC%20Consult%20Flyer.pdf",
          download: "VZC-Consult-Flyer.pdf",
        },
      ],
    },
  },
];
