import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { collaboration } from "./partner-page.data";

/**
 * "Building Stronger Industry Collaboration" — a dark navy band: the heading +
 * two paragraphs + an "Explore Our Solutions" CTA on the right, with the team
 * photo enlarged and bleeding off the left edge of the frame.
 */
export function BuildingCollaboration() {
  return (
    <section className="relative overflow-hidden bg-[#0e1827] lg:min-h-[34rem]">
      <Container className="relative z-10 py-section-sm md:py-section">
        <div className="lg:ml-auto lg:w-[48%]">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-display-sm">
              {collaboration.heading}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {collaboration.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button
                href={collaboration.cta.href}
                variant="primary"
                size="lg"
                withArrow
                className="font-semibold uppercase tracking-wide"
              >
                {collaboration.cta.label}
              </Button>
            </div>
          </Reveal>

          {/* Photo — stacked above the copy on mobile/tablet */}
          <Reveal delay={150} className="mt-10 lg:hidden">
            <Image
              src={collaboration.image.src}
              alt={collaboration.image.alt}
              width={1000}
              height={680}
              sizes="90vw"
              className="h-auto w-full rounded-2xl object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>

      {/* Photo — enlarged, anchored to the left edge and cut off by the frame */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <Image
          src={collaboration.image.src}
          alt=""
          width={1000}
          height={680}
          sizes="780px"
          className="h-auto w-[560px] max-w-none -translate-x-[14%] rounded-2xl object-cover shadow-2xl xl:w-[760px]"
        />
      </div>
    </section>
  );
}
