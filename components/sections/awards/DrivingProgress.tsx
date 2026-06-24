import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { progress } from "./awards.data";

/**
 * "Driving Industry Progress Through Innovation" — a dark navy band tying the
 * recognitions together: an award-handover photo on the left, lime headline +
 * two paragraphs + an "Explore Our Solutions" CTA on the right.
 */
export function DrivingProgress() {
  return (
    <section className="bg-[#0e1827]">
      <Container className="py-section-sm md:py-section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={150}>
            <Image
              src={progress.image.src}
              alt={progress.image.alt}
              width={1000}
              height={760}
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="h-auto w-full rounded-2xl object-cover shadow-2xl"
            />
          </Reveal>

          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
              {progress.headline}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {progress.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button
                href={progress.cta.href}
                variant="primary"
                size="lg"
                withArrow
                className="font-semibold uppercase tracking-wide"
              >
                {progress.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
