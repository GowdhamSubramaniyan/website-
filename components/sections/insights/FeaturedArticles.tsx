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
  const hasSupporting = supporting.length > 0;

  return (
    <section id="featured" className="bg-[#036261] py-16 text-white md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured Articles
          </h2>
        </Reveal>

        <div className={`mt-10 ${hasSupporting ? "grid gap-8 lg:grid-cols-2 lg:items-start" : ""}`}>
          {/* Featured spotlight */}
          <Reveal>
            <Link
              href={featured.link}
              className={`group relative block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261] ${hasSupporting ? "min-h-[14rem] lg:h-[21rem]" : "min-h-[22rem] lg:h-[30rem]"}`}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes={hasSupporting ? "(min-width: 1024px) 44vw, 100vw" : "(min-width: 1024px) 72rem, 100vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-6">
                <span className="inline-flex w-fit items-center rounded-pill bg-black/55 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {featured.tag ?? "Featured"}
                </span>
                <h3 className="max-w-md text-balance text-xl font-bold leading-snug">
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
          {hasSupporting && (
          <div className="flex flex-col lg:h-[21rem]">
            <div className="flex flex-1 flex-col justify-between">
              {supporting.map((item, i) => (
                <Reveal
                  key={item.id}
                  delay={Math.min(i, 3) * 80}
                  className={
                    i > 0 ? "border-t border-white/15 pt-3.5" : undefined
                  }
                >
                  <Link
                    href={item.link}
                    className="group flex items-start gap-3.5 focus-visible:outline-none sm:gap-4"
                  >
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="120px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-balance text-sm font-bold leading-snug transition-colors group-hover:text-lime sm:text-[0.95rem]">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                        {item.excerpt}
                      </p>
                      <ArticleMeta item={item} tone="dark" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-4 text-right">
              <Link
                href="/insights"
                className="inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-lime hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#036261]"
              >
                Read more &gt;
              </Link>
            </div>
          </div>
          )}
        </div>
      </Container>
    </section>
  );
}
