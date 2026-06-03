import { profile } from "@/constants/profile";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalSsh } from "@/components/ui/TerminalSsh";

export function Contact() {
  const email = profile.social.find((item) => item.icon === "email");

  return (
    <Section
      id="contact"
      eyebrow="05 · Contact"
      title="Let's build something reliable together."
      description="Open to senior backend roles, technical leadership and freelance engagements. Remote-friendly."
    >
      <Reveal direction="scale">
        <div className="group relative isolate overflow-hidden rounded-3xl border border-white/60 glass-teal shadow-luminous ring-1 ring-teal/10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal/20 blur-3xl animate-blob" />
            <div
              className="absolute -bottom-44 -right-32 h-96 w-96 rounded-full bg-teal-soft/25 blur-3xl animate-blob"
              style={{ animationDelay: "-9s" }}
            />
            <div className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-white/70 blur-3xl animate-float-slow" />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-soft/60 to-transparent"
          />

          <div className="grid gap-10 p-8 md:grid-cols-5 md:p-12">
            <div className="md:col-span-3">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                <span
                  aria-hidden
                  className="inline-flex size-1.5 rounded-full bg-teal"
                />
                Best way to reach me
              </p>
              {email ? (
                <a
                  href={email.href}
                  className="group/email mt-3 inline-flex items-center gap-3 text-2xl font-semibold text-text-strong transition-colors hover:text-teal md:text-3xl"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal transition-transform group-hover/email:rotate-6 group-hover/email:scale-110">
                    <Icon name="email" size={20} />
                  </span>
                  <span className="break-all">{email.value}</span>
                </a>
              ) : null}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text">
                I usually reply within 24 hours. Feel free to share project
                details, role specifics or just say hi.
              </p>
              <a
                href={email?.href ?? "#"}
                className="group/cta mt-7 inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all hover:shadow-glow-teal"
              >
                <span className="relative z-10">Send me an email</span>
                <Icon
                  name="arrow"
                  size={16}
                  className="relative z-10 transition-transform group-hover/cta:translate-x-0.5"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 z-[5] -translate-x-full bg-gradient-to-r from-teal to-teal-deep transition-transform duration-500 group-hover/cta:translate-x-0"
                />
              </a>
            </div>

            <div className="md:col-span-2">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                <span
                  aria-hidden
                  className="inline-flex size-1.5 rounded-full bg-teal"
                />
                Elsewhere
              </p>
              <div className="mt-4">
                <SocialLinks items={profile.social} />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative my-2 flex items-center gap-4">
                <span
                  aria-hidden
                  className="h-px flex-1 bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
                />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-text-muted">
                  Or explore from your terminal
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
                />
              </div>
              <TerminalSsh className="mt-4" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
