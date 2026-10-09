import { motion } from "framer-motion";
import profileImg from "../assets/profile.JPEG";
import { profile, stats } from "../data/content";
import Icon from "../components/Icon";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          {/* text */}
          <div>
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-accent">
                Available for graduate and internship opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 bg-gradient-to-r from-accent via-accent-soft to-indigo-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-5 max-w-xl leading-relaxed text-slate-400"
            >
              {profile.tagline}
            </motion.p>

            {/* quick facts */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"
            >
              <span className="flex items-center gap-2">
                <Icon name="book" className="h-4 w-4 text-accent" />
                {profile.degree}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-accent" />
                {profile.location}
              </span>
            </motion.div>

            {/* actions */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#sentinel"
                className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-ink-950 transition hover:bg-accent-soft"
              >
                View my work
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                />
              </a>
              <a
                href="#video"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-accent/50 hover:bg-white/5"
              >
                <Icon name="play" className="h-4 w-4 text-accent" />
                Watch the walkthrough
              </a>
              <a
                href={profile.cv}
                download
                className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-accent/50 hover:bg-white/5"
              >
                <Icon name="download" className="h-4 w-4 text-accent" />
                Download CV
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-8 flex items-center gap-4"
            >
              {[
                { href: profile.github, icon: "github", label: "GitHub" },
                { href: profile.linkedin, icon: "linkedin", label: "LinkedIn" },
                { href: `mailto:${profile.email}`, icon: "mail", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition hover:border-accent/50 hover:text-accent"
                >
                  <Icon name={s.icon} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs lg:max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-transparent to-indigo-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-900">
              <img
                src={profileImg}
                alt={profile.fullName}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-5">
                <p className="font-mono text-xs text-accent">
                  {profile.githubHandle}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {profile.university}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* stat strip */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={7}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950 px-5 py-6 text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
