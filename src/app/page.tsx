import { permanentRedirect } from "next/navigation";

// Die Startseite (Richtung C) liegt unter /startseite; die Wurzel leitet dorthin
// dauerhaft (308) weiter, damit Link-Equity erhalten bleibt.
export default function RootPage() {
  permanentRedirect("/startseite");
}
