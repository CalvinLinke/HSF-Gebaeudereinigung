import type { ReactNode } from "react";

/**
 * Oranger Platzhalter-Hinweis für Rechtstexte und unfertige Inhalte.
 */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <div className="border border-dashed border-warn bg-warn-bg p-4 font-mono text-[12px] leading-relaxed text-[#9A3412]">
      {children}
    </div>
  );
}
