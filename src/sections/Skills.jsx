import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills"
      subtitle="The languages, frameworks and security practices I work with."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.07}>
            <div className="card group h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:bg-accent/20">
                  <Icon name={group.icon} />
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
