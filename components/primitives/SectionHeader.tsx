"use client";

import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { ClipReveal } from "./ClipReveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  desc?: string;
}

export function SectionHeader({ index, label, title, desc }: SectionHeaderProps) {
  return (
    <div>
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div className="sec-line" />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {index} / {label}
          </span>
        </div>
        <div className="divider" style={{ marginBottom: 32 }} />
      </Reveal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 auto", minWidth: 0 }}>
          <ClipReveal as="h2" style={{ flex: "1 1 auto", minWidth: 0 }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </span>
          </ClipReveal>
        </div>
        {desc && (
          <Reveal delay={0.1} style={{ flex: "0 1 280px" }}>
            <p
              style={{
                maxWidth: 280,
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              {desc}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
