// =============================================================================
// HSF-Gebäudereinigung — zentrale Inhalte
// Alle Texte folgen dem Tonalitäts-Prompt (Sie-Anrede, Ergebnis statt Tätigkeit,
// konkrete Alltagsdetails, keine Glanz-/Sauberkeitsfloskeln, keine Gedankenstriche).
// Icon-Werte sind lucide-react Komponentennamen (z. B. <Building2 />).
// =============================================================================

/* ----------------------------------------------------------------------------
 * STAMMDATEN / KONTAKT  (gegen Original prüfen, bevor live)
 * ------------------------------------------------------------------------- */
export const COMPANY = {
  name: "HSF-Gebäudereinigung GmbH",
  claim: "Gebäudereinigung · Dresden und Umgebung",
  foundedYear: 1988,
  generation: "3. Generation",
  customers: "1000+",
} as const;

export const CONTACT = {
  phone: "0157 3877 1323",
  phoneHref: "tel:+4915738771323",
  email: "info@hsf-dresden.de",
  emailHref: "mailto:info@hsf-dresden.de",
  street: "Königsbrücker Landstraße 59",
  city: "01109 Dresden",
  hours: "Mo–Fr 08:00–18:00 Uhr",
} as const;

/* ----------------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------------- */
export type NavKey =
  | "start"
  | "leistungen"
  | "ueber"
  | "karriere"
  | "kontakt";

export const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "start", label: "Start", href: "/startseite" },
  { key: "leistungen", label: "Leistungen", href: "/leistungen" },
  { key: "ueber", label: "Über uns", href: "/ueber-uns" },
  { key: "karriere", label: "Karriere", href: "/karriere" },
  { key: "kontakt", label: "Kontakt", href: "/kontakt" },
];

/* ----------------------------------------------------------------------------
 * STARTSEITE — HERO-VARIANTEN (Headline je Richtung)
 * ------------------------------------------------------------------------- */
export const HERO = {
  kicker: "Gebäudereinigung · Dresden und Umgebung",
  // Richtung A
  headlineA: "Saubere Objekte, ohne dass Sie hinterher sein müssen.",
  // Richtung B (ein Wort wird blau hervorgehoben: "Nachfassen.")
  headlineB: ["Saubere Objekte,", "ohne ", "Nachfassen."],
  // Richtung C
  headlineC: "Qualität, die man im ganzen Objekt sieht.",
  subline:
    "Wir reinigen Büros, Praxen, Wohnanlagen und Gewerbeobjekte. Familienbetrieb in dritter Generation, am Markt seit 1988. Jedes Objekt hat einen festen Ansprechpartner. Fällt jemand aus, springt die eingearbeitete Vertretung ein, meist ohne dass Sie es merken.",
  trust: ["Seit 1988", "3. Generation", "Über 1000 betreute Kunden"],
} as const;

// Hero-Spec-Panel (Richtung A): "Was wir übernehmen"
export const OBJEKTTYPEN: { icon: string; label: string }[] = [
  { icon: "Building2", label: "Büros & große Büroflächen" },
  { icon: "Stethoscope", label: "Praxen & medizinische Einrichtungen" },
  { icon: "Building", label: "Wohnanlagen & Treppenhäuser" },
  { icon: "Briefcase", label: "Gewerbeobjekte" },
  { icon: "HardHat", label: "Bauendreinigung für Bauträger" },
  { icon: "Layers", label: "Große Einrichtungen" },
];

/* ----------------------------------------------------------------------------
 * LEISTUNGEN  (Kurzform für Karten + Langform für Akkordeon /leistungen)
 * ------------------------------------------------------------------------- */
export interface Leistung {
  id: string;
  icon: string; // lucide-react
  title: string;
  // kurzer Ergebnis-Text für die Karten auf der Startseite
  card: string;
  // Akkordeon-Langform
  intro: string;
  umfang: string[];
  ergebnis: string;
}

