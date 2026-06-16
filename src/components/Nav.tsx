import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-white/10 bg-background/75 px-4 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "px-0 py-1"
        }`}
        style={scrolled ? { maxWidth: "60rem" } : undefined}
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full font-heading text-sm font-semibold tracking-tight outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <span>
            <span className="text-foreground">reuven</span>
            <span className="text-primary">.dev</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-card/45 p-1 text-sm text-muted-foreground shadow-inner shadow-white/5 backdrop-blur md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary shadow-[0_0_15px] shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/15 hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
