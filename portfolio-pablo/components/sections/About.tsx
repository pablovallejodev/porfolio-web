import { profile } from "@/constants/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="Senior Backend Engineer focused on scale, latency and clarity."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal direction="left" className="md:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-text md:text-lg">
            {profile.summary.map((paragraph, idx) => (
              <p
                key={paragraph}
                className={
                  idx === 0
                    ? "relative pl-5 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-teal before:to-science"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={150} className="md:col-span-2">
          <aside className="group relative overflow-hidden rounded-[20px] border border-border bg-ice p-6 transition-all hover:border-teal/40 hover:shadow-soft">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal/15 blur-2xl transition-opacity duration-500 group-hover:opacity-150"
            />
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-science">
              <span
                aria-hidden
                className="inline-flex size-1.5 rounded-full bg-teal"
              />
              At a glance
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text">
              <Fact label="Role" value="Senior Backend Engineer" />
              <Fact label="Stack" value="Node.js · TypeScript · Big Data" />
              <Fact label="Citizenship" value="Spanish · EU" />
              <Fact label="Availability" value="Permanent · Freelance" />
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-border/70 pb-3 last:border-b-0 last:pb-0">
      <span className="text-text-muted">{label}</span>
      <span className="text-right font-medium text-text-strong">{value}</span>
    </li>
  );
}
