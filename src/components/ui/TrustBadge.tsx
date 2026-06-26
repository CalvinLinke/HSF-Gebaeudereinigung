import { COMPANY } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

/**
 * Motiv 3: Pill „▪ SEIT 1988" — kleines Quadrat + Mono-Text, dünner Rand.
 */
export function TrustBadge({ className = "" }: { className?: string }) {
  return <Badge label={`Seit ${COMPANY.foundedYear}`} className={className} />;
}
