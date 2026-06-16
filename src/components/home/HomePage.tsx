import { Nav } from "@/components/Nav";

import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SkillsSection } from "@/components/home/SkillsSection";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
      <Nav />
      <main className="relative isolate">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(246,197,97,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(210,119,68,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_42%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
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