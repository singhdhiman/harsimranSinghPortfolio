import Image from "next/image";
import type { ProjectCaseStudy } from "../data/projects";

export default function ProjectCard({
  project,
  isDark,
  priority,
}: {
  project: ProjectCaseStudy;
  isDark: boolean;
  priority?: boolean;
}) {
  const live = project.links.find((l) => l.label === "Live");
  const github = project.links.find((l) => l.label === "GitHub");

  return (
    <article
      className={`group rounded-2xl overflow-hidden border shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 ${
        isDark ? "bg-gray-950/30 border-white/10" : "bg-white border-black/5"
      }`}
    >
      <div className="h-56 w-full overflow-hidden rounded-t-2xl relative">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-2xl font-extrabold text-accent">{project.title}</h3>
          <p className={isDark ? "text-gray-300 mt-2" : "text-gray-700 mt-2"}>{project.tagline}</p>
        </header>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.slice(0, 10).map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
                isDark
                  ? "bg-white/5 text-indigo-200 border-white/10"
                  : "bg-indigo-50 text-indigo-900 border-indigo-200/70"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          <div>
            <div className={isDark ? "text-gray-200 font-semibold mb-1" : "text-gray-900 font-semibold mb-1"}>
              Problem
            </div>
            <p className={isDark ? "text-gray-300 text-sm leading-relaxed" : "text-gray-700 text-sm leading-relaxed"}>
              {project.problem}
            </p>
          </div>
          <div>
            <div className={isDark ? "text-gray-200 font-semibold mb-1" : "text-gray-900 font-semibold mb-1"}>
              Solution
            </div>
            <p className={isDark ? "text-gray-300 text-sm leading-relaxed" : "text-gray-700 text-sm leading-relaxed"}>
              {project.solution}
            </p>
          </div>
          <div>
            <div className={isDark ? "text-gray-200 font-semibold mb-2" : "text-gray-900 font-semibold mb-2"}>
              Impact
            </div>
            <ul
              className={
                isDark
                  ? "text-gray-300 space-y-2 list-disc pl-6 text-sm leading-relaxed"
                  : "text-gray-700 space-y-2 list-disc pl-6 text-sm leading-relaxed"
              }
            >
              {project.impact.slice(0, 3).map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        </div>

        {(live || github) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {live ? (
              <a
                href={live.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                  isDark
                    ? "border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10"
                    : "border-black/5 bg-white text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                Live
              </a>
            ) : null}
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                  isDark
                    ? "border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10"
                    : "border-black/5 bg-white text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                GitHub
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}

