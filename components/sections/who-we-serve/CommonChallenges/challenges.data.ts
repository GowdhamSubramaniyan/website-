export type ChallengeIcon =
  | "fragmented"
  | "demands"
  | "manual"
  | "visibility"
  | "transition"
  | "cost";

export type Challenge = {
  title: string;
  description: string;
  icon: ChallengeIcon;
};

export const CHALLENGES: Challenge[] = [
  {
    title: "Fragmented Operational Data",
    description:
      "Building, utility, and operational data scattered across systems and spreadsheets.",
    icon: "fragmented",
  },
  {
    title: "Rising Stakeholder Demands",
    description:
      "Lenders, investors, and regulators expecting more detailed ESG and operational reporting.",
    icon: "demands",
  },
  {
    title: "Manual Reporting Burden",
    description:
      "Time-consuming, error-prone reporting that pulls teams away from core work.",
    icon: "manual",
  },
  {
    title: "Limited Operational Visibility",
    description:
      "Little real-time insight into performance, emissions, and asset efficiency.",
    icon: "visibility",
  },
  {
    title: "Transition & Compliance Pressure",
    description:
      "Growing pressure to plan reductions and stay ahead of evolving requirements.",
    icon: "transition",
  },
  {
    title: "Rising Cost Pressure",
    description:
      "Climbing energy and operational costs squeezing margins across sites.",
    icon: "cost",
  },
];