export const LEISTUNGEN: Leistung[] = [
  {
    id: "buero",
    icon: "Building2",
    title: "Büro- und laufende Reinigung",
    card:
      "Ein Büro, in das Ihr Team montags gern hereinkommt. Wir reinigen zu Randzeiten, damit der Betrieb nicht gestört wird.",
    intro:
      "Die regelmäßige Reinigung Ihrer Büroflächen, abgestimmt auf Ihre Arbeitszeiten. Wir kommen früh oder am Abend, damit niemand im Betrieb gestört wird.",
    umfang: [
      "Arbeitsplätze, Böden und Verkehrsflächen",
      "Sanitärräume inklusive Verbrauchsmaterial",
      "Teeküchen und Sozialräume",
      "Glas-Innenflächen und Türen",
      "Turnus täglich, wöchentlich oder nach Absprache",
    ],
    ergebnis:
      "Ein Büro, in das Ihr Team montags gern hereinkommt. Ohne dass Sie die Reinigung selbst nachhalten müssen.",
  },
  {
    id: "praxis",
    icon: "Stethoscope",
    title: "Praxisreinigung",
    card:
      "Eine Praxis, die jeder Hygieneprüfung standhält. Wir kennen die Anforderungen an Wartezimmer, Behandlungsraum und Sanitärbereich.",
    intro:
      "Praxen haben eigene Anforderungen. Wir kennen den Unterschied zwischen Wartezimmer, Behandlungsraum und Sanitärbereich und reinigen entsprechend.",
    umfang: [
      "Behandlungs- und Funktionsräume",
      "Wartebereich und Empfang",
      "Flächenreinigung nach Ihren Hygienevorgaben",
      "Sanitär mit erhöhter Frequenz",
      "Dokumentierbar auf Wunsch",
    ],
    ergebnis:
      "Eine Praxis, die jeder Hygieneprüfung standhält. Und die auf Patienten von der ersten Sekunde an gepflegt wirkt.",
  },
  {
    id: "wohnanlagen",
    icon: "Building",
    title: "Wohnanlagen",
    card:
      "Treppenhäuser und Gemeinschaftsflächen, zu denen die Hausverwaltung keine Anrufe bekommt. In festem Turnus, das ganze Jahr.",
    intro:
      "Für Hausverwaltungen und Eigentümer halten wir Treppenhäuser und Gemeinschaftsflächen in festem Turnus instand. Das ganze Jahr, auch im Winter.",
    umfang: [
      "Treppenhäuser und Eingangsbereiche",
      "Aufzüge und Kellerflure",
      "Glasflächen und Briefkastenanlagen",
      "Außenflächen und Müllplätze",
      "Winterdienst auf Anfrage",
    ],
    ergebnis:
      "Treppenhäuser, zu denen die Hausverwaltung keine Beschwerden bekommt. Und Mieter, die sich nicht melden müssen.",
  },
  {
    id: "gewerbe",
    icon: "Briefcase",
    title: "Gewerbeobjekte",
    card:
      "Verkaufsflächen, Lager und Sozialräume, die zum Geschäft passen. Wir richten den Turnus nach Ihrem Betrieb, nicht umgekehrt.",
    intro:
      "Verkaufsflächen, Lager und Produktionsumfeld haben andere Takte als ein Büro. Wir richten den Turnus nach Ihrem Betrieb, nicht umgekehrt.",
    umfang: [
      "Verkaufs- und Ausstellungsflächen",
      "Lager- und Logistikbereiche",
      "Sozial- und Pausenräume",
      "Industrieböden und Hartflächen",
      "Reinigung außerhalb der Betriebszeiten",
    ],
    ergebnis:
      "Flächen, die zu Ihrem Geschäft passen. Ohne dass die Reinigung den laufenden Betrieb aufhält.",
  },
  {
    id: "bauend",
    icon: "HardHat",
    title: "Bauendreinigung",
    card:
      "Eine Baustelle, die termingerecht besenrein übergeben wird, sodass der Übergabetermin hält. Für Bauträger und Bauunternehmen.",
    intro:
      "Für Bauträger und Bauunternehmen die letzte Etappe vor der Übergabe. Eine Bauendreinigung lässt sich nicht wie die wöchentliche Büroreinigung planen, deshalb planen wir rückwärts vom Übergabetermin.",
    umfang: [
      "Grob- und Feinreinigung nach Gewerken",
      "Fenster, Rahmen und Glasflächen",
      "Entfernung von Bau- und Kleberückständen",
      "Erstpflege von Böden und Oberflächen",
      "Planung auf den Übergabetermin, Team aufgestockt bei Bedarf",
    ],
    ergebnis:
      "Eine Baustelle, die termingerecht besenrein übergeben wird. Damit der Übergabetermin hält und nicht an der Reinigung scheitert.",
  },
  {
    id: "grossflaechen",
    icon: "Layers",
    title: "Große Büroflächen & Einrichtungen",
    card:
      "Große Flächen in gleichbleibender Qualität. Wir kontrollieren nach Checkliste, Etage für Etage, und dokumentieren das Ergebnis.",
    intro:
      "Auf großen Objekten entscheidet die gleichbleibende Qualität über alle Etagen. Dafür arbeiten wir mit Objektleitung vor Ort und fester Qualitätskontrolle.",
    umfang: [
      "Objektleiter als fester Ansprechpartner",
      "Qualitätskontrolle nach Checkliste, Etage für Etage",
      "Dokumentation der Ergebnisse",
      "Geregelte Vertretung bei Ausfall",
      "Schlüssel- und Zugangsmanagement",
    ],
    ergebnis:
      "Große Flächen in verlässlicher Qualität. Kontrolliert und dokumentiert, sodass Sie es nicht selbst nachhalten müssen.",
  },
];

