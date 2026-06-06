"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface HeroSectionProps {
  loaderDone: boolean;
}

const STATS = [
  { n: "7", prefix: "+", label: "PROJECTS\nBUILT" },
  { n: "Top 7", prefix: "", label: "NATIONAL\nFINALIST" },
  { n: "87%", prefix: "+", label: "EFFICIENCY\nGAIN" },
];

const NAV_LINKS = ["Projects", "Experience", "Contact"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection({ loaderDone }: HeroSectionProps) {
  const [go, setGo] = useState(false);
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (!loaderDone) return;
    const t = setTimeout(() => setGo(true), 60);
    return () => clearTimeout(t);
  }, [loaderDone]);

  useEffect(() => {
    if (reduced) return;
    function onMove(e: MouseEvent) {
      if (window.innerWidth < 1024) return;
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 28);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 18);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reduced]);

  const fe = (delay: number) =>
    reduced
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: go ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
          transition: { duration: 0.7, ease: EASE, delay },
        };
  const fc = (delay: number) =>
    reduced
      ? { initial: { y: "0%" }, animate: { y: "0%" }, transition: { duration: 0 } }
      : {
          initial: { y: "108%" },
          animate: go ? { y: "0%" } : { y: "108%" },
          transition: { duration: 0.95, ease: EASE, delay },
        };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--sans)",
          fontWeight: 700,
          fontSize: "clamp(140px,20vw,300px)",
          color: "rgba(10,10,10,0.025)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-8px",
          whiteSpace: "nowrap",
          animation: `wm-drift 8s ease-in-out infinite alternate`,
          zIndex: 0,
        }}
      >
        BUILD
      </div>

      {/* NAV */}
      <header
        style={{
          padding: "22px var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div {...fe(0)}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--fg)",
              background: "none",
              border: "none",
            }}
          >
            D<span style={{ color: "var(--accent)" }}>.</span>P
            <span style={{ color: "var(--accent)" }}>.</span>P
          </button>
        </motion.div>

        <nav className="hero-nav-links">
          {NAV_LINKS.map((item, i) => (
            <motion.div key={item} {...fe(0.08 + i * 0.08)}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  background: "none",
                  border: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {item}
              </button>
            </motion.div>
          ))}
        </nav>

        <motion.div {...fe(0.32)}>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </motion.div>
      </header>

      {/* MAIN GRID */}
      <main
        className="hero-grid"
        style={{
          flex: 1,
          padding: "0 var(--gutter) 28px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT */}
        <div className="hero-left">
          {/* Eyebrow */}
          <motion.div
            {...fe(0.22)}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}
          >
            <div
              style={{ width: 24, height: 1.5, background: "var(--accent)", flexShrink: 0 }}
            />
            <span className="t-tiny" style={{ color: "var(--muted)" }}>
              Product · AI · Strategy
            </span>
          </motion.div>

          {/* Headlines */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { text: "Builder", delay: 0.28, ghost: false },
              { text: "Strategist", delay: 0.44, ghost: true },
              { text: "Disruptor", delay: 0.58, ghost: false },
            ].map(({ text, delay, ghost }) => (
              <div key={text} style={{ overflow: "hidden" }}>
                <motion.h1
                  {...fc(delay)}
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "clamp(52px, 8.5vw, 116px)",
                    lineHeight: 0.9,
                    letterSpacing: "-2.5px",
                    margin: 0,
                    ...(ghost
                      ? { color: "transparent", WebkitTextStroke: "1.5px #C0C0C0" }
                      : {}),
                  }}
                >
                  {text}
                  <span
                    style={{ color: "var(--accent)", WebkitTextStroke: "0px" }}
                  >
                    .
                  </span>
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Sub */}
          <motion.div {...fe(0.74)} style={{ marginTop: 24 }}>
            <p style={{ fontSize: 15, lineHeight: 1.72, maxWidth: 360, color: "var(--muted)" }}>
              <strong style={{ fontWeight: 500, color: "var(--fg)" }}>
                Dylansius Putra Prasetio
              </strong>{" "}
              — turning market gaps into working systems, with AI.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fe(0.84)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 22,
              flexWrap: "wrap",
            }}
          >
            <button className="btn-dark" onClick={() => scrollTo("projects")}>
              See My Work ↗
            </button>
            <a href="/cv.pdf" className="btn-ghost" download>
              Download CV →
            </a>
          </motion.div>

          {/* Mobile stats */}
          <motion.div
            {...fe(0.92)}
            className="hero-stats-mobile"
            style={{ display: "flex", gap: 28, marginTop: 36, flexWrap: "wrap" }}
          >
            {STATS.map(({ n, prefix, label }) => (
              <div key={n}>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: 26,
                    lineHeight: 1,
                    color: "var(--fg)",
                  }}
                >
                  {prefix && <span style={{ color: "var(--accent)" }}>{prefix}</span>}
                  {n}
                </div>
                <div
                  className="t-tiny"
                  style={{ color: "var(--subtle)", marginTop: 4, whiteSpace: "pre-line", lineHeight: 1.6 }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT (hidden on mobile) */}
        <div className="hero-right">
          {/* Blob with mouse parallax */}
          <motion.div
            {...fe(0.34)}
            style={{ position: "relative", width: 300, height: 300 }}
          >
            <motion.div
              style={{ x: springX, y: springY, position: "relative", width: 300, height: 300 }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(94,14,215,0.2) 0%, rgba(14,165,233,0.1) 45%, transparent 70%)",
                  filter: "blur(52px)",
                  animation: "glowPulse 5s ease-in-out infinite",
                  pointerEvents: "none",
                  transform: "translate(-50%,-50%)",
                }}
              />
              {/* Blob image — TODO: swap static PNG with Spline embed */}
              <div
                style={{
                  animation: "blobFloat 8s ease-in-out infinite",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/hero-section.png"
                  alt="3D sphere"
                  width={300}
                  height={300}
                  priority
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop stats */}
          <motion.div
            {...fe(0.46)}
            style={{ display: "flex", gap: 28, justifyContent: "center" }}
          >
            {STATS.map(({ n, prefix, label }) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "clamp(22px,2.8vw,34px)",
                    lineHeight: 1,
                    color: "var(--fg)",
                  }}
                >
                  {prefix && <span style={{ color: "var(--accent)" }}>{prefix}</span>}
                  {n}
                </div>
                <div
                  className="t-tiny"
                  style={{
                    color: "var(--subtle)",
                    marginTop: 5,
                    whiteSpace: "pre-line",
                    lineHeight: 1.6,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* BOTTOM BAR */}
      <motion.div
        {...fe(0.96)}
        style={{
          borderTop: ".5px solid var(--border)",
          padding: "13px var(--gutter)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 0.5, background: "var(--subtle)" }} />
          <span className="t-tiny" style={{ color: "#BBB" }}>
            Scroll to explore
          </span>
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
          <span className="t-tiny" style={{ color: "var(--subtle)" }}>
            Open to opportunities · Surakarta, ID
          </span>
        </div>
      </motion.div>
    </section>
  );
}
