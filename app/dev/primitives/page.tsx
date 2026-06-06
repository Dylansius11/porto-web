import { Reveal, ClipReveal, SectionHeader, Pd, Sep } from "@/components/primitives";

export default function PrimitivesDevPage() {
  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        padding: "120px 80px",
        minHeight: "300vh",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 120,
        }}
      >
        Primitives — dev preview (delete before launch)
      </h1>

      {/* Reveal */}
      <section style={{ marginBottom: 160 }}>
        <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--subtle)", marginBottom: 40 }}>
          REVEAL (fade-up on scroll)
        </p>
        <Reveal>
          <p style={{ fontSize: 24, fontWeight: 300 }}>
            First fade-up element
            <Pd />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize: 24, fontWeight: 300, marginTop: 16 }}>
            Second with 0.1s delay
            <Pd />
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize: 24, fontWeight: 300, marginTop: 16 }}>
            Third with 0.2s delay — then a <Sep /> separator dot
            <Pd />
          </p>
        </Reveal>
      </section>

      {/* ClipReveal */}
      <section style={{ marginBottom: 160 }}>
        <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--subtle)", marginBottom: 40 }}>
          CLIP REVEAL (slides up from overflow-hidden container)
        </p>
        <ClipReveal as="h2">
          <span style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.05 }}>
            Clip headline<Pd />
          </span>
        </ClipReveal>
        <div style={{ marginTop: 16 }}>
          <ClipReveal as="h2" delay={0.12}>
            <span style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.05 }}>
              Second line, staggered<Pd />
            </span>
          </ClipReveal>
        </div>
      </section>

      {/* SectionHeader */}
      <section style={{ marginBottom: 160 }}>
        <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--subtle)", marginBottom: 40 }}>
          SECTION HEADER
        </p>
        <SectionHeader
          index="01"
          label="Example"
          title={<>Section Title<Pd /></>}
          desc="This is a short descriptor that sits to the right of the section title on wider screens."
        />
      </section>

      {/* Spacer to allow scroll testing */}
      <div style={{ height: 600 }} />
    </main>
  );
}
