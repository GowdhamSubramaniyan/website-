import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trusted } from "./vz-consult.data";

/**
 * Trusted Advisory — a white card floating on a teal band. The teal heading
 * sits top-left with the building photo bleeding off the card's lower-left
 * edge; the two supporting paragraphs sit on the right. Stacks on mobile.
 */
export function TrustedAdvisory() {
  return (
    <section className="bg-teal py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Heading + building */}
              <div className="flex flex-col">
                <h2 className="px-8 pt-8 text-3xl font-bold leading-tight text-teal sm:text-4xl md:px-12 md:pt-12">
                  {trusted.headline}
                </h2>
                <div className="mt-8 min-h-[14rem] flex-1">
                  <Image
                    src={trusted.image.src}
                    alt={trusted.image.alt}
                    width={900}
                    height={600}
                    sizes="(min-width: 768px) 36rem, 100vw"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
              </div>

              {/* Paragraphs */}
              <div className="flex flex-col justify-center gap-6 px-8 py-10 leading-relaxed md:px-12 md:py-12">
                {trusted.paragraphs.map((p, i) => (
                  <p
                    key={p}
                    className={
                      i === 0
                        ? "text-sm text-ink/70 sm:text-base"
                        : "text-lg font-bold text-ink sm:text-xl"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
