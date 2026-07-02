export type ContactIcon = "consult" | "demo" | "assessment" | "support";
export type ContactOption = {
  title: string;
  description: string;
  icon: ContactIcon;
};

/** The four "What can we help you with?" options. */
export const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "Expert Consultation",
    description: "Get personalised guidance from our industry experts",
    icon: "consult",
  },
  {
    title: "Demo Session",
    description: "See the platform in action with your data",
    icon: "demo",
  },
  {
    title: "Free Assessment",
    description: "Unlock opportunities to optimise your assets",
    icon: "assessment",
  },
  {
    title: "Implementation Support",
    description: "Full assistance with platform onboarding",
    icon: "support",
  },
];

export const COMPANY_SIZES = [
  "1–50",
  "51–200",
  "201–500",
  "501–1000",
  "1000+",
] as const;
