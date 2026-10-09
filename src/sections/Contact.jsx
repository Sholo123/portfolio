import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { profile } from "../data/content";

const channels = [
  {
    icon: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    wide: true,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  {
    icon: "github",
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Reveal className="relative text-center">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          I am looking for graduate and internship opportunities in software
          development and cybersecurity. I would be glad to hear from you.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal
            key={c.label}
            delay={i * 0.07}
            className={c.wide ? "sm:col-span-2" : ""}
          >
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card flex items-center gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <Icon name={c.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{c.label}</span>
                <span className="block truncate text-sm text-white">
                  {c.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="relative mt-10 text-center">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-medium text-ink-950 transition hover:bg-accent-soft"
        >
          <Icon name="mail" className="h-4 w-4" />
          Send an email
          <Icon
            name="arrow"
            className="h-4 w-4 transition group-hover:translate-x-1"
          />
        </a>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Icon name="pin" className="h-4 w-4" />
          {profile.location}
        </p>
      </Reveal>
    </Section>
  );
}