/* ----------------------------------------------------------------------------
 * USP  (6 Stärken)
 * ------------------------------------------------------------------------- */
export interface Usp {
  num: string;
  icon: string;
  label: string; // Kurzlabel (Richtung B/C)
  title: string;
  text: string;
}

export const USPS: Usp[] = [
  {
    num: "01",
    icon: "ShieldCheck",
    label: "Professionalität",
    title: "Höchste Professionalität",
    text:
      "Geschultes Personal, feste Abläufe, Kontrolle nach Checkliste. Auf einem großen Objekt prüfen wir nach demselben Maßstab wie in der kleinen Praxis.",
  },
  {
    num: "02",
    icon: "HandCoins",
    label: "Preis-Leistung",
    title: "Faires Preis-Leistungs-Verhältnis",
    text:
      "Sie bekommen ein nachvollziehbares Angebot, Position für Position. Am Monatsende steht auf der Rechnung, was vorher besprochen war. Keine stillen Aufschläge.",
  },
  {
    num: "03",
    icon: "MapPin",
    label: "Regional",
    title: "Regional verwurzelt",
    text:
      "Wir sitzen an der Königsbrücker Landstraße, nicht in einer Zentrale am anderen Ende der Republik. Klemmt vor Ort etwas, sind wir in der Regel am selben Tag da.",
  },
  {
    num: "04",
    icon: "Repeat",
    label: "Zuverlässig",
    title: "Zuverlässig",
    text:
      "Jedes Objekt hat einen festen Ansprechpartner. Fällt jemand aus, übernimmt die eingearbeitete Vertretung. Meist merken Sie davon nichts.",
  },
  {
    num: "05",
    icon: "Zap",
    label: "Schnell",
    title: "Schnelle Abwicklung",
    text:
      "Anfrage rein, Angebot raus, oft in wenigen Tagen. Neue Objekte übernehmen wir auch kurzfristig, wenn der bisherige Dienstleister abgesprungen ist.",
  },
  {
    num: "06",
    icon: "MessagesSquare",
    label: "Ehrlich",
    title: "Ehrliche Kommunikation",
    text:
      "Sie erreichen einen Menschen, der Ihr Objekt kennt. Und wenn doch einmal etwas hakt, hören Sie das von uns, bevor Sie es selbst bemerken.",
  },
];

/* ----------------------------------------------------------------------------
 * KENNZAHLEN (Stats-Band)
 * ------------------------------------------------------------------------- */
export const STATS: { value: string; label: string }[] = [
  { value: "1988", label: "Gegründet in Dresden" },
  { value: "3.", label: "Generation im Familienbetrieb" },
  { value: "1000+", label: "Betreute Kunden über die Jahre" },
  { value: "≤ 1 Tag", label: "Reaktion vor Ort in der Regel" },
];

