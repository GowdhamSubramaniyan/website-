"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

// Navigation matches the design (zipteam.my.canva.site … home page).
const NAV_LINKS = [
  { label: "Solutions", href: "#products" },
  { label: "Who We Serve", href: "#sectors" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "#insights" },
  { label: "Partners", href: "#partners" },
] as const;

type HeaderProps = {
  /**
   * Brand shown at top-left. "vzc" (default) renders the Vision Zero Connect
   * logo; "essentials" / "essentials-plus" render the Essentials wordmarks;
   * "portfolio-one" renders the Portfolio One wordmark — each for its respective
   * product page.
   */
  brand?: "vzc" | "essentials" | "essentials-plus" | "portfolio-one";
  /**
   * "light" makes the transparent (unscrolled) header use dark text + logo for
   * light heroes; it flips back to white once the solid dark bar appears on
   * scroll. Defaults to "dark".
   */
  theme?: "dark" | "light";
};

/**
 * Global site header. Transparent over the hero, then fades to a brand-dark
 * translucent bar on scroll (white text throughout — never a plain white bar).
 * Animates in on load; collapses to a toggle menu on small screens.
 */
export function Header({ brand = "vzc", theme = "dark" }: HeaderProps = {}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Route links (e.g. "/about") light up on their page; in-page anchors ("#…")
  // never count as the active route.
  const isActive = (href: string) =>
    href.startsWith("/") &&
    (pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  // Dark text/logo only while the header is transparent over a light hero.
  const onLight = theme === "light" && !solid;

  return (
    <header
      className={cn(
        "animate-header-in fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        onLight ? "text-ink" : "text-white",
        solid
          ? "border-b border-white/10 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        {brand === "essentials" ? (
          <EssentialsWordmark />
        ) : brand === "essentials-plus" ? (
          <EssentialsPlusWordmark onLight={onLight} />
        ) : brand === "portfolio-one" ? (
          <PortfolioOneWordmark />
        ) : (
          <Logo tone={onLight ? "color" : "white"} />
        )}

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-sm pb-1 text-sm font-medium uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  onLight
                    ? "focus-visible:ring-ink hover:text-ink"
                    : "focus-visible:ring-white hover:text-white",
                  active
                    ? onLight
                      ? "text-ink"
                      : "text-white"
                    : onLight
                      ? "text-ink/70"
                      : "text-white/80",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-lime transition-transform duration-300 ease-out group-hover:scale-x-100",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
          <Button href="#contact" variant="ghost">
            Contact Us
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="animate-menu-in border-t border-white/10 bg-ink/95 text-white backdrop-blur-md lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide transition-colors hover:bg-white/10 hover:text-white",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/85",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href="#contact"
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

/** Essentials wordmark — the official white "essentials" logo (over dark hero). */
function EssentialsWordmark() {
  return (
    <Link
      href="/essentials"
      aria-label="Essentials — home"
      className="group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <Image
        src="/assets/essentials/logo-essentials.png"
        alt="Essentials"
        width={3146}
        height={1021}
        preload
        className="h-9 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-10"
      />
    </Link>
  );
}

/**
 * Essentials+ wordmark — the white "essentials+" logo over a dark hero; over a
 * light hero (onLight) it composes the teal "essentials" wordmark + a teal "+".
 */
function EssentialsPlusWordmark({ onLight }: { onLight: boolean }) {
  return (
    <Link
      href="/essentials-plus"
      aria-label="Essentials+ — home"
      className="group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-current"
    >
      {onLight ? (
        <span className="inline-flex items-center gap-1.5">
          <Image
            src="/assets/home/logos/product-essentials-teal.png"
            alt="Essentials+"
            width={3146}
            height={1021}
            preload
            className="h-8 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-9"
          />
          <span className="text-2xl font-bold leading-none text-teal sm:text-3xl">+</span>
        </span>
      ) : (
        <Image
          src="/assets/home/logos/product-essentials-plus.png"
          alt="Essentials+"
          width={4325}
          height={1250}
          preload
          className="h-9 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-10"
        />
      )}
    </Link>
  );
}

/** Portfolio One wordmark — white "PORTFOLIO" + teal "ONE" (over dark hero). */
function PortfolioOneWordmark() {
  return (
    <Link
      href="/portfolio-one"
      aria-label="Portfolio One — home"
      className="group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <Image
        src="/assets/home/logos/product-portfolio-one.png"
        alt="Portfolio One"
        width={4019}
        height={1250}
        preload
        className="h-9 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-10"
      />
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
