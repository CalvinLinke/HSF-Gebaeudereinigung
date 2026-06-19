import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Accordion } from "@/components/leistungen/Accordion";
import { KontaktCta } from "@/components/sections/KontaktCta";
import { LEISTUNGEN, ABLAUF, FAQ } from "@/lib/content";

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
