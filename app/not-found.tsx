import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Dylansius Putra Prasetio",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--gutter)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 700,
          fontSize: "clamp(72px, 15vw, 200px)",
          lineHeight: 1,
          color: "var(--fg)",
          letterSpacing: "-4px",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--muted)",
          marginTop: 24,
        }}
      >
        This page doesn't exist. Let's get you back.
      </p>
      <a
        href="/"
        className="btn-outline"
        style={{ marginTop: 32, display: "inline-flex" }}
      >
        Back to Home
      </a>
    </main>
  );
}
