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
import { ChevronDown, ArrowRight, Moon, Sun } from "lucide-react";
import { KONTAKT, CONTACT } from "@/lib/content";

// Layout-Effekt, der auf dem Server zu useEffect degradiert (kein SSR-Warning).
const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// cubic-bezier(.5,.02,.35,1) als Easing-Funktion (Newton-Raphson).
function makeBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;
  const fx = (t: number) => ((ax * t + bx) * t + cx) * t;
  const dfx = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  const fy = (t: number) => ((ay * t + by) * t + cy) * t;
  return (x: number) => {
    let t = x;
    for (let i = 0; i < 6; i++) {
      const err = fx(t) - x;
      const d = dfx(t);
      if (Math.abs(err) < 1e-4 || d === 0) break;
      t -= err / d;
    }
    return fy(Math.max(0, Math.min(1, t)));
  };
}
const easeWipe = makeBezier(0.5, 0.02, 0.35, 1);
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

// Weiche, organische Schmutzflecken (keine Streifen/Raster).
const DIRT_SPOTS =
  "radial-gradient(150px 110px at 16% 28%, rgba(120,110,95,.40), transparent 70%)," +
  "radial-gradient(190px 150px at 60% 52%, rgba(92,86,74,.34), transparent 72%)," +
  "radial-gradient(120px 95px at 82% 24%, rgba(132,120,100,.30), transparent 70%)," +
  "radial-gradient(160px 130px at 38% 76%, rgba(104,97,84,.36), transparent 72%)," +
  "radial-gradient(110px 90px at 90% 72%, rgba(116,105,90,.28), transparent 70%)," +
  "radial-gradient(140px 110px at 28% 50%, rgba(98,92,80,.32), transparent 72%)," +
  "radial-gradient(120px 100px at 70% 84%, rgba(110,100,86,.30), transparent 72%)";

