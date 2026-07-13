import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { twoUp } from "./portfolio-one.data";

/**
 * Two paired feature cards on a light band. Each photo already carries the teal
 * treatment baked in, so the lime title + white body sit over the darker lower
 * area with no extra overlay. Stacks on mobile.
 */
export function TwoUpCards() {
  return (
    <SectionWrapper background="white">
      <div className="grid gap-8 md:grid-cols-2">
        {twoUp.map((card, i) => (
          <Reveal key={card.title} delay={i * 120}>
            <article className="relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl p-8 shadow-xl sm:p-10">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 768px) 40rem, 100vw"
                className="absolute inset-0 h-full w-full scale-110 object-cover"
              />
              {/* Scrim — darkens the lower area so the text stays legible */}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10"
              />
              <div className="relative z-10">
                <h3 className="text-balance text-2xl font-bold leading-tight text-lime sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white">
                  {card.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
