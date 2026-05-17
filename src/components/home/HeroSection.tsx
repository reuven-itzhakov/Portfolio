import { ArrowDown, Download, Mail } from "lucide-react";

import { heroAssets } from "@/components/home/content";
import { SocialLinks } from "@/components/home/SocialLinks";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `url(${heroAssets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <span className="font-mono text-xs text-primary inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            available_for_work
          </span>
        </div>
        <h1
          className="mt-8 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Hi, I&apos;m <span className="text-gradient">Reuven Itzhakov</span>,
          <br />
          Full-Stack Developer.
        </h1>
        <p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Passionate about scalable backend architecture, modern web frameworks, and
          integrating AI into practical, real-world applications.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={heroAssets.cvFile}
            download="Reuven_Itzhakov_CV.pdf"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:-translate-y-0.5"
          >
            <Download className="size-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <Mail className="size-4" />
            Contact Me
          </a>
        </div>
        <div
          className="mt-12 flex items-center justify-center gap-5 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <SocialLinks
            className="flex items-center gap-5"
            linkClassName="size-10 rounded-full grid place-items-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all"
            iconClassName="size-4"
          />
        </div>
        <div className="mt-20 text-muted-foreground/60">
          <ArrowDown className="size-5 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}