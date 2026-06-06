"use client";

import { useState } from "react";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { EXPERIENCE, type ExperienceEntry } from "@/data/experience";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/lib/motion";

function ExperienceEntryItem({
  entry,
  delay,
  isLast,
  isMobile,
}: {
  entry: ExperienceEntry;
  delay: number;
  isLast: boolean;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
          gap: isMobile ? 16 : 48,
          position: "relative",
          transition: "background 0.3s ease",
          background: hovered ? "rgba(255,255,255,0.4)" : "transparent",
          margin: "0 -20px",
          padding: isLast
            ? (hovered ? "20px 20px" : "0 20px")
            : (hovered ? "20px 20px 56px" : "0 20px 56px"),
          borderRadius: 8,
        }}
      >
        {/* Timeline dot */}
        {!isMobile && (
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: delay + 0.1 }}
            style={{
              position: "absolute",
              left: 219,
              top: 6,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: hovered ? "var(--fg)" : "var(--accent)",
              zIndex: 2,
              transition: "background 0.3s ease",
              boxShadow: hovered ? "0 0 0 4px rgba(94,14,215,0.15)" : "none",
            }}
          />
        )}

        {/* LEFT */}
        <div style={{ paddingRight: isMobile ? 0 : 32 }}>
          <div
            className="t-label"
            style={{
              color: hovered ? "var(--fg)" : "var(--accent)",
              fontSize: 11,
              marginBottom: 8,
              transition: "color 0.3s ease",
            }}
          >
            {entry.date}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 20,
              color: "var(--fg)",
              lineHeight: 1.2,
              marginBottom: 4,
              transition: "transform 0.2s ease",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {entry.company}
          </div>
          <div className="t-tiny" style={{ color: "var(--subtle)", marginBottom: 10 }}>
            {entry.location}
          </div>
          <div style={{ fontSize: 14, color: "var(--muted)" }}>{entry.role}</div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            paddingLeft: isMobile ? 0 : 40,
            borderLeft: isMobile ? "none" : ".5px solid var(--border)",
            transition: "border-color 0.3s ease",
            borderColor: hovered ? "var(--fg)" : undefined,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {entry.bullets.map((b, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  color: "var(--fg)",
                  lineHeight: 1.65,
                  transition: "opacity 0.2s ease",
                  opacity: hovered ? 1 : 0.85,
                }}
              >
                {b}
              </p>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
            {entry.tags.map((t) => (
              <span
                key={t}
                className="tag"
                style={{
                  background: hovered ? "var(--fg)" : "var(--surface)",
                  border: ".5px solid var(--border)",
                  color: hovered ? "var(--bg)" : "#555",
                  transition: "all 0.3s ease",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ExperienceSection() {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="experience"
      style={{ padding: "140px var(--gutter)", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          index="03"
          label="Experience"
          title={
            <>
              Track Record<Pd />
            </>
          }
          desc="Real roles, real results. From hotels to fintech, from local government to global consulting."
        />

        <div style={{ marginTop: 72, position: "relative" }}>
          {/* Vertical timeline line */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: 219,
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border)",
                zIndex: 1,
              }}
            />
          )}
          {EXPERIENCE.map((entry, i) => (
            <ExperienceEntryItem
              key={entry.company}
              entry={entry}
              delay={0.08 + i * 0.12}
              isLast={i === EXPERIENCE.length - 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
