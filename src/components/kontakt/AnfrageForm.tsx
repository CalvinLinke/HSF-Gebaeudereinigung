"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { KONTAKT, EMAIL_RE } from "@/lib/content";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { Button } from "@/components/ui/Button";

type Values = {
  name: string;
  firma: string;
  email: string;
  telefon: string;
  objektart: string;
  nachricht: string;
};

type Errors = { name?: string; email?: string };

const LABEL = "mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-grey";
const FIELD =
  "w-full border bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-grey focus:border-blue";

export function AnfrageForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    firma: "",
    email: "",
    telefon: "",
    objektart: KONTAKT.objektarten[0],
    nachricht: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // Übernimmt die Eingaben aus der Schnellanfrage (Hero) via sessionStorage.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("hsf:lead");
      if (!raw) return;
      sessionStorage.removeItem("hsf:lead");
      const lead = JSON.parse(raw) as {
        objektart?: string;
        flaeche?: string;
        turnus?: string;
      };
      setValues((v) => {
        const objektart =
          lead.objektart && KONTAKT.objektarten.includes(lead.objektart)
            ? lead.objektart
            : v.objektart;
        const parts: string[] = [];
        if (lead.flaeche?.trim()) parts.push(`Fläche: ${lead.flaeche.trim()}`);
        if (lead.turnus) parts.push(`Turnus: ${lead.turnus}`);
        const nachricht = parts.length
          ? `${parts.join("\n")}\n\n${v.nachricht}`
          : v.nachricht;
        return { ...v, objektart, nachricht };
      });
    } catch {
      /* ungültige oder fehlende Lead-Daten ignorieren */
    }
  }, []);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = KONTAKT.fehlerName;
    if (!EMAIL_RE.test(values.email)) next.email = KONTAKT.fehlerEmail;
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="relative border-l-[3px] border-blue bg-blue-tint p-8">
        <RegisterMarks />
        <span className="grid h-12 w-12 place-items-center bg-blue text-white">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-[22px] font-bold text-ink">
          {KONTAKT.erfolgTitle}
        </h3>
        <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-ink-2">
          {KONTAKT.erfolgText}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-line bg-white p-7 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Name *</span>
          <input
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={`${FIELD} ${errors.name ? "border-warn" : "border-line"}`}
          />
          {errors.name && (
            <span className="mt-1.5 block text-[13px] text-warn">
              {errors.name}
            </span>
          )}
        </label>

        <label className="block">
          <span className={LABEL}>Firma</span>
          <input
            type="text"
            value={values.firma}
            onChange={(e) => update("firma", e.target.value)}
            className={`${FIELD} border-line`}
          />
        </label>

        <label className="block">
          <span className={LABEL}>E-Mail *</span>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={`${FIELD} ${errors.email ? "border-warn" : "border-line"}`}
          />
          {errors.email && (
            <span className="mt-1.5 block text-[13px] text-warn">
              {errors.email}
            </span>
          )}
        </label>

        <label className="block">
          <span className={LABEL}>Telefon</span>
          <input
            type="tel"
            value={values.telefon}
            onChange={(e) => update("telefon", e.target.value)}
            className={`${FIELD} border-line`}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className={LABEL}>Objektart</span>
        <div className="relative">
          <select
            value={values.objektart}
            onChange={(e) => update("objektart", e.target.value)}
            className={`${FIELD} appearance-none border-line pr-10`}
          >
            {KONTAKT.objektarten.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grey" />
        </div>
      </label>

      <label className="mt-5 block">
        <span className={LABEL}>Nachricht</span>
        <textarea
          rows={5}
          value={values.nachricht}
          onChange={(e) => update("nachricht", e.target.value)}
          placeholder="Objekt, Fläche, gewünschter Turnus."
          className={`${FIELD} resize-y border-line`}
        />
      </label>

      <div className="mt-6">
        <Button type="submit" className="w-full sm:w-auto">
          Anfrage absenden
        </Button>
      </div>
    </form>
  );
}
