/**
 * Motiv 1: L-Ecken aus 2px-Borders in Blau, oben-links + unten-rechts.
 * Erwartet ein `relative` positioniertes Elternelement.
 */
export function RegisterMarks({
  color = "border-blue",
  size = "h-[18px] w-[18px]",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 ${size} border-l-2 border-t-2 ${color}`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 right-0 ${size} border-b-2 border-r-2 ${color}`}
      />
    </>
  );
}
