import { Layers } from "lucide-react";
import Section from "./Section";

const Skills = ({isDark}:any)=> {

    const skills = {
        "Core Competencies": [
            "React.js Development",
            "Micro Front-end Architecture",
            "TypeScript & JavaScript Programming",
            "State Management",
            "Back-end Development",
            "API Integration",
            "Cloud Platforms & DevOps",
            "Database Management",
            "UI/UX Design & Frontend Styling",
            "Payment Gateway Integration",
            "Full Stack Development & Scalable Web Applications",
            "Collaborative Agile Development & Cross-Functional Teamwork",
        ],
        "Front-end": [
            "React.js",
            "Next.js",
            "Vue.js",
            "JavaScript",
            "TypeScript",
            "Redux",
            "Chakra UI",
            "React Query",
            "React Native",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "SCSS",
            "Tailwind CSS",
        ],
        "Back-end": [
            "Node.js",
            "Nest.js",
            "Express.js",
            "RESTful APIs",
            "GraphQL",
            "Java Core",
            "Hibernate",
            "Spring Boot",
        ],
        "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
        "Cloud & DevOps": [
            "AWS",
            "Azure",
            "Docker",
            "CI/CD pipelines",
            "Git (GitHub, GitLab, Bitbucket)",
        ],
        "Soft Skills": [
            "Adaptability",
            "Analytical Thinking",
            "Collaboration",
            "Problem Solving",
            "Teamwork",
        ],
    };

    return (
      <Section
        id="skills"
        title="Skills"
        subtitle="A quick view of my core competencies and day-to-day tools."
        icon={<Layers size={18} />}
        isDark={isDark}
        variant="cool"
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={
                isDark
                  ? "rounded-2xl p-6 border border-white/10 bg-white/5"
                  : "rounded-2xl p-6 border border-black/5 bg-white"
              }
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className={isDark ? "text-lg font-bold text-gray-100" : "text-lg font-bold text-gray-900"}>
                  {category}
                </h3>
                <span
                  className={isDark ? "text-xs text-gray-400" : "text-xs text-gray-500"}
                  aria-label={`${items.length} items`}
                >
                  {items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border ${
                      isDark
                        ? "bg-white/5 text-indigo-200 border-white/10"
                        : "bg-sky-50 text-sky-900 border-sky-200/70"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    )
}
export default Skills;