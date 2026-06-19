import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Standard-Sektion: vertikaler Rhythmus py-[72px] md:py-[84px], optional durch
 * eine obere Trennlinie (border-t border-line) abgesetzt.
 */
export function Section({
  children,
  className = "",
  containerClassName = "",
  divider = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  divider?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${divider ? "border-t border-line " : ""}${className}`}
    >
      <Container className={`py-[72px] md:py-[84px] ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
}
