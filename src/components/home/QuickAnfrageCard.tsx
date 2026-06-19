"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { KONTAKT, CONTACT } from "@/lib/content";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { Button } from "@/components/ui/Button";

const TURNUS = ["Wöchentlich", "Mehrmals", "Täglich"];

export function QuickAnfrageCard() {
  const router = useRouter();
  const [objektart, setObjektart] = useState(KONTAKT.objektarten[0]);
  const [flaeche, setFlaeche] = useState("");
  const [turnus, setTurnus] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      sessionStorage.setItem(
        "hsf:lead",
        JSON.stringify({ objektart, flaeche, turnus: TURNUS[turnus] }),
      );
    } catch {
      /* sessionStorage nicht verfügbar */
    }
    router.push("/kontakt");
  }

  return (
    <div className="relative bg-white p-6 shadow-[0_20px_50px_rgba(20,24,31,.10)] sm:p-8">
      <RegisterMarks />

      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
        Schnell zum Angebot
      </p>
      <h2 className="mt-1 text-[22px] font-bold text-ink">
        In zwei Minuten beschrieben
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Objektart — Pseudo-Select */}
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
            Objektart
          </span>
          <div className="relative mt-2">
            <select
              value={objektart}
              onChange={(e) => setObjektart(e.target.value)}
              className="w-full appearance-none border border-line bg-white px-3 py-2.5 pr-10 text-[15px] text-ink outline-none transition-colors focus:border-blue"
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

        {/* Fläche */}
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
            Fläche
          </span>
          <input
            type="text"
            value={flaeche}
            onChange={(e) => setFlaeche(e.target.value)}
            placeholder="z. B. 450 m²"
            className="mt-2 w-full border border-line bg-white px-3 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-grey focus:border-blue"
          />
        </label>

        {/* Turnus — Segmented */}
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
            Turnus
          </span>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {TURNUS.map((t, i) => {
              const isActive = i === turnus;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTurnus(i)}
                  className={`border px-1.5 py-2.5 text-[12px] font-medium transition-colors ${
                    isActive
                      ? "border-blue bg-blue-tint text-blue"
                      : "border-line text-grey-2 hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <Button type="submit" className="mt-2 w-full">
          Anfrage abschicken
        </Button>
      </form>

      <p className="mt-4 text-center text-[13px] text-grey-2">
        Oder direkt:{" "}
        <a
          href={CONTACT.phoneHref}
          className="font-mono text-blue transition-colors hover:text-blue-dark"
        >
          {CONTACT.phone}
        </a>
      </p>
    </div>
  );
}
