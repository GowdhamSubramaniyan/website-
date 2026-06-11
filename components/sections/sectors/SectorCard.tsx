import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { Sector } from "./sectors.data";

/**
 * Horizontal sector card: building photo on the left, teal text panel on the
 * right. Extends the Card primitive (teal, edge-to-edge media).
 */
export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Card variant="teal" padded={false} className="overflow-hidden">
      <div className="grid h-full grid-cols-[38%_1fr]">
        <div className="relative min-h-[120px]">
          <Image
            src={sector.image}
            alt={sector.name}
            fill
            sizes="(max-width: 640px) 40vw, 220px"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-base font-bold text-lime sm:text-lg">
            {sector.name}
          </h3>
          <p className="mt-1.5 text-sm text-white/80">{sector.descriptor}</p>
        </div>
      </div>
    </Card>
  );
}
