import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
            <a
              href="#contact"
              aria-label="See VZC Consult in action"
              className="group relative block overflow-hidden rounded-2xl shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <Image
                src={tech.image.src}
                alt={tech.image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/20" />
              <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white text-white transition-transform duration-200 group-hover:scale-110">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 translate-x-0.5" aria-hidden="true">
                  <path d="M6 4.5v11a.75.75 0 0 0 1.14.64l9-5.5a.75.75 0 0 0 0-1.28l-9-5.5A.75.75 0 0 0 6 4.5Z" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
