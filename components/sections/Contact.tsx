import Image from "next/image";
import { profile } from "@/constants/profile";
import type { SocialLink } from "@/types";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/ui/CopyEmail";

const ACTION_ORDER = ["linkedin", "github"] as const;

const actionIcons = ACTION_ORDER.flatMap((icon) =>
  profile.social.filter((item) => item.href && item.icon === icon),
);

function CompactIconLink({ item }: { item: SocialLink }) {
  const isExternal = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${item.label}: ${item.value}`}
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-teal transition-all hover:border-teal/50 hover:bg-teal/10"
    >
      <Icon name={item.icon} size={16} />
    </a>
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

          <div className="relative grid gap-8 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10 lg:p-14">
            <div className="mx-auto size-40 shrink-0 overflow-hidden rounded-full md:mx-0 md:size-52 lg:size-60">
              <Image
                src="/pablo-dibujo.png"
                alt="Pablo Vallejo"
                width={240}
                height={240}
                className="size-full object-cover"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 240px"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-teal">
                Best way to reach me
              </p>

              {email ? <CopyEmail email={email.value} /> : null}

              <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                Happy to hear from you — drop me a line about a role, a project,
                or just to say hi. Thanks for stopping by.
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {actionIcons.map((item) => (
                  <CompactIconLink key={item.label} item={item} />
                ))}
                <a
                  href={email?.href ?? "#"}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-teal px-5 text-sm font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
                >
                  Send me an email
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
