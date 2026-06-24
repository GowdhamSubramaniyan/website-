import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Link target. */
  href?: string;
  /**
   * "color" shows the brand logo as-is (for light surfaces).
   * "white" renders it monochrome white (for dark surfaces / over-hero).
   */
  tone?: "color" | "white";
  /** Height utility for the logo image (default "h-14 sm:h-16"). */
  imageClassName?: string;
};

/** Vision Zero Connect logo (docs/assets/logos/vzc-logo.png → public/vzc-logo.png). */
export function Logo({
  className,
  href = "/",
  tone = "color",
  imageClassName = "h-14 sm:h-16",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Vision Zero Connect — home"
      className={cn(
        "group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src="/vzc-logo.png"
        alt="Vision Zero Connect"
        width={670}
        height={367}
        preload
        className={cn(
          "w-auto transition-transform duration-300 ease-out group-hover:scale-[1.04]",
          imageClassName,
          tone === "white" && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
