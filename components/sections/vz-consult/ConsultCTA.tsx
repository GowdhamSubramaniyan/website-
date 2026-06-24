import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { closing } from "./vz-consult.data";

/**
 * Book a Consultation — teal closing band. Lime heading, intro, and the "Talk to
 * Our Team" CTA on the left; the advisory-team photo on the right. Anchored
 * #contact so the page's CTAs scroll here. Columns stack on mobile.
 */
export function ConsultCTA() {
  return (
    <section id="contact" className="bg-teal py-16 text-white md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
              {closing.headline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {closing.intro}
            </p>
            <div className="mt-8">
              <Button
                href={closing.cta.href}
                variant="primary"
                size="lg"
                className="font-semibold uppercase tracking-[0.08em]"
              >
                {closing.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Image
              src={closing.image.src}
              alt={closing.image.alt}
              width={900}
              height={760}
              sizes="(min-width: 1024px) 34rem, 90vw"
              className="mx-auto h-auto w-full max-w-md lg:ml-auto lg:max-w-none"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
