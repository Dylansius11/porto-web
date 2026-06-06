import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Dylansius Putra Prasetio — Product Builder × AI Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8F7F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#888888",
            marginBottom: 40,
          }}
        >
          Portfolio · 2026
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: "#0A0A0A",
            letterSpacing: "-2px",
            maxWidth: 900,
          }}
        >
          Dylansius Putra Prasetio
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#888888",
            marginTop: 20,
          }}
        >
          Product Builder × AI Strategist
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            background: "#5E0ED7",
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
