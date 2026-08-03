import { skillGroups } from "@/constants";
import { Section } from "@/components/ui/Section";
import { SkillCard } from "@/components/ui/SkillCard";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="A toolkit built around backend reliability and data."
      description="Hands-on with each of these in production environments. Always learning the next one."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <Reveal
            key={group.id}
            delay={(idx % 3) * 100 + Math.floor(idx / 3) * 80}
            direction="scale"
          >
            <SkillCard group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
