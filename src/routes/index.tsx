import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Send,
  ArrowUpRight,
  Server,
  Layout,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Reuven Itzhakov — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer focused on scalable backend architecture, modern web frameworks, and practical AI integration.",
      },
      { property: "og:title", content: "Reuven Itzhakov — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Reuven Itzhakov — backend architecture, modern web, and AI integration.",
      },
    ],
  }),
});

const skills = [
  {
    icon: Server,
    title: "Backend & Architecture",
    tag: "backend/",
    items: ["C#", ".NET", "Node.js", "Express.js", "SQL", "NoSQL", "Microservices", "SOLID"],
  },
  {
    icon: Layout,
    title: "Frontend",
    tag: "frontend/",
    items: ["React.js", "Next.js", "Angular", "Flutter", "TypeScript", "Tailwind"],
  },
  {
    icon: Sparkles,
    title: "Specialized",
    tag: "specialized/",
    items: ["Unity", "VR / AR", "Cybersecurity", "AI Integration", "Whisper", "LLM APIs"],
  },
];

const projects = [
  {
    image: proj1,
    title: "Distributed Analytics Platform",
    description:
      "Designed an event-driven ingestion pipeline handling millions of records/day. Solved hot-partition bottlenecks with consistent hashing and an async fan-out worker model.",
    stack: [".NET", "Kafka", "PostgreSQL", "Redis", "React"],
    github: "#",
    demo: "#",
  },
  {
    image: proj2,
    title: "Immersive Training Simulator",
    description:
      "Built a VR training environment with realistic physics interactions. Optimized draw calls and shader complexity to hold 90fps on standalone headsets.",
    stack: ["Unity", "C#", "OpenXR", "Shader Graph"],
    github: "#",
    demo: "#",
  },
  {
    image: proj3,
    title: "AI Voice Assistant",
    description:
      "Real-time transcription + intent layer using Whisper streaming. Engineered a low-latency WebSocket bridge and chunked VAD to keep first-token under 400ms.",
    stack: ["Node.js", "Whisper", "WebSockets", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    image: proj4,
    title: "Microservices Boilerplate",
    description:
      "Production-ready service template with auth, observability, and contract testing baked in. Cut new-service spin-up time from days to under an hour.",
    stack: [".NET", "Docker", "gRPC", "OpenTelemetry"],
    github: "#",
    demo: "#",
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-50"
            style={{
              backgroundImage: `url(${heroBg})`,
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
              Hi, I'm <span className="text-gradient">Reuven Itzhakov</span>,
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
                href="#"
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
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="size-10 rounded-full grid place-items-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <div className="mt-20 text-muted-foreground/60">
              <ArrowDown className="size-5 mx-auto animate-bounce" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="font-mono text-sm text-primary mb-4">// about_me</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Engineering with intent.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 grid md:grid-cols-5 gap-8 text-muted-foreground leading-relaxed">
                <p className="md:col-span-3 text-lg">
                  I focus on writing{" "}
                  <span className="text-foreground">clean, deliberate code</span> and shaping
                  software architecture around principles that scale —{" "}
                  <span className="text-foreground">Microservices, SOLID,</span> and
                  domain-driven design. My work lives at the intersection of complex backend
                  logic and the user-facing experience built on top of it.
                </p>
                <p className="md:col-span-2">
                  I enjoy bridging the gap: turning ambiguous problems into systems that are
                  predictable, observable, and pleasant to extend. Whether it's an API, a real-time
                  pipeline, or an AI integration — the goal is the same: ship something that's
                  reliable today and easy to change tomorrow.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono text-sm text-primary mb-4">// skills.map()</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What I work with.
              </h2>
            </Reveal>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {skills.map((s, i) => (
                <Reveal key={s.title} delay={i * 120}>
                  <div className="glass-card rounded-2xl p-7 h-full hover-lift">
                    <div className="flex items-center justify-between">
                      <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center border border-primary/20">
                        <s.icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <div>
                  <p className="font-mono text-sm text-primary mb-4">// selected_work</p>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Projects I'm proud of.
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-sm">
                  A handful of builds where the interesting part wasn't the framework — it was the
                  problem underneath.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 120}>
                  <article className="glass-card rounded-2xl overflow-hidden hover-lift h-full flex flex-col group">
                    <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
                        {p.title}
                        <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 pt-5 border-t border-border flex items-center gap-4 text-sm">
                        <a
                          href={p.github}
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="size-4" /> Repo
                        </a>
                        <a
                          href={p.demo}
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="size-4" /> Demo
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-mono text-sm text-primary mb-4 text-center">// get_in_touch</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
                Let's build something <span className="text-gradient">solid</span>.
              </h2>
              <p className="mt-5 text-muted-foreground text-center max-w-xl mx-auto">
                Have a project in mind, a role to fill, or just want to talk architecture? Drop a
                message — I read everything.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const name = data.get("name");
                  const email = data.get("email");
                  const message = data.get("message");
                  window.location.href = `mailto:hello@reuven.dev?subject=From ${name}&body=${encodeURIComponent(
                    `${message}\n\n— ${name} (${email})`,
                  )}`;
                }}
                className="mt-12 glass-card rounded-2xl p-6 md:p-8 space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="font-mono text-xs text-muted-foreground">name</span>
                    <input
                      required
                      name="name"
                      className="mt-2 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-xs text-muted-foreground">email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors"
                      placeholder="you@domain.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="font-mono text-xs text-muted-foreground">message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors resize-none"
                    placeholder="What are you working on?"
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href="mailto:hello@reuven.dev"
                    className="text-sm text-muted-foreground hover:text-primary font-mono inline-flex items-center gap-2"
                  >
                    <Mail className="size-4" /> hello@reuven.dev
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-0.5 transition-transform"
                  >
                    Send message
                    <Send className="size-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>

        <footer className="px-6 py-10 border-t border-border">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-mono">
              © {new Date().getFullYear()} Reuven Itzhakov. Built with intention.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="size-4" /></a>
              <a href="https://github.com" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="size-4" /></a>
              <a href="https://leetcode.com" aria-label="LeetCode" className="hover:text-primary transition-colors"><Code2 className="size-4" /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
