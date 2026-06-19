import { COMPANY } from "@/lib/content";

/**
 * Motiv 3: Pill „▪ SEIT 1988" — kleines Quadrat + Mono-Text, dünner Rand.
 */
export function TrustBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-grey-2 ${className}`}
    >
      <span aria-hidden className="inline-block h-[7px] w-[7px] bg-blue" />
      Seit {COMPANY.foundedYear}
    </span>
  );
}
