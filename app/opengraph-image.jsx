import { ImageResponse } from "next/og";

export const alt = "Inversa, Inc. Deep tech infrastructure for Africa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated rather than shipped as a file so the wording can never drift out
// of sync with the copy on the site.
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
          background: "#0a0a0a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Inversa, Inc
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            lineHeight: 1.05,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          <span>ENGINEERING</span>
          <span>AFRICA&apos;S FUTURE</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>Deep tech infrastructure for Africa</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>
            inversa-inc.xyz
          </span>
        </div>
      </div>
    ),
    size
  );
}
