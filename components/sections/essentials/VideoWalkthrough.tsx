import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * See How Essentials Works (Prompt 2) — a muted-teal band (with a faint world
 * map) holding a bordered video thumbnail and play button on the left, and the
 * supporting copy plus the "Used Across Multiple Sectors" badge on the right.
 */
export function VideoWalkthrough() {
  return (
    <section id="video" className="relative overflow-hidden bg-[#0c8f84] py-16 text-white md:py-24">
      {/* faint semi-globe behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[10%] flex justify-center opacity-[0.16]"
      >
        <Image
          src="/assets/essentials/world-map.png"
          alt=""
          width={1920}
          height={1080}
          className="w-[125%] max-w-none"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See How Essentials Works
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Video */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border-[6px] border-white shadow-xl">
              <div className="relative aspect-video">
                <Image
                  src="/assets/essentials/video-thumb.png"
                  alt="Watch how Essentials works"
                  width={960}
                  height={600}
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  aria-label="Play the Essentials walkthrough video"
                  className="group absolute inset-0 grid place-items-center focus-visible:outline-none"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-lime">
                    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                      <path d="M12 9v14l11-7z" fill="#045858" />
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
                A quick walkthrough of how Essentials helps SMEs simplify ESG and
                operational reporting, reduce admin burden, and generate
                professional lender-ready and procurement-ready reports in
                minutes.
              </p>
              <p>Built for growing SMEs across multiple sectors.</p>
            </div>

            <Image
              src="/assets/essentials/video-badge.png"
              alt="Five stars — used across multiple sectors"
              width={1000}
              height={400}
              sizes="20rem"
              className="mt-8 h-auto w-72"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
