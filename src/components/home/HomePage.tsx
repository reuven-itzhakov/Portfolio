import { Nav } from "@/components/Nav";

import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SkillsSection } from "@/components/home/SkillsSection";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}