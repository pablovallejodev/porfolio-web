import { profile, projectRepoUrl } from "@/constants/profile";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const contactSocial = profile.social.filter(
  (item) => item.href && item.icon !== "email"
);

function HighlightedEmail({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at === -1) {
    return <span className="font-semibold text-white">{email}</span>;
  }

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  return (
    <span className="text-lg font-semibold text-white md:text-xl">
      <span>{local}</span>
      <span className="text-white/50">@</span>
      <span className="text-teal">{domain}</span>
    </span>
  );
}

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
        <div className="relative overflow-hidden rounded-[24px] bg-ink text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(51,55,189,0.28),transparent_45%),radial-gradient(circle_at_0_100%,rgba(36,153,139,0.22),transparent_50%)]"
          />

          <div className="relative grid gap-10 p-6 md:grid-cols-[1.1fr_1fr] md:gap-14 md:p-10 lg:p-14">
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-teal">
                Best way to reach me
              </p>

              {email ? (
                <a
                  href={email.href}
                  className="group/email inline-flex items-center gap-3 transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors group-hover/email:bg-teal/30">
                    <Icon name="email" size={18} />
                  </span>
                  <HighlightedEmail email={email.value} />
                </a>
              ) : null}

              <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                Happy to hear from you — drop me a line about a role, a project,
                or just to say hi. Thanks for stopping by.
              </p>

              <a
                href={email?.href ?? "#"}
                className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-teal px-5 text-sm font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
              >
                Send me an email
                <Icon name="arrow" size={16} />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-4 md:pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-teal">
                Elsewhere
              </p>
              <SocialLinks items={contactSocial} variant="icons-dark" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
