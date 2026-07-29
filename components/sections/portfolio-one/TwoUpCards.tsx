import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { twoUp } from "./portfolio-one.data";

/**
 * Two paired feature cards on a light band. Photo-forward: each card is a full
 * image with the heading + copy overlaid on the lower third over a strong dark
 * gradient, so the text stays crisp regardless of the photo. Gentle zoom on
 * hover. Stacks on mobile.
 */
export function TwoUpCards() {
  return (
    <SectionWrapper background="white">
      <div className="grid items-stretch gap-7 md:grid-cols-2">
        {twoUp.map((card, i) => (
          <Reveal key={card.title} delay={i * 120} className="h-full">
            <article className="group relative flex aspect-[5/6] w-full flex-col justify-end overflow-hidden rounded-3xl shadow-[0_16px_40px_-16px_rgba(4,88,88,0.4)] md:aspect-[1/1]">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                sizes="(min-width: 768px) 36rem, 100vw"
                className="rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Strong bottom gradient keeps the overlaid copy legible */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/95 via-black/65 to-transparent"
              />
              {/* Overlaid copy */}
              <div className="relative z-10 flex flex-col gap-2.5 p-6 sm:p-7">
                <h3 className="text-balance text-xl font-bold leading-snug text-lime sm:text-2xl">
                  {card.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-[0.95rem]">
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
