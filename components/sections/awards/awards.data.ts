/**
 * Awards & Recognitions page content. Copy is verbatim from the design
 * (https://zipteam.my.canva.site/latest-awards-page). Images live in
 * /public/awards (placeholders until final imagery is supplied).
 */

export type Award = {
  /** Awarding body / year — shown as the eyebrow above the name. */
  body: string;
  /** The award name — rendered as the lime headline. */
  name: string;
  paragraphs: string[];
  /** Link to the public announcement (replace "#" with the live URL). */
  announcementHref: string;
  image: { src: string; alt: string };
};

export const hero = {
  eyebrow: "Awards and Recognitions",
  headline:
    "Recognised for Advancing Asset Performance & Operational Excellence",
  paragraphs: [
    "Vision Zero Connect continues to be recognised globally for helping organisations improve asset performance, strengthen operational decision-making, and unlock long-term value across complex portfolios.",
    "Our award-winning platforms and advisory capabilities support organisations seeking greater visibility, improved operational efficiency, stronger reporting capabilities, and better commercial outcomes across global markets.",
  ],
  image: {
    src: "/assets/awards/1.png",
    alt: "Vision Zero Connect award highlights — presentations and collaboration",
  },
};

export const AWARDS: Award[] = [
  {
    body: "PropTech Breakthrough Awards 2025",
    name: "CRE Data Solution of the Year",
    paragraphs: [
      "Portfolio One was recognised as “CRE Data Solution of the Year” at the globally recognised PropTech Breakthrough Awards, reinforcing its position as a trusted platform for operational intelligence, portfolio visibility, and building performance management.",
      "The award highlights Portfolio One’s ability to unify fragmented operational data, support smarter decision-making, and help organisations improve efficiency across complex real asset environments.",
    ],
    announcementHref: "#",
    image: {
      src: "/assets/awards/2.png",
      alt: "Gold star trophy — CRE Data Solution of the Year",
    },
  },
  {
    body: "FinTech Global",
    name: "ESGFinTech100 Recognition",
    paragraphs: [
      "Vision Zero Connect was selected as one of the ESGFinTech100 by FinTech Global, recognising the company among the world’s leading technology firms driving innovation across sustainability and financial services.",
      "The recognition acknowledged Vision Zero Connect’s approach to simplifying operational reporting, data visibility, and helping organisations convert reporting obligations into strategic commercial outcomes.",
    ],
    announcementHref: "#",
    image: {
      src: "/assets/awards/3.png",
      alt: "Crystal star trophy — ESGFinTech100",
    },
  },
  {
    body: "CV Technology Excellence Awards 2026",
    name: "Best ESG & Building-Performance SaaS Platform",
    paragraphs: [
      "Vision Zero Connect was awarded “Best ESG & Building-Performance SaaS Platform” at the CV Technology Excellence Awards 2026, recognising the company’s continued innovation across operational performance, analytics, and intelligent reporting solutions.",
      "The award reinforces Vision Zero Connect’s commitment to helping organisations improve operational efficiency, reduce complexity, and support long-term sustainability and asset performance goals.",
    ],
    announcementHref: "#",
    image: {
      src: "/assets/awards/4.png",
      alt: "Crystal star trophy — Best ESG & Building-Performance SaaS Platform",
    },
  },
];

export const progress = {
  headline: "Driving Industry Progress Through Innovation",
  paragraphs: [
    "These recognitions reflect Vision Zero Connect’s continued focus on delivering practical, technology-enabled solutions for operational reporting, building performance, portfolio intelligence, and sustainability transformation.",
    "With a growing international presence and a portfolio of innovative platforms, Vision Zero Connect continues to support organisations navigating evolving operational, commercial, and regulatory environments worldwide.",
  ],
  cta: { label: "Explore Our Solutions", href: "/#products" },
  image: {
    src: "/assets/awards/8.png",
    alt: "Vision Zero Connect receiving an industry award",
  },
};

export const presence = {
  headline: "Global Presence. Recognised Impact.",
  intro:
    "From operational intelligence platforms to strategic advisory support, Vision Zero Connect works with organisations across commercial property, infrastructure, and real asset sectors to improve visibility, performance, and long-term operational outcomes.",
  stats: [
    { value: "25+", label: "in-house industry experts" },
    { value: "5", label: "countries with offices" },
  ],
  map: {
    src: "/assets/awards/5.png",
    alt: "World map showing Vision Zero Connect office locations",
  },
};
