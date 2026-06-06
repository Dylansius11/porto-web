"use client";

import { useState } from "react";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Pd } from "@/components/primitives/Pd";
import { SocialBtn } from "@/components/ui/SocialBtn";
import { PROJECTS, type Project, type SocialType } from "@/data/projects";

function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="card"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s var(--ease), box-shadow 0.3s ease, border-color 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.08)" : "none",
          borderColor: hovered ? "var(--fg)" : undefined,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top content area */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span className="t-tiny" style={{ color: "var(--muted)" }}>
              {p.category}
            </span>
            <span
              className="tag"
              style={{ background: p.badgeColor.bg, color: p.badgeColor.text, flexShrink: 0 }}
            >
              {p.badge}
            </span>
          </div>

          <h3
            style={{
              fontWeight: 700,
              fontSize: 26,
              color: "var(--fg)",
              marginTop: 18,
              lineHeight: 1.1,
            }}
          >
            {p.title}
          </h3>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.4, marginTop: 6 }}>
            {p.oneliner}
          </p>
          <p
            style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginTop: 12 }}
          >
            {p.desc}
          </p>
        </div>

        {/* Bottom area. Always sits at the bottom of the card */}
        <div style={{ marginTop: "auto" }}>
          <div className="divider" style={{ margin: "18px 0" }} />

          {/* Stats */}
          <div style={{ display: "flex", gap: 20 }}>
            {p.stats.map(({ n, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--fg)",
                    lineHeight: 1,
                    whiteSpace: "pre-line",
                  }}
                >
                  {n}
                </div>
                <div
                  className="t-tiny"
                  style={{ color: "var(--subtle)", marginTop: 3, whiteSpace: "pre-line", lineHeight: 1.5 }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: role + social */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 20,
              gap: 8,
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--fg)" }}>
                {p.role}
              </div>
              <div className="t-tiny" style={{ color: "var(--subtle)", marginTop: 3 }}>
                {p.period} · {p.context}
              </div>
            </div>
            <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
              {(Object.entries(p.links) as [SocialType, string][]).map(([type, href]) => (
                <SocialBtn key={type} type={type} href={href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectsSection() {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="projects"
      style={{ padding: "140px var(--gutter)", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          index="02"
          label="Selected Work"
          title={
            <>
              Selected Work<Pd />
            </>
          }
          desc="Five projects spanning Web3, AI, ESG, and SaaS. Each solved a real problem. Each shipped with measurable impact."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
            gridAutoRows: "1fr",
            gap: 20,
            marginTop: 64,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={0.08 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
