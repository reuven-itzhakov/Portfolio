import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
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
              I focus on writing <span className="text-foreground">clean, deliberate code</span>{" "}
              and shaping software architecture around principles that scale —{" "}
              <span className="text-foreground">Microservices, SOLID,</span> and domain-driven
              design. My work lives at the intersection of complex backend logic and the
              user-facing experience built on top of it.
            </p>
            <p className="md:col-span-2">
              I enjoy bridging the gap: turning ambiguous problems into systems that are
              predictable, observable, and pleasant to extend. Whether it&apos;s an API, a real-time
              pipeline, or an AI integration — the goal is the same: ship something that&apos;s
              reliable today and easy to change tomorrow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}