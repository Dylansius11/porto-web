"use client";

import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { ClipReveal } from "@/components/primitives/ClipReveal";
import { Pd } from "@/components/primitives/Pd";
import { WHAT_I_DO, FACTS } from "@/data/about";

function WhatIDoItem({ label, value, index }: { label: string; value: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={0.36 + index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          gap: 24,
          borderTop: ".5px solid var(--border)",
          alignItems: "baseline",
          transition: "background 0.3s ease, padding 0.3s ease",
          background: hovered ? "rgba(255,255,255,0.5)" : "transparent",
          margin: "0 -12px",
          padding: hovered ? "16px 12px" : "16px 0",
          borderRadius: 4,
        }}
      >
        <span
          className="t-tiny"
          style={{
            color: hovered ? "var(--accent)" : "var(--subtle)",
            width: 80,
            flexShrink: 0,
            transition: "color 0.3s ease",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "var(--fg)",
            lineHeight: 1.4,
            transition: "transform 0.2s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          {value}
        </span>
      </div>
    </Reveal>
  );
}

function FactItem({ label, value }: { label: string; value: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 16,
        borderTop: ".5px solid var(--border)",
        transition: "background 0.3s ease",
        background: hovered ? "rgba(255,255,255,0.5)" : "transparent",
        margin: "0 -8px",
        padding: hovered ? "10px 8px" : "10px 0",
        borderRadius: 4,
      }}
    >
      <span
        className="t-tiny"
        style={{
          color: hovered ? "var(--accent)" : "var(--subtle)",
          flexShrink: 0,
          transition: "color 0.3s ease",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--fg)",
          textAlign: "right",
          transition: "transform 0.2s ease",
          transform: hovered ? "translateX(-4px)" : "translateX(0)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const { isTablet } = useBreakpoint();

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "140px var(--gutter)", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <Reveal style={{ marginBottom: 40 }}>
          <div className="sec-lbl">
            <div className="sec-line" />
            <span className="t-label" style={{ color: "var(--muted)" }}>
              01 / About
            </span>
          </div>
          <div style={{ height: 0.5, background: "var(--border)", width: "100%" }} />
        </Reveal>

        {/* Body grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1.5fr 1fr",
            gap: isTablet ? 60 : 80,
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            {/* Headline */}
            <div style={{ marginBottom: 32 }}>
              <ClipReveal as="h2" delay={0.05} style={{ marginBottom: 2 }}>
                <span className="t-sect">Most people pick a lane.</span>
              </ClipReveal>
              <ClipReveal as="h2" delay={0.18}>
                <span className="t-sect">
                  I build the{" "}
                  <span style={{ color: "var(--accent)" }}>bridges</span>
                  <Pd />
                </span>
              </ClipReveal>
            </div>

            {/* Body copy */}
            <Reveal delay={0.28}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "var(--muted)",
                  maxWidth: 520,
                  marginBottom: 16,
                }}
              >
                I'm Dylan, a final-year informatics student at Sebelas Maret University, but more
                accurately: a product builder who happens to code. I've shipped 7 projects, won
                marketing strategy at Grab, made Top 7 nationally at Hacktiv8 x Meta Llama, and
                currently mentor with Arthur D. Little.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", maxWidth: 520 }}>
                My edge isn't raw technical skill. It's seeing the gap between what people need and
                what gets built. Then assembling the team, AI tools, and strategy to actually ship
                it.
              </p>
            </Reveal>

            {/* What I do */}
            <div style={{ marginTop: 48 }}>
              {WHAT_I_DO.map(({ label, value }, i) => (
                <WhatIDoItem key={label} label={label} value={value} index={i} />
              ))}
            </div>
          </div>

          {/* Right column: photo + facts */}
          <div style={{ position: isTablet ? "static" : "sticky", top: 120 }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: 0,
                  overflow: "hidden",
                  background: "#ECEAE5",
                  position: "relative",
                  marginBottom: 0,
                }}
              >
                <Image
                  src="/dylan.webp"
                  alt="Dylan, 2026 / Surakarta"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoJAAoAAUAmJZQCdAD0rCf7gAD+1z/om1QO2+CfmvNOdDrlFoVYTTDh0N/dG6tunrLvZDWMEAA="
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                {/* Gradient overlay with caption */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "40px 20px 20px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: 4,
                    }}
                  >
                    Portfolio
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.3px",
                      lineHeight: 1.2,
                    }}
                  >
                    Dylan, 2026 / Surakarta
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Facts */}
            <Reveal delay={0.2} style={{ marginTop: 24 }}>
              {FACTS.map(({ label, value }) => (
                <FactItem key={label} label={label} value={value} />
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
