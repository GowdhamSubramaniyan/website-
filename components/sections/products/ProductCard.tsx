import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Product } from "./products.data";

/**
 * A single product card. Extends the Card primitive (dark variant) with the
 * product logo, description, and CTA.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant="dark" className="h-full w-full gap-5">
      <div className="flex min-h-14 items-center">
        <Image
          src={product.logo.src}
          alt={product.name}
          width={product.logo.width}
          height={product.logo.height}
          className={cn("w-auto", product.logo.className)}
        />
      </div>
      <p className="flex-1 text-sm leading-relaxed text-white/70 sm:text-base">
        {product.description}
      </p>
      <Button
        href={product.cta.href}
        variant="primary"
        withArrow
        className="self-start"
      >
        {product.cta.label}
      </Button>
    </Card>
  );
}
