"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TimelineItem = { id: string; label: string };

/** Row height in px — dots are evenly spaced by this so the rail math lines up. */
const ROW = 38;

/**
 * A fixed vertical "timeline" rail (desktop only) that tracks which section is
 * in view via IntersectionObserver, highlights it, and scrolls to a section when
 * its dot is clicked. A connecting line runs through the dots and a teal
 * progress line fills down to the active section as you scroll. Sections are
 * matched by element `id`; an ~88px offset keeps the target clear of the header.
 */
export function SectionTimeline({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const activeIndex = Math.max(
    0,
    items.findIndex((it) => it.id === active),
  );

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative flex flex-col">
        {/* Connecting rail (through the dot centres, near the right edge) */}
        <span
          aria-hidden
          className="absolute right-[4px] w-0.5 -translate-x-1/2 rounded-full bg-ink/15"
          style={{ top: ROW / 2, height: (items.length - 1) * ROW }}
        />
        {/* Progress fill up to the active section */}
        <span
          aria-hidden
          className="absolute right-[4px] w-0.5 -translate-x-1/2 rounded-full bg-teal transition-[height] duration-500 ease-out"
          style={{ top: ROW / 2, height: activeIndex * ROW }}
        />

        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => goTo(it.id)}
              aria-current={isActive ? "true" : undefined}
              style={{ height: ROW }}
              className="group relative z-10 flex items-center justify-end gap-3 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold shadow-sm ring-1 ring-black/5 transition-all duration-300",
                  isActive
                    ? "text-teal opacity-100"
                    : "text-ink/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
                )}
              >
                {it.label}
              </span>
              <span
                className={cn(
                  "h-2.5 w-2.5 shrink-0 rounded-full ring-1 transition-all duration-300",
                  isActive
                    ? "scale-[1.5] bg-teal ring-teal"
                    : "bg-ink/25 ring-white/60 group-hover:bg-teal/60",
                )}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
