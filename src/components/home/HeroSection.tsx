import { Download, Mail } from "lucide-react";

import { heroAssets, skills } from "@/components/home/content";
import { SocialLinks } from "@/components/home/SocialLinks";

export function HeroSection() {
  const featuredSkills = skills.map((skill) => ({
    title: skill.title,
    tag: skill.tag,
    items: skill.items.slice(0, 3),
  }));

  return (
    <section className="relative px-6 pb-24 pt-36 sm:pt-40 lg:min-h-screen lg:pb-28 lg:pt-44">
      <div
        className="absolute inset-0 -z-10 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url(${heroAssets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute left-1/2 top-28 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-primary shadow-lg shadow-primary/10 backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_18px_rgba(246,197,97,0.55)]" />
              Full-Stack Developer
            </span>
          </div>
          <h1
            className="mt-7 max-w-full animate-fade-in-up font-heading text-[clamp(4rem,13vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.065em] text-foreground sm:text-[clamp(4.8rem,11vw,8rem)] lg:text-[clamp(5rem,7.8vw,7.5rem)]"
            style={{ animationDelay: "100ms" }}
          >
            Reuven
            <br />
            <span className="bg-gradient-to-r from-primary via-amber-200 to-accent bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(246,197,97,0.22)] pr-2">
              Itzhakov
            </span>
          </h1>
          <p
            className="mt-8 max-w-2xl animate-fade-in-up text-lg leading-8 text-muted-foreground sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Passionate about scalable backend architecture, modern web frameworks, and integrating AI
            into practical, real-world applications.
          </p>
          <div
            className="mt-10 flex animate-fade-in-up flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={heroAssets.cvFile}
              download="Reuven_Itzhakov_CV.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Contact Me
            </a>
          </div>
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <SocialLinks
              className="flex items-center gap-3"
              linkClassName="group grid size-11 place-items-center rounded-2xl border border-white/10 bg-card/55 text-muted-foreground shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:text-primary hover:shadow-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              iconClassName="size-4 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/65 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(246,197,97,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%)]" />
            
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-secondary/40">
              
              {/* התמונה הפכה לרקע אבסולוטי כדי לא להגביל את הגובה */}
              <div className="absolute inset-0 -z-10">
                <img
                  src={heroAssets.background}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-70 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              
              {/* הדיב של הכרטיסיות ממורכז, והוא זה שקובע את הגובה הכללי */}
              <div className="relative flex min-h-[16rem] flex-col justify-center p-4 sm:min-h-[20rem] sm:p-6 lg:min-h-[24rem]">
                <div className="mx-auto w-full max-w-lg grid gap-3">
                  {featuredSkills.map((skill, index) => (
                    <div
                      key={skill.title}
                      className="group rounded-2xl border border-white/10 bg-background/70 p-4 shadow-xl shadow-black/25 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background/85"
                      style={{ transitionDelay: `${index * 45}ms` }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="font-heading text-sm font-semibold text-foreground">
                          {skill.title}
                        </h2>
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary/80">
                          {skill.tag}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/15"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
