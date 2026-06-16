import { Mail, Send } from "lucide-react";
import type { FormEvent } from "react";

import { Reveal } from "@/components/Reveal";

function buildMailtoUrl(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const message = String(data.get("message") ?? "");

  return `mailto:itzhakovreuven@gmail.com?subject=${encodeURIComponent(
    `From ${name}`,
  )}&body=${encodeURIComponent(`${message}\n\n- ${name} (${email})`)}`;
}

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(event.currentTarget);
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-28">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <header className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-primary/60" />
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wider text-primary">
                04
              </span>
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl">
              Let&apos;s build something <span className="text-primary">solid</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
              Have a project in mind, a role to fill, or just want to talk architecture? Drop a
              message - I read everything.
            </p>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="relative mt-12 space-y-5 overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-6 shadow-2xl shadow-black/25 backdrop-blur md:p-8"
          >
            <div className="absolute right-0 top-0 size-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground">name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-secondary/50 px-4 py-3 text-sm text-foreground shadow-inner shadow-black/10 transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/70 focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground">email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-secondary/50 px-4 py-3 text-sm text-foreground shadow-inner shadow-black/10 transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/70 focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="relative block">
              <span className="font-mono text-xs text-muted-foreground">message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-secondary/50 px-4 py-3 text-sm text-foreground shadow-inner shadow-black/10 transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/70 focus:outline-none focus:ring-4 focus:ring-primary/10"
                placeholder="What are you working on?"
              />
            </label>
            <div className="relative flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href="mailto:itzhakovreuven@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/45 px-4 py-2 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="size-4" /> itzhakovreuven@gmail.com
              </a>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_15px] shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Send message
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
