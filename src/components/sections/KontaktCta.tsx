import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagonalMark } from "@/components/ui/DiagonalMark";
import { KONTAKT_CTA, CONTACT } from "@/lib/content";

/**
 * Wiederkehrender Kontakt-CTA — dunkles Band am Seitenende.
 */
export function KontaktCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <DiagonalMark className="-right-16 top-1/2 h-56 w-56 -translate-y-1/2 border-white/10" />
      <Container className="relative py-[72px] text-center md:py-[84px]">
        <h2 className="mx-auto max-w-[22ch] text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
          {KONTAKT_CTA.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[16px] leading-relaxed text-grey">
          {KONTAKT_CTA.text}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/kontakt">Angebot anfragen</Button>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 font-mono text-[13px] tracking-[0.05em] text-white transition-colors hover:bg-white hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
