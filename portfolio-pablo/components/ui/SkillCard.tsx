import type { SkillGroup } from "@/types";
import { Icon } from "./Icon";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[20px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center gap-3">
        <span className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-xl bg-teal/10 text-teal-deep transition-transform duration-500 group-hover:scale-110">
          <Icon name={group.icon} size={18} />
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </span>
        <h3 className="font-serif text-base text-text-strong">
          {group.title}
        </h3>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.keywords.map((keyword) => (
          <li
            key={keyword}
            className="rounded-md border border-border bg-ice px-2.5 py-1 text-xs text-text-muted transition-colors hover:border-science/30 hover:bg-science-soft hover:text-science"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </article>
  );
}
