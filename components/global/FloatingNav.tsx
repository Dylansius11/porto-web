"use client";

import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";

const NAV_LINKS = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handle() {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    }
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const easeStr = `cubic-bezier(${EASE.join(",")})`;
  const transition = `transform 0.4s ${easeStr}, opacity 0.4s ${easeStr}`;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: `translate(-50%, ${visible ? "0" : "-72px"})`,
        opacity: visible ? 1 : 0,
        transition,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 0,
        padding: "8px 8px 8px 22px",
        background: "rgba(248,247,244,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 999,
        border: "0.5px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--fg)",
          marginRight: 24,
        }}
      >
        DPP
      </span>

      <nav style={{ display: "flex", gap: 20, marginRight: 16 }}>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            tabIndex={visible ? 0 : -1}
            style={{
              fontFamily: "var(--sans)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--muted)",
              background: "none",
              border: "none",
              padding: "2px 0",
              letterSpacing: ".2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </button>
        ))}
      </nav>

      <button
        onClick={() => scrollTo("contact")}
        tabIndex={visible ? 0 : -1}
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: "8px 18px",
          borderRadius: 999,
          background: "var(--fg)",
          color: "var(--bg)",
          border: "none",
        }}
      >
        Hire Me
      </button>
    </div>
  );
}
