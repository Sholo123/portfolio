import { useEffect, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { videos } from "../data/content";

export default function Video() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = videos[active];

  const selectTab = (i) => {
    setActive(i);
    setPlaying(false); // stop the current video when switching
  };

  // Let other sections deep link to a specific video via #video-<slug>.
  useEffect(() => {
    const apply = () => {
      const match = window.location.hash.match(/^#video-(.+)$/);
      if (!match) return;
      const i = videos.findIndex((v) => v.slug === match[1]);
      if (i >= 0) {
        setActive(i);
        setPlaying(false);
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  // Fall back to the standard-quality thumbnail if there's no HD one.
  const handleThumbError = (e) => {
    if (!e.currentTarget.dataset.fallback) {
      e.currentTarget.dataset.fallback = "1";
      e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    }
  };

  return (
    <Section
      id="video"
      eyebrow="Demonstrations"
      title="Project walkthroughs"
      subtitle={video.description}
    >
      {/* deep link targets for #video-<slug> */}
      {videos.map((v) => (
        <span
          key={v.slug}
          id={`video-${v.slug}`}
          className="block h-0 scroll-mt-32"
          aria-hidden="true"
        />
      ))}

      {/* video switcher */}
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {videos.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => selectTab(i)}
            aria-pressed={i === active}
            className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
              i === active
                ? "border-accent/50 bg-accent/15 text-accent"
                : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {v.tab}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal key={`player-${video.id}`}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-accent/5">
            <div className="relative aspect-video">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play ${video.title}`}
                  className="group absolute inset-0 h-full w-full"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    onError={handleThumbError}
                    alt={video.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-accent/90 text-ink-950 shadow-lg shadow-accent/30 transition group-hover:scale-110 group-hover:bg-accent">
                      <Icon name="play" className="ml-1 h-8 w-8" />
                    </span>
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
                    <span className="eyebrow">{video.kicker}</span>
                    <span className="mt-2 block text-lg font-semibold text-white sm:text-xl">
                      {video.title}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal key={`panel-${video.id}`} delay={0.1}>
          <div className="card h-full p-6">
            {video.panelNote && (
              <p className="mb-5 border-b border-white/10 pb-5 text-sm leading-relaxed text-slate-400">
                {video.panelNote}
              </p>
            )}

            <p className="eyebrow mb-4">{video.panelTitle}</p>
            <ol className="space-y-3">
              {video.panelItems.map((c, i) => (
                <li key={c} className="flex gap-3 text-sm text-slate-400">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c}
                </li>
              ))}
            </ol>

            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:border-accent/50 hover:bg-white/5"
            >
              <Icon name="external" className="h-4 w-4 text-accent" />
              Open on YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
