import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { twoUp } from "./portfolio-one.data";

/**
 * Two paired feature cards on a light band. Each card layers a uniform teal
 * wash over its photo, with a lime title and white body on top. Stacks on mobile.
 */
export function TwoUpCards() {
  return (
    <SectionWrapper background="white">
      <div className="grid gap-8 md:grid-cols-2">
        {twoUp.map((card, i) => (
          <Reveal key={card.title} delay={i * 120}>
            <article className="relative flex min-h-[24rem] flex-col justify-start overflow-hidden rounded-3xl p-8 shadow-xl sm:p-10">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 768px) 40rem, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span aria-hidden className="absolute inset-0 bg-teal/85" />
              <div className="relative z-10">
                <h3 className="text-balance text-2xl font-bold leading-tight text-lime sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85">
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
