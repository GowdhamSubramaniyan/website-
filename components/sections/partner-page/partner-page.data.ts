/**
 * Partners page content. Copy is verbatim from the design
 * (https://zipteam.my.canva.site/latest-partner-page). Images live in
 * /public/assets/partners/Partner Page.
 */

export const hero = {
  eyebrow: "Our Partners",
  headline: "Collaborating Across Global Markets",
  paragraphs: [
    "Vision Zero Connect partners with leading organisations across multiple regions to help clients maximise asset performance, improve operational visibility, and support better commercial outcomes.",
    "Our strategic partnership network strengthens our ability to deliver local expertise, global insight, and scalable solutions that help organisations protect value and drive long-term returns.",
  ],
  cta: { label: "Explore Our Partners", href: "#network" },
  globe: {
    src: "/assets/partners/Partner%20Page/1.png",
    alt: "A globe representing Vision Zero Connect's global partner network",
  },
};

export const collaboration = {
  heading: "Building Stronger Industry Collaboration",
  paragraphs: [
    "Vision Zero Connect believes meaningful operational and sustainability progress requires collaboration across industries, technologies, and global markets.",
    "Our strategic partnerships help strengthen the delivery of practical solutions, regional expertise, and scalable operational support for organisations worldwide.",
  ],
  cta: { label: "Explore Our Solutions", href: "/#products" },
  image: {
    src: "/assets/partners/Partner%20Page/2.png",
    alt: "Vision Zero Connect team collaborating in a workshop",
  },
};

export const reach = {
  heading: "Global Reach. Shared Expertise.",
  intro:
    "Together with our partners, Vision Zero Connect continues to support organisations across property, infrastructure, and operational environments through connected technology, advisory capability, and intelligent reporting solutions.",
  stats: [
    { value: "36+", label: "in-house industry experts" },
    { value: "5", label: "countries with offices" },
  ],
  map: {
    src: "/assets/partners/Partner%20Page/3.png",
    alt: "World map showing Vision Zero Connect's global reach",
  },
};

export type Partner = {
  region: string;
  name: string;
  logo: string;
  description: string;
  /** Optional override for the logo height (default `max-h-16`). */
  logoClassName?: string;
};

export const network = {
  heading: "Strategic Partnership Network",
  intro:
    "We collaborate with industry-leading organisations to deliver comprehensive ESG solutions and drive sustainable change.",
};

const LOGO = "/assets/partners/Partner%20Page";

export const PARTNERS: Partner[] = [
  {
    region: "UK",
    name: "Lambert Smith Hampton",
    logo: `${LOGO}/18.png`,
    description:
      "Strategic property and real estate advisory partner supporting operational and portfolio-focused initiatives across the UK.",
  },
  {
    region: "UK",
    name: "MML Maintenance Management",
    logo: `${LOGO}/17.png`,
    description:
      "Strategic facilities management partner supporting complex property and operational environments across the UK.",
  },
  {
    region: "UK and Europe",
    name: "SEE",
    logo: `${LOGO}/19.png`,
    description:
      "Strategic partner supporting compliance and sustainability initiatives across the UK and Europe.",
  },
  {
    region: "Asia",
    name: "Riskory Consultancy",
    logo: `${LOGO}/20.png`,
    description:
      "Strategic risk and compliance partner supporting operational intelligence initiatives across Asia.",
  },
  {
    region: "Asia",
    name: "Roma Green Finance",
    logo: `${LOGO}/21.png`,
    description:
      "Strategic ESG and sustainability advisory partner supporting organisations across Asia.",
  },
  {
    region: "Asia",
    name: "Think ESG",
    logo: `${LOGO}/22.png`,
    description:
      "Strategic ESG and reporting partner supporting organisations across Asia.",
  },
  {
    region: "Asia",
    name: "Alaya Consulting",
    logo: `${LOGO}/23.png`,
    description:
      "Strategic sustainability and advisory partner supporting operational and transformation initiatives across Asia.",
    logoClassName: "max-h-20",
  },
  {
    region: "Malta",
    name: "GO",
    logo: `${LOGO}/1113.png`,
    description:
      "Strategic technology and operational intelligence partner supporting digital transformation initiatives across Malta.",
  },
  {
    region: "Malta",
    name: "PANTA",
    logo: `${LOGO}/1114.png`,
    description:
      "Strategic building services and engineering partner supporting operational performance and infrastructure initiatives across Malta and Europe.",
  },
  {
    region: "Malta",
    name: "ComeOn Group",
    logo: `${LOGO}/Comeon%20Group.png`,
    description:
      "Strategic technology and innovation partner supporting organisations through digital transformation initiatives across Malta.",
  },
  {
    region: "Malta",
    name: "Pulse Consult",
    logo: `${LOGO}/pluse.jpg`,
    description:
      "Construction consultancy specialising in project management, quantity surveying, project controls, and advisory services that deliver better outcomes across complex developments.",
  },
];
