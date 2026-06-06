"use client";

import { useState } from "react";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { Reveal } from "@/components/primitives/Reveal";
import { ClipReveal } from "@/components/primitives/ClipReveal";
import { Pd } from "@/components/primitives/Pd";
import { CONTACT_LINKS, type ContactLink } from "@/data/contact";

function ContactLinkItem({ item, delay }: { item: ContactLink; delay: number }) {
  const [hov, setHov] = useState(false);
  const isAnchor = item.href.startsWith("#");
  const Wrapper = isAnchor ? "button" : "a";
  const wrapperProps = isAnchor
    ? {
        onClick: () => {
          const el = document.getElementById(item.href.slice(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        },
      }
    : { href: item.href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Reveal delay={delay}>
      <Wrapper
        {...wrapperProps}
        aria-label={`${item.label}: ${item.value}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 16,
          borderBottom: ".5px solid #2A2A2A",
          textDecoration: "none",
          transition: "background 0.3s ease, padding 0.3s ease",
          background: hov ? "rgba(255,255,255,0.03)" : "transparent",
          margin: "0 -8px",
          padding: hov ? "16px 8px" : "16px 0",
          borderRadius: 4,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          border: "none",
          outline: "none",
          fontFamily: "inherit",
        }}
      >
        <div>
          <div
            className="t-tiny"
            style={{
              color: hov ? "var(--accent)" : "#666",
              marginBottom: 6,
              transition: "color 0.25s",
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontSize: "clamp(15px,1.6vw,20px)",
              fontWeight: 500,
              color: hov ? "var(--accent)" : "#F8F7F4",
              transition: "color 0.25s, transform 0.25s",
              transform: hov ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {item.value}
          </div>
        </div>
        <span
          style={{
            fontSize: 18,
            color: hov ? "var(--accent)" : "#666",
            transform: hov ? "translate(4px,-4px)" : "translate(0,0)",
            transition: "color 0.25s, transform 0.25s",
          }}
        >
          ↗
        </span>
      </Wrapper>
    </Reveal>
  );
}

export function ContactSection() {
  const { isTablet } = useBreakpoint();

  return (
    <section
      id="contact"
      style={{ background: "#0A0A0A", padding: "140px var(--gutter) 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <Reveal>
          <div className="sec-lbl">
            <div className="sec-line" />
            <span className="t-label" style={{ color: "#666" }}>
              06 / Let's Talk
            </span>
          </div>
          <div style={{ height: 0.5, background: "#2A2A2A", marginBottom: 72 }} />
        </Reveal>

        {/* Giant headline */}
        <div style={{ marginBottom: 72 }}>
          {["Let's build", "something that", "actually matters."].map((line, i) => (
            <ClipReveal key={line} as="h2" delay={0.1 + i * 0.15}>
              <span
                style={{
                  display: "block",
                  color: "#F8F7F4",
                  fontSize: "clamp(44px,7.5vw,112px)",
                  fontWeight: 700,
                  letterSpacing: "-2px",
                  lineHeight: 0.95,
                }}
              >
                {i === 2 ? (
                  <>
                    actually matters<Pd />
                  </>
                ) : (
                  line
                )}
              </span>
            </ClipReveal>
          ))}
        </div>

        {/* Two-column body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
            gap: isTablet ? 48 : 64,
            marginBottom: 80,
          }}
        >
          <Reveal delay={0.5}>
            <p style={{ fontSize: 17, fontWeight: 400, color: "#888", lineHeight: 1.65, maxWidth: 460 }}>
              Open to product roles, consulting projects, hackathon teams, and ventures worth
              building. Currently based in Surakarta, working remote-first.
            </p>
          </Reveal>

          <div>
            {CONTACT_LINKS.map((item, i) => (
              <ContactLinkItem key={item.label} item={item} delay={0.55 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Reveal delay={0.7}>
          <div
            style={{
              borderTop: ".5px solid #2A2A2A",
              padding: "28px 0 36px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              <p className="t-tiny" style={{ color: "#555", marginBottom: 6 }}>
                © 2026 DYLANSIUS PUTRA PRASETIO
              </p>
              <p className="t-tiny" style={{ color: "#444" }}>
                BUILT WITH NEXT.JS &amp; FRAMER MOTION
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--success)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span className="t-tiny" style={{ color: "#888" }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#555",
                background: "none",
                border: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8F7F4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              BACK TO TOP ↑
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
