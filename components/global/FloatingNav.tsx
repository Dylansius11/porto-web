"use client";

import { useEffect, useState } from "react";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { EASE } from "@/lib/motion";

const ALL_NAV_LINKS = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

const MOBILE_NAV_LINKS = [
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    function handle() {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    }
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const easeStr = `cubic-bezier(${EASE.join(",")})`;
  const transition = `transform 0.4s ${easeStr}, opacity 0.4s ${easeStr}`;

  const navLinks = isMobile ? MOBILE_NAV_LINKS : ALL_NAV_LINKS;

  return (
    <div
      style={{
        position: "fixed",
        top: isMobile ? 12 : 20,
        left: "50%",
        transform: `translate(-50%, ${visible ? "0" : "-72px"})`,
        opacity: visible ? 1 : 0,
        transition,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 0,
        padding: isMobile ? "6px 6px 6px 16px" : "8px 8px 8px 22px",
        background: "rgba(248,247,244,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 999,
        border: "0.5px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        pointerEvents: visible ? "auto" : "none",
        maxWidth: "calc(100vw - 32px)",
      }}
      aria-hidden={!visible}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: isMobile ? 10 : 11,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--fg)",
          marginRight: isMobile ? 14 : 24,
          flexShrink: 0,
        }}
      >
        DPP
      </span>

      <nav style={{ display: "flex", gap: isMobile ? 14 : 20, marginRight: isMobile ? 10 : 16 }}>
        {navLinks.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            tabIndex={visible ? 0 : -1}
            style={{
              fontFamily: "var(--sans)",
              fontSize: isMobile ? 11 : 12,
              fontWeight: 500,
              color: "var(--muted)",
              background: "none",
              border: "none",
              padding: "2px 0",
              letterSpacing: ".2px",
              transition: "color 0.2s",
              flexShrink: 0,
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
          fontSize: isMobile ? 9 : 10,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: isMobile ? "6px 14px" : "8px 18px",
          borderRadius: 999,
          background: "var(--fg)",
          color: "var(--bg)",
          border: "none",
          flexShrink: 0,
        }}
      >
        Hire Me
      </button>
    </div>
  );
}
