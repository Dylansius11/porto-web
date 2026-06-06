"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Portfolio error:", error);
  }, [error]);

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
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 1,
          color: "var(--fg)",
          letterSpacing: "-2px",
        }}
      >
        Something broke
      </h1>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--muted)",
          marginTop: 20,
          maxWidth: 400,
          lineHeight: 1.6,
        }}
      >
        {error.message || "An unexpected error occurred."}
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
        <button className="btn-dark" onClick={reset}>
          Try Again
        </button>
        <a href="/" className="btn-outline" style={{ display: "inline-flex" }}>
          Back to Home
        </a>
      </div>
    </main>
  );
}
