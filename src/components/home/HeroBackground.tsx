// components/home/HeroBackground.tsx
// Variante A — "Squeegee-Wisch": ein Abzieher fährt langsam diagonal durch den
// Hero und hinterlässt eine kurz aufblitzende, sauberere Spur. Reine CSS-Animation,
// kein State -> kann als Server Component laufen. Keyframes/Klassen siehe globals.css.
//
// Einsatz im Hero der Startseite C:
//   <section className="relative overflow-hidden border-b border-line bg-surface">
//     <HeroBackground />
//     <div className="relative z-10 mx-auto max-w-[1200px] px-6 ...">{/* Inhalt */}</div>
//   </section>

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Fassaden-/Fensterraster, das im Takt des Wischs kurz aufklart */}
      <div
        className="hsf-pane absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,77,140,.06) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(27,77,140,.06) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          WebkitMaskImage:
            "radial-gradient(140% 120% at 60% 35%, #000 45%, transparent 100%)",
          maskImage:
            "radial-gradient(140% 120% at 60% 35%, #000 45%, transparent 100%)",
        }}
      />
      {/* Der Abzieher: schmale Spur, weiches Clean-Glow plus dünne blaue Klinge */}
      <div
        className="hsf-wipe absolute -top-[12%] -bottom-[12%] left-0 w-[34%]"
        style={{
          background:
            "linear-gradient(100deg," +
            "transparent 0%," +
            "rgba(255,255,255,0) 34%," +
            "rgba(255,255,255,.55) 64%," +
            "rgba(255,255,255,.9) 73%," +
            "rgba(27,77,140,.5) 75%," +
            "rgba(27,77,140,0) 77%," +
            "transparent 84%)",
        }}
      />
    </div>
  );
}
