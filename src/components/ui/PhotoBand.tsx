import Image from "next/image";
import { Container } from "./Container";

/**
 * Full-Bleed-Foto-Band über die volle Viewport-Breite, mit optionalem
 * Overlay-Text (kicker + title) und Verlauf für Lesbarkeit. Höhe per CSS-Wert
 * (z. B. "clamp(300px,44vw,560px)"). Kein quality-Prop (Next 16 lässt nur den
 * Default zu).
 */
export function PhotoBand({
  src,
  alt,
  kicker,
  title,
  height = "clamp(300px,44vw,560px)",
  position = "object-center",
}: {
  src: string;
  alt: string;
  kicker?: string;
  title?: string;
  height?: string;
  position?: string;
}) {
  const hasCaption = Boolean(kicker || title);
  return (
    <section className="relative bg-ink">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover ${position}`}
        />
        {hasCaption && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <Container className="absolute inset-x-0 bottom-0">
              <div className="pb-8">
                {kicker && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/80">
                    {kicker}
                  </p>
                )}
                {title && (
                  <p className="mt-2 max-w-[26ch] text-[clamp(20px,2.6vw,32px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                    {title}
                  </p>
                )}
              </div>
            </Container>
          </>
        )}
      </div>
    </section>
  );
}
