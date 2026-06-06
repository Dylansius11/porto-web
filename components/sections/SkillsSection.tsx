"use client";

import { Fragment, useRef } from "react";
import { useInView } from "framer-motion";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { SKILL_CATS, TOOLS, CERTS } from "@/data/skills";

export function SkillsSection() {
  const ref2 = useRef<HTMLDivElement>(null);
  const inView2 = useInView(ref2, { once: true, margin: "-80px 0px" });
  const { isMobile } = useBreakpoint();

  return (
    <section id="skills" style={{ padding: "140px var(--gutter)", background: "var(--bg)" }}>
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
            <Reveal key={cat.num} delay={0.08 + i * 0.1}>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 64,
                    color: "var(--accent)",
                    opacity: 0.35,
                    lineHeight: 1,
                  }}
                >
                  {cat.num}
                </div>
                <div
                  style={{ fontWeight: 700, fontSize: 22, color: "var(--fg)", marginTop: 14, marginBottom: 16 }}
                >
                  {cat.title}
                </div>
                <div className="divider" style={{ marginBottom: 16 }} />
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 20 }}>
                  {cat.brief}
                </p>
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
          ))}
        </div>

        {/* Tools strip */}
        <div ref={ref2} style={{ marginTop: 100, textAlign: "center" }}>
          <Reveal>
            <div className="t-label" style={{ color: "var(--muted)", marginBottom: 20 }}>
              TOOLS · STACK · CURRENT
            </div>
            <div className="divider" style={{ maxWidth: 480, margin: "0 auto 24px" }} />
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 2.2,
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {TOOLS.map((t, i) => (
                <Fragment key={t}>
                  {t}
                  {i < TOOLS.length - 1 && (
                    <span style={{ color: "var(--accent)", margin: "0 10px" }}>/</span>
                  )}
                </Fragment>
              ))}
            </p>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.15} style={{ marginTop: 72 }}>
            <div className="t-tiny" style={{ color: "var(--muted)", marginBottom: 12 }}>
              CERTIFICATIONS
            </div>
            <div className="divider" style={{ marginBottom: 20 }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "8px 40px",
                textAlign: "left",
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {CERTS.map((c) => (
                <p
                  key={c}
                  style={{ fontSize: 13, color: "#555", padding: "6px 0", borderBottom: ".5px solid var(--border)" }}
                >
                  {c}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
