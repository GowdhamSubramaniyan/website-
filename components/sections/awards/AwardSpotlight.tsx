import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Award } from "./awards.data";

type AwardSpotlightProps = {
  award: Award;
};

/**
 * One award recognition as a large rounded teal card on a white section: a lime
 * headline, the awarding body, white body copy, and a lime "View Award
 * Announcement" CTA on the left — with the trophy image bleeding off the right
 * edge of the card.
 */
export function AwardSpotlight({ award }: AwardSpotlightProps) {
  return (
    <section className="bg-white">
      <Container className="py-4 md:py-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#3c6e64]">
            <div className="grid items-center lg:grid-cols-2">
              {/* Copy */}
              <div className="p-8 sm:p-12 lg:p-14">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
                  {award.name}
                </h2>
                <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">
                  {award.body}
                </p>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85 sm:text-lg">
                  {award.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-9">
                  <Button
                    href={award.announcementHref}
                    variant="primary"
                    size="lg"
                    className="font-semibold uppercase tracking-wide"
                  >
                    View Award Announcement
                  </Button>
                </div>
              </div>

              {/* Trophy — bleeds off the right edge of the card */}
              <div className="relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-[32rem] lg:self-stretch">
                <Image
                  src={award.image.src}
                  alt={award.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain object-center lg:object-right"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
