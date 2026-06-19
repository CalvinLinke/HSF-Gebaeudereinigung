"use client";

import Link from "next/link";
import { useConsent } from "./ConsentProvider";

export function CookieBanner() {
  const { ready, consent, accept, decline } = useConsent();

  if (!ready || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink text-white"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[70ch]">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
            <span aria-hidden className="inline-block h-[7px] w-[7px] bg-blue" />
            Cookies & Karte
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-grey">
            Wir verwenden technisch notwendige Cookies. Für die Google-Maps-Karte
            auf der Kontaktseite binden wir einen externen Dienst ein, der erst
            nach Ihrer Zustimmung geladen wird. Mehr dazu in der{" "}
            <Link
              href="/datenschutz"
              className="text-white underline underline-offset-2 hover:text-blue-tint"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={decline}
            className="border border-white/30 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={accept}
            className="bg-blue px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
