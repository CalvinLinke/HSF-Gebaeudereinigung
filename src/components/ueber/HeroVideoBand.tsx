"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Full-Bleed-Video-Band als Hero der Über-uns-Seite. Zeigt die Firmenfeier an
 * der Elbe, damit Besucher direkt einen Eindruck vom Arbeitsklima bekommen.
 *
 * Der Clip hat keine Tonspur (beim Encoden entfernt) und läuft stumm in
 * Schleife — ohne Ton kein Bedienelement, das Band bleibt reine Kulisse.
 *
 * Statt `autoPlay` wird bewusst per Effekt gestartet: nur so lässt sich
 * `prefers-reduced-motion` respektieren, ohne dass vorher kurz Bewegung
 * aufblitzt. Ohne JS bleibt das Poster stehen.
 */
export function HeroVideoBand({
  kicker,
  title,
  subtitle,
  // 16:9 bräuchte bei voller Breite 56vw Höhe. 62vw liegt darüber, das Bild
  // wird also bis ~1390px Breite ungeschnitten gezeigt; erst darüber greift
  // der Deckel von 860px und beschneidet oben/unten wieder etwas.
  height = "clamp(460px,62vw,860px)",
}: {
  kicker?: string;
  title?: string;
  subtitle?: string;
  height?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // Nur abspielen, solange das Band sichtbar ist — spart Akku und Daten,
    // wenn der Besucher weiter unten liest.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay kann trotz muted abgelehnt werden (z. B. Datensparmodus).
          // Dann bleibt schlicht das Poster stehen.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const hasCaption = Boolean(kicker || title || subtitle);

  return (
    <section className="relative bg-ink">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/firmenfeier-poster.jpg"
          aria-label="Sommerfest der HSF-Gebäudereinigung an der Elbe in Dresden: das Team stößt gemeinsam an."
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/video/firmenfeier-720.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/video/firmenfeier-1080.mp4" type="video/mp4" />
        </video>

        {hasCaption && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
            <Container className="absolute inset-x-0 bottom-0">
              <div className="pb-9 md:pb-11">
                {kicker && (
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white/80">
                    <span
                      aria-hidden
                      className="inline-block h-[7px] w-[7px] bg-white/80"
                    />
                    {kicker}
                  </p>
                )}
                {title && (
                  <p className="mt-3 max-w-[24ch] text-[clamp(24px,3.4vw,40px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                    {title}
                  </p>
                )}
                {subtitle && (
                  <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-white/80">
                    {subtitle}
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
