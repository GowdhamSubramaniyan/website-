import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Zero Connect — Real Asset Intelligence",
  description:
    "Operational intelligence and ESG reporting that turns real asset data into measurable commercial outcomes.",
  verification: {
    // Renders <meta name="google-site-verification" ...> for Search Console.
    google: "welmW663gxq-Ej8vSsLx2DRSIKfNF4ZDxg1Hb2nMxsg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        {/* Zoho PageSense — web analytics, heatmaps & A/B testing (EU data center) */}
        <Script
          src="https://cdn-eu.pagesense.io/js/visionzeroconnect/dbcc4aa084904cb2a4454823a0e37001.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
