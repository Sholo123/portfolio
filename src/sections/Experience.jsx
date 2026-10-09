import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { experience, education } from "../data/content";

function TimelineItem({ title, org, period, children, last }) {
  return (
    <div className="relative pl-10">
      {!last && (
        <span className="absolute left-[11px] top-8 h-full w-px bg-white/10" />
      )}
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-ink-950">
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>

      <div className="pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-white">{title}</h3>
          <span className="font-mono text-xs text-slate-500">{period}</span>
        </div>
        <p className="mt-1 text-sm text-accent">{org}</p>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Background"
      title="Experience and education"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name="briefcase" className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-white">Experience</h3>
          </div>

          {experience.map((e, i) => (
            <TimelineItem
              key={e.org}
              title={e.role}
              org={e.org}
              period={e.period}
              last={i === experience.length - 1}
            >
              <ul className="space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name="book" className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-white">Education</h3>
          </div>

          {education.map((e, i) => (
            <TimelineItem
              key={e.qualification}
              title={e.qualification}
              org={e.org}
              period={e.period}
              last={i === education.length - 1}
            >
              <p className="text-sm leading-relaxed text-slate-400">
                {e.detail}
              </p>
            </TimelineItem>
          ))}

          <div className="card p-6">
            <p className="eyebrow mb-3">Interests</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Cybersecurity and ethical hacking, software development,
              networking and emerging technologies, continuous learning.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
