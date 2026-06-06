import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#F8F7F4",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          border: "0.5px solid #E5E5E5",
        }}
      >
        <span style={{ color: "#0A0A0A", fontWeight: 700 }}>D</span>
        <span style={{ color: "#5E0ED7", fontWeight: 700 }}>.</span>
        <span style={{ color: "#0A0A0A", fontWeight: 700 }}>P</span>
      </div>
    ),
    { ...size }
  );
}
