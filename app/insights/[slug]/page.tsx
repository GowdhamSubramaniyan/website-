import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { INSIGHTS, getInsightBySlug } from "@/data/insights";

type Params = Promise<{ slug: string }>;

/** Prerender a page for every item in the data array. */
export function generateStaticParams() {
  return INSIGHTS.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsightBySlug(slug);
  if (!item) return { title: "Insight — Vision Zero Connect" };
  return {
    title: `${item.title} — Vision Zero Connect`,
    description: item.excerpt,
  };
}

/**
 * Insight article detail page — resolves an item from the insights data array by
 * slug and renders its hero, meta, and body. Unknown slugs 404. Copy beyond the
 * excerpt is placeholder pending the source doc / CMS.
 */
export default async function InsightArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const item = getInsightBySlug(slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <article>
          {/* Header band */}
          <section className="bg-grad-dark pb-12 pt-32 text-white md:pt-40">
            <Container>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M16 10H4m0 0 4.5-4.5M4 10l4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                All Insights
              </Link>

              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center rounded-pill bg-grad-lime px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  {item.tag ?? (item.category === "news" ? "News" : "Article")}
                </span>
                <span className="text-sm text-white/70">
                  {[item.readTime, item.date, item.author]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                {item.title}
              </h1>
            </Container>
          </section>

          {/* Cover image */}
          <Container className="-mt-8 md:-mt-10">
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Container>

          {/* Body */}
          <Container className="py-14 md:py-20">
            <div className="mx-auto max-w-2xl">
              <p className="text-pretty text-lg leading-relaxed text-ink/80">
                {item.excerpt}
              </p>
              <p className="mt-6 text-pretty text-base leading-relaxed text-ink/70">
                The full article is on its way. In the meantime, explore how
                Vision Zero Connect helps organisations turn operational data
                into stronger asset performance, clearer reporting, and better
                long-term returns.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 border-t border-grey pt-8">
                <Button href="/#contact" variant="dark" withArrow>
                  Talk to Our Team
                </Button>
                <Button href="/insights" variant="ghost">
                  Back to Insights
                </Button>
              </div>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
