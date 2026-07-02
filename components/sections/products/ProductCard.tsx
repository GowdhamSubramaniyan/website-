import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DownloadDropdown } from "@/components/ui/DownloadDropdown";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";
import type { Product } from "./products.data";

/**
 * A single product card. Extends the Card primitive (dark variant) with the
 * product logo, description, and CTA.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      variant="dark"
      className="h-full w-full gap-5 [background-image:linear-gradient(180deg,#050f0e_0%,#0e413d_100%)]"
    >
      <div className="flex min-h-24 items-center">
        <Image
          src={product.logo.src}
          alt={product.name}
          width={product.logo.width}
          height={product.logo.height}
          className={cn("w-auto", product.logo.className)}
        />
      </div>
      <p className="flex-1 text-sm leading-relaxed text-white/70 sm:text-base">
        {keepHyphens(product.description)}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button href={product.cta.href} variant="primary" withArrow>
          {product.cta.label}
        </Button>
        <DownloadDropdown
          label={`Download ${product.flyer.label}`}
          variant="ghost"
          size="md"
          items={product.flyer.items}
        />
      </div>
    </Card>
  );
}
