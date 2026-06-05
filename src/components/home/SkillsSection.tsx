import { Reveal } from "@/components/Reveal";
import { skills } from "@/components/home/content";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary tracking-wider">02</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            What I work with.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 120}>
              <div className="card-accent rounded-lg p-7 h-full hover-border">
                <skill.icon className="size-5 text-primary" />
                <h3 className="mt-6 font-heading text-lg font-semibold">{skill.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
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
