import { profile } from "@/constants/profile";
import { Reveal } from "@/components/ui/Reveal";

export function BlogHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(80%_60%_at_50%_0%,black_20%,transparent_75%)]" />
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-science/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
        <Reveal>
          <p className="eyebrow-pill">
            <span className="eyebrow-dot" aria-hidden />
            Personal blog · {profile.name}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif mt-8 max-w-3xl text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.06] tracking-[-0.02em] text-ink">
            This is a{" "}
            <span className="text-teal">blog</span>.
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-2xl text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-slate">
            Notes on backend engineering, production systems, and the opinions
            that come from eight years of building software at scale. Written by{" "}
            {profile.name} — for peers, hiring managers, and anyone curious
            about how high-throughput backends are really built.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted md:text-[15px]">
            This is a personal space: no corporate voice, no fluff. Just
            experience shared honestly — the wins, the trade-offs, and the
            lessons I wish someone had told me earlier. Perfect for a quick read
            before we connect on LinkedIn.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
