import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "./CheckList";
import { register } from "./portfolio-one.data";

/**
 * "Understand Which Buildings Need Attention First" — dark navy band mirroring
 * the Operational Visibility split: lime heading, intro, and a four-item check
 * list on the left; supporting image on the right. Columns stack on mobile.
 */
export function PerformanceRegister() {
  return (
    <SectionWrapper background="navy">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
            {register.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            {register.intro}
          </p>
          <p className="mt-6 font-semibold text-white">{register.listLead}</p>
          <CheckList items={register.items} tone="dark" className="mt-4" />
        </Reveal>

        <Reveal delay={120} className="order-first lg:order-last">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={register.image.src}
              alt={register.image.alt}
              width={900}
              height={1000}
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
