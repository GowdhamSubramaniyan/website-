import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "./vz-consult.data";

/**
 * Who We Work With — soft mint band. Teal heading + intro on the left; the five
 * audiences as full-width teal bars on the right. Stacks on mobile.
 */
export function WhoWeWorkWith() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display-sm">
              {audiences.heading}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {audiences.intro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-4">
              {audiences.items.map((a) => (
                <li
                  key={a}
                  className="rounded-xl bg-teal px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
