import { languages } from "@/constants";
import { Section } from "@/components/ui/Section";
import { LanguageItem } from "@/components/ui/LanguageItem";
import { Reveal } from "@/components/ui/Reveal";

export function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="04 · Languages"
      title="Communicating across teams and borders."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {languages.map((language, idx) => (
          <Reveal key={language.language} delay={idx * 90}>
            <LanguageItem language={language} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
