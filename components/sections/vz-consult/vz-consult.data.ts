/**
 * VZC Consult (advisory) page — all copy and lists.
 * Source of truth: docs/Prompts/visionzeroconsult_prompts.md
 * (captured verbatim from the Canva reference, latest-vzc-consult-page).
 *
 * NOTE: images under /assets/vz-consult/ are placeholders reusing existing
 * brand photography — swap them for the final VZC Consult imagery when supplied.
 */

export type Cta = { label: string; href: string };
export type ImageRef = { src: string; alt: string };

export type HelpItem = { title: string; description: string };
export type EcosystemLink = { name: string; descriptor: string; href: string };
export type Stat = { value: string; label: string };

/* --- Hero --- */
export const hero = {
  eyebrow: "Vision Zero Consult",
  headline: "Strategic Advisory to Optimise Building Performance",
  paragraphs: [
    "VZC Consult works with organisations navigating growing operational, reporting, and sustainability pressures across real assets and property portfolios.",
    "From disclosure readiness and data strategy through to operational performance planning and transition pathways, we help businesses move from fragmented information to clear, commercially aligned action.",
  ],
  /** Single-string version used for page metadata. */
  intro:
    "VZC Consult works with organisations navigating growing operational, reporting, and sustainability pressures across real assets and property portfolios. From disclosure readiness and data strategy through to operational performance planning and transition pathways, we help businesses move from fragmented information to clear, commercially aligned action.",
  cta: { label: "Talk to Our Team", href: "/#contact" } as Cta,
  image: {
    src: "/assets/vz-consult/1.png",
    alt: "A VZC Consult advisor working on a laptop",
  } as ImageRef,
};

/* --- Trusted Advisory --- */
export const trusted = {
  headline: "Trusted Advisory for Property and Operational Performance",
  paragraphs: [
    "Organisations today are expected to manage increasing demands around operational performance, emissions visibility, asset efficiency, and stakeholder reporting.",
    "VZC Consult provides specialist guidance to help businesses respond with clarity, structure, and confidence. Our team supports property owners, operators, asset managers, and organisations seeking practical pathways toward stronger operational outcomes and future readiness.",
  ],
  image: {
    src: "/assets/vz-consult/2.png",
    alt: "A commercial high-rise building",
  } as ImageRef,
};

/* --- What We Help With --- */
export const help = {
  heading: "What We Help With",
  image: {
    src: "/assets/vz-consult/3.png",
    alt: "A VZC Consult strategy session",
  } as ImageRef,
};

export const HELP_ITEMS: HelpItem[] = [
  {
    title: "Regulatory & Disclosure Readiness",
    description:
      "Prepare for evolving reporting obligations and stakeholder expectations with gap assessments, disclosure planning, and practical implementation support.",
  },
  {
    title: "Building Performance Enhancement",
    description:
      "Identify opportunities to reduce energy use, lower operating costs, and improve asset efficiency across your portfolio.",
  },
  {
    title: "Operational Intelligence & Data Strategy",
    description:
      "Connect operational and utility data to create a single source of truth for reporting, planning, and performance tracking.",
  },
  {
    title: "Emissions & Transition Planning",
    description:
      "Establish emissions baselines, identify reduction opportunities, and build practical roadmaps for long-term transition goals.",
  },
  {
    title: "Portfolio Benchmarking & Performance Reviews",
    description:
      "Measure asset performance against internal targets and industry benchmarks to identify strengths and improvement opportunities.",
  },
  {
    title: "Stakeholder & Supply Chain Support",
    description:
      "Respond confidently to lender, procurement, investor, and customer information requests with structured data and reporting strategies.",
  },
];

/* --- Backed by Technology --- */
export const tech = {
  headline: "Practical Advisory Backed by Performance-Proven Technology",
  intro:
    "VZC Consult combines specialist advisory expertise with the capabilities of the wider Vision Zero Connect ecosystem.",
  lead: "Where required, VZC Consult engagements can be supported by the Vision Zero Connect technology ecosystem:",
  ecosystem: [
    {
      name: "Essentials",
      descriptor: "for AI-powered ESG reporting.",
      href: "/essentials",
    },
    {
      name: "Essentials+",
      descriptor: "for advanced operational and reporting capabilities.",
      href: "/essentials-plus",
    },
    {
      name: "Portfolio One",
      descriptor: "for real-time building and asset intelligence.",
      href: "/portfolio-one",
    },
  ] as EcosystemLink[],
  closing:
    "Creating a connected approach between strategy, technology, and operational performance.",
  image: {
    src: "/assets/vz-consult/2.png",
    alt: "Commercial buildings at dusk",
  } as ImageRef,
};

/* --- Who We Work With --- */
export const audiences = {
  heading: "Who We Work With",
  intro:
    "We support organisations managing complex property portfolios, operational performance requirements, and growing stakeholder expectations across real assets and built environments.",
  items: [
    "Property Owners and Operators",
    "Assets and Facility Managers",
    "Commercial Real Estate Groups",
    "Enterprise & Mid-Market Organisations",
    "Infrastructure & Portfolio Teams",
  ],
};

/* --- A Commercially Focused Approach --- */
export const approach = {
  headline: "A Commercially Focused Approach",
  paragraphs: [
    "Our advisory model is built around practical implementation, operational visibility, and measurable outcomes.",
    "Rather than producing static reports that sit on a shelf, VZC Consult focuses on helping organisations build clearer operational frameworks, improve data confidence, and support better long-term asset performance.",
  ],
  image: {
    src: "/assets/vz-consult/4.png",
    alt: "A VZC Consult team celebrating a result",
  } as ImageRef,
};

/* --- Global Presence --- */
export const presence = {
  headline: "Global Presence",
  paragraphs: [
    "Vision Zero Connect supports organisations across Australia, UK, Hong Kong, Malta, and United States, bringing a global perspective to operational performance, reporting readiness, and building intelligence.",
    "Our experience across diverse property markets and regulatory environments allows us to support clients with strategies that are commercially grounded, scalable, and aligned with evolving industry expectations.",
  ],
  stats: [
    { value: "25+", label: "in-house industry experts" },
    { value: "5", label: "offices in countries" },
  ] as Stat[],
};

/* --- Book a Consultation --- */
export const closing = {
  headline: "Book a Consultation",
  intro:
    "Whether you're responding to stakeholder expectations, preparing for disclosure requirements, or improving building performance visibility, VZC Consult can help your organisation move forward with confidence.",
  cta: { label: "Talk to Our Team", href: "/#contact" } as Cta,
  image: {
    src: "/assets/vz-consult/6.png",
    alt: "A VZC Consult advisory team reviewing data on a laptop",
  } as ImageRef,
};
