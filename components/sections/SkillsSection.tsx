"use client";

import { Fragment, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { SKILL_CATS, TOOLS, CERTS } from "@/data/skills";

/* ─────────────────────────────────────────────────────────
 * TOOLS MARQUEE
 * Infinite scroll animation for tools strip
 * ───────────────────────────────────────────────────────── */

function ToolsMarquee() {
  const doubled = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        marginTop: 32,
        padding: "20px 0",
        background: "#0A0A0A",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: "linear-gradient(to right, #0A0A0A, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: "linear-gradient(to left, #0A0A0A, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className="tools-marquee"
        style={{
          display: "flex",
          gap: 48,
          animation: "marquee-scroll 35s linear infinite",
          width: "fit-content",
        }}
      >
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 500,
              color: "#F8F7F4",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 48,
              fontFamily: "var(--sans)",
              letterSpacing: "-0.3px",
            }}
          >
            {tool}
            <span style={{ color: "#5E0ED7", opacity: 0.6, fontWeight: 300 }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * CERTIFICATION CARD
 * Individual certification with visual flair
 * ───────────────────────────────────────────────────────── */

function CertCard({ cert, index }: { cert: string; index: number }) {
  const isInProgress = cert.includes("In Progress");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "16px 20px",
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        borderRadius: 8,
        transition: "transform 0.3s var(--ease), border-color 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--fg)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Number indicator */}
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          fontWeight: 500,
          color: "var(--accent)",
          opacity: 0.5,
          minWidth: 20,
          marginTop: 2,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--fg)",
            lineHeight: 1.4,
            display: "block",
          }}
        >
          {cert}
        </span>
        {isInProgress && (
          <span
            style={{
              fontSize: 10,
              fontFamily: "var(--mono)",
              fontWeight: 500,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "var(--accent)",
              marginTop: 4,
              display: "inline-block",
            }}
          >
            In Progress
          </span>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * SKILL TAG
 * Individual skill as a visual pill
 * ───────────────────────────────────────────────────────── */

function SkillTag({ skill }: { skill: string }) {
  const [hov, setHov] = useState(false);

  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 500,
        color: hov ? "var(--bg)" : "var(--fg)",
        background: hov ? "var(--fg)" : "var(--surface)",
        border: "0.5px solid var(--border)",
        transition: "all 0.25s ease",
        cursor: "default",
        whiteSpace: "nowrap",
        letterSpacing: "0.2px",
      }}
    >
      {skill}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
 * SKILL CATEGORY CARD
 * Enhanced with tag-based skills display
 * ───────────────────────────────────────────────────────── */

function SkillCategory({ cat, index }: { cat: (typeof SKILL_CATS)[0]; index: number }) {
  return (
    <Reveal delay={0.08 + index * 0.1}>
      <div
        style={{
          transition: "transform 0.3s var(--ease)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Number */}
        <div
          style={{
            fontWeight: 700,
            fontSize: 72,
            color: "var(--accent)",
            opacity: 0.25,
            lineHeight: 1,
            fontFamily: "var(--sans)",
            letterSpacing: "-2px",
          }}
        >
          {cat.num}
        </div>

        {/* Title */}
        <div
          style={{
            fontWeight: 700,
            fontSize: 22,
            color: "var(--fg)",
            marginTop: 14,
            marginBottom: 16,
            fontFamily: "var(--sans)",
          }}
        >
          {cat.title}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 0.5,
            background: "var(--border)",
            marginBottom: 16,
            width: "100%",
          }}
        />

        {/* Brief */}
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
          {cat.brief}
        </p>

        {/* Skills as tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {cat.skills.map((s) => (
            <SkillTag key={s} skill={s} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function SkillsSection() {
  const { isMobile } = useBreakpoint();

  return (
    <section id="skills" style={{ padding: "140px var(--gutter)", background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          index="04"
          label="Capabilities"
          title={
            <>
              What I Bring<Pd />
            </>
          }
          desc="I sit at the intersection of strategy and execution. Here's the full stack of what I work with."
        />

        {/* 3 categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 40 : 48,
            marginTop: 72,
          }}
        >
          {SKILL_CATS.map((cat, i) => (
            <SkillCategory key={cat.num} cat={cat} index={i} />
          ))}
        </div>

        {/* Tools Marquee Strip */}
        <div style={{ marginTop: 100 }}>
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <div className="t-label" style={{ color: "var(--muted)", marginBottom: 12 }}>
                TOOLS · STACK · CURRENT
              </div>
              <div
                style={{
                  height: 0.5,
                  background: "var(--border)",
                  maxWidth: 480,
                  margin: "0 auto 32px",
                }}
              />
              <p style={{ fontSize: 13, color: "var(--subtle)", maxWidth: 480, margin: "0 auto 8px" }}>
                The tools I use daily to ship products
              </p>
            </div>
          </Reveal>
          <ToolsMarquee />
        </div>

        {/* Certifications */}
        <Reveal delay={0.15} style={{ marginTop: 80 }}>
          <div style={{ textAlign: "center" }}>
            <div className="t-tiny" style={{ color: "var(--muted)", marginBottom: 12, letterSpacing: 3 }}>
              CERTIFICATIONS
            </div>
            <div
              style={{
                height: 0.5,
                background: "var(--border)",
                maxWidth: 240,
                margin: "0 auto 32px",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "12px 16px",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {CERTS.map((c, i) => (
              <CertCard key={c} cert={c} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
