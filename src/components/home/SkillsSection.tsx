import { Reveal } from "@/components/Reveal";
import { skills } from "@/components/home/content";

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-primary/60" />
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wider text-primary">
                02
              </span>
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
              What I work with.
            </h2>
          </header>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 120}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_15px] shadow-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/45 group-hover:bg-primary/15">
                    <skill.icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-secondary/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-primary/80">
                    {skill.tag}
                  </span>
                </div>
                <h3 className="relative mt-7 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {skill.title}
                </h3>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-secondary/70 px-3 py-1.5 font-mono text-xs text-secondary-foreground shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
