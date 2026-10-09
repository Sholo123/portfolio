import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { profile } from "../data/content";

const focusAreas = [
  { icon: "shield", label: "Cloud and Kubernetes security" },
  { icon: "terminal", label: "Penetration testing" },
  { icon: "layers", label: "Full-stack development" },
  { icon: "code", label: "Secure system design" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About me"
      align="left"
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {profile.summary.map((para) => (
            <p key={para.slice(0, 32)} className="leading-relaxed text-slate-400">
              {para}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "React", "Node.js", "Kubernetes", "Docker", "PostgreSQL"].map(
              (t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="space-y-4">
          <div className="card p-6">
            <p className="eyebrow mb-4">Focus areas</p>
            <ul className="space-y-3">
              {focusAreas.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name={f.icon} className="h-4 w-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <p className="eyebrow mb-3">Currently</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Completing my Honours research project,{" "}
              <span className="text-white">KubernetesSentinel</span>, at the{" "}
              {profile.university}. Available for software development and
              cybersecurity roles.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
