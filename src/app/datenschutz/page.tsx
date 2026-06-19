import { buildMetadata } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { COMPANY, CONTACT } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der HSF-Gebäudereinigung nach DSGVO: Verantwortlicher, Server-Logs, Kontaktformular, Speicherdauer und Betroffenenrechte.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <SiteShell active="">
      <Container className="max-w-[760px] py-[64px] md:py-[80px]">
        <Kicker>Datenschutz</Kicker>
        <h1 className="mt-5 text-[clamp(30px,4vw,42px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
          Datenschutzerklärung
        </h1>

        <div className="mt-7">
          <PlaceholderNote>
            Hinweis: Dieses DSGVO-Gerüst deckt die typischen Punkte einer
            Unternehmenswebsite ab. Inhalte mit [ … ergänzen ] anpassen, die
            tatsächlich eingesetzten Dienste (Hosting, Schriften, Analyse)
            ergänzen und das Ganze juristisch prüfen lassen.
          </PlaceholderNote>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-[20px] font-bold text-ink">
              1. Verantwortlicher
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              {COMPANY.name}
              <br />
              Inhaber: [ Vor- und Nachname ergänzen ]
              <br />
              {CONTACT.street}, {CONTACT.city}
              <br />
              E-Mail: {CONTACT.email}, Telefon: {CONTACT.phone}
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              2. Server-Logfiles
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Beim Aufruf dieser Website erhebt der Hosting-Provider automatisch
              Informationen in Server-Logfiles, die Ihr Browser übermittelt:
              Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren und stabilen Betrieb).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              3. Kontaktaufnahme und Anfrageformular
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Wenn Sie uns über das Formular oder per E-Mail kontaktieren,
              verarbeiten wir die von Ihnen angegebenen Daten (etwa Name, Firma,
              E-Mail, Telefon und Ihre Nachricht), um Ihre Anfrage zu
              bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
              vorvertraglichen Maßnahmen, ansonsten Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">4. Speicherdauer</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Wir speichern personenbezogene Daten nur so lange, wie es für die
              genannten Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungsfristen es vorschreiben. Anschließend werden die Daten
              gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              5. Ihre Rechte
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Sie haben das Recht auf Auskunft (Art. 15), Berichtigung
              (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
              (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
              (Art. 21 DSGVO). Außerdem steht Ihnen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu. Zuständig ist die für [ Bundesland ergänzen ]
              verantwortliche Datenschutzbehörde.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-ink">
              6. Eingesetzte Dienste
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              Hosting: [ Name und Anschrift des Hosters ergänzen ]. Schriftarten
              werden lokal ausgeliefert, es besteht keine Verbindung zu
              Drittservern allein durch das Laden der Schriften. Sollten weitere
              Dienste (etwa Karten oder Analyse) eingebunden werden, sind sie
              hier zu ergänzen: [ … ergänzen ].
            </p>
          </section>
        </div>
      </Container>
    </SiteShell>
  );
}
