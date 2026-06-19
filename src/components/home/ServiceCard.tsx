import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icons";
import type { Leistung } from "@/lib/content";

/**
 * Leistungs-Karte mit Hover-Invertierung: bei group-hover wird die ganze Karte
 * blau, Icon-Feld und Texte invertieren auf Weiß.
 */
export function ServiceCard({ leistung }: { leistung: Leistung }) {
  return (
    <Link
      href="/leistungen"
      className="group relative block border border-line bg-white p-7 transition-all hover:-translate-y-[3px] hover:border-blue hover:bg-blue hover:shadow-[0_14px_36px_rgba(20,24,31,.10)]"
    >
      <span className="grid h-12 w-12 place-items-center bg-blue-tint text-blue transition-colors group-hover:bg-white/15 group-hover:text-white">
        <Icon name={leistung.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-[19px] font-bold text-ink transition-colors group-hover:text-white">
        {leistung.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-grey-2 transition-colors group-hover:text-white/85">
        {leistung.card}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-blue transition-all group-hover:gap-3 group-hover:text-white">
        Mehr erfahren
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
