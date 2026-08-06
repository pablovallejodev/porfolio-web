import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalSsh } from "@/components/ui/TerminalSsh";

export function Terminal() {
  return (
    <Section
      id="terminal"
      eyebrow="06 · Terminal"
      title="Meet me in the shell."
      description="Prefer a CLI over a form? Copy the command, paste it in your terminal, and drop into an interactive session — backends talking to backends."
    >
      <Reveal direction="scale">
        <div className="mx-auto w-full max-w-xl">
          <TerminalSsh />
        </div>
      </Reveal>
    </Section>
  );
}
