"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { cn } from "@/lib/cn";

// The integrated product ecosystem, summarised from the About doc (Products
// section). The full product detail lives on the Home page.
const PRODUCTS = [
  {
    name: "Essentials",
    description:
      "AI-powered ESG reporting built for SMEs, delivering fast, compliant Scope 1 and 2 reporting aligned with global frameworks.",
  },
  {
    name: "Essentials+",
    description:
      "Advanced operational intelligence and ESG reporting for organisations seeking greater visibility, improved performance, and streamlined compliance.",
  },
  {
    name: "Portfolio One",
    description:
      "Integrated asset intelligence platform transforming complex operational data into actionable insights that support portfolio performance and investment outcomes.",
  },
  {
    name: "VZC Consult",
    description:
      "Specialist advisory services helping organisations turn data, performance, and sustainability priorities into practical business outcomes.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn(
        "h-5 w-5 shrink-0 transition-transform duration-300",
        open ? "rotate-90" : "rotate-0",
      )}
    >
      <path
        d="M7 5l6 5-6 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * What We Do — the integrated ecosystem built around the NAVIGATE intelligence
 * engine. A product accordion on the left (first item open by default) and a
 * media/video panel on the right, on a [#036261]-teal band.
 */
export function WhatWeDo() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#036261] py-16 text-white md:py-24">
      <Container>
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Four Products.</span>
          <span className="block text-lime">One Intelligence Engine.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/80">
          Vision Zero Connect delivers an integrated ecosystem of solutions built
          around NAVIGATE, our intelligence engine that connects, standardises,
          and analyses operational and ESG data across portfolios.
        </p>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Accordion */}
          <ul>
            {PRODUCTS.map((product, i) => {
              const open = openIndex === i;
              return (
                <li
                  key={product.name}
                  className={cn(
                    "border-l-2 py-5 pl-6 transition-colors",
                    open ? "border-lime" : "border-white/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
                  >
                    <span className="text-2xl font-semibold">{product.name}</span>
                    <Chevron open={open} />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-white/80">
                      {product.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Media / video */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <VideoEmbed
              youtubeId="c-bXx1f9-wM"
              poster="/assets/about/products-media.png"
              posterAlt="Vision Zero Connect product overview"
              sizes="(min-width: 1024px) 32rem, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
