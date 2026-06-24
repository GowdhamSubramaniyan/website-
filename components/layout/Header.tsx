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
  // About page is hidden for now — shown in the nav but inert (no scroll/navigation).
  { label: "About Us", href: "#" },
  { label: "Insights", href: "#insights" },
  { label: "Partners", href: "#partners" },
] as const;

type HeaderProps = {
  /**
   * Brand shown at top-left. "vzc" (default) renders the Vision Zero Connect
   * logo; "essentials" renders the Essentials wordmark; "portfolio-one" renders
   * the Portfolio One wordmark — each for its respective product page.
   */
  brand?: "vzc" | "essentials" | "portfolio-one" | "vz-consult";
  /**
   * Use the light treatment (dark text + dark logo, white bar on scroll) for
   * pages with a light hero. Implied for the VZC Consult page.
   */
  light?: boolean;
};

/**
 * Global site header. Transparent over the hero, then fades to a brand-dark
 * translucent bar on scroll (white text throughout — never a plain white bar).
 * Animates in on load; collapses to a toggle menu on small screens.
 */
export function Header({ brand = "vzc", light: lightProp = false }: HeaderProps = {}) {
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
  // Light hero pages (VZC Consult, Awards, …) use dark text/logo and a light
  // bar on scroll rather than the white-on-dark default.
  const light = lightProp || brand === "vz-consult";

  return (
    <header
      className={cn(
        "animate-header-in fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        light ? "text-ink" : "text-white",
        solid
          ? light
            ? "border-b border-grey bg-white/90 shadow-lg shadow-black/5 backdrop-blur-md"
            : "border-b border-white/10 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-24 items-center justify-between">
        {brand === "essentials" ? (
          <EssentialsWordmark />
        ) : brand === "portfolio-one" ? (
          <PortfolioOneWordmark />
        ) : brand === "vz-consult" ? (
          <ConsultWordmark />
        ) : (
          <Logo
            tone={light ? "color" : "white"}
            imageClassName={cn("h-16 sm:h-20", light && "brightness-0")}
          />
        )}

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-sm pb-1 text-sm font-medium uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  light ? "focus-visible:ring-teal" : "focus-visible:ring-white",
                  active
                    ? light ? "text-ink" : "text-white"
                    : light ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white",
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
          className={cn(
            "inline-flex items-center justify-center rounded-md p-2 transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden focus-visible:outline-none focus-visible:ring-2",
            light ? "focus-visible:ring-teal" : "focus-visible:ring-white",
          )}
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
          className={cn(
            "animate-menu-in border-t backdrop-blur-md lg:hidden",
            light ? "border-grey bg-white/95 text-ink" : "border-white/10 bg-ink/95 text-white",
          )}
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "#") e.preventDefault();
                    setMenuOpen(false);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide transition-colors",
                    light ? "hover:bg-ink/5 hover:text-ink" : "hover:bg-white/10 hover:text-white",
                    active
                      ? light ? "bg-ink/10 text-ink" : "bg-white/10 text-white"
                      : light ? "text-ink/80" : "text-white/85",
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

/** VZC Consult wordmark — the consult logo rendered dark for the light header. */
function ConsultWordmark() {
  return (
    <Link
      href="/vz-consult"
      aria-label="VZC Consult — home"
      className="group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    >
      <Image
        src="/assets/home/logos/product-vzc-consult.png"
        alt="VZC Consult"
        width={335}
        height={183}
        preload
        className="h-12 w-auto brightness-0 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
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
