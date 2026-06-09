import type { SocialLink } from "@/types";
import { Icon } from "./Icon";

type SocialLinksProps = {
  items: SocialLink[];
  variant?: "stacked" | "inline" | "icons" | "icons-dark" | "cards";
};

export function SocialLinks({ items, variant = "stacked" }: SocialLinksProps) {
  const linked = items.filter((item) => item.href);

  if (variant === "cards") {
    return (
      <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        {linked.map((item) => (
          <li key={item.label} className="min-w-0 flex-1 sm:min-w-[11rem]">
            <SocialCardLink item={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "icons-dark") {
    return (
      <ul className="flex flex-wrap items-center gap-2">
        {linked.map((item) => (
          <li key={item.label}>
            <SocialIconLink item={item} dark />
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "icons") {
    return (
      <ul className="flex flex-wrap items-center gap-2">
        {linked.map((item) => (
          <li key={item.label}>
            <SocialIconLink item={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "inline") {
    return (
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
        {linked.map((item) => (
          <li key={item.label}>
            <SocialEntry item={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2.5">
      {linked.map((item) => (
        <li key={item.label}>
          <SocialEntry item={item} />
        </li>
      ))}
    </ul>
  );
}

function SocialCardLink({ item }: { item: SocialLink }) {
  const isExternal = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex min-w-0 items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-3 transition-all hover:border-teal/40 hover:bg-teal/[0.03] hover:shadow-soft"
    >
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal/15">
        <Icon name={item.icon} size={15} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-science">
          {item.label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-ink group-hover:text-teal">
          {item.value}
        </span>
      </span>
    </a>
  );
}

function SocialIconLink({ item, dark = false }: { item: SocialLink; dark?: boolean }) {
  const isExternal = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={
        dark
          ? "group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-3.5 transition-all hover:border-teal/50 hover:bg-teal/10"
          : "group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-1.5 pr-3.5 transition-all hover:border-teal/40 hover:bg-teal/[0.03]"
      }
      aria-label={`${item.label}: ${item.value}`}
    >
      <span
        className={
          dark
            ? "inline-flex size-8 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors group-hover:bg-teal/30"
            : "inline-flex size-8 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal/15"
        }
      >
        <Icon name={item.icon} size={14} />
      </span>
      <span
        className={
          dark
            ? "text-sm font-medium text-white/90 group-hover:text-white"
            : "text-sm font-medium text-ink group-hover:text-teal"
        }
      >
        {item.label}
      </span>
    </a>
  );
}

function SocialEntry({ item }: { item: SocialLink }) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <span className="inline-flex size-7 items-center justify-center rounded-md bg-surface-subtle text-text-muted transition-all group-hover:bg-teal/10 group-hover:text-teal">
        <Icon name={item.icon} size={14} />
      </span>
      <span>{item.value}</span>
    </span>
  );

  const isExternal = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 text-text transition-colors hover:text-teal"
    >
      {content}
    </a>
  );
}
