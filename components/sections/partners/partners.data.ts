export type Partner = {
  name: string;
  logo: string;
  /** Optional height override (footer default `h-8 sm:h-9`). Height only — the
   *  renderer supplies w-auto/object-contain. */
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
  {
    name: "Pulse Consult",
    logo: "/assets/partners/Partner%20Page/pluse.jpg",
    imgClassName: "h-7 sm:h-8",
  },
  { name: "PANTA", logo: "/assets/home/partner-panta.png" },
  { name: "ARQ", logo: "/assets/home/partner-arq.png" },
  {
    name: "L-Università ta' Malta",
    logo: "/assets/home/partner-university-malta.png",
  },
];
