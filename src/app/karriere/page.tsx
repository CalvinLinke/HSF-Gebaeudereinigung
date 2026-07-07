import { buildMetadata } from "@/lib/site";
import { Check, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { Icon } from "@/lib/icons";
import { BewerbungFunnel } from "@/components/karriere/BewerbungFunnel";
import { KARRIERE, CONTACT } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Karriere",
  description:
    "Arbeiten bei HSF-Gebäudereinigung in Dresden: geregelte Zeiten, faire und pünktliche Bezahlung, eingespieltes Team. Offene Stellen für Reinigungskräfte, künftig auch Ausbildung zum Gebäudereiniger (voraussichtlich ab 2027).",
  path: "/karriere",
});

export default function KarrierePage() {
  return (
    <SiteShell active="karriere">
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-[64px] md:py-[80px]">
          <Kicker>{KARRIERE.kicker}</Kicker>
          <h1 className="mt-5 max-w-[20ch] text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            {KARRIERE.headline}
          </h1>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
            {KARRIERE.intro}
          </p>
        </Container>
      </section>

      {/* Team-Foto-Band */}
      <PhotoBand
        src="/Fotos/team-frauen-haende.jpg"
        alt="Team der HSF-Gebäudereinigung feiert gemeinsam in Dresden"
        kicker="Karriere bei HSF"
        title="Werde Teil des Teams"
        height="clamp(440px,62vw,820px)"
      />

      {/* Vorteile */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KARRIERE.vorteile.map((v) => (
            <div key={v.title} className="border border-line bg-white p-7">
              <span className="grid h-12 w-12 place-items-center bg-blue-tint text-blue">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-grey-2">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offene Stellen */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <div className="max-w-[40ch]">
            <Kicker>Offene Stellen</Kicker>
            <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Wo wir Verstärkung suchen
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {KARRIERE.stellen.map((stelle) => (
              <div
                key={stelle.title}
                className="flex flex-col border border-line bg-white p-8"
              >
                <div className="flex flex-wrap gap-2">
                  {stelle.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-grey-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-[21px] font-bold text-ink">
                  {stelle.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {stelle.text}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {stelle.anforderungen.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 text-[14px] text-grey-2"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${CONTACT.emailHref}?subject=${encodeURIComponent(
                    stelle.mailtoSubject,
                  )}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 bg-blue px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:gap-3 hover:bg-blue-dark"
                >
                  Jetzt bewerben
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bewerbung */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <Kicker>Bewerbung</Kicker>
            <h2 className="mt-4 max-w-[20ch] text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              {KARRIERE.bewerbungTitle}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-ink-2">
              {KARRIERE.bewerbungText}
            </p>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-grey-2">
              {KARRIERE.bewerbungHinweis}
            </p>
          </div>

          {/* Mehrstufiger Bewerbungs-Funnel */}
          <BewerbungFunnel />
        </div>
      </Section>
    </SiteShell>
  );
}
