import { ImageResponse } from "next/og";

export const alt = "HSF-Gebäudereinigung · Gebäudereinigung in Dresden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#14181F",
          padding: "72px 80px",
        }}
      >
        {/* Marken-Zeile */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              backgroundColor: "#1B4D8C",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            HSF
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "24px",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            HSF-Gebäudereinigung
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "70px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.04,
            }}
          >
            Gebäudereinigung in Dresden
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "26px",
              color: "#8A929E",
              fontSize: "27px",
              letterSpacing: "5px",
            }}
          >
            FAMILIENBETRIEB · SEIT 1988
          </div>
        </div>

        {/* Streifen-Akzent */}
        <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                width: "28px",
                height: "12px",
                marginRight: "28px",
                backgroundColor: "#1B4D8C",
              }}
            />
          ))}
        </div>
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
