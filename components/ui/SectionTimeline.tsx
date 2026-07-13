"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type TimelineItem = { id: string; label: string };

/** Row height in px — dots are evenly spaced by this so the rail math lines up. */
const ROW = 48;

/**
 * A fixed vertical "timeline" rail (desktop only) that tracks which section is
 * in view via IntersectionObserver, highlights it, and scrolls to a section when
 * its dot is clicked. A connecting line runs through the dots and a teal
 * progress line fills down to the active section as you scroll. Sections are
 * matched by element `id`; an ~88px offset keeps the target clear of the header.
 */
export function SectionTimeline({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  // Shown on load, tucks away after 2s; re-appears while scrolling / on hover.
  const [shown, setShown] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const scheduleHide = (delay: number) => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (!hoveringRef.current) setShown(false);
      }, delay);
    };

    // Tuck in 2s after the page settles.
    scheduleHide(2000);

    const onScroll = () => {
      setShown(true);
      scheduleHide(1600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

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
      onMouseEnter={() => {
        hoveringRef.current = true;
        if (hideTimer.current) clearTimeout(hideTimer.current);
        setShown(true);
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
        hideTimer.current = setTimeout(() => setShown(false), 1200);
      }}
      className={cn(
        "fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 ease-out xl:block",
        shown
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-6 opacity-0",
      )}
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
                  "max-w-[8rem] rounded-2xl px-2.5 py-1 text-right text-xs font-semibold leading-tight backdrop-blur-sm transition-all duration-300",
                  isActive
                    ? "bg-teal text-white opacity-100 shadow-sm"
                    : "bg-ink/30 text-white/80 opacity-40 group-hover:opacity-90",
                )}
              >
                {it.label}
              </span>
              <span
                className={cn(
                  "h-2.5 w-2.5 shrink-0 rounded-full ring-1 transition-all duration-300",
                  isActive
                    ? "scale-[1.6] bg-teal opacity-100 ring-teal"
                    : "bg-white/60 opacity-40 ring-white/40 group-hover:opacity-90",
                )}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
