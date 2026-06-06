"use client";

import { Fragment, useRef } from "react";
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
        marginTop: 24,
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to right, var(--bg), transparent)",
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
          width: 80,
          background: "linear-gradient(to left, var(--bg), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className="tools-marquee"
        style={{
          display: "flex",
          gap: 40,
          animation: "marquee-scroll 30s linear infinite",
          width: "fit-content",
        }}
      >
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            style={{
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 500,
              color: "var(--fg)",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 40,
            }}
          >
            {tool}
            <span style={{ color: "var(--accent)", opacity: 0.4 }}>/</span>
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
 * SKILL CATEGORY CARD
 * Enhanced with hover effects
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
            fontSize: 64,
            color: "var(--accent)",
            opacity: 0.35,
            lineHeight: 1,
            fontFamily: "var(--sans)",
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
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 20 }}>
          {cat.brief}
        </p>

        {/* Skills list */}
        <p style={{ fontSize: 15, color: "var(--fg)", lineHeight: 2 }}>
          {cat.skills.map((s, j) => (
            <Fragment key={s}>
              {s}
              {j < cat.skills.length - 1 && (
                <span style={{ color: "var(--accent)", margin: "0 6px" }}>·</span>
              )}
            </Fragment>
          ))}
        </p>
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
