import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Who We Serve closing CTA (Prompt 9) — a full-width band on the dark brand
 * gradient with a closing headline and the primary + secondary actions.
 */
export function WhoWeServeCTA() {
  return (
    <section className="bg-grad-dark py-20 text-white md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find the right solution for your sector
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Whatever sector you operate in, Vision Zero Connect has a solution
            sized to your operational and reporting needs.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#products" variant="primary" size="lg" withArrow>
              Explore Our Products
            </Button>
            <Button href="/#contact" variant="ghost" size="lg">
              Talk to Our Team
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
