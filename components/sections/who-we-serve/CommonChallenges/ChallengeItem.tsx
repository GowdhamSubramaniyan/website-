import type { ReactNode } from "react";
import type { Challenge, ChallengeIcon } from "./challenges.data";

/** A single shared challenge — icon + title + description, on a dark section. */
export function ChallengeItem({ challenge }: { challenge: Challenge }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-lime/15 text-lime">
        {ICONS[challenge.icon]}
      </span>
      <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
      <p className="text-sm leading-relaxed text-white/75">
        {challenge.description}
      </p>
    </div>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<ChallengeIcon, ReactNode> = {
  fragmented: (
    <Glyph>
      <path d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v4H4zM14 13h6v6h-6z" {...stroke} />
    </Glyph>
  ),
  demands: (
    <Glyph>
      <path d="M12 4a8 8 0 0 1 0 16M12 4a8 8 0 0 0 0 16" {...stroke} />
      <path d="M4 12h16M12 4l3 4-3 4-3-4 3-4z" {...stroke} />
    </Glyph>
  ),
  manual: (
    <Glyph>
      <path d="M6 3h9l4 4v14H6zM15 3v4h4M9.5 12h5M9.5 16h5" {...stroke} />
    </Glyph>
  ),
  visibility: (
    <Glyph>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
    </Glyph>
  ),
  transition: (
    <Glyph>
      <path d="M4 17l5-5 3 3 8-8" {...stroke} />
      <path d="M15 7h5v5" {...stroke} />
    </Glyph>
  ),
  cost: (
    <Glyph>
      <path d="M12 3v18M8 7h6a2.5 2.5 0 0 1 0 5H9a2.5 2.5 0 0 0 0 5h7" {...stroke} />
    </Glyph>
  ),
};

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {children}
    </svg>
  );
}
