import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HelpCard } from "./HelpCard";
import { help, HELP_ITEMS } from "./vz-consult.data";

/**
 * What We Help With — soft mint band. The strategy photo on the left, a teal
 * heading and the six capability cards stacked on the right. Stacks on mobile.
 */
export function WhatWeHelpWith() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <Reveal className="lg:sticky lg:top-28">
            <Image
              src={help.image.src}
              alt={help.image.alt}
              width={760}
              height={900}
              sizes="(min-width: 1024px) 34rem, 90vw"
              className="mx-auto h-auto w-full max-w-md lg:max-w-none"
            />
          </Reveal>

          {/* Heading + capability cards */}
          <div>
            <SectionHeading
              headline={<span className="text-teal">{help.heading}</span>}
            />
            <div className="mt-8 space-y-4">
              {HELP_ITEMS.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <HelpCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
