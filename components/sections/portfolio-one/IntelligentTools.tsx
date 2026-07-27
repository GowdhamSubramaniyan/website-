"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { tools, FEATURES } from "./portfolio-one.data";

/**
 * "Intelligent Tools Built for Real Asset Performance" — soft mint band. An
 * interactive showcase: a video panel on the left plays the active capability's
 * demo, advancing to the next when it finishes; the numbered feature list on the
 * right expands the active item. Click a feature to jump.
 */
export function IntelligentTools() {
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % FEATURES.length);

  return (
    <SectionWrapper background="mint">
      <Reveal>
        <SectionHeading
          align="center"
          headline={<span className="text-teal">{tools.heading}</span>}
          description={tools.intro}
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        {/* Video showcase — plays the active capability, advances when it ends */}
        <Reveal>
          <div className="relative mx-auto aspect-[1918/890] w-full max-w-3xl overflow-hidden rounded-2xl border border-grey bg-black shadow-xl lg:max-w-none">
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
                        ? "border-teal/30 bg-white"
                        : "border-transparent hover:bg-white/60",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors",
                          isActive ? "bg-navy text-white" : "bg-navy/10 text-navy",
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
    </SectionWrapper>
  );
}
