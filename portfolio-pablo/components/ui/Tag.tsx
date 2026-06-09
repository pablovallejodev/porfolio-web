type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-ice px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors hover:border-science/30 hover:bg-science-soft hover:text-science">
      {children}
    </span>
  );
}
