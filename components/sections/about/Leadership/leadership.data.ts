export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Headshot in /public/assets/about. Falls back to an initials avatar. */
  photo?: string;
};

/**
 * Leadership team. The About doc names no individuals ("Please refer to the
 * current website for the leadership team details"), and the design uses
 * placeholder profiles — so these are PLACEHOLDERS. Replace the names, roles,
 * bios, and add `photo` paths (drop headshots in /public/assets/about) once the
 * real team details are available.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rich Ford",
    role: "Chief Executive Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Team Member",
    role: "Chief Technology Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Team Member",
    role: "Chief Operating Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Team Member",
    role: "Chief Commercial Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
