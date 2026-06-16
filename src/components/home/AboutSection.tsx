import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-28">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <header className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wider text-primary">
                  01
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
              </div>
              <h2 className="mt-5 max-w-md font-heading text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                Engineering with intent.
              </h2>
            </header>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/65 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
              <div className="absolute right-0 top-0 size-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative grid gap-6 text-muted-foreground md:grid-cols-5 md:gap-8">
                <p className="text-lg leading-8 md:col-span-3 md:text-xl">
                  I focus on writing <span className="text-foreground">clean, deliberate code</span> and
                  shaping software architecture around principles that scale -{" "}
                  <span className="text-foreground">Microservices, SOLID,</span> and domain-driven
                  design. My work lives at the intersection of complex backend logic and the user-facing
                  experience built on top of it.
                </p>
                <p className="leading-8 md:col-span-2">
                  I enjoy bridging the gap: turning ambiguous problems into systems that are
                  predictable, observable, and pleasant to extend. Whether it&apos;s an API, a real-time
                  pipeline, or an AI integration - the goal is the same: ship something that&apos;s
                  reliable today and easy to change tomorrow.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
