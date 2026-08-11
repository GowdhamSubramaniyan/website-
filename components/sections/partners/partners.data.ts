export type Partner = {
  name: string;
  logo: string;
  /** Optional override for the logo height (default `h-14 sm:h-16`). */
  imgClassName?: string;
};

/** Partner network logos. */
export const PARTNERS: Partner[] = [
  { name: "MML Maintenance Management", logo: "/assets/home/partner-mml.png" },
  { name: "Lambert Smith Hampton", logo: "/assets/home/partner-lsh.png" },
  { name: "SEE", logo: "/assets/home/partner-see.png" },
  { name: "Riskory Consultancy", logo: "/assets/home/partner-riskory.png" },
  { name: "Roma Green Finance", logo: "/assets/home/partner-roma.png" },
  { name: "Think ESG", logo: "/assets/home/partner-think-esg.png" },
  { name: "Alaya Consulting", logo: "/assets/home/partner-alaya.png" },
  { name: "GO", logo: "/assets/home/partner-go.png" },
  { name: "ComeOn Group", logo: "/assets/home/partner-comeon.png" },
  {
    name: "Pulse Consult",
    logo: "/assets/partners/Partner%20Page/pluse.jpg",
    imgClassName: "h-7 sm:h-8",
  },
  { name: "PANTA", logo: "/assets/home/partner-panta.png" },
  {
    // Wide 4.8:1 wordmark — trimmed height keeps it optically level with the rest.
    name: "ARQ",
    logo: "/assets/home/partner-arq.png",
    imgClassName: "h-8 sm:h-9",
  },
  {
    name: "L-Università ta' Malta",
    logo: "/assets/home/partner-university-malta.png",
    imgClassName: "h-12 sm:h-14",
  },
];
