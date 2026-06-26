import Link from "next/link";

/**
 * Pill-Badge: kleines blaues Quadrat + Mono-Uppercase-Label, dünner Rand.
 * Mit `href` wird es zum verlinkten Badge (z. B. Ausbildungsbetrieb → /karriere),
 * sonst statisches Label. Optik-Vorlage: TrustBadge.
 */
const BASE =
  "inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-grey-2";

export function Badge({
  label,
  href,
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <span aria-hidden className="inline-block h-[7px] w-[7px] bg-blue" />
      {label}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${BASE} transition-colors hover:border-blue hover:text-ink ${className}`}
      >
        {inner}
      </Link>
    );
  }

  return <span className={`${BASE} ${className}`}>{inner}</span>;
}

/** Reihe aus mehreren Badges mit sauberem Umbruch. */
export function BadgeRow({
  items,
  className = "",
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((b) => (
        <Badge key={b.label} label={b.label} href={b.href} />
      ))}
    </div>
  );
}
