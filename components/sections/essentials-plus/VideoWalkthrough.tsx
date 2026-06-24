import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * See How Essentials+ Works (section 3) — a dark navy band with a faint world
 * map, a bordered video thumbnail + play button on the left, and supporting copy
 * plus a 5-star "Used Across 35+ Organisations" badge on the right.
 */
export function VideoWalkthrough() {
  return (
    <section id="video" className="relative overflow-hidden bg-[#1b2630] py-16 text-white md:py-24">
      {/* faint world-map texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
      >
        <Image
          src="/assets/essentials/world-map.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full max-w-6xl"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See How Essentials+ Works
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Video */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/assets/essentials/video-thumb.png"
                  alt="Watch how Essentials+ works"
                  fill
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  aria-label="Play the Essentials+ walkthrough video"
                  className="group absolute inset-0 grid place-items-center focus-visible:outline-none"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full border-2 border-white bg-black/20 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-lime">
                    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                      <path d="M12 9v14l11-7z" fill="#fff" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Copy + rating */}
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-white/85">
              <p>
                A quick walkthrough of how Essentials+ helps organisations
                simplify advanced ESG and operational reporting, improve emissions
                visibility, and generate professional reporting outputs with
                greater speed and confidence.
              </p>
              <p>
                Built for organisations preparing for increasing lender,
                procurement, and stakeholder expectations.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm font-bold leading-tight">
                Used Across 35+
                <br />
                Organisations across
                <br />
                Australia and UK
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#f5b431]" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77 4.8 17.5l.99-5.78-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}
