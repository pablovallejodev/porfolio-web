import { profile, projectRepoUrl } from "@/constants/profile";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalSsh } from "@/components/ui/TerminalSsh";

const highlightIcons = ["stack", "pulse", "spark", "passport"] as const;
const heroSocial = profile.social.filter((item) => item.href);

export function Hero() {
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

      {/* Main hero copy */}
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
        <Reveal>
          <a
            href={projectRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow-pill transition-opacity hover:opacity-80"
          >
            <span className="eyebrow-dot" aria-hidden />
            Open source · View code
          </a>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif mt-8 max-w-3xl text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.06] tracking-[-0.02em] text-ink">
            Backends built to{" "}
            <span className="text-teal">scale</span>.
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-xl text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-slate">
            {profile.name} — {profile.shortHeadline}. Node.js · TypeScript ·
            real-time Big Data.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-teal-deep px-6 text-[15px] font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
            >
              Get in touch
              <Icon name="arrow" size={16} />
            </a>
            <a
              href="#experience"
              className="inline-flex h-12 items-center rounded-xl border border-border-strong bg-surface px-6 text-[15px] font-semibold text-ink transition-all hover:border-ink hover:bg-ice"
            >
              View experience
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SocialLinks items={heroSocial} variant="icons" />
            <TerminalSsh
              density="inline"
              className="w-full sm:max-w-md sm:shrink-0"
            />
          </div>
        </Reveal>
      </div>

      {/* Stats band — separated below the fold of hero copy */}
      <div className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-5xl px-6 py-8 md:px-10 md:py-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {profile.highlights.map((highlight, idx) => (
              <Reveal
                key={highlight.label}
                delay={80 * idx}
                direction="scale"
                className="flex items-start gap-3"
              >
                <dt className="sr-only">{highlight.label}</dt>
                <dd className="m-0 flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal"
                  >
                    <Icon name={highlightIcons[idx] ?? "stack"} size={15} />
                  </span>
                  <div>
                    <span className="font-serif text-2xl leading-none text-ink md:text-[1.75rem]">
                      {highlight.value}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1.5 block text-[13px] leading-snug text-slate"
                    >
                      {highlight.label}
                    </span>
                  </div>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
