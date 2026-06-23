import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import type { Sector, SectorIcon } from "./sectors.data";

/**
 * A single sector card — icon + name + one-line descriptor, extending the Card
 * primitive. Links to the sector's detail spotlight (Prompt 5).
 */
export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Card href={`#sector-${sector.slug}`} className="items-start gap-4">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal">
        {ICONS[sector.icon]}
      </span>
      <h3 className="text-lg font-bold leading-snug text-ink">{sector.name}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{sector.descriptor}</p>
    </Card>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<SectorIcon, ReactNode> = {
  healthcare: (
    <Glyph>
      <path d="M5 8h14v12H5z" {...stroke} />
      <path d="M9 4h6v4H9zM12 11v5M9.5 13.5h5" {...stroke} />
    </Glyph>
  ),
  property: (
    <Glyph>
      <path d="M4 20V9l8-5 8 5v11" {...stroke} />
      <path d="M9 20v-6h6v6" {...stroke} />
    </Glyph>
  ),
  education: (
    <Glyph>
      <path d="M12 4 2 9l10 5 10-5-10-5z" {...stroke} />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" {...stroke} />
    </Glyph>
  ),
  hotel: (
    <Glyph>
      <path d="M3 19V7M3 12h13a4 4 0 0 1 4 4v3M3 19h18" {...stroke} />
      <path d="M6 10h3" {...stroke} />
    </Glyph>
  ),
  retail: (
    <Glyph>
      <path d="M4 9h16l-1 11H5L4 9z" {...stroke} />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" {...stroke} />
    </Glyph>
  ),
  construction: (
    <Glyph>
      <path d="M4 21V8l11-3v4M4 21h16M9 21V11M14 21v-7h5v7" {...stroke} />
    </Glyph>
  ),
  manufacturing: (
    <Glyph>
      <path d="M3 21V9l5 3V9l5 3V9l5 3v9H3z" {...stroke} />
      <path d="M7 16h2M13 16h2" {...stroke} />
    </Glyph>
  ),
  logistics: (
    <Glyph>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7" {...stroke} />
      <circle cx="7" cy="18" r="1.6" {...stroke} />
      <circle cx="17" cy="18" r="1.6" {...stroke} />
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
