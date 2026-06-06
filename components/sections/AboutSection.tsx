"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { ClipReveal } from "@/components/primitives/ClipReveal";
import { Pd } from "@/components/primitives/Pd";
import { WHAT_I_DO, FACTS } from "@/data/about";

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
          <div className="divider" />
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
                I'm Dylan — a final-year informatics student at Sebelas Maret University, but more
                accurately: a product builder who happens to code. I've shipped 7 projects, won
                marketing strategy at Grab, made Top 7 nationally at Hacktiv8 × Meta Llama, and
                currently mentor with Arthur D. Little.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", maxWidth: 520 }}>
                My edge isn't raw technical skill. It's seeing the gap between what people need and
                what gets built — then assembling the team, AI tools, and strategy to actually ship
                it.
              </p>
            </Reveal>

            {/* What I do */}
            <div style={{ marginTop: 48 }}>
              {WHAT_I_DO.map(({ label, value }, i) => (
                <Reveal key={label} delay={0.36 + i * 0.08}>
                  <div
                    style={{
                      display: "flex",
                      gap: 24,
                      padding: "16px 0",
                      borderTop: ".5px solid var(--border)",
                      alignItems: "baseline",
                    }}
                  >
                    <span className="t-tiny" style={{ color: "var(--subtle)", width: 80, flexShrink: 0 }}>
                      {label}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--fg)", lineHeight: 1.4 }}>
                      {value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — photo + facts */}
          <div style={{ position: isTablet ? "static" : "sticky", top: 120 }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: 0,
                  overflow: "hidden",
                  background: "#ECEAE5",
                  position: "relative",
                  marginBottom: 16,
                }}
              >
                <Image
                  src="/dylan.jpeg"
                  alt="Dylan, 2026 — Surakarta"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <p className="t-tiny" style={{ color: "var(--subtle)", marginTop: 8 }}>
                Dylan, 2026 — Surakarta
              </p>
            </Reveal>

            {/* Facts */}
            <Reveal delay={0.2} style={{ marginTop: 24 }}>
              {FACTS.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 16,
                    padding: "10px 0",
                    borderTop: ".5px solid var(--border)",
                  }}
                >
                  <span className="t-tiny" style={{ color: "var(--subtle)", flexShrink: 0 }}>
                    {label}
                  </span>
                  <span
                    style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)", textAlign: "right" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
