"use client";

import { useState } from "react";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { ACHIEVEMENTS, type Achievement } from "@/data/achievements";

function AchievCard({ a, delay }: { a: Achievement; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal
      delay={delay}
      style={{ gridColumn: a.full ? "1 / -1" : "auto" }}
    >
      <div
        className="card"
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s var(--ease), box-shadow 0.3s ease, border-color 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.08)" : "none",
          borderColor: hovered ? "var(--fg)" : undefined,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Subtle gradient overlay on hover */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: hovered ? a.badge.bg : "transparent",
            transition: "background 0.3s ease",
            zIndex: 1,
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span
            className="tag"
            style={{
              background: a.badge.bg,
              color: a.badge.text,
              transition: "transform 0.2s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            {a.tier}
          </span>
          <span className="t-tiny" style={{ color: "var(--subtle)" }}>
            {a.year}
          </span>
        </div>

        <h3
          style={{
            fontWeight: 700,
            fontSize: a.full ? 28 : 22,
            color: "var(--fg)",
            marginTop: 20,
            lineHeight: 1.15,
            transition: "color 0.2s ease",
          }}
        >
          {a.title}
        </h3>

        <p
          className="t-label"
          style={{
            color: "var(--accent)",
            fontSize: 10,
            marginTop: 8,
            transition: "opacity 0.2s ease",
            opacity: hovered ? 1 : 0.8,
          }}
        >
          {a.by}
        </p>

        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginTop: 14 }}>
          {a.desc}
        </p>

        {/* Decorative corner accent */}
        {a.full && (
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: a.badge.bg,
              opacity: hovered ? 0.15 : 0.05,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </Reveal>
  );
}

export function AchievementsSection() {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="recognition"
      style={{ padding: "140px var(--gutter)", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          index="05"
          label="Recognition"
          title={
            <>
              Recognized<Pd />
            </>
          }
          desc="Awards, accelerators, and finalist spots that validate the work."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 16,
            marginTop: 60,
          }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <AchievCard key={a.title} a={a} delay={0.07 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
