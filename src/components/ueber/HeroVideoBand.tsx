"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Full-Bleed-Video-Band als Hero der Über-uns-Seite. Zeigt die Firmenfeier an
 * der Elbe, damit Besucher direkt einen Eindruck vom Arbeitsklima bekommen.
 *
 * Der Clip läuft stumm in Schleife und ohne Bedienelemente — reine Kulisse.
 * Die HEVC-Fassung führt eine (nie hörbare) Tonspur mit: avconvert kann sie
 * nicht verwerfen, sie kostet aber nur rund zwei Prozent der Dateigröße.
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
          {/*
            Reihenfolge ist bedeutungstragend: der Browser nimmt die erste
            Quelle, deren `media` passt und deren Codec er beherrscht.

            Mobil steht deshalb bewusst vorn — sonst zöge sich ein iPhone die
            37 MB der HEVC-Fassung über Mobilfunk.

            Am Desktop kommt HEVC vor H.264: gleiche 1080p, aber mit 8,1 statt
            3,3 Mbit/s deutlich sauberer in den bewegten Szenen. Wer HEVC nicht
            kann (v. a. Firefox), fällt still auf die H.264-Fassung zurück.
            Das `codecs="hvc1"` ist keine Kosmetik: ohne den Tag überspringt
            Safari die Quelle.
          */}
          <source
            src="/video/firmenfeier-720.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source
            src="/video/firmenfeier-1080-hevc.mp4"
            type='video/mp4; codecs="hvc1"'
          />
          <source src="/video/firmenfeier-1080.mp4" type="video/mp4" />
        </video>

        {hasCaption && (
          <>
            {/*
              Verdunkelt nur, was die Schrift unterlegt: ab 62 % Höhe ist der
              Verlauf vollständig transparent, das obere Drittel zeigt die
              echten Farben des Videos. Ein Schleier bis zum oberen Rand
              (früher `to-ink/10`) nahm dem Bild sonst überall Sättigung und
              Kontrast, ohne für die Lesbarkeit etwas beizutragen.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 from-0% via-ink/30 via-32% to-transparent to-62%" />
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
