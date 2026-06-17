export type Location = {
  /** Tab title (bold). */
  name: string;
  /** Tab sub-label. */
  label: string;
  /** Heading shown in the detail panel. */
  title: string;
  /** Region chips (e.g. the UK's multiple locations). */
  regions?: string[];
  address?: string;
  /** Address used for the Google Maps embed + "View on Google Maps" link. */
  mapQuery?: string;
  phone?: string;
  email?: string;
  timezone?: string;
  established?: string;
  /** Shown when the office isn't open yet (no map / contact details). */
  note?: string;
};

/** Vision Zero Connect office locations (UK, Hong Kong, Australia, Malta). */
export const LOCATIONS: Location[] = [
  {
    name: "United Kingdom",
    label: "Multiple Locations",
    title: "United Kingdom",
    regions: ["Nottinghamshire", "London"],
    address: "Hexgreave Hall, Upper Hexgreave, Nottinghamshire NG22 8LS",
    mapQuery: "Hexgreave Hall, Upper Hexgreave, Nottinghamshire NG22 8LS, UK",
    phone: "+44 (0)1156 783330",
    email: "info@visionzeroconnect.com",
    timezone: "GMT/BST",
    established: "2023",
  },
  {
    name: "Hong Kong",
    label: "Sheung Wan",
    title: "Sheung Wan, Hong Kong",
    address: "Spaces, Sun House, 90 Connaught Rd Central, Sheung Wan",
    mapQuery: "Spaces, Sun House, 90 Connaught Rd Central, Sheung Wan, Hong Kong",
    phone: "+ 852 6388 8679",
    email: "peterdampier@visionzeroconnect.com",
    timezone: "HKT",
    established: "2024",
  },
  {
    name: "Australia",
    label: "Kew, VIC",
    title: "Kew, VIC, Australia",
    address: "Suite 407, 1 Princess Street, Kew VIC 3101",
    mapQuery: "Suite 407, 1 Princess Street, Kew VIC 3101, Australia",
    phone: "Coming Soon",
    email: "info@visionzeroconnect.com",
    timezone: "AEST",
    established: "2024",
  },
  {
    name: "Malta",
    label: "Coming Soon",
    title: "Malta",
    note: "New office coming soon.",
  },
  {
    name: "United States",
    detail: "Expansion Underway",
    pos: { top: "40%", left: "22%" },
    note: "US market expansion underway.",
  },
];
