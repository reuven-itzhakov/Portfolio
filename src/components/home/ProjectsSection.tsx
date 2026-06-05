import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projects } from "@/components/home/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary tracking-wider">03</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <div className="mt-4 flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
              Projects I&apos;m proud of.
            </h2>
            <p className="text-muted-foreground max-w-sm">
              A handful of builds where the interesting part wasn&apos;t the framework - it was the
              problem underneath.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
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
      <article className="card-solid rounded-lg overflow-hidden hover-border h-full flex flex-col group">
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
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading text-xl font-semibold tracking-tight flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((stackItem) => (
              <span
                key={stackItem}
                className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary"
              >
                {stackItem}
              </span>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-border flex items-center gap-4 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="size-4" /> Repo
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
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
