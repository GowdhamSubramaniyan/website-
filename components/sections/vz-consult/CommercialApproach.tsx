import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { approach } from "./vz-consult.data";

/**
 * A Commercially Focused Approach — dark navy band. Team photo on the left, lime
 * heading + two paragraphs on the right. Columns stack on mobile.
 */
export function CommercialApproach() {
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              width={900}
              height={700}
              sizes="(min-width: 1024px) 34rem, 90vw"
              className="mx-auto h-auto w-full max-w-md lg:max-w-none"
            />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
              {approach.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {approach.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
