import type { ReactNode } from "react";

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-blue ${className}`}
    >
      <span aria-hidden className="inline-block h-[6px] w-[6px] bg-blue" />
      {children}
    </span>
  );
}
