import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TEAM_MEMBERS, type TeamMember } from "./leadership.data";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const pill =
  "inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#142634]";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#142634]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#42b89e]">{member.role}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target={member.linkedin === "#" ? undefined : "_blank"}
              rel={member.linkedin === "#" ? undefined : "noopener noreferrer"}
              className={pill}
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          {member.email && (
            <a href={member.email} className={pill} aria-label={`Email ${member.name}`}>
              <MailIcon />
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Leadership / Team — a responsive grid of headshot cards on a dark navy band
 * with a faint grid texture, matching the existing Vision Zero Connect site.
 * Heading + intro copy from the About doc.
 */
export function Leadership() {
  return (
    <section className="relative overflow-hidden bg-[#0e1f29] py-16 text-white md:py-24">
      {/* faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:46px_46px]"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-lime md:text-5xl">
            Meet the Leadership Team
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85">
            <p>
              The Vision Zero Connect senior team brings extensive experience
              across diverse sectors and global markets.
            </p>
            <p>
              Selected for their exceptional success, each plays an instrumental
              role in the company&apos;s growth, combining technical innovation
              &amp; commercial expertise.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
