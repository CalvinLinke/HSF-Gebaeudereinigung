import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { DiagonalMark } from "@/components/ui/DiagonalMark";
import { Hero } from "@/components/home/Hero";
import { ServiceCard } from "@/components/home/ServiceCard";
import { KontaktCta } from "@/components/sections/KontaktCta";
import { Icon } from "@/lib/icons";
import {
  LEISTUNGEN,
  USPS,
  GROSSOBJEKTE,
  UEBER,
  COMPANY,
  CONTACT,
} from "@/lib/content";
import { buildMetadata, SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "HSF-Gebäudereinigung: Büros, Praxen, Wohnanlagen, Gewerbe und Bauendreinigung in Dresden. Familienbetrieb seit 1988, fester Ansprechpartner, geregelte Vertretung.";

export const metadata = buildMetadata({
  title: "Gebäudereinigung in Dresden",
  description: DESCRIPTION,
  path: "/startseite",
});

const [PLZ, ...ORT] = CONTACT.city.split(" ");
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  description: DESCRIPTION,
  url: `${SITE_URL}/startseite`,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  email: CONTACT.email,
  foundingDate: String(COMPANY.foundedYear),
  areaServed: "Dresden und Umgebung",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    postalCode: PLZ,
    addressLocality: ORT.join(" "),
    addressCountry: "DE",
  },
  openingHours: "Mo-Fr 07:00-17:00",
};

const BAU_CHECKS = [
  "Rückwärtsplanung",
  "Kontrolle pro Etage",
  "Team, das mitwächst",
  "Zugangsmanagement",
];

export default function Startseite() {
  return (
    <SiteShell active="start">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* 1 — Hero (Clean-Reveal, Dark/Light) */}
      <Hero />

      {/* 2 — Leistungen */}
      <Section>
        <div className="text-center">
          <Kicker>Leistungen</Kicker>
          <h2 className="mx-auto mt-4 max-w-[20ch] text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
            Sechs Bereiche, ein Anspruch
          </h2>
        </div>
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {LEISTUNGEN.map((l) => (
            <ServiceCard key={l.id} leistung={l} />
          ))}
        </div>
      </Section>

      {/* 3 — USP-Icon-Band */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
            Was den Unterschied macht
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
            {USPS.map((u) => (
              <div key={u.num} className="flex gap-4">
                <span className="grid h-[42px] w-[42px] shrink-0 place-items-center bg-blue text-white">
                  <Icon name={u.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-ink">{u.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-grey-2">
                    {u.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 — Modul-Reihe */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          {/* Bauträger-Karte */}
          <div className="relative overflow-hidden bg-blue p-9 text-white md:p-11">
            <DiagonalMark className="-right-10 -top-10 h-44 w-44 border-white/20" />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.15em] text-white/70">
              Für Bauträger & große Objekte
            </p>
            <h2 className="relative mt-3 max-w-[18ch] text-[clamp(24px,2.6vw,32px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Bauendreinigung, die den Übergabetermin hält
            </h2>
            <p className="relative mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/85">
              {GROSSOBJEKTE.text1}
            </p>
            <div className="relative mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {BAU_CHECKS.map((c) => (
                <span key={c} className="flex items-center gap-2.5 text-[14px]">
                  <Check className="h-5 w-5 shrink-0 text-white" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Über-uns-Karte */}
          <div className="relative flex flex-col bg-ink p-9 text-white md:p-11">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              Über uns
            </p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(22px,2.2vw,28px)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              {UEBER.anrissTitle}
            </h2>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-grey">
              {UEBER.anriss2}
            </p>
            <Link
              href="/ueber-uns"
              className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-white transition-all hover:gap-3"
            >
              Unsere Geschichte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 5 — Kontakt-CTA */}
      <KontaktCta />
    </SiteShell>
  );
}
