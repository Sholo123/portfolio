import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { flagship } from "../data/content";

export default function Flagship() {
  return (
    <Section
      id="sentinel"
      eyebrow="Flagship project"
      title={flagship.name}
      subtitle={flagship.summary}
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <div>
                <p className="eyebrow">{flagship.kicker}</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {flagship.name}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="font-mono text-xs text-slate-500">
                {flagship.period}
              </span>
              <a
                href="#video"
                className="group flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/20"
              >
                <Icon name="play" className="h-3.5 w-3.5" />
                Watch the walkthrough
              </a>
            </div>
          </div>

          <div className="relative mt-8 grid gap-6 md:grid-cols-2">
            {flagship.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.06}>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{h.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {h.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {flagship.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
