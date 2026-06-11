"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { TEAM_MEMBERS, type TeamMember } from "./leadership.data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Lime detail card for the active member — name, role, bio, info + mail icons. */
function DetailCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col rounded-2xl bg-grad-lime p-7 text-ink">
      <h3 className="text-2xl font-bold">{member.name}</h3>
      <p className="mt-1 text-base font-medium text-ink/80">{member.role}</p>
      <p className="mt-5 text-sm leading-relaxed text-ink/70">{member.bio}</p>
      <div className="mt-auto flex items-center gap-3 pt-8">
        <button
          type="button"
          aria-label={`More about ${member.name}`}
          className="transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          <Image src="/assets/about/icon-info.png" alt="" width={400} height={400} className="h-11 w-11" />
        </button>
        <button
          type="button"
          aria-label={`Email ${member.name}`}
          className="transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          <Image src="/assets/about/icon-mail.png" alt="" width={400} height={400} className="h-11 w-11" />
        </button>
      </div>
    </div>
  );
}

/** Headshot card (photo, or initials-avatar fallback). Clicking makes it active. */
function PhotoCard({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c5856]"
      aria-label={`View ${member.name}, ${member.role}`}
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 18rem, 80vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="grid h-full w-full place-items-center bg-gradient-to-br from-sage to-teal text-4xl font-bold text-white">
          {initials(member.name)}
        </span>
      )}
    </button>
  );
}

function Arrow({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="grid h-12 w-12 place-items-center rounded-full bg-[#4f817d] text-white transition-colors hover:bg-[#5d918d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c5856]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d={dir === "prev" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * Leadership / Team — a carousel on a deep-teal band. The active member shows a
 * lime detail card; the rest show as headshot cards. Arrows rotate the active
 * member. Copy from the About doc; profiles are placeholders (see data file).
 */
export function Leadership() {
  const [active, setActive] = useState(0);
  const n = TEAM_MEMBERS.length;
  // Show 4 cards starting at the active member, wrapping around.
  const visible = Array.from({ length: Math.min(4, n) }, (_, i) => (active + i) % n);

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  return (
    <section className="bg-[#2c5856] py-16 text-white md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-lime md:text-6xl">
              <span className="block">Meet the</span>
              <span className="block">Leadership Team</span>
            </h2>
            <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-white/85">
              <p>
                The Vision Zero Connect senior team brings extensive experience
                across diverse sectors and global markets.
              </p>
              <p>
                Selected for their exceptional success, each plays an
                instrumental role in the company&apos;s growth, combining
                technical innovation &amp; commercial expertise.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Arrow dir="prev" onClick={prev} />
            <Arrow dir="next" onClick={next} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((memberIndex, slot) =>
            slot === 0 ? (
              <DetailCard key={memberIndex} member={TEAM_MEMBERS[memberIndex]} />
            ) : (
              <PhotoCard
                key={memberIndex}
                member={TEAM_MEMBERS[memberIndex]}
                onClick={() => setActive(memberIndex)}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
