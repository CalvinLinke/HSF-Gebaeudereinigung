import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { COMPANY, CONTACT } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der HSF-Gebäudereinigung.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <SiteShell active="">
      <Container className="max-w-[760px] py-[64px] md:py-[80px]">
        <Kicker>Impressum</Kicker>
        <h1 className="mt-5 text-[clamp(30px,4vw,42px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
          Impressum
        </h1>

        <div className="mt-7">
          <PlaceholderNote>
            Hinweis: Vor dem Live-Gang den Handelsregister-Eintrag (Amtsgericht
            und HRB-Nummer) sowie die Anbieterangaben final juristisch prüfen
            lassen.
          </PlaceholderNote>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-[20px] font-bold text-ink">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              {COMPANY.name}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              Vertreten durch
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Geschäftsführer: Jens Freudenberg, Max Freudenberg
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">Kontakt</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">Registereintrag</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht Dresden
              <br />
              Registernummer: HRB 47451
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE460075738
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              Redaktionell verantwortlich
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              <br />
              Max Freudenberg
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">EU-Streitschlichtung</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline-offset-2 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben in diesem Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">Haftung für Inhalte</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">Haftung für Links</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen
              wir solche Links umgehend.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">Urheberrecht</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Vervielfältigung,
              Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung.
            </p>
          </section>
        </div>
      </Container>
    </SiteShell>
  );
}