/* ----------------------------------------------------------------------------
 * GROSSE OBJEKTE / BAUTRÄGER
 * ------------------------------------------------------------------------- */
export const GROSSOBJEKTE = {
  kicker: "Auch für große Objekte & Bauträger",
  title:
    "Bauträger und Betreiber großer Flächen brauchen einen anderen Plan",
  text1:
    "Eine Bauendreinigung lässt sich nicht wie die wöchentliche Büroreinigung planen. Der Termin steht, die Gewerke sind erst spät fertig, und die Übergabe verschiebt sich nicht. Wir planen rückwärts vom Übergabetermin und stocken das Team auf, wenn es eng wird.",
  text2:
    "Bei großen Büroflächen und Einrichtungen entscheidet die gleichbleibende Qualität über Etagen hinweg. Dafür kontrollieren wir nach Checkliste und halten das Ergebnis fest, damit Sie es nicht selbst nachhalten müssen.",
  punkte: [
    { icon: "HardHat", title: "Bauendreinigung, terminfest", sub: "Geplant rückwärts vom Übergabetermin." },
    { icon: "ShieldCheck", title: "Qualitätskontrolle nach Checkliste", sub: "Etage für Etage, dokumentiert." },
    { icon: "Users", title: "Team, das mitwächst", sub: "Aufgestockt, wenn das Objekt es verlangt." },
    { icon: "KeyRound", title: "Schlüssel- und Zugangsmanagement", sub: "Geregelt, protokolliert, diskret." },
  ],
};

/* ----------------------------------------------------------------------------
 * ABLAUF (4 Schritte, /leistungen)
 * ------------------------------------------------------------------------- */
export const ABLAUF: { num: string; title: string; text: string }[] = [
  { num: "01", title: "Anfrage", text: "Sie schildern uns Objekt, Fläche und gewünschten Turnus. Telefonisch oder über das Formular." },
  { num: "02", title: "Begehung", text: "Wir sehen uns das Objekt an. So kalkulieren wir realistisch, nicht über den Daumen." },
  { num: "03", title: "Angebot", text: "Sie bekommen ein Angebot, Position für Position. Oft innerhalb weniger Tage." },
  { num: "04", title: "Übernahme", text: "Fester Ansprechpartner, eingewiesenes Team, vereinbarter Start. Auch kurzfristig." },
];

/* ----------------------------------------------------------------------------
 * FAQ (AEO, /leistungen) — direkte Antwort zuerst
 * ------------------------------------------------------------------------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Wie schnell können Sie ein neues Objekt übernehmen?",
    a: "In der Regel innerhalb weniger Tage nach der Begehung. Ist der bisherige Dienstleister kurzfristig abgesprungen, springen wir auch schneller ein und stocken dafür das Team auf.",
  },
  {
    q: "Was kostet eine Büroreinigung in Dresden?",
    a: "Das hängt von Fläche, Turnus und Ausstattung ab. Pauschalpreise von der Stange führen meist in die Irre. Nach einer kurzen Begehung bekommen Sie ein nachvollziehbares Angebot, Position für Position.",
  },
  {
    q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
    a: "Ja. Die meisten Büros und Praxen reinigen wir zu Randzeiten, früh oder am Abend, damit niemand im Betrieb gestört wird. Zugang und Schlüssel werden dabei geregelt und protokolliert.",
  },
  {
    q: "Was passiert, wenn jemand krank wird?",
    a: "Für jedes Objekt gibt es eine eingearbeitete Vertretung. Fällt jemand aus, übernimmt sie, ohne dass die Reinigung ausfällt. In den meisten Fällen merken Sie davon nichts.",
  },
];

/* ----------------------------------------------------------------------------
 * ÜBER UNS
 * ------------------------------------------------------------------------- */
