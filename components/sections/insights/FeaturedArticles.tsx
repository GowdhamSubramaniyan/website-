import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  type InsightItem,
  getFeaturedArticle,
  getSupportingArticles,
} from "@/data/insights";

/** date | read-time | author meta line. */
function ArticleMeta({ item, tone }: { item: InsightItem; tone: "light" | "dark" }) {
  const color = tone === "dark" ? "text-white/70" : "text-ink/55";
  return (
    <p className={`text-xs ${color}`}>
      {[item.readTime, item.date, item.author].filter(Boolean).join("  |  ")}
    </p>
  );
}

/**
 * Featured Articles (Canva) — on the dark teal band: a large featured spotlight
 * card on the left and a list of supporting article rows on the right, closed by
 * a "Read more" link.
 */
export function FeaturedArticles() {
  const featured = getFeaturedArticle();
  const supporting = getSupportingArticles();

  return (
    <section id="featured" className="bg-[#036261] py-16 text-white md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured Articles
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Featured spotlight */}
          <Reveal>
            <Link
              href={featured.link}
              className="group relative block h-full min-h-[22rem] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-7">
                <span className="inline-flex w-fit items-center rounded-pill bg-black/55 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {featured.tag ?? "Featured"}
                </span>
                <h3 className="max-w-md text-balance text-2xl font-bold leading-snug">
                  {featured.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/80">
                  {featured.excerpt}
                </p>
                <ArticleMeta item={featured} tone="dark" />
              </div>
            </Link>
          </Reveal>

          {/* Supporting list */}
          <div className="flex flex-col">
            <div className="flex flex-col divide-y divide-white/10">
              {supporting.map((item, i) => (
                <Reveal key={item.id} delay={Math.min(i, 3) * 80}>
                  <Link
                    href={item.link}
                    className="group flex items-start gap-4 py-7 first:pt-0 focus-visible:outline-none sm:gap-5"
                  >
                    <div className="relative h-[4.5rem] w-28 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-36">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-balance text-base font-bold leading-snug transition-colors group-hover:text-lime sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
                        {item.excerpt}
                      </p>
                      <ArticleMeta item={item} tone="dark" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 text-right">
              <Link
                href="/insights"
                className="inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-lime hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
              >
                Read more &gt;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
