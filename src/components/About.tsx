import { User } from "lucide-react";
import Section from "./Section";

const About = ({isDark}:any)=> {
    return (
      <Section
        id="about"
        title="About"
        subtitle="A concise snapshot of my engineering focus, strengths, and background."
        icon={<User size={18} />}
        isDark={isDark}
        variant="neutral"
      >
        <div className="max-w-4xl mx-auto">
          <p className={isDark ? 'text-lg text-gray-300 mb-6 leading-relaxed' : 'text-lg text-gray-700 mb-6 leading-relaxed'}>
            Dynamic & resourceful professional targeting roles in Full-stack Development | Front-end Development to leverage expertise in building scalable, user-centric web applications and cloud-native solutions.
          </p>

          <ul className={isDark ? 'text-gray-300 mb-8 space-y-3 list-disc pl-6' : 'text-gray-700 mb-8 space-y-3 list-disc pl-6'}>
            <li>5+ years building modern web apps with React.js, Next.js, Vue.js, and TypeScript.</li>
            <li>Strong SPA architecture skills: state management (Redux/React Query), performance, and maintainability.</li>
            <li>Full-stack experience with Node.js/Nest.js and REST/GraphQL APIs; secure integrations and scalable systems.</li>
            <li>Micro-frontend experience and component-driven UI development with clean UX and accessibility.</li>
            <li>Cloud/DevOps exposure: AWS/Azure, Docker, CI/CD, and production delivery practices.</li>
          </ul>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className={isDark ? "rounded-xl border border-white/10 bg-white/5 p-4" : "rounded-xl border border-black/5 bg-white p-4"}>
              <div className={isDark ? "text-xs text-gray-400 mb-1" : "text-xs text-gray-500 mb-1"}>Education</div>
              <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>
                B.Tech (CSE), PTU · 2021
              </div>
            </div>
            <div className={isDark ? "rounded-xl border border-white/10 bg-white/5 p-4" : "rounded-xl border border-black/5 bg-white p-4"}>
              <div className={isDark ? "text-xs text-gray-400 mb-1" : "text-xs text-gray-500 mb-1"}>Location</div>
              <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>
                Mohali, Punjab, India
              </div>
            </div>
            <div className={isDark ? "rounded-xl border border-white/10 bg-white/5 p-4" : "rounded-xl border border-black/5 bg-white p-4"}>
              <div className={isDark ? "text-xs text-gray-400 mb-1" : "text-xs text-gray-500 mb-1"}>Languages</div>
              <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>
                English, Hindi, Punjabi
              </div>
            </div>
          </div>

          <div className={isDark ? 'grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10' : 'grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-black/10'}>
            <div className="text-center">
              <div className="text-3xl font-extrabold mb-1 text-accent">5+</div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold mb-1 text-accent">8+</div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold mb-1 text-accent">Cloud</div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>AWS/Azure</div>
            </div>
          </div>
        </div>
      </Section>
    )
}
export default About;