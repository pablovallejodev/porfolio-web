import { profile, projectRepoUrl } from "@/constants/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ice">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent"
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {year}{" "}
          <span className="font-semibold text-text-strong">{profile.name}</span>.
          Open source on{" "}
          <a
            href={projectRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink transition-colors hover:text-teal"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
