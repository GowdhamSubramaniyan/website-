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
              {item.body && item.body.length > 0 ? (
                <div className="space-y-6">
                  {item.body.map((block, i) => {
                    switch (block.kind) {
                      case "h2":
                        return (
                          <h2
                            key={i}
                            className="pt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
                          >
                            {block.text}
                          </h2>
                        );
                      case "h3":
                        return (
                          <h3
                            key={i}
                            className="pt-2 text-xl font-bold tracking-tight text-teal"
                          >
                            {block.text}
                          </h3>
                        );
                      case "ul":
                        return (
                          <ul key={i} className="grid gap-2.5 pl-1">
                            {block.items.map((li) => (
                              <li
                                key={li}
                                className="flex items-start gap-3 text-base leading-relaxed text-ink/75"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                                />
                                <span>{li}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      case "em":
                        return (
                          <p
                            key={i}
                            className="text-pretty text-lg font-medium italic leading-relaxed text-ink"
                          >
                            {block.text}
                          </p>
                        );
                      case "highlight":
                        return (
                          <div
                            key={i}
                            className="my-10 rounded-[22px] bg-[#006261] px-6 py-12 text-center sm:px-12 lg:-mx-20"
                          >
                            <p className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                              {block.text}
                            </p>
                          </div>
                        );
                      case "outcomes":
                        return (
                          <div key={i} className="my-10 lg:-mx-20">
                            <h3 className="mb-8 text-center text-xl font-semibold leading-snug text-[#17352c] sm:text-2xl">
                              {block.heading}
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                              {block.items.map((it, idx) => (
                                <div
                                  key={it}
                                  className="rounded-[18px] border border-[#dde7e3] bg-white p-6 shadow-[0_12px_30px_rgba(0,98,97,0.06)] transition-transform duration-200 hover:-translate-y-1"
                                >
                                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#006261] text-xs font-bold text-white">
                                    {String(idx + 1).padStart(2, "0")}
                                  </span>
                                  <p className="text-base font-bold leading-snug text-[#17352c]">
                                    {it}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      case "quote":
                        return (
                          <div
                            key={i}
                            className="my-12 rounded-3xl bg-[#17352c] px-6 py-14 text-center sm:px-12 lg:-mx-20"
                          >
                            <p className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                              {block.heading}
                            </p>
                            {block.text && (
                              <p className="mt-4 text-lg font-medium leading-relaxed text-[#d8ecea] sm:text-2xl">
                                {block.text}
                              </p>
                            )}
                          </div>
                        );
                      case "final":
                        return (
                          <div
                            key={i}
                            className="my-12 rounded-3xl bg-[#006261] px-6 py-14 text-center sm:px-12 lg:-mx-20"
                          >
                            {block.lines.map((line, idx) =>
                              line.big ? (
                                <p
                                  key={idx}
                                  className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white sm:text-4xl [&:not(:last-child)]:mb-7"
                                >
                                  {line.text}
                                </p>
                              ) : (
                                <p key={idx} className="mb-4 text-base text-[#d7ecea]">
                                  {line.text}
                                </p>
                              ),
                            )}
                          </div>
                        );
                      case "cta":
                        return (
                          <div key={i} className="my-12 lg:-mx-20">
                            <div className="flex flex-col items-start justify-between gap-6 rounded-[22px] bg-[#17352c] px-8 py-11 sm:flex-row sm:items-center">
                              <div className="max-w-xl">
                                <p className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                                  {block.heading}
                                </p>
                                <p className="mt-3 text-base leading-relaxed text-[#d7ecea]">
                                  {block.text}
                                </p>
                              </div>
                              <a
                                href={block.href}
                                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-[#006261] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17352c]"
                              >
                                {block.label}
                              </a>
                            </div>
                          </div>
                        );
                      case "sources":
                        return (
                          <div key={i} className="pt-6">
                            <h3 className="text-base font-bold tracking-tight text-ink">
                              {block.heading}
                            </h3>
                            <ul className="mt-3 grid gap-2">
                              {block.items.map((src) => (
                                <li key={src.href}>
                                  <a
                                    href={src.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm leading-relaxed text-teal underline underline-offset-2 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                                  >
                                    {src.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      default:
                        return (
                          <p
                            key={i}
                            className="text-pretty text-base leading-relaxed text-ink/80"
                          >
                            {block.text}
                          </p>
                        );
                    }
                  })}
                </div>
              ) : (
                <>
                  <p className="text-pretty text-lg leading-relaxed text-ink/80">
                    {item.excerpt}
                  </p>
                  <p className="mt-6 text-pretty text-base leading-relaxed text-ink/70">
                    The full article is on its way. In the meantime, explore how
                    Vision Zero Connect helps organisations turn operational data
                    into stronger asset performance, clearer reporting, and better
                    long-term returns.
                  </p>
                </>
              )}

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
