import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";

export type SpotlightContent = {
  id: string;
  background: "white" | "mint" | "dark" | "grey";
  /** z-index class — higher sections overlap onto the (lower) section below. */
  z: string;
  /** Optional eyebrow text (over the copy column). */
  eyebrow?: string;
  /** Product logo (over the image column). Teal on light bg, white on dark bg. */
  logo: { src: string; width: number; height: number; className: string };
  heading: string;
  paragraphs: string[];
  cta: { label: string; href: string; variant: "primary" | "dark" };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Angled dashboard mockup that enlarges, bleeds off the outer edge, and
     *  overlaps down onto the next section. */
    bleed?: boolean;
    /** Width override for the bleed image (default w-[82%] xl:w-[74%]). */
    bleedWidth?: string;
    /** Class override for the non-bleed (photo) image (default w-full). */
    className?: string;
  };
  /** Place the image on the left (text on the right). */
  reverse?: boolean;
};

export function Spotlight({
  id,
  background,
  z,
  eyebrow,
  logo,
  heading,
  paragraphs,
  cta,
  image,
  reverse,
}: SpotlightContent) {
  const onDark = background === "dark";

  const copy = (
    <>
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm",
          onDark ? "text-lime" : "text-teal",
        )}
      >
        {heading}
      </h2>
      <div
        className={cn(
          "mt-5 space-y-4 text-base leading-relaxed sm:text-lg",
          onDark ? "text-white/75" : "text-ink/80",
        )}
      >
        {paragraphs.map((p) => (
          <p key={p}>{keepHyphens(p)}</p>
        ))}
      </div>
      <div className="mt-8">
        <Button
          href={cta.href}
          variant={cta.variant}
          size="lg"
          className="font-semibold uppercase tracking-wide"
        >
          {cta.label}
        </Button>
      </div>
    </>
  );

  return (
    <SectionWrapper
      id={id}
      background={background}
      className={cn("relative", z, image.bleed && "lg:min-h-[44rem]")}
    >
      {/* Header: eyebrow over the copy column, logo over the image column */}
      <Reveal>
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <span
            className={cn(
              "text-lg font-bold sm:text-xl",
              reverse && "order-2",
              onDark ? "text-white" : "text-ink",
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

      {image.bleed ? (
        <>
          {/* Copy — constrained so the absolute image has room */}
          <Reveal className={cn("relative z-10 mt-8 lg:w-[42%]", reverse && "lg:ml-auto")}>
            {copy}
          </Reveal>

          {/* Image on mobile (in flow) */}
          <div className="mt-10 lg:hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          {/* Image on desktop — large, top-anchored below the header so it
              bleeds off the edge and overlaps down onto the next section */}
          <div
            className={cn(
              "pointer-events-none absolute top-[9rem] hidden lg:block",
              image.bleedWidth ?? "w-[82%] xl:w-[74%]",
              reverse ? "right-[45%]" : "left-[45%]",
            )}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              sizes="60vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </>
      ) : (
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse && "lg:order-2")}>{copy}</Reveal>
          <Reveal delay={150} className={cn(reverse && "lg:order-1")}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "h-auto rounded-2xl object-cover shadow-2xl",
                image.className ?? "w-full",
              )}
            />
          </Reveal>
        </div>
      )}
    </SectionWrapper>
  );
}
