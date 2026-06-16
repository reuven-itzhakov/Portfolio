import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projects } from "@/components/home/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <header>
            <div className="flex items-center gap-4">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wider text-primary">
                03
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-2xl font-heading text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                Projects I&apos;m proud of.
              </h2>
              <p className="max-w-sm leading-7 text-muted-foreground">
                A handful of builds where the interesting part wasn&apos;t the framework - it was the
                problem underneath.
              </p>
            </div>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal delay={(index % 2) * 120}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 shadow-xl shadow-black/20 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="absolute -right-24 -top-24 size-56 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div
          className="relative aspect-[16/9] overflow-hidden bg-secondary"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={1024}
              height={640}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-90" />
        </div>
        <div className="relative flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="flex items-start gap-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {project.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
            {project.stack.map((stackItem) => (
              <li
                key={stackItem}
                className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5 font-mono text-[11px] text-primary shadow-sm shadow-primary/5 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/15"
              >
                {stackItem}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/45 px-4 py-2 font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Github className="size-4" /> Repo
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/45 px-4 py-2 font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <ExternalLink className="size-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
