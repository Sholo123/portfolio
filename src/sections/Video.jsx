import { useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { video } from "../data/content";

export default function Video() {
  const [playing, setPlaying] = useState(false);

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
      eyebrow="Demonstration"
      title="Project walkthrough"
      subtitle={video.description}
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
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
                    <span className="eyebrow">Honours research project</span>
                    <span className="mt-2 block text-lg font-semibold text-white sm:text-xl">
                      {video.title}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card h-full p-6">
            <p className="eyebrow mb-4">Topics covered</p>
            <ol className="space-y-3">
              {video.chapters.map((c, i) => (
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
