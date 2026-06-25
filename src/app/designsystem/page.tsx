import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { DiagonalMark } from "@/components/ui/DiagonalMark";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Logo } from "@/components/layout/Logo";
import { ServiceCard } from "@/components/home/ServiceCard";
import MAP, { Icon } from "@/lib/icons";
import { LEISTUNGEN } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Designsystem",
  description:
    "Style-Guide der HSF-Gebäudereinigung: Logo-Varianten, Farben, Typografie, Komponenten, Icons und wiederkehrende Motive.",
  path: "/designsystem",
  index: false,
});

const COLORS = [
  { name: "blue", hex: "#1B4D8C" },
  { name: "blue-dark", hex: "#143C6E" },
  { name: "blue-tint", hex: "#EAF0F8" },
  { name: "ink", hex: "#14181F" },
  { name: "ink-2", hex: "#3A424E" },
  { name: "grey", hex: "#8A929E" },
  { name: "grey-2", hex: "#5A6373" },
  { name: "line", hex: "#E2E6EC" },
  { name: "surface", hex: "#F2F4F7" },
  { name: "warn", hex: "#C2410C" },
  { name: "warn-bg", hex: "#FFF7ED" },
];

function GuideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">
      {children}
    </h2>
  );
}

/* Logo-Variante B — Monogramm */
function LogoMonogramm() {
  return (
    <div className="inline-flex flex-col items-start gap-2">
      <div className="flex">
        {["H", "S", "F"].map((c, i) => (
          <span
            key={c}
            className={`grid h-10 w-10 place-items-center border border-ink text-[15px] font-extrabold ${
              i === 1 ? "border-blue bg-blue text-white" : "text-ink"
            } ${i > 0 ? "-ml-px" : ""}`}
          >
            {c}
          </span>
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-grey-2">
        Gebäudereinigung
      </span>
    </div>
  );
}

/* Logo-Variante C — Akzentkante */
function LogoAkzentkante() {
  return (
    <div className="inline-flex flex-col items-start">
      <span className="text-[34px] font-extrabold leading-none tracking-tight text-ink">
        HSF
      </span>
      <span className="mt-1.5 h-[3px] w-16 -skew-x-[30deg] bg-blue" />
      <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-grey-2">
        Gebäudereinigung · Dresden
      </span>
    </div>
  );
}

export default function DesignsystemPage() {
  return (
    <SiteShell active="">
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-[64px] md:py-[80px]">
          <Kicker>Designsystem</Kicker>
          <h1 className="mt-5 max-w-[20ch] text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Bausteine der Marke
          </h1>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
            Eckig, ruhig, Blau sparsam. Diese Seite zeigt Logo-Varianten,
            Farben, Typografie, Komponenten und die wiederkehrenden Motive.
          </p>
        </Container>
      </section>

      {/* Logos */}
      <Section>
        <Kicker>Logo</Kicker>
        <GuideHeading>Drei Varianten</GuideHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="flex min-h-[160px] items-center justify-center border border-line bg-white p-8">
            <Logo />
          </div>
          <div className="flex min-h-[160px] items-center justify-center border border-line bg-white p-8">
            <LogoMonogramm />
          </div>
          <div className="flex min-h-[160px] items-center justify-center border border-line bg-white p-8">
            <LogoAkzentkante />
          </div>
        </div>
        <p className="mt-3 grid gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-grey lg:grid-cols-3">
          <span>A — Lockup (Header)</span>
          <span>B — Monogramm</span>
          <span>C — Akzentkante</span>
        </p>

        {/* sw / negativ */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex min-h-[140px] items-center justify-center bg-ink p-8">
            <span className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-white text-[15px] font-extrabold text-ink">
                HSF
              </span>
              <span className="leading-none text-white">
                <span className="block text-[17px] font-bold">
                  Gebäudereinigung
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-grey">
                  Dresden · seit 1988
                </span>
              </span>
            </span>
          </div>
          <div className="flex min-h-[140px] items-center justify-center border border-line bg-white p-8">
            <span className="inline-flex items-center gap-3 grayscale">
              <span className="grid h-11 w-11 place-items-center bg-ink text-[15px] font-extrabold text-white">
                HSF
              </span>
              <span className="leading-none">
                <span className="block text-[17px] font-bold text-ink">
                  Gebäudereinigung
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-grey-2">
                  Dresden · seit 1988
                </span>
              </span>
            </span>
          </div>
        </div>
        <p className="mt-3 grid gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-grey md:grid-cols-2">
          <span>Negativ (auf dunkel)</span>
          <span>Schwarz / Weiß</span>
        </p>
      </Section>

      {/* Farben */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <Kicker>Farben</Kicker>
          <GuideHeading>Tokens</GuideHeading>
          <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
            {COLORS.map((c) => (
              <div key={c.name} className="border border-line bg-white">
                <div className="h-20 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-3">
                  <p className="text-[13px] font-semibold text-ink">
                    {c.name}
                  </p>
                  <p className="font-mono text-[12px] uppercase text-grey-2">
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Typografie */}
      <Section>
        <Kicker>Typografie</Kicker>
        <GuideHeading>Hanken Grotesk + IBM Plex Mono</GuideHeading>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 border border-line p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              Hanken Grotesk
            </p>
            <p className="text-[44px] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink">
              Reinigung, die läuft
            </p>
            <p className="text-[24px] font-bold text-ink">Headline mittig</p>
            <p className="text-[16px] leading-relaxed text-ink-2">
              Fließtext in Hanken Grotesk. Sie reinigen Büros, Praxen und
              Wohnanlagen, mit festem Ansprechpartner und geregelter Vertretung.
            </p>
            <p className="flex flex-wrap gap-3 text-[14px] text-grey-2">
              <span className="font-normal">Regular 400</span>
              <span className="font-medium">Medium 500</span>
              <span className="font-semibold">Semibold 600</span>
              <span className="font-bold">Bold 700</span>
              <span className="font-extrabold">Extrabold 800</span>
            </p>
          </div>
          <div className="space-y-4 border border-line p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              IBM Plex Mono
            </p>
            <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-blue">
              Kicker-Label
            </p>
            <p className="font-mono text-[15px] text-ink">0157 3877 1323</p>
            <p className="font-mono text-[15px] uppercase tracking-[0.15em] text-ink">
              Seit 1988
            </p>
            <p className="font-mono text-[13px] leading-relaxed text-grey-2">
              Mono für Kicker, Badges, Zahlen, Telefonnummern und Hinweise.
            </p>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <Kicker>Komponenten</Kicker>
          <GuideHeading>Buttons</GuideHeading>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="/kontakt">Primär</Button>
            <Button href="/kontakt" variant="secondary">
              Sekundär
            </Button>
            <Button href="/leistungen" variant="link">
              Link mit Pfeil
            </Button>
          </div>
        </Container>
      </section>

      {/* Karten */}
      <Section>
        <Kicker>Komponenten</Kicker>
        <GuideHeading>Karten</GuideHeading>
        <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          <ServiceCard leistung={LEISTUNGEN[0]} />
          <div className="border border-line bg-white p-7">
            <span className="grid h-12 w-12 place-items-center bg-blue-tint text-blue">
              <Icon name="ShieldCheck" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-[19px] font-bold text-ink">Standard-Karte</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-grey-2">
              Weißer Grund, dünne Linie, Icon im Blau-Tint-Feld. Hover hebt die
              Karte leicht an.
            </p>
          </div>
          <div className="relative overflow-hidden bg-blue p-7 text-white">
            <DiagonalMark className="-right-8 -top-8 h-28 w-28 border-white/20" />
            <h3 className="relative text-[19px] font-bold">Farbkarte</h3>
            <p className="relative mt-2 text-[15px] leading-relaxed text-white/85">
              Blaue Fläche für Akzent-Module, mit diagonaler Akzentlinie.
            </p>
          </div>
        </div>
      </Section>

      {/* Icons */}
      <section className="border-y border-line bg-surface">
        <Container className="py-[72px] md:py-[84px]">
          <Kicker>Icons</Kicker>
          <GuideHeading>lucide-react</GuideHeading>
          <div className="mt-8 grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(120px,1fr))]">
            {Object.keys(MAP).map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 border border-line bg-white p-4"
              >
                <Icon name={name} className="h-6 w-6 text-ink" />
                <span className="font-mono text-[10px] text-grey-2">{name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Motive */}
      <Section>
        <Kicker>Motive</Kicker>
        <GuideHeading>Wiederkehrende Elemente</GuideHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative flex min-h-[140px] items-center justify-center border border-line bg-white p-6">
            <RegisterMarks />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey-2">
              Registermarken
            </span>
          </div>
          <div className="relative flex min-h-[140px] items-center justify-center overflow-hidden bg-ink p-6">
            <DiagonalMark className="left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border-white/20" />
            <span className="relative font-mono text-[11px] uppercase tracking-[0.12em] text-grey">
              Diagonale Akzentlinie
            </span>
          </div>
          <div className="flex min-h-[140px] items-center justify-center border border-line bg-white p-6">
            <TrustBadge />
          </div>
          <div className="flex min-h-[140px] flex-col justify-between border border-line bg-white p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey-2">
              Footer-Stripe
            </span>
            <span className="footer-stripe h-1 w-full" />
            <span className="placeholder-stripe block h-12 w-full border border-line" />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
