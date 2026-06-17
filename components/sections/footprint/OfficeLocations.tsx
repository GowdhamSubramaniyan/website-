"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { LOCATIONS } from "./footprint.data";

const MAPS_SEARCH = "https://www.google.com/maps/search/?api=1&query=";
const mapsEmbed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

/**
 * Selectable office tabs (navbar style), a detail card, and a live Google Maps
 * embed for the active office. Shared by the home "Our Office Locations" section
 * and the About "Global Presence" section.
 */
export function OfficeLocations({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const loc = LOCATIONS[active];

  return (
    <div className={className}>
      {/* Office tabs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LOCATIONS.map((l, i) => (
          <button
            key={l.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
              i === active
                ? "border-teal bg-teal text-white shadow-md"
                : "border-grey bg-white text-ink hover:border-sage",
            )}
          >
            <BuildingIcon className={cn("h-5 w-5 shrink-0", i === active ? "text-white" : "text-teal")} />
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold">{l.name}</span>
              <span className={cn("block truncate text-xs", i === active ? "text-white/80" : "text-ink/60")}>
                {l.label}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Detail + map */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-grey bg-white shadow-sm lg:grid lg:grid-cols-2">
        {/* Detail */}
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-ink">{loc.title}</h3>

          {loc.regions && (
            <div className="mt-4 flex flex-wrap gap-2">
              {loc.regions.map((r, i) => (
                <span
                  key={r}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    i === 0 ? "bg-teal text-white" : "bg-grey text-ink/70",
                  )}
                >
                  {r}
                </span>
              ))}
            </div>
          )}

          {loc.address && (
            <p className="mt-4 flex items-start gap-3 text-sm text-ink/70">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span>{loc.address}</span>
            </p>
          )}

          {loc.mapQuery && (
            <a
              href={`${MAPS_SEARCH}${encodeURIComponent(loc.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-teal underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              <ExternalIcon className="h-4 w-4" />
              View on Google Maps
            </a>
          )}

          {loc.note && !loc.phone && (
            <p className="mt-4 text-sm text-ink/60">{loc.note}</p>
          )}

          {(loc.phone || loc.email || loc.timezone || loc.established) && (
            <dl className="mt-8 space-y-5 border-t border-grey pt-8">
              {loc.phone && (
                <Detail icon={<PhoneIcon />} label="Phone">
                  {loc.phone === "Coming Soon" ? (
                    <span className="text-ink/60">Coming Soon</span>
                  ) : (
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-teal hover:underline">
                      {loc.phone}
                    </a>
                  )}
                </Detail>
              )}
              {loc.email && (
                <Detail icon={<MailIcon />} label="Email">
                  <a href={`mailto:${loc.email}`} className="text-teal hover:underline">
                    {loc.email}
                  </a>
                </Detail>
              )}
              {loc.timezone && (
                <Detail icon={<ClockIcon />} label="Time Zone">
                  <span className="text-ink/70">{loc.timezone}</span>
                </Detail>
              )}
              {loc.established && (
                <Detail icon={<BuildingIcon className="h-5 w-5" />} label="Established">
                  <span className="text-ink/70">{loc.established}</span>
                </Detail>
              )}
            </dl>
          )}
        </div>

        {/* Map */}
        <div className="relative min-h-[22rem] bg-grey lg:min-h-full">
          {loc.mapQuery ? (
            <iframe
              key={loc.name}
              title={`Map of ${loc.title}`}
              src={mapsEmbed(loc.mapQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-grad-mint text-center">
              <div>
                <PinIcon className="mx-auto h-8 w-8 text-teal" />
                <p className="mt-3 text-sm font-semibold text-ink/70">
                  {loc.note ?? "Coming soon"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
        {icon}
      </span>
      <div className="text-sm">
        <dt className="font-bold text-ink">{label}</dt>
        <dd className="mt-0.5">{children}</dd>
      </div>
    </div>
  );
}

/* --- Icons --- */
function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16M14 21V9h4a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 5 8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
