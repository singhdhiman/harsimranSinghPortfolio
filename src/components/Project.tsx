import { Briefcase } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Project = ({isDark}:any)=> {
    return(
      <Section
        id="projects"
        title="Projects"
        subtitle="Case studies that demonstrate product thinking, engineering quality, and impact."
        icon={<Briefcase size={18} />}
        isDark={isDark}
        variant="warm"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delayMs={idx * 70}>
              <ProjectCard project={p} isDark={isDark} priority={idx === 0} />
            </Reveal>
          ))}
        </div>
      </Section>
    )
}
export default Project;