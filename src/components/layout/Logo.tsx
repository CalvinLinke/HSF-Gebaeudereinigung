import Link from "next/link";

/**
 * Logo-Variante A (Lockup) — Standard im Header.
 * Blaues Quadrat „HSF" + 8px-Registermarke unten-rechts; daneben
 * „Gebäudereinigung" über Mono-Tagline.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/startseite"
      aria-label="HSF-Gebäudereinigung — zur Startseite"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center bg-blue">
        <span className="text-[15px] font-extrabold tracking-tight text-white">
          HSF
        </span>
        <span
          aria-hidden
          className="absolute bottom-1 right-1 h-2 w-2 border-b-2 border-r-2 border-white/70"
        />
      </span>
      <span className="leading-none">
        <span className="block text-[17px] font-bold text-ink">
          Gebäudereinigung
        </span>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-grey-2">
          Dresden · seit 1988
        </span>
      </span>
    </Link>
  );
}
