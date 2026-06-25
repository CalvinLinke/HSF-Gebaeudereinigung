"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { KONTAKT, CONTACT } from "@/lib/content";

// Layout-Effekt, der auf dem Server zu useEffect degradiert (kein SSR-Warning).
const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const COUNTERS = [
  { target: 37, suffix: "", label: "Jahre Erfahrung" },
  { target: 250, suffix: "+", label: "Betreute Kunden" },
  { target: 6, suffix: "", label: "Leistungsbereiche" },
];
const TURNUS = ["Wöchentlich", "Täglich", "Einmalig"];
const MARQUEE =
  "● PROFESSIONELL  ● FAIR KALKULIERT  ● REGIONAL VERWURZELT  ● ZUVERLÄSSIG  ● SCHNELLE ABWICKLUNG  ● EHRLICHE KOMMUNIKATION";

const FIELD_LABEL =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[1.5px] text-[#5A6373]";

export function Hero() {
  const [objektart, setObjektart] = useState(KONTAKT.objektarten[0]);
  const [flaeche, setFlaeche] = useState("");
  const [turnus, setTurnus] = useState(0);

  const glossRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const glossToken = useRef(0);
  const countToken = useRef(0);
  const reduced = useRef(false);

  const setFinalNumbers = useCallback(() => {
    COUNTERS.forEach((c, i) => {
      const el = counterRefs.current[i];
      if (el) el.textContent = `${c.target}${c.suffix}`;
    });
  }, []);

  const runCountUp = useCallback(() => {
    const token = ++countToken.current;
    const dur = 1300;
    const start = performance.now();
    COUNTERS.forEach((c, i) => {
      const el = counterRefs.current[i];
      if (el) el.textContent = `0${c.suffix}`;
    });
    const frame = (now: number) => {
      if (token !== countToken.current) return;
      const t = Math.min(1, (now - start) / dur);
      const e = easeOutCubic(t);
      COUNTERS.forEach((c, i) => {
        const el = counterRefs.current[i];
        if (el) el.textContent = `${Math.round(c.target * e)}${c.suffix}`;
      });
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  const runGloss = useCallback((token: number) => {
    const g = glossRef.current;
    const card = cardRef.current;
    if (g) {
      const dur = 1500;
      const start = performance.now();
      g.style.opacity = "1";
      const frame = (now: number) => {
        if (token !== glossToken.current) return;
        const t = Math.min(1, (now - start) / dur);
        const e = easeInOutCubic(t);
        g.style.transform = `translateX(${-130 + e * 360}%) skewX(-18deg)`;
        if (t < 1) requestAnimationFrame(frame);
        else g.style.opacity = "0";
      };
      requestAnimationFrame(frame);
    }
    if (card) {
      card.style.boxShadow =
        "0 0 0 1.5px #1B4D8C, 0 26px 64px rgba(27,77,140,.30)";
      window.setTimeout(() => {
        if (card) card.style.boxShadow = "";
      }, 760);
    }
  }, []);

  // Beim Laden: Kennzahlen hochzählen und einmal der dezente Karten-Glanz.
  // Bei reduzierter Bewegung stehen die Zahlen sofort.
  useIsoEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (glossRef.current) {
      glossRef.current.style.opacity = "0";
      glossRef.current.style.transform = "translateX(-130%) skewX(-18deg)";
    }

    if (reduced.current) {
      setFinalNumbers();
      return;
    }
    runCountUp();
    runGloss(++glossToken.current);
  }, [runCountUp, runGloss, setFinalNumbers]);

  function persistLead() {
    try {
      sessionStorage.setItem(
        "hsf:lead",
        JSON.stringify({ objektart, flaeche, turnus: TURNUS[turnus] }),
      );
    } catch {
      /* sessionStorage nicht verfügbar */
    }
  }

  const sectionStyle = {
    background: "#14181F",
    borderBottom: "4px solid #1B4D8C",
    "--hero-text": "#FFFFFF",
    "--hero-sub": "#AEB6C2",
    "--hero-line": "rgba(255,255,255,.14)",
    "--hero-grid": "rgba(127,168,221,.11)",
    "--hero-spot": "rgba(90,139,212,.30)",
    "--hero-kicker": "#7FA8DD",
  } as unknown as CSSProperties;

  return (
    <>
      <section className="relative overflow-hidden" style={sectionStyle}>
        {/* Driftendes Raster */}
        <div
          aria-hidden
          className="hsf-grid pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--hero-grid) 1px, transparent 1px)," +
              "linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        {/* Wandernder Lichtkegel */}
        <div
          aria-hidden
          className="hsf-spot pointer-events-none absolute -right-[120px] -top-[220px] h-[620px] w-[620px]"
          style={{
            background:
              "radial-gradient(circle, var(--hero-spot), transparent 62%)",
            filter: "blur(10px)",
          }}
        />

        {/* Inhalt */}
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 pb-[70px] pt-16 lg:gap-14 lg:[grid-template-columns:1.08fr_.92fr]">
          {/* Linke Spalte */}
          <div>
            <p
              className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[2.5px]"
              style={{ color: "var(--hero-kicker)" }}
            >
              <span
                aria-hidden
                className="inline-block h-[7px] w-[7px]"
                style={{ background: "var(--hero-kicker)" }}
              />
              Dresden und Umgebung · seit 1988
            </p>

            <h1
              className="mt-6 font-extrabold"
              style={{
                color: "var(--hero-text)",
                fontSize: "clamp(40px,5.6vw,64px)",
                letterSpacing: "-2.2px",
                lineHeight: 0.96,
              }}
            >
              <span className="block">Jede Fläche.</span>
              <span className="block">Jede Etage.</span>
              <span className="hsf-sheen block">In guten Händen.</span>
            </h1>

            <p
              className="mt-6"
              style={{
                color: "var(--hero-sub)",
                fontSize: "17.5px",
                lineHeight: 1.6,
                maxWidth: "480px",
              }}
            >
              Büros, Praxen, Wohnanlagen und Bauendreinigung. Qualität nach
              Checkliste, fester Ansprechpartner, eingespieltes Team. Sie merken
              nur das Ergebnis.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-x-11 gap-y-5 border-t pt-7"
              style={{ borderColor: "var(--hero-line)" }}
            >
              {COUNTERS.map((c, i) => (
                <div key={c.label}>
                  <div
                    className="font-mono font-semibold"
                    style={{
                      color: "var(--hero-kicker)",
                      fontSize: "clamp(34px,4vw,44px)",
                      lineHeight: 1,
                    }}
                  >
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                    >
                      {`${c.target}${c.suffix}`}
                    </span>
                  </div>
                  <div
                    className="mt-1.5"
                    style={{ color: "var(--hero-sub)", fontSize: "13.5px" }}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Lead-Funnel */}
          <div className="flex flex-col gap-5">
            <div
              ref={cardRef}
              className="relative bg-white shadow-[0_24px_60px_rgba(20,24,31,.18)]"
              style={{ border: "1px solid #E2E6EC" }}
            >
              {/* Registermarken */}
              <span
                aria-hidden
                className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2"
                style={{ borderColor: "#1B4D8C" }}
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2"
                style={{ borderColor: "#1B4D8C" }}
              />

              {/* Kopf */}
              <div
                className="px-[26px] py-6"
                style={{ borderBottom: "1px solid #E2E6EC" }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[2px] text-[#1B4D8C]">
                  Schnell zum Angebot
                </p>
                <p className="mt-1 text-[19px] font-bold text-[#14181F]">
                  In zwei Minuten beschrieben
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 px-[26px] py-6">
                <label className="block">
                  <span className={FIELD_LABEL}>Objektart</span>
                  <div className="relative">
                    <select
                      value={objektart}
                      onChange={(e) => setObjektart(e.target.value)}
                      className="w-full appearance-none border border-[#E2E6EC] bg-white px-3.5 py-3 pr-10 text-[15px] text-[#14181F] outline-none focus:border-[#1B4D8C]"
                    >
                      {KONTAKT.objektarten.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A929E]" />
                  </div>
                </label>

                <label className="block">
                  <span className={FIELD_LABEL}>Ungefähre Fläche</span>
                  <input
                    type="text"
                    value={flaeche}
                    onChange={(e) => setFlaeche(e.target.value)}
                    placeholder="z. B. 450 m²"
                    className="w-full border border-[#E2E6EC] bg-white px-3.5 py-3 text-[15px] text-[#14181F] outline-none placeholder:text-[#8A929E] focus:border-[#1B4D8C]"
                  />
                </label>

                <div>
                  <span className={FIELD_LABEL}>Turnus</span>
                  <div className="grid grid-cols-3 gap-2">
                    {TURNUS.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTurnus(i)}
                        className={`border px-1.5 py-2.5 text-[13px] font-medium transition-colors ${
                          i === turnus
                            ? "border-[#1B4D8C] bg-[#EAF0F8] text-[#1B4D8C]"
                            : "border-[#E2E6EC] text-[#5A6373] hover:border-[#14181F]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  onClick={persistLead}
                  className="mt-1 inline-flex items-center justify-center gap-2 bg-[#1B4D8C] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#143C6E]"
                >
                  Anfrage abschicken
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="text-center text-[12px] text-[#8A929E]">
                  Oder direkt:{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="font-mono text-[#1B4D8C] hover:text-[#143C6E]"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
              </div>

              {/* Polier-Glanz (auf die Karte geklippt) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                <div
                  ref={glossRef}
                  className="hsf-gloss absolute top-[-50%] h-[200%] w-1/2"
                  style={{
                    left: 0,
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(255,255,255,.85) 50%, transparent 65%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laufband */}
      <div className="overflow-hidden bg-[#1B4D8C]">
        <div className="hsf-marquee flex w-max whitespace-nowrap py-[13px]">
          <span className="px-6 font-mono text-[13px] tracking-[2px] text-white">
            {MARQUEE}
          </span>
          <span
            aria-hidden
            className="px-6 font-mono text-[13px] tracking-[2px] text-white"
          >
            {MARQUEE}
          </span>
        </div>
      </div>
    </>
  );
}
