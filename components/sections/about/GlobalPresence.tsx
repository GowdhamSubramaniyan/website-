import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Global Presence — solid-teal headline and the doc's footprint copy on the
 * left, headline stats (bento) on the right. Soft mint background.
 */
export function GlobalPresence() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f2f8f4_0%,#e6f1ec_45%,#d6e9e2_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Headline + copy */}
          <Reveal>
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-teal md:text-6xl">
                Global Presence
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/80">
                <p>
                  Vision Zero Connect supports organisations across sectors where
                  operational performance, compliance, and asset efficiency
                  directly impact commercial outcomes.
                </p>
                <p>
                  This includes healthcare, property portfolios, education,
                  hospitality, retail, logistics, infrastructure, manufacturing,
                  and multi-site operations.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={120}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#a7c4c2] p-7">
                <span className="text-5xl font-bold leading-none text-ink">25+</span>
                <p className="mt-3 text-base font-medium text-ink/80">
                  in-house industry experts
                </p>
              </div>
              <div className="rounded-2xl bg-[#a7c4c2] p-7">
                <p className="text-base font-medium text-ink/80">Offices in</p>
                <p className="text-5xl font-bold text-ink">5</p>
                <p className="mt-2 text-base font-medium text-ink/80">countries</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
