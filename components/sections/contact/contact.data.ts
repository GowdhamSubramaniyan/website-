export type ContactOption = { title: string; description: string };

/** The four "What can we help you with?" options. */
export const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "Expert Consultation",
    description: "Get personalised guidance from our ESG specialists",
  },
  {
    title: "Demo Session",
    description: "See the platform in action with your data",
  },
  {
    title: "Free Assessment",
    description: "Get a detailed analysis of your ESG needs",
  },
  {
    title: "Implementation Support",
    description: "Full assistance with platform onboarding",
  },
];

export const COMPANY_SIZES = [
  "1–50",
  "51–200",
  "201–500",
  "501–1000",
  "1000+",
] as const;
