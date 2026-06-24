import { SectorDetail } from "./SectorDetail";
import { SECTOR_DETAILS } from "./sectorDetails.data";

/** Renders one SectorDetail spotlight per sector, alternating sides/backgrounds. */
export function SectorDetails() {
  return (
    <>
      {SECTOR_DETAILS.map((sector, i) => (
        <SectorDetail key={sector.slug} sector={sector} index={i} />
      ))}
    </>
  );
}