export const UEBER = {
  kicker: "Über uns",
  headline: "Seit 1988. In dritter Generation. Aus Dresden.",
  intro:
    "HSF ist kein anonymer Konzern. Wir sind ein Familienbetrieb, der seit über 35 Jahren Büros, Praxen und Objekte in Dresden reinigt. Mit denselben Leuten, die Ihr Objekt kennen, und mit dem Anspruch, den die erste Generation 1988 aufgestellt hat.",
  // kurzer Anriss für die Startseite
  anrissTitle: "Ein eingespieltes Team mit Geschichte",
  anriss1:
    "1988 hat die erste Generation den Betrieb in Dresden gegründet. Heute führen wir ihn in dritter Generation weiter, mit denselben Leuten in den Objekten und denselben Ansprüchen an die Arbeit. Viele unserer Kunden begleiten wir seit Jahren.",
  anriss2:
    "Das ist kein anonymer Konzern. Wenn Sie anrufen, ist am Telefon jemand, der Ihr Objekt kennt.",
  timeline: [
    { jahr: "1988", text: "Der Großvater gründet den Betrieb in Dresden. Von Anfang an mit festen Kunden in Büros und Wohnanlagen, nicht mit Aufträgen von der Stange." },
    { jahr: "2003", text: "Die zweite Generation übernimmt und führt den Betrieb in Dresden weiter. Der Kundenkreis wächst, Praxen, Gewerbeobjekte und größere Büroflächen kommen dazu." },
    { jahr: "2019", text: "Die dritte Generation steigt in den Betrieb ein und übernimmt nach und nach Verantwortung für Objekte und Kunden." },
    { jahr: "2026", text: "Gründung der HSF-Gebäudereinigung GmbH. Die Kunden der bisherigen Einzelunternehmen werden in der GmbH zusammengeführt, mit erweitertem Fokus auf große Büroflächen, große Einrichtungen und die Bauendreinigung für Bauträger. Der Anspruch ist derselbe geblieben." },
  ],
  arbeitsweise: [
    { icon: "UserCheck", title: "Feste Ansprechpartner", text: "Jedes Objekt hat sein Team und seinen Ansprechpartner. Sie reden nicht jedes Mal mit jemand Neuem." },
    { icon: "Repeat", title: "Geregelte Vertretung", text: "Wird jemand krank, ist die Vertretung eingearbeitet und übernimmt. Die Reinigung fällt nicht aus." },
    { icon: "ShieldCheck", title: "Qualitätskontrolle", text: "Auf größeren Objekten kontrollieren wir nach Checkliste, Etage für Etage, und halten das Ergebnis fest." },
    { icon: "Clock", title: "Reinigung zu Randzeiten", text: "Wir kommen früh oder am Abend, damit Ihr Betrieb tagsüber ungestört läuft." },
    { icon: "KeyRound", title: "Schlüssel & Zugang", text: "Schlüssel und Zutritt werden geregelt und protokolliert. Diskretion ist Teil der Arbeit, nicht die Ausnahme." },
    { icon: "PhoneCall", title: "Erreichbarkeit", text: "Sie erreichen einen Menschen, der Ihr Objekt kennt. Auch dann, wenn einmal etwas anders läuft als geplant." },
  ],
  // name: einzelne Personen mit Foto; group: gemeinsame Karte ohne Einzelfoto
  team: [
    { name: "Jens Freudenberg", rolle: "Geschäftsführung", sub: "Familienbetrieb", group: false },
    { name: "Max Freudenberg", rolle: "Geschäftsführung", sub: "3. Generation", group: false },
    { name: "[ Name ergänzen ]", rolle: "Objektleitung", sub: "Qualität & Kontrolle", group: false },
    { name: "Unsere Reinigungsteams", rolle: "Reinigungsteams", sub: "Geschultes Personal", group: true },
  ],
};

/* ----------------------------------------------------------------------------
 * KARRIERE
 * ------------------------------------------------------------------------- */
