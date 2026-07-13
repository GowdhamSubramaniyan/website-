import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { twoUp } from "./portfolio-one.data";

/**
 * Two paired feature cards on a light band. Clean, modern layout: a full-bleed
 * photo on top and a white card body below with a teal title and muted copy —
 * soft shadow, subtle border, gentle image zoom on hover. Stacks on mobile.
 */
export function TwoUpCards() {
  return (
    <SectionWrapper background="white">
      <div className="grid items-stretch gap-7 md:grid-cols-2">
        {twoUp.map((card, i) => (
          <Reveal key={card.title} delay={i * 120} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_30px_-12px_rgba(4,88,88,0.25)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-14px_rgba(4,88,88,0.35)]">
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={1200}
                  height={800}
                  sizes="(min-width: 768px) 40rem, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Copy */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-balance text-xl font-bold leading-snug text-teal sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-[0.95rem]">
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
