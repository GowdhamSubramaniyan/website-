export type TeamMember = {
  name: string;
  role: string;
  /** Headshot in /public/assets/about/team. */
  photo: string;
  /** LinkedIn profile URL. Omit to hide the LinkedIn button. */
  linkedin?: string;
  /** Email address (rendered as a mailto). Omit to hide the Email button. */
  email?: string;
  /** Short bio shown on the featured carousel card (falls back to a placeholder). */
  bio?: string;
};

/**
 * Leadership team — sourced from the existing Vision Zero Connect website
 * (the About doc says "refer to the current website"). Peter Dampier and
 * Melissa Mendoca have been removed.
 *
 * LinkedIn URLs are the real per-person profiles; members still on "#" don't
 * have a profile URL yet (Tamil, Nigel, Daniel, Igi, Pauline).
 */
export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Rich Ford", role: "Chief Executive Officer", photo: "/assets/about/team/richard.png", linkedin: "https://www.linkedin.com/in/rich-ford-57892416/", email: "mailto:richard@visionzeroconnect.com" },
  { name: "Tishina Kanyako", role: "Chief Financial Officer", photo: "/assets/about/team/tishina.png", linkedin: "https://www.linkedin.com/in/tishina-tapfumaneyi/", email: "mailto:tishina@visionzeroconnect.com" },
  { name: "Tamil Ramadoss", role: "Chief Technology Officer", photo: "/assets/about/team/tamil.png", linkedin: "https://www.linkedin.com/in/tamilselvan77/", email: "mailto:tamil@visionzeroconnect.com" },
  { name: "Sarah Pastol", role: "Chief Marketing Officer", photo: "/assets/about/team/sarahpastol.png", linkedin: "https://www.linkedin.com/in/sarah-pastol-25891626/", email: "mailto:sarahpastol@visionzeroconnect.com" },
  { name: "Anthony Bajada", role: "Europe & UK Business Lead", photo: "/assets/about/team/anthony.png", linkedin: "https://www.linkedin.com/in/anthony-bajada-9ab435107/", email: "mailto:anthony@visionzeroconnect.com" },
  { name: "Jon Irwin", role: "Australia Business Lead", photo: "/assets/about/team/Jon_Irwin.png", linkedin: "https://www.linkedin.com/in/jon-irwin-a4144238/", email: "mailto:jon@visionzeroconnect.com" },
  { name: "Patrick Kassell", role: "Technical Delivery Lead", photo: "/assets/about/team/patrick.png", linkedin: "https://www.linkedin.com/in/patrick-kassell-59a51b179/", email: "mailto:patrick@visionzeroconnect.com" },
  { name: "Sarah Mowbray", role: "Senior Administrator", photo: "/assets/about/team/sarah.png", linkedin: "https://www.linkedin.com/in/sarahmowbray/", email: "mailto:sarah@visionzeroconnect.com" },
  { name: "Brian Pesta", role: "ESG Market Research Analyst", photo: "/assets/about/team/brian.png", linkedin: "https://www.linkedin.com/in/brian-pesta-a5488645/", email: "mailto:brain@visionzeroconnect.com" },
  { name: "Freddy Barnes", role: "Relationship Development", photo: "/assets/about/team/freddy.png", linkedin: "https://www.linkedin.com/in/frederick-barnes-113585241/", email: "mailto:freddy@visionzeroconnect.com" },
  { name: "Gowshik Subramaniyan", role: "Tech Development", photo: "/assets/about/team/Gowshik.png", linkedin: "https://www.linkedin.com/in/gowshik-subramaniyan/", email: "mailto:gowshik@visionzeroconnect.com" },
  { name: "Gowdham Subramaniyan", role: "Tech Development", photo: "/assets/about/team/Gowdham.png", linkedin: "https://www.linkedin.com/in/gowdham-subramaniyan-076aa630b/", email: "mailto:Gowdham@visionzeroconnect.com" },
  { name: "Sam Morgan", role: "Tech Development", photo: "/assets/about/team/sam-morgan-v2.jpg", linkedin: "https://www.linkedin.com/in/samuel-charles-morgan/", email: "mailto:sammorgan@visionzeroconnect.com" },
  { name: "Alice McIntee", role: "Global Business Support", photo: "/assets/about/team/Alice.png", linkedin: "https://www.linkedin.com/in/alice-mcintee-b17b0b325/", email: "mailto:alice@visionzeroconnect.com" },
  { name: "Frankie O'Shea", role: "Global Business Support", photo: "/assets/about/team/Frankie.png", linkedin: "https://www.linkedin.com/in/frankie-o-shea-760a73251/", email: "mailto:frankie@visionzeroconnect.com" },
  { name: "Ben Horsley", role: "Tech Development", photo: "/assets/about/team/Ben.png", email: "mailto:ben@visionzeroconnect.com" },
  { name: "Nigel Lax", role: "Specialist Board Advisor", photo: "/assets/about/team/nigel.jpg", email: "mailto:nigel@visionzeroconnect.com" },
  { name: "Sam Borg", role: "Specialist Board Advisor", photo: "/assets/about/team/sam.jpg", linkedin: "https://www.linkedin.com/in/samuel-borg-52a64840/", email: "mailto:sam@visionzeroconnect.com" },
  { name: "Will-Syme Nicholson", role: "Specialist Board Advisor", photo: "/assets/about/team/will.jpg", linkedin: "https://www.linkedin.com/in/will-syme-nicholson-a219866a/", email: "mailto:will@visionzeroconsult.com" },
];
