"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NEWS } from "@/data/insights";

/**
 * In The News (Canva) — continues the dark teal band: intro + carousel arrows,
 * then a horizontally scrollable row of white news/award cards. The arrows
 * scroll the track by one card; on desktop all three are visible.
 */
export function InTheNews() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-news-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="news" className="scroll-mt-24 bg-[#036261] pb-20 text-white md:pb-28">
      <Container>
        <div className="flex flex-col gap-6 border-t border-white/15 pt-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              In The News
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Stay updated with our latest media appearances, industry
              recognition, and company milestones as we drive sustainable
              transformation in the property sector.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#036261] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#036261] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {NEWS.map((item) => (
            <article
              key={item.id}
              data-news-card
              className="flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white text-ink sm:w-[20rem] lg:w-auto lg:flex-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 88vw"
                  className="object-cover"
                />
                {item.tag && (
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-pill bg-[#036261] px-4 py-1.5 text-xs font-semibold text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-balance text-lg font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-teal underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                  >
                    Read full story &gt;
                  </Link>
                  <span className="text-xs text-ink/50">{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
