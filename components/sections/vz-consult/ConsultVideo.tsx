import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * See VZC Consult in Action — a teal band with a short intro and an embedded
 * YouTube walkthrough of the advisory service.
 */
export function ConsultVideo() {
  return (
    <section className="bg-[#036261] py-16 text-white md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See VZC Consult in Action
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            A quick look at how our advisory team helps organisations turn data,
            performance, and sustainability priorities into practical business
            outcomes.
          </p>
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
            <iframe
              src="https://www.youtube.com/embed/LICdXvLuraw?rel=0"
              title="See VZC Consult in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
