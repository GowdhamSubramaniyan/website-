"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { FEATURES } from "./features.data";

const CYCLE_MS = 5000;

/**
 * Beyond Reporting. Built for Operational Readiness. — an interactive showcase:
 * a rounded platform snapshot on the left cross-fades to the active feature,
 * while the feature list on the right expands the active item. Auto-advances;
 * click a feature to jump. Stacks on mobile.
 */
export function Features() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setActive((i) => (i + 1) % FEATURES.length),
      CYCLE_MS,
    );
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section id="features" className="bg-white py-16 text-ink md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-teal sm:text-4xl md:text-5xl">
            A Simple, Cost-Effective Way to Handle ESG Reporting
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            Essentials+ combines operational intelligence, advanced ESG
            reporting, and enhanced emissions visibility into one integrated
            platform.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* Snapshot showcase */}
          <Reveal>
            <div className="relative mx-auto aspect-[903/420] w-full max-w-2xl overflow-hidden rounded-2xl border border-grey bg-white shadow-xl lg:max-w-none">
              {FEATURES.map((feature, i) => (
                <Image
                  key={feature.number}
                  src={feature.media}
                  alt={feature.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 42rem, 92vw"
                  className={cn(
                    "object-cover transition-all duration-700 ease-out",
                    i === active
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0",
                  )}
                />
              ))}
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
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-teal underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Get started now &rsaquo;
          </Link>
        </div>
      </Container>
    </section>
  );
}
