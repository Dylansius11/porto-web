"use client";

import dynamic from "next/dynamic";
import { usePageLoader } from "@/contexts/PageLoaderContext";
import { HeroSection } from "@/components/sections/HeroSection";

/* ─────────────────────────────────────────────────────────
 * SECTION LAZY LOADING
 *
 * Hero loads immediately (above fold).
 * All below-fold sections are code-split and loaded on demand.
 * ───────────────────────────────────────────────────────── */

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection").then((m) => m.ExperienceSection),
  { ssr: true }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/SkillsSection").then((m) => m.SkillsSection),
  { ssr: true }
);

const AchievementsSection = dynamic(
  () => import("@/components/sections/AchievementsSection").then((m) => m.AchievementsSection),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { ssr: true }
);

export function PageContent() {
  const { loaderDone } = usePageLoader();

  return (
    <>
      <HeroSection loaderDone={loaderDone} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
