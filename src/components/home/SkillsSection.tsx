import { Reveal } from "@/components/Reveal";
import { skills } from "@/components/home/content";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-4">// skills.map()</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What I work with.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 120}>
              <div className="glass-card rounded-2xl p-7 h-full hover-lift">
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center border border-primary/20">
                    <skill.icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{skill.tag}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{skill.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}