export const KARRIERE = {
  kicker: "Karriere",
  headline: "Arbeiten bei einem Familienbetrieb, der seine Leute kennt",
  intro:
    "Bei uns sind Sie kein Personalposten. Sie haben Ihr Objekt, Ihr Team und einen Ansprechpartner, der weiß, wie Sie arbeiten. Geregelte Zeiten, pünktliche Bezahlung, und Kollegen, die einspringen, wenn es nötig ist.",
  vorteile: [
    { icon: "CalendarCheck", title: "Geregelte Zeiten", text: "Feste Objekte und Schichten. Sie wissen, wann und wo Sie arbeiten." },
    { icon: "HandCoins", title: "Faire, pünktliche Bezahlung", text: "Korrekte Abrechnung, am vereinbarten Tag auf dem Konto." },
    { icon: "Users", title: "Eingespieltes Team", text: "Kollegen, die sich kennen, und eine Vertretung, die einspringt." },
    { icon: "GraduationCap", title: "Einarbeitung", text: "Sie werden auf Ihrem Objekt eingewiesen, nicht ins kalte Wasser geworfen." },
  ],
  stellen: [
    {
      title: "Reinigungskraft (m/w/d)",
      tags: ["Dresden", "Teil- oder Vollzeit"],
      text: "Für die laufende Reinigung von Büros, Praxen und Wohnanlagen in Dresden und Umgebung. Sie übernehmen feste Objekte, meist zu Randzeiten am frühen Morgen oder Abend.",
      anforderungen: [
        "Sorgfalt und ein Auge fürs Detail",
        "Zuverlässigkeit und Pünktlichkeit",
        "Erfahrung von Vorteil, kein Muss, wir arbeiten Sie ein",
      ],
      mailtoSubject: "Bewerbung Reinigungskraft",
    },
    {
      title: "Ausbildung Gebäudereiniger/in (m/w/d)",
      tags: ["Dresden", "Ausbildung", "Start ab August"],
      text: "Wir bilden aus. Bei uns lernen Sie das Handwerk von Grund auf, an echten Objekten und mit erfahrenen Kollegen an Ihrer Seite. Ein fester Ansprechpartner begleitet Sie durch die gesamte Ausbildung.",
      anforderungen: [
        "Zuverlässigkeit und Lust, etwas zu lernen",
        "Sorgfalt und ein Auge fürs Detail",
        "Vorkenntnisse sind kein Muss, wir zeigen Ihnen alles",
      ],
      mailtoSubject: "Bewerbung Ausbildung Gebäudereiniger/in",
    },
  ],
  bewerbungTitle: "Ein Anruf reicht für den Anfang",
  bewerbungText:
    "Schicken Sie uns ein paar Zeilen zu sich, oder rufen Sie einfach an. Ein langes Anschreiben brauchen wir nicht. Wichtiger ist, dass es zwischenmenschlich und beim Objekt passt.",
  bewerbungHinweis:
    "Keine passende Stelle dabei? Melden Sie sich trotzdem. Wir suchen laufend gute Leute.",
};

/* ----------------------------------------------------------------------------
 * KONTAKT (Formular-Optionen + CTA-Texte)
 * ------------------------------------------------------------------------- */
export const KONTAKT = {
  kicker: "Kontakt",
  headline: "Sagen Sie uns, was Ihr Objekt braucht",
  intro:
    "Ein paar Angaben zu Objekt und Turnus genügen für den Anfang. Sie bekommen ein nachvollziehbares Angebot, oft innerhalb weniger Tage. Lieber direkt? Rufen Sie an.",
  objektarten: [
    "Büro / laufende Reinigung",
    "Praxis",
    "Wohnanlage",
    "Gewerbeobjekt",
    "Bauendreinigung",
    "Große Bürofläche / Einrichtung",
  ],
  erfolgTitle: "Danke, Ihre Anfrage ist da.",
  erfolgText:
    "Wir sehen sie uns an und melden uns in der Regel innerhalb weniger Tage.",
  fehlerName: "Bitte tragen Sie Ihren Namen ein.",
  fehlerEmail: "Bitte eine gültige E-Mail-Adresse angeben.",
};

// Wiederkehrender Kontakt-CTA (dunkles Band am Seitenende)
export const KONTAKT_CTA = {
  title: "Sagen Sie uns, was Ihr Objekt braucht.",
  text:
    "Schildern Sie uns kurz Objekt und Turnus. Sie bekommen ein nachvollziehbares Angebot, oft innerhalb weniger Tage.",
};

/* ----------------------------------------------------------------------------
 * E-Mail-Validierung (für AnfrageForm)
 * ------------------------------------------------------------------------- */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
