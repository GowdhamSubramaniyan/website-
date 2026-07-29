"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { FEATURES } from "./features.data";

/**
 * A Simple, Cost-Effective Way to Handle ESG Reporting — an interactive showcase
 * on a white band. A browser-style window on the left plays the active feature's
 * video, advancing to the next feature when the video finishes; the feature list
 * on the right expands the active item. Click a feature to jump.
 */
export function Features() {
  const [active, setActive] = useState(0);

  const next = () => setActive((i) => (i + 1) % FEATURES.length);

  return (
    <section id="features" className="bg-white py-16 text-ink md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-teal sm:text-4xl md:text-5xl">
            A Simple, Cost-Effective Way to Handle ESG Reporting
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            Essentials combines automation, reporting, and operational ESG
            intelligence into one streamlined platform designed specifically for
            SMEs.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* Snapshot showcase — plays the active feature's video on loop */}
          <Reveal>
            <div className="relative mx-auto aspect-[1920/894] w-full max-w-3xl overflow-hidden rounded-2xl border border-grey bg-black shadow-xl lg:max-w-none">
              <video
                key={FEATURES[active].number}
                src={FEATURES[active].video}
                autoPlay
                muted
                playsInline
                preload="metadata"
                onEnded={next}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Feature list */}
          <Reveal delay={120}>
            <ul className="space-y-2">
              {FEATURES.map((feature, i) => {
                const isActive = i === active;
                return (
                  <li key={feature.number}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "w-full rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:p-5",
                        isActive
                          ? "border-teal/30 bg-teal/5"
                          : "border-transparent hover:bg-[#f4f6f5]",
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors",
                            isActive
                              ? "bg-teal text-white"
                              : "bg-teal/10 text-teal",
                          )}
                        >
                          {feature.number}
                        </span>
                        <h3 className="text-base font-bold text-ink sm:text-lg">
                          {feature.title}
                        </h3>
                      </div>
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          isActive
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <p className="overflow-hidden pl-14 text-sm leading-relaxed text-ink/70">
                          {feature.description}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 text-right">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-teal underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Get started now &rsaquo;
          </Link>
        </div>
      </Container>
    </section>
  );
}
