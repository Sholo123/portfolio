import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { projects, profile } from "../data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects"
      subtitle="Academic and team projects completed during my undergraduate degree at the University of Johannesburg."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="card flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{p.kicker}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {p.name}
                  </h3>
                </div>
                <span className="shrink-0 font-mono text-xs text-slate-500">
                  {p.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {p.desc}
              </p>

              {p.team && (
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {p.team}.
                </p>
              )}

              {p.role && (
                <p className="mt-4 flex items-center gap-2 text-sm">
                  <span className="text-slate-500">My role:</span>
                  <span className="text-accent">{p.role}</span>
                </p>
              )}

              <ul className="mt-5 space-y-2.5">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              {p.videoSlug && (
                <a
                  href={`#video-${p.videoSlug}`}
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-soft"
                >
                  <Icon name="play" className="h-3.5 w-3.5" />
                  Watch the demonstration
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 transition group-hover/link:translate-x-1"
                  />
                </a>
              )}

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-accent/50 hover:bg-white/5"
          >
            <Icon name="github" className="h-4 w-4 text-accent" />
            View my GitHub profile
            <Icon
              name="arrow"
              className="h-4 w-4 transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
