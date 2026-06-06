"use client";

import { useEffect, useState } from "react";
import { usePageLoader } from "@/contexts/PageLoaderContext";
import { EASE } from "@/lib/motion";

export function PageLoader() {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const { setLoaderDone } = usePageLoader();

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 1200);
    const t2 = setTimeout(() => {
      setGone(true);
      setLoaderDone(true);
    }, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [setLoaderDone]);

  if (gone) return null;

  const easeStr = `cubic-bezier(${EASE.join(",")})`;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting ? `transform 0.6s ${easeStr}` : "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--fg)",
        }}
      >
        D<span style={{ color: "var(--accent)" }}>.</span>P
        <span style={{ color: "var(--accent)" }}>.</span>P
      </span>

      <div
        style={{
          width: 240,
          height: 1,
          background: "var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            background: "var(--accent)",
            animation: `load-bar 1s ${easeStr} forwards`,
          }}
        />
      </div>

      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--subtle)",
        }}
      >
        PORTFOLIO · 2026
      </span>
    </div>
  );
}
