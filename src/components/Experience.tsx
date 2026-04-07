import { Building2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../data/experience";

const Experience = ({ isDark }: any) => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Teams, products, and platforms I’ve contributed to in real-world delivery."
      icon={<Building2 size={18} />}
      isDark={isDark}
      variant="neutral"
    >
      <ol className="relative border-l border-black/10 dark:border-white/10 pl-6 space-y-8">
        {experience.map((role, idx) => (
          <li key={`${role.company}-${role.title}`} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full border ${
                isDark
                  ? "border-white/15 bg-gray-950/60"
                  : "border-black/10 bg-white"
              }`}
            />
            <Reveal delayMs={idx * 80}>
              <div
                className={
                  isDark
                    ? "rounded-2xl p-7 border border-white/10 bg-white/5"
                    : "rounded-2xl p-7 border border-black/5 bg-white"
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-accent">
                      {role.title}
                    </div>
                    <div className={isDark ? "text-gray-200" : "text-gray-800"}>
                      {role.company}
                      {role.client ? (
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                          {" "}
                          · Client: {role.client}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className={isDark ? "text-gray-300" : "text-gray-600"}>{role.dates}</div>
                </div>

                <div className={isDark ? "mt-5 text-gray-200 font-semibold" : "mt-5 text-gray-900 font-semibold"}>
                  Highlights
                </div>
                <ul
                  className={
                    isDark
                      ? "mt-3 text-gray-300 space-y-2 list-disc pl-6 leading-relaxed"
                      : "mt-3 text-gray-700 space-y-2 list-disc pl-6 leading-relaxed"
                  }
                >
                  {role.highlights.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;

