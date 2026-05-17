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
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
}

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(event.currentTarget);
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-4 text-center">// get_in_touch</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
            Let&apos;s build something <span className="text-gradient">solid</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-center max-w-xl mx-auto">
            Have a project in mind, a role to fill, or just want to talk architecture? Drop a
            message — I read everything.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="mt-12 glass-card rounded-2xl p-6 md:p-8 space-y-5">
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
                href="mailto:itzhakovreuven@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary font-mono inline-flex items-center gap-2"
              >
                <Mail className="size-4" /> itzhakovreuven@gmail.com
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
  );
}