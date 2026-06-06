"use client";

import { useState } from "react";
import type { SocialType } from "@/data/projects";
import {
  IconGitHub,
  IconGlobe,
  IconX,
  IconInstagram,
  IconYouTube,
  IconLinkedIn,
} from "./icons";

const ICON_MAP: Record<SocialType, React.FC> = {
  github: IconGitHub,
  web: IconGlobe,
  x: IconX,
  instagram: IconInstagram,
  youtube: IconYouTube,
  linkedin: IconLinkedIn,
};

interface SocialBtnProps {
  type: SocialType;
  href: string;
}

export function SocialBtn({ type, href }: SocialBtnProps) {
  const Icon = ICON_MAP[type];
  if (!Icon) return null;

  const active = href && href !== "#";
  const [hov, setHov] = useState(false);

  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: 6,
        color: hov && active ? "var(--fg)" : active ? "var(--muted)" : "#CCC",
        background: hov && active ? "rgba(0,0,0,0.05)" : "transparent",
        transition: "color 0.2s, background 0.2s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <Icon />
    </span>
  );

  return active ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={type}
      style={{ display: "inline-flex" }}
    >
      {inner}
    </a>
  ) : (
    <span title={`${type} | coming soon`}>{inner}</span>
  );
}
