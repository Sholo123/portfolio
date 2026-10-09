import Icon from "./Icon";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.fullName}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-accent"
          >
            <Icon name="github" className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-accent"
          >
            <Icon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-500 transition hover:text-accent"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-slate-600">
          Built with React, Vite and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
