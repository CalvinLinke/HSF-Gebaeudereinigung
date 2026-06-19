/**
 * Motiv 2: 45°-rotiertes Quadrat mit dünnem Rand, dezent in dunklen/farbigen
 * Sektionen. Positionierung über `className` (Eltern = `relative overflow-hidden`).
 */
export function DiagonalMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute rotate-45 border ${className}`}
    />
  );
}
