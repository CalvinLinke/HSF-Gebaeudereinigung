"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { KARRIERE, CONTACT, EMAIL_RE } from "@/lib/content";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { Button } from "@/components/ui/Button";

const LABEL =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-grey";
const FIELD =
  "w-full border bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-grey focus:border-blue";

const STELLEN = [
  ...KARRIERE.stellen.map((s) => s.title),
  "Initiativbewerbung",
];

type Values = {
  stelle: string;
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
};

type Errors = { name?: string; email?: string };

function buildMailto(v: Values) {
  const subject = `Bewerbung: ${v.stelle}`;
  const body =
    `Stelle: ${v.stelle}\n` +
    `Name: ${v.name}\n` +
    `E-Mail: ${v.email}\n` +
    `Telefon: ${v.telefon || "—"}\n\n` +
    `${v.nachricht}`;
  return `${CONTACT.emailHref}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function BewerbungFunnel() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({
    stelle: STELLEN[0],
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validateKontakt() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Bitte tragen Sie Ihren Namen ein.";
    if (!EMAIL_RE.test(values.email))
      next.email = "Bitte eine gültige E-Mail-Adresse angeben.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (step === 1 && !validateKontakt()) return;
    setStep((s) => Math.min(2, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit() {
    if (!validateKontakt()) {
      setStep(1);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/bewerbung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="relative border-l-[3px] border-blue bg-blue-tint p-8">
        <RegisterMarks />
        <span className="grid h-12 w-12 place-items-center bg-blue text-white">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-[22px] font-bold text-ink">
          Danke, Ihre Bewerbung ist da.
        </h3>
        <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-ink-2">
          Wir sehen sie uns an und melden uns in der Regel innerhalb weniger
          Tage bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-white p-7 md:p-8">
      {/* Fortschritt */}
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
          Schritt {step + 1} von 3
        </p>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              aria-hidden
              className={`h-[6px] w-7 ${i <= step ? "bg-blue" : "bg-line"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        {/* Schritt 1: Stelle */}
        {step === 0 && (
          <div>
            <span className={LABEL}>Worauf bewerben Sie sich?</span>
            <div className="grid gap-2">
              {STELLEN.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => update("stelle", s)}
                  className={`border px-4 py-3 text-left text-[15px] font-medium transition-colors ${
                    values.stelle === s
                      ? "border-blue bg-blue-tint text-blue"
                      : "border-line text-ink-2 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Schritt 2: Kontakt */}
        {step === 1 && (
          <div className="grid gap-5">
            <label className="block">
              <span className={LABEL}>Name *</span>
              <input
                type="text"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                className={`${FIELD} ${
                  errors.name ? "border-warn" : "border-line"
                }`}
              />
              {errors.name && (
                <span className="mt-1.5 block text-[13px] text-warn">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="block">
              <span className={LABEL}>E-Mail *</span>
              <input
                type="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={`${FIELD} ${
                  errors.email ? "border-warn" : "border-line"
                }`}
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
        )}

        {/* Schritt 3: Nachricht */}
        {step === 2 && (
          <div>
            <label className="block">
              <span className={LABEL}>Ein paar Zeilen zu Ihnen</span>
              <textarea
                rows={5}
                value={values.nachricht}
                onChange={(e) => update("nachricht", e.target.value)}
                placeholder="Erfahrung, Verfügbarkeit, was Sie über sich erzählen möchten."
                className={`${FIELD} resize-y border-line`}
              />
            </label>

            {status === "error" && (
              <p className="mt-4 text-[14px] leading-relaxed text-warn">
                Der Versand hat gerade nicht geklappt. Senden Sie Ihre
                Bewerbung bitte{" "}
                <a
                  href={buildMailto(values)}
                  className="font-semibold underline hover:text-ink"
                >
                  direkt per E-Mail
                </a>{" "}
                oder rufen Sie uns an unter {CONTACT.phone}.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <Button type="button" onClick={goNext}>
            Weiter
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Wird gesendet …" : "Bewerbung senden"}
          </Button>
        )}
      </div>
    </div>
  );
}
