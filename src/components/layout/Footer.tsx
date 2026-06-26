import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Badge } from "@/components/ui/Badge";
import { COMPANY, CONTACT, LEISTUNGEN, CREDENTIALS } from "@/lib/content";

const UNTERNEHMEN = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Designsystem", href: "/designsystem" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="footer-stripe h-1" />

      <Container className="py-16">
        <div className="grid grid-cols-4 gap-10 md:grid-cols-2 max-[520px]:grid-cols-1">
          {/* Marke */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-blue text-[14px] font-extrabold text-white">
                HSF
              </span>
              <span className="text-[15px] font-bold">{COMPANY.name}</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-grey">
              Familienbetrieb für Gebäudereinigung in Dresden. In dritter
              Generation, mit Leuten, die Ihr Objekt kennen.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <TrustBadge className="border-white/20 text-grey" />
              {CREDENTIALS.map((c) => (
                <Badge
                  key={c.label}
                  label={c.label}
                  className="border-white/20 text-grey"
                />
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LEISTUNGEN.map((l) => (
                <li key={l.id}>
                  <Link
                    href="/leistungen"
                    className="text-[14px] text-grey transition-colors hover:text-white"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              Unternehmen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {UNTERNEHMEN.map((u) => (
                <li key={u.href}>
                  <Link
                    href={u.href}
                    className="text-[14px] text-grey transition-colors hover:text-white"
                  >
                    {u.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-grey">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="break-all transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </li>
              <li className="pt-1 font-mono text-[12px]">{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom-Bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-grey sm:flex-row">
          <span>
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </span>
          <span className="flex items-center gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
          </span>
        </Container>
      </div>
    </footer>
  );
}
