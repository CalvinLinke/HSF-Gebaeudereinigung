import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { AnfrageForm } from "@/components/kontakt/AnfrageForm";
import { MapEmbed } from "@/components/kontakt/MapEmbed";
import { KONTAKT, CONTACT } from "@/lib/content";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Anfrage für die Gebäudereinigung in Dresden. Schildern Sie Objekt und Turnus, Sie bekommen ein nachvollziehbares Angebot, oft innerhalb weniger Tage.",
  path: "/kontakt",
});

const INFO = [
  { icon: Phone, label: "Telefon", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "E-Mail", value: CONTACT.email, href: CONTACT.emailHref },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${CONTACT.street}, ${CONTACT.city}`,
  },
  { icon: Clock, label: "Öffnungszeiten", value: CONTACT.hours },
];

export default function KontaktPage() {
  return (
    <SiteShell active="kontakt">
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-[64px] md:py-[80px]">
          <Kicker>{KONTAKT.kicker}</Kicker>
          <h1 className="mt-5 max-w-[20ch] text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            {KONTAKT.headline}
          </h1>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
            {KONTAKT.intro}
          </p>
        </Container>
      </section>

      {/* Formular + Info */}
      <Container className="grid gap-10 py-[64px] md:py-[80px] lg:grid-cols-[1.3fr_.9fr]">
        <AnfrageForm />

        <div className="space-y-6">
          {/* Infokarte */}
          <div className="border border-line bg-white p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              So erreichen Sie uns
            </p>
            <ul className="mt-5 space-y-4">
              {INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-blue-tint text-blue">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-grey">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] text-ink transition-colors hover:text-blue"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-ink">{item.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anfahrt — Google Maps, lädt erst nach Cookie-Zustimmung */}
          <MapEmbed />
        </div>
      </Container>
    </SiteShell>
  );
}
