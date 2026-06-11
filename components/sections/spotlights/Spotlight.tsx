import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export type SpotlightContent = {
  id: string;
  background: "white" | "mint" | "dark";
  /** Optional eyebrow text (over the copy column). */
  eyebrow?: string;
  /** Product logo (over the image column). Teal on light bg, white on dark bg. */
  logo: { src: string; width: number; height: number; className: string };
  heading: string;
  paragraphs: string[];
  cta: { label: string; href: string; variant: "primary" | "dark" };
  image: { src: string; alt: string; width: number; height: number };
  /** Place the image on the left (text on the right). */
  reverse?: boolean;
};

/**
 * Shared product-spotlight layout: a header row (eyebrow + product logo) above
 * an image/text content row in alternating columns. All four spotlight sections
 * render this and differ only by content props.
 */
export function Spotlight({
  id,
  background,
  eyebrow,
  logo,
  heading,
  paragraphs,
  cta,
  image,
  reverse,
}: SpotlightContent) {
  const onDark = background === "dark";

  return (
    <SectionWrapper id={id} background={background}>
      {/* Header: eyebrow over the copy column, logo over the image column */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span
            className={cn(
              "text-base font-semibold sm:text-lg",
              reverse && "order-2",
              onDark ? "text-white/80" : "text-ink",
            )}
          >
            {eyebrow}
          </span>
          <Image
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className={cn("w-auto", logo.className, reverse && "order-1")}
          />
        </div>
      </Reveal>

      {/* Content */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <h2
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-display-sm",
              onDark ? "text-lime" : "text-teal",
            )}
          >
            {heading}
          </h2>
          <div
            className={cn(
              "mt-5 space-y-4 text-base leading-relaxed sm:text-lg",
              onDark ? "text-white/75" : "text-ink/75",
            )}
          >
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-7">
            <Button href={cta.href} variant={cta.variant} withArrow>
              {cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className={cn(reverse && "lg:order-1")}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl object-cover shadow-2xl"
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
