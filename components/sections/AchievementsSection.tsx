"use client";

import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { ACHIEVEMENTS, type Achievement } from "@/data/achievements";

function AchievCard({ a, delay }: { a: Achievement; delay: number }) {
  return (
    <Reveal
      delay={delay}
      style={{ gridColumn: a.full ? "1 / -1" : "auto" }}
    >
      <div className="card" style={{ height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span className="tag" style={{ background: a.badge.bg, color: a.badge.text }}>
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
          }}
        >
          {a.title}
        </h3>
        <p className="t-label" style={{ color: "var(--accent)", fontSize: 10, marginTop: 8 }}>
          {a.by}
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginTop: 14 }}>
          {a.desc}
        </p>
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
