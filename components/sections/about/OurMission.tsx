import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// The four outcomes (About doc, Mission section), with the brand teal
// line-icons from the About assets.
const VALUES = [
  {
    title: "Reduce Avoidable Cost",
    description:
      "Identify and eliminate avoidable energy and utility spend across every site in the portfolio.",
    icon: "/assets/about/value-cost.png",
  },
  {
    title: "Improve Asset Performance",
    description:
      "Turn operational and building data into real-time insights that support smarter, performance-led decisions.",
    icon: "/assets/about/value-performance.png",
  },
  {
    title: "Simplify Compliance",
    description:
      "Automate ESG and reporting obligations with audit-ready outputs aligned to evolving global frameworks.",
    icon: "/assets/about/value-compliance.png",
  },
  {
    title: "Turn Data Into Return",
    description:
      "Convert operational intelligence into measurable financial, environmental, and long-term portfolio outcomes.",
    icon: "/assets/about/value-return.png",
  },
];

function PlayCircleIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="none" stroke="#0f1827" strokeWidth="2" />
      <path d="M13 10.5v11l9-5.5z" fill="#0f1827" />
    </svg>
  );
}

/**
 * Our Mission — a white card on a [#036261]-teal band. The mission statement and a
 * "see our products" CTA on the left; the four outcome cards in a 2×2 grid on
 * the right. Copy verbatim from the About doc.
 */
export function OurMission() {
  return (
    <section className="bg-[#036261] py-16 md:py-24">
      <Container>
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#f4faf6_0%,#d6e9e2_50%,#a9cabf_100%)] p-8 shadow-xl md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Mission */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold tracking-tight text-teal md:text-5xl">
                Our Mission
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/80">
                We help organisations transform operational and ESG data into
                measurable financial, performance, and compliance outcomes
                through intelligent technology, real-time visibility, and
                specialist expertise.
              </p>
              <p className="mt-8 text-xl font-bold leading-snug text-ink md:text-2xl">
                Turning Real Asset Data Into Measurable Financial Return
              </p>
              <Link
                href="/#products"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                <PlayCircleIcon />
                See Our Products in Action
              </Link>
            </div>

            {/* Outcome cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-2xl bg-[#a7c4c2] p-6 text-center"
                >
                  <Image
                    src={value.icon}
                    alt=""
                    width={400}
                    height={400}
                    sizes="40px"
                    className="h-10 w-10 object-contain"
                  />
                  <h3 className="mt-4 text-lg font-bold leading-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
