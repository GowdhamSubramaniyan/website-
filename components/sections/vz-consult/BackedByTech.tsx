import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { tech } from "./vz-consult.data";

/**
 * Backed by Technology — dark navy band. Lime heading, intro, the three
 * ecosystem product links, and a closing line on the left; a media panel with a
 * play affordance on the right. Columns stack on mobile.
 */
export function BackedByTech() {
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
              {tech.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {tech.intro}
            </p>
            <p className="mt-6 font-semibold text-white">{tech.lead}</p>
            <ul className="mt-4 space-y-3">
              {tech.ecosystem.map((e) => (
                <li key={e.name} className="text-base leading-relaxed text-white/75">
                  <Link
                    href={e.href}
                    className="font-bold text-lime underline-offset-4 hover:underline"
                  >
                    {e.name}
                  </Link>{" "}
                  {e.descriptor}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-white/75">{tech.closing}</p>
          </Reveal>

          {/* Media panel */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <VideoEmbed
                poster={tech.image.src}
                posterAlt={tech.image.alt}
                sizes="(min-width: 1024px) 36rem, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
