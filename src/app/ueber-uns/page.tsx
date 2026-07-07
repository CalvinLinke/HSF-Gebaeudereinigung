import Image from "next/image";
import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { KontaktCta } from "@/components/sections/KontaktCta";
import { BadgeRow } from "@/components/ui/Badge";
import { Icon } from "@/lib/icons";
import { UEBER, STATS, CREDENTIALS } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Über uns",
  description:
    "HSF-Gebäudereinigung: Familienbetrieb in dritter Generation, seit 1988 in Dresden. Feste Ansprechpartner, geregelte Vertretung, Qualitätskontrolle nach Checkliste.",
  path: "/ueber-uns",
});

const KENNZAHLEN = STATS.slice(0, 3);

export default function UeberUnsPage() {
  return (
    <SiteShell active="ueber">
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="grid items-center gap-12 py-[64px] md:py-[80px] lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Kicker>{UEBER.kicker}</Kicker>
            <h1 className="mt-5 max-w-[16ch] text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
              {UEBER.headline}
            </h1>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-ink-2">
              {UEBER.intro}
            </p>
            <BadgeRow items={CREDENTIALS} className="mt-7" />
          </div>

          {/* Kennzahl-Panel */}
          <div className="relative bg-white p-8 shadow-[0_14px_36px_rgba(20,24,31,.08)]">
            <RegisterMarks />
            <div className="divide-y divide-line">
              {KENNZAHLEN.map((k) => (
                <div
                  key={k.label}
                  className="flex items-baseline gap-5 py-5 first:pt-0 last:pb-0"
                >
                  <span className="w-[5.5rem] shrink-0 font-mono text-[30px] font-semibold leading-none text-blue">
                    {k.value}
                  </span>
                  <span className="text-[15px] leading-snug text-grey-2">
                    {k.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Geschichte-Timeline */}
      <Section>
        <div className="max-w-[40ch]">
          <Kicker>Geschichte</Kicker>
          <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
            Gewachsen, nicht zusammengekauft
          </h2>
        </div>
        <div className="mt-10 border-t border-line">
          {UEBER.timeline.map((row) => (
            <div
              key={row.jahr}
              className="grid gap-2 border-b border-line py-7 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-blue">
                {row.jahr}
              </span>
              <p className="max-w-[68ch] text-[16px] leading-relaxed text-ink-2">
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Verlaufs-Band: gewachsen, zusammen */}
      <PhotoBand
        src="/Fotos/TeamFrauen.jpg"
        alt="Team der HSF-Gebäudereinigung mit Blick auf die Dresdner Altstadt"
        kicker="Seit 1988 in Dresden"
        title="Gewachsen — und zusammengeblieben"
        height="clamp(320px,46vw,600px)"
      />

      {/* Wie wir arbeiten */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <div className="max-w-[40ch]">
            <Kicker>Arbeitsweise</Kicker>
            <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Wie wir arbeiten
            </h2>
          </div>
          <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {UEBER.arbeitsweise.map((a) => (
              <div key={a.title} className="border border-line bg-white p-7">
                <span className="grid h-12 w-12 place-items-center bg-blue-tint text-blue">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-grey-2">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team-Platzhalter */}
      <Section>
        <div className="max-w-[44ch]">
          <Kicker>Team</Kicker>
          <h2 className="mt-4 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
            Die Menschen hinter den Objekten
          </h2>
        </div>
        {/* Geschäftsführung & Leitung — gemeinsames Foto */}
        <div className="mt-10 grid overflow-hidden border border-line bg-white lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="/Fotos/fuehrung.jpg"
              alt="Geschäftsführung und Objektleitung der HSF-Gebäudereinigung: Frau Sperling, Max und Jens Freudenberg"
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-7 md:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
              Geschäftsführung &amp; Leitung
            </p>
            <ul className="divide-y divide-line">
              {UEBER.team
                .filter((member) => !member.group)
                .map((member) => (
                  <li key={member.name} className="py-3 first:pt-0 last:pb-0">
                    <h3 className="text-[16px] font-bold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-grey">
                      {member.rolle}
                    </p>
                  </li>
                ))}
            </ul>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-grey-2">
              v. l. n. r. Frau Sperling · Max &amp; Jens Freudenberg
            </p>
          </div>
        </div>

        {/* Reinigungsteams */}
        <div className="mt-6">
          <PhotoBand
            src="/Fotos/reinigungsteams.jpg"
            alt="Reinigungsteams der HSF-Gebäudereinigung in Dresden"
            kicker="Unsere Reinigungsteams"
            title="Geschultes Personal, das Ihr Objekt kennt"
            height="clamp(260px,34vw,440px)"
          />
        </div>
      </Section>

      <KontaktCta />
    </SiteShell>
  );
}
