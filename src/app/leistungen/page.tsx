import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/leistungen/Accordion";
import { KontaktCta } from "@/components/sections/KontaktCta";
import { LEISTUNGEN, ABLAUF, FAQ, CONTACT } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Büro- und laufende Reinigung, Praxisreinigung, Wohnanlagen, Gewerbeobjekte, Bauendreinigung und große Einrichtungen in Dresden. Jede Leistung mit klarem Ergebnis.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <SiteShell active="leistungen">
      {/* Hero-Intro */}
      <section className="border-b border-line bg-surface">
        <Container className="py-[64px] md:py-[80px]">
          <Kicker>Leistungen</Kicker>
          <h1 className="mt-5 max-w-[18ch] text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Sechs Bereiche, ein Anspruch
          </h1>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
            Von der wöchentlichen Büroreinigung bis zur terminfesten
            Bauendreinigung. Jede Leistung übersetzen wir in ein Ergebnis, das
            Sie nicht selbst nachhalten müssen.
          </p>
        </Container>
      </section>

      {/* Akkordeon */}
      <Section containerClassName="py-[56px] md:py-[72px]">
        <Accordion items={LEISTUNGEN} />
      </Section>

      {/* Ablauf */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <div className="max-w-[40ch]">
            <Kicker>Ablauf</Kicker>
            <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              So läuft die Übernahme
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABLAUF.map((step) => (
              <div
                key={step.num}
                className="relative border border-line bg-white p-7"
              >
                <span className="font-mono text-[28px] font-semibold text-blue-tint [-webkit-text-stroke:1px_var(--color-blue)]">
                  {step.num}
                </span>
                <h3 className="mt-3 text-[18px] font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-grey-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA nach dem Ablauf */}
      <section className="border-b border-line bg-white">
        <Container className="py-[56px] text-center md:py-[64px]">
          <h2 className="mx-auto max-w-[26ch] text-[clamp(22px,2.8vw,30px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">
            Klingt nach Ihrem Objekt? Lassen Sie uns starten.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] leading-relaxed text-ink-2">
            Schildern Sie uns Objekt, Fläche und Turnus. Sie bekommen ein
            Angebot, Position für Position.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt">Angebot anfragen</Button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[13px] tracking-[0.05em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section>
        <div className="max-w-[40ch]">
          <Kicker>Häufige Fragen</Kicker>
          <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
            Was Auftraggeber oft fragen
          </h2>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="flex gap-3 text-[18px] font-bold text-ink">
                <span aria-hidden className="mt-2 h-[7px] w-[7px] shrink-0 bg-blue" />
                {item.q}
              </h3>
              <p className="mt-2 pl-[19px] text-[15px] leading-relaxed text-ink-2">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <KontaktCta />
    </SiteShell>
  );
}
