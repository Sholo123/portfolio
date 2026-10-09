import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}) {
  const centered = align === "center";

  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-28 ${className}`}>
      <div className="section-shell">
        {(eyebrow || title) && (
          <Reveal className={`mb-14 ${centered ? "text-center" : ""}`}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 max-w-2xl text-slate-400 ${centered ? "mx-auto" : ""}`}
              >
                {subtitle}
              </p>
            )}
            <div
              className={`mt-6 h-px w-24 bg-gradient-to-r from-accent to-transparent ${
                centered ? "mx-auto" : ""
              }`}
            />
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}
