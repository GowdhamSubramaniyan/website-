export type Location = {
  name: string;
  /** Sub-label shown on the chip and as the card subtitle. */
  detail: string;
  /** Marker position on the world map (percent from top-left). */
  pos: { top: string; left: string };
  phone?: string;
  email?: string;
  timezone?: string;
  established?: string;
  /** Shown on the card when full contact details aren't available yet. */
  note?: string;
};

/** The five global locations (from "Our Global Footprint"). */
export const LOCATIONS: Location[] = [
  {
    name: "United Kingdom",
    detail: "Multiple Locations",
    pos: { top: "30%", left: "47%" },
    note: "Operating across multiple UK locations.",
  },
  {
    name: "Hong Kong",
    detail: "Sheung Wan",
    pos: { top: "43%", left: "80%" },
    phone: "+ 852 6388 8679",
    email: "peterdampier@visionzeroconnect.com",
    timezone: "HKT",
    established: "2024",
  },
  {
    name: "Australia",
    detail: "Kew, VIC",
    pos: { top: "82%", left: "84%" },
    note: "Regional operations across Victoria.",
  },
  {
    name: "Malta",
    detail: "Pending Location",
    pos: { top: "27%", left: "51%" },
    note: "New office coming soon.",
  },
  {
    name: "United States",
    detail: "Expansion Underway",
    pos: { top: "40%", left: "22%" },
    note: "US market expansion underway.",
  },
];
