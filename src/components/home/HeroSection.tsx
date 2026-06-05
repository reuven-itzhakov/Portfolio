import { Download, Mail } from "lucide-react";

import { heroAssets } from "@/components/home/content";
import { SocialLinks } from "@/components/home/SocialLinks";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url(${heroAssets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Full-Stack Developer
          </span>
        </div>
        <h1
          className="mt-6 font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Reuven
          <br />
          <span className="text-primary">Itzhakov</span>
        </h1>
        <p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Passionate about scalable backend architecture, modern web frameworks, and integrating AI
          into practical, real-world applications.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={heroAssets.cvFile}
            download="Reuven_Itzhakov_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Download className="size-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm rounded-md hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <Mail className="size-4" />
            Contact Me
          </a>
        </div>
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <SocialLinks
            className="flex items-center gap-3"
            linkClassName="size-9 rounded-md grid place-items-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all"
            iconClassName="size-4"
          />
        </div>
      </div>
    </section>
  );
}
