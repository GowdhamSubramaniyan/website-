"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

/**
 * Global site header. Transparent over the hero, then fades to a brand-dark
 * translucent bar on scroll (white text throughout — never a plain white bar).
 * Animates in on load; collapses to a toggle menu on small screens.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        "animate-header-in fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ease-out",
        solid
          ? "border-b border-white/10 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo tone="white" />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-sm pb-1 text-sm font-medium uppercase tracking-wide text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-lime transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          ))}
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
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