const FIELD_LABEL =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[1.5px] text-[#5A6373]";

export function Hero() {
  const [light, setLight] = useState(false);
  const [objektart, setObjektart] = useState(KONTAKT.objektarten[0]);
  const [flaeche, setFlaeche] = useState("");
  const [turnus, setTurnus] = useState(0);

  const dirtRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const revealToken = useRef(0);
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
        if (token !== revealToken.current) return;
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

  const runReveal = useCallback(() => {
    const token = ++revealToken.current;
    const dirt = dirtRef.current;
    const streak = streakRef.current;
    if (reduced.current) {
      if (dirt) dirt.style.opacity = "0";
      setFinalNumbers();
      return;
    }
    if (!dirt) return;
    dirt.style.opacity = "1";
    dirt.style.transform = "skewX(-11deg) translateX(-12%)";
    if (streak) streak.style.opacity = "0.5";
    let glossStarted = false;
    let countStarted = false;
    const delay = 400;
    const dur = 4600;
    const startAt = performance.now() + delay;
    const frame = (now: number) => {
      if (token !== revealToken.current) return;
      if (now < startAt) {
        requestAnimationFrame(frame);
        return;
      }
      const t = Math.min(1, (now - startAt) / dur);
      const e = easeWipe(t);
      dirt.style.transform = `skewX(-11deg) translateX(${-12 + e * 162}%)`;
      if (streak) streak.style.opacity = `${0.5 * (1 - t)}`;
      if (!glossStarted && t >= 0.66) {
        glossStarted = true;
        runGloss(token);
      }
      if (!countStarted && t >= 0.96) {
        countStarted = true;
        runCountUp();
      }
      if (t < 1) requestAnimationFrame(frame);
      else dirt.style.opacity = "0";
    };
    requestAnimationFrame(frame);
  }, [runCountUp, runGloss, setFinalNumbers]);

  // Initialzustände + Load-Count-up (dunkel).
  useIsoEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (dirtRef.current) {
      dirtRef.current.style.opacity = "0";
      dirtRef.current.style.transform = "skewX(-11deg) translateX(150%)";
    }
    if (glossRef.current) {
      glossRef.current.style.opacity = "0";
      glossRef.current.style.transform = "translateX(-130%) skewX(-18deg)";
    }
    if (streakRef.current) streakRef.current.style.opacity = "0";

    if (reduced.current) {
      setFinalNumbers();
      return;
    }
    runCountUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Umschalten dunkel <-> hell (Layout-Effekt: Dreck deckt vor dem ersten Paint).
  useIsoEffect(() => {
    if (light) {
      runReveal();
    } else {
      revealToken.current++;
      if (dirtRef.current) dirtRef.current.style.opacity = "0";
    }
  }, [light, runReveal]);

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
    background: light
      ? "linear-gradient(180deg,#F5F8FD,#E3EDFB)"
      : "#14181F",
    borderBottom: "4px solid #1B4D8C",
    transition: "background .5s ease",
    "--hero-text": light ? "#14181F" : "#FFFFFF",
    "--hero-sub": light ? "#3A424E" : "#AEB6C2",
    "--hero-line": light ? "#CBD8EC" : "rgba(255,255,255,.14)",
    "--hero-grid": light ? "rgba(27,77,140,.09)" : "rgba(127,168,221,.11)",
    "--hero-spot": light ? "rgba(90,139,212,.45)" : "rgba(90,139,212,.30)",
    "--hero-kicker": light ? "#1B4D8C" : "#7FA8DD",
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

          {/* Rechte Spalte: Lead-Funnel + Umschalter */}
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

            {/* Dunkel/Hell-Umschalter */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="font-mono text-[11px] uppercase tracking-[1.5px]"
                style={{ color: light ? "#8A929E" : "var(--hero-text)" }}
              >
                Dunkel
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={light}
                aria-label="Zwischen dunklem und hellem Look umschalten"
                onClick={() => setLight((v) => !v)}
                className="relative h-[30px] w-[60px] transition-colors"
                style={{ background: light ? "#1B4D8C" : "#3A424E" }}
              >
                <span
                  className="absolute top-[3px] grid h-6 w-6 place-items-center bg-white transition-[left] duration-300"
                  style={{ left: light ? "30px" : "3px" }}
                >
                  {light ? (
                    <Sun className="h-3.5 w-3.5 text-[#1B4D8C]" />
                  ) : (
                    <Moon className="h-3.5 w-3.5 text-[#14181F]" />
                  )}
                </span>
              </button>
              <span
                className="font-mono text-[11px] uppercase tracking-[1.5px]"
                style={{ color: light ? "var(--hero-text)" : "#8A929E" }}
              >
                Hell
              </span>
            </div>
          </div>
        </div>

        {/* Dreck-Panel (Clean-Reveal) — liegt über dem Inhalt */}
        <div
          ref={dirtRef}
          aria-hidden
          className="hsf-dirt pointer-events-none absolute z-30"
          style={{
            top: "-14%",
            left: 0,
            width: "172%",
            height: "128%",
            backdropFilter: "blur(6px) saturate(.5) brightness(.95) contrast(.9)",
            WebkitBackdropFilter:
              "blur(6px) saturate(.5) brightness(.95) contrast(.9)",
            willChange: "transform",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(60,56,50,.10)",
              backgroundImage: DIRT_SPOTS,
              filter: "blur(3px)",
            }}
          />
          <div
            ref={streakRef}
            className="absolute inset-0"
            style={{
              mixBlendMode: "screen",
              backgroundImage:
                "linear-gradient(118deg, transparent 8%, rgba(255,255,255,.10) 26%, transparent 38%, rgba(255,255,255,.07) 54%, transparent 66%)",
            }}
          />
          {/* Vorderkante = blauer Abzieher */}
          <div
            className="absolute left-0 top-0 h-full w-[70px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.9) 42%, #1B4D8C 60%, transparent)",
              boxShadow: "0 0 26px rgba(27,77,140,.55)",
            }}
          />
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
