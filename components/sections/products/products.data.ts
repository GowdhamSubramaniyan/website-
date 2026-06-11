export type Product = {
  /** Accessible product name (used as the logo alt text). */
  name: string;
  /** Product wordmark/logo (white, for the dark Products section). */
  logo: { src: string; width: number; height: number; className: string };
  description: string;
  cta: { label: string; href: string };
};

/** The four products, in display order. Copy from docs/Home Page.docx. */
export const PRODUCTS: Product[] = [
  {
    name: "Essentials",
    logo: {
      src: "/assets/home/logos/product-essentials.png",
      width: 3146,
      height: 1021,
      className: "h-7",
    },
    description:
      "Fast, affordable ESG and emissions reporting designed for SMEs requiring lender, procurement, or compliance readiness.",
    cta: { label: "Explore Essentials", href: "#essentials" },
  },
  {
    name: "Essentials +",
    logo: {
      src: "/assets/home/logos/product-essentials-plus.png",
      width: 4325,
      height: 1250,
      className: "h-7",
    },
    description:
      "Expanded operational and emissions intelligence with Scope 3 visibility, transition planning, reduction modelling, and strategic reporting support.",
    cta: { label: "Explore Essentials +", href: "#essentials-plus" },
  },
  {
    name: "Portfolio One",
    logo: {
      src: "/assets/home/logos/product-portfolio-one.png",
      width: 4019,
      height: 1250,
      className: "h-7",
    },
    description:
      "Enterprise-grade building performance and portfolio intelligence platform designed to optimise operational efficiency, asset performance, and sustainability outcomes across large portfolios.",
    cta: { label: "Explore Portfolio One", href: "#portfolio-one" },
  },
  {
    name: "Vision Zero Consult",
    logo: {
      src: "/assets/home/logos/product-vzc-consult.png",
      width: 335,
      height: 183,
      className: "h-14",
    },
    description:
      "Specialist advisory services supporting organisations with strategy, implementation, transition planning, and complex reporting requirements.",
    cta: { label: "Compare Solutions", href: "#contact" },
  },
];
