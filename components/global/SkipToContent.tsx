"use client";

export function SkipToContent() {
  return (
    <a
      href="#main"
      className="skip-to-content"
      style={{
        position: "absolute",
        top: -40,
        left: 0,
        background: "var(--accent)",
        color: "#fff",
        padding: "8px 16px",
        zIndex: 10000,
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: 2,
        textTransform: "uppercase",
        transition: "top 0.2s",
        textDecoration: "none",
        borderRadius: 2,
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = "0";
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = "-40px";
      }}
    >
      Skip to content
    </a>
  );
}
