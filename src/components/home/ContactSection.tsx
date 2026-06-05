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
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary tracking-wider">04</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-semibold tracking-tight">
            Let&apos;s build something <span className="text-primary">solid</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            Have a project in mind, a role to fill, or just want to talk architecture? Drop a
            message - I read everything.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 card-solid rounded-lg p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground">name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full bg-secondary/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground">email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full bg-secondary/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors"
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
                className="mt-2 w-full bg-secondary/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-colors resize-none"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
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
