import { experiences } from "@/constants";
import { Section } from "@/components/ui/Section";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Where I've shipped production systems."
      description="A selection of roles where I owned and contributed to backend architectures, data pipelines and reliability."
    >
      <ol className="relative flex flex-col gap-6 md:gap-8">
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-teal/60 via-border to-transparent md:block"
        />
        {experiences.map((experience, idx) => (
          <Reveal
            key={experience.id}
            delay={idx * 90}
            direction="up"
          >
            <li className="relative md:pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-7 hidden size-6 items-center justify-center md:inline-flex"
              >
                <span className="absolute inline-flex size-6 rounded-full bg-teal/20" />
                <span className="relative inline-flex size-2.5 rounded-full bg-teal ring-4 ring-background" />
              </span>
              <ExperienceCard experience={experience} />
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
