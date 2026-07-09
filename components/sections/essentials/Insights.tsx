import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Insight = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const INSIGHTS: Insight[] = [
  {
    tag: "Technology",
    title: "A Simple Guide to AI-Powered ESG Reporting for SMEs",
    excerpt:
      "How small and medium-sized businesses can stay compliant, build trust, and save time using artificial intelligence…",
    image: "/assets/essentials/insight1.png",
    href: "/#insights",
  },
  {
    tag: "Technology",
    title: "Can AI Predict ESG Risks for Your Business?",
    excerpt:
      "How artificial intelligence is transforming ESG risk management from reactive to truly predictive — especially for SMEs…",
    image: "/assets/essentials/insight2.png",
    href: "/#insights",
  },
  {
    tag: "Technology",
    title: "The Future of ESG Reporting Lies in Artificial Intelligence",
    excerpt:
      "From manual compliance to real-time, predictive, and strategic sustainability — powered by AI…",
    image: "/assets/essentials/insight3.png",
    href: "/#insights",
  },
];

/**
 * Latest ESG Insights (Prompt 10) — white band, heading + subhead, a 3-column
 * row of article cards (image with a tag chip on top, teal-gradient lower half
 * with title + excerpt), and a centered "Explore more" button.
 */
export function Insights() {
  return (
    <section id="insights" className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Latest ESG Insights
          </h2>
          <p className="mt-4 text-base text-ink/70">
            Stay informed with our expert analysis on ESG trends, regulations,
            and best practices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.title} delay={i * 90}>
              <Link
                href={insight.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                <div className="relative">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 768px) 22rem, 90vw"
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute right-4 top-4 rounded-pill border border-white/70 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {insight.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col bg-grad-dark p-6 text-white">
                  <h3 className="text-lg font-bold leading-snug">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {insight.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Explore More &rsaquo;
          </Link>
        </div>
      </Container>
    </section>
  );
}
