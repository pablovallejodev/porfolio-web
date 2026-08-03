import type { Experience } from "@/types";
import { Tag } from "./Tag";
import { Icon } from "./Icon";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    company,
    companyUrl,
    role,
    location,
    start,
    end,
    current,
    description,
    bullets,
    tags,
  } = experience;

  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft md:p-8">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-teal transition-transform duration-500 group-hover:scale-y-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="font-serif text-lg text-text-strong md:text-xl">
            {role}
          </h3>
          <p className="mt-1 text-sm text-text">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-teal"
              >
                {company}
                <Icon name="external" size={13} />
              </a>
            ) : (
              <span className="font-medium text-ink">{company}</span>
            )}
            <span className="text-text-muted"> · {location}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-teal-deep">
              <span className="relative inline-flex size-1.5">
                <span className="absolute inset-0 inline-flex rounded-full bg-teal animate-pulse-ring" />
                <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
              </span>
              Active
            </span>
          ) : null}
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            {start} — {end}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-text md:text-[15px]">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-text md:text-[15px]"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {tags.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}
    </article>
  );
}
