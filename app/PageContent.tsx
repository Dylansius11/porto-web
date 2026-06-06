"use client";

import { usePageLoader } from "@/contexts/PageLoaderContext";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  AchievementsSection,
  ContactSection,
} from "@/components/sections";

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
