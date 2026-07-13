import Image from "next/image";
import type { ReactNode } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";

type UspImage = { src: string; alt: string; width: number; height: number };

type UspBlockProps = {
  headline: ReactNode;
  paragraphs: string[];
  cta: { label: string; href: string };
  image: UspImage;
  /** Place the image on the left (text on the right). */
  reverse?: boolean;
  /** Crop a landscape source into a portrait frame. */
  portrait?: boolean;
  /** Render the image as a 16:9 video thumbnail with a play button. */
  video?: boolean;
  /** Video file played when the thumbnail is clicked (requires `video`). */
  videoSrc?: string;
  /** YouTube id played when the thumbnail is clicked (requires `video`). */
  videoYoutubeId?: string;
};

function UspBlock({ headline, paragraphs, cta, image, reverse, portrait, video, videoSrc, videoYoutubeId }: UspBlockProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(reverse && "lg:order-2 lg:-ml-6 xl:-ml-10")}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-display-sm">
          {headline}
        </h2>
        <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70 sm:text-base">
          {paragraphs.map((p) => (
            <p key={p}>{keepHyphens(p)}</p>
          ))}
        </div>
        <div className="mt-7">
          <Button href={cta.href} variant="primary" withArrow>
            {cta.label}
          </Button>
        </div>
      </Reveal>

      <Reveal delay={150} className={cn(reverse && "lg:order-1")}>
        {video ? (
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <VideoEmbed
              youtubeId={videoYoutubeId}
              src={videoSrc}
              poster={image.src}
              posterAlt={image.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "w-full rounded-2xl object-cover shadow-2xl",
              portrait
                ? "mx-auto aspect-[4/5] h-auto max-w-[20rem]"
                : "h-full",
            )}
          />
        )}
      </Reveal>
    </div>
  );
}

/** Two stacked value-proposition blocks on a near-black surface. */
export function USP() {
  return (
    <SectionWrapper background="ink">
      <div className="space-y-20 md:space-y-28">
        <UspBlock
          reverse
          portrait
          headline={
            <>
              <span className="block text-xl font-bold leading-snug text-lime sm:text-2xl md:text-3xl">
                Vision Zero recognise the importance of each report
              </span>
              <span className="mt-2 block text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                That&rsquo;s why our unrivalled reporting functions deliver
                measurable business value, as standard
              </span>
            </>
          }
          paragraphs={[
            "Most ESG platforms focus on disclosure. Vision Zero Connect integrates reporting with operational performance, asset optimisation, and financial outcomes.",
            "From emissions visibility and compliance readiness to energy optimisation, portfolio performance, financing alignment, and long-term asset strategy, Vision Zero Connect helps organisations turn data into measurable business value.",
          ]}
          cta={{ label: "Select a Product", href: "/#products" }}
          image={{
            src: "/assets/home/usp-team.png",
            alt: "Business team meeting outside a modern office",
            width: 1920,
            height: 1080,
          }}
        />
      </div>
    </SectionWrapper>
  );
}
