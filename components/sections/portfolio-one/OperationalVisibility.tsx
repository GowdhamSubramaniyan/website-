import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "./CheckList";
import { visibility } from "./portfolio-one.data";

/**
 * "Built for Operational Visibility and Smarter Decision-Making" — dark navy
 * band. Lime heading, intro, and a six-item check list on the left; supporting
 * image on the right. Columns stack on mobile.
 */
export function OperationalVisibility() {
  return (
    <SectionWrapper background="navy">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
            {visibility.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            {visibility.intro}
          </p>
          <p className="mt-6 font-semibold text-white">{visibility.listLead}</p>
          <CheckList items={visibility.items} tone="dark" className="mt-4" />
        </Reveal>

        <Reveal delay={120} className="order-first lg:order-last">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={visibility.image.src}
              alt={visibility.image.alt}
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
