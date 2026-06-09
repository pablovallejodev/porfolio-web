import type { Language } from "@/types";

const levelToBars: Record<Language["level"], number> = {
  native: 5,
  fluent: 4,
  professional: 3,
  beginner: 1,
};

type LanguageItemProps = {
  language: Language;
};

export function LanguageItem({ language }: LanguageItemProps) {
  const filled = levelToBars[language.level];

  return (
    <div className="group flex items-center justify-between rounded-xl border border-border bg-ice px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft">
      <div>
        <p className="text-sm font-semibold text-text-strong">
          {language.language}
        </p>
        <p className="mt-0.5 text-xs text-text-muted">{language.fluency}</p>
      </div>
      <div
        className="flex items-center gap-1"
        aria-label={`Proficiency: ${language.fluency}`}
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < filled;
          return (
            <span
              key={i}
              className="relative block h-1.5 w-5 overflow-hidden rounded-full bg-border"
            >
              {isFilled ? (
                <span
                  className="bar-fill absolute inset-0 rounded-full bg-gradient-to-r from-teal to-teal-deep"
                  style={{ transitionDelay: `${i * 80}ms` }}
                />
              ) : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}
