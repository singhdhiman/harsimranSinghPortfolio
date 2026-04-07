import { Mail } from "lucide-react";
import { scrollToSection } from "../utils/common";
import { site } from "../data/site";
import Reveal from "./Reveal";

type Props = { isDark: boolean };

export default function Home({ isDark }: Props) {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center"
      style={{
        background: isDark
          ? "radial-gradient(1100px circle at 18% 10%, rgba(129,140,248,0.22), transparent 55%), radial-gradient(900px circle at 82% 28%, rgba(52,211,153,0.14), transparent 55%), linear-gradient(135deg, #070812 0%, #0b0c18 55%, #070812 100%)"
          : "radial-gradient(1100px circle at 18% 10%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(900px circle at 82% 28%, rgba(16,185,129,0.14), transparent 55%), linear-gradient(135deg, #ffffff 0%, #f7f8ff 55%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div
                className={`rounded-2xl p-7 sm:p-10 border shadow-2xl ${
                  isDark
                    ? "bg-white/5 border-white/10 backdrop-blur"
                    : "bg-white/70 border-black/5 backdrop-blur text-gray-900"
                }`}
              >
                <div className="flex flex-wrap gap-2 mb-6" aria-label="Key technologies">
                  {["React.js", "Next.js", "TypeScript", "Node/Nest", "GraphQL", "AWS/Azure"].map(
                    (t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          isDark ? "bg-white/10 text-white" : "bg-indigo-50 text-indigo-900 border border-indigo-200/60"
                        }`}
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>

                <h1
                  className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {site.name}
                </h1>
                <p className={`text-xl md:text-2xl mb-4 font-semibold ${isDark ? "text-white/90" : "text-gray-800"}`}>
                  {site.headline}
                </p>
                <p className={`text-base sm:text-lg mb-6 leading-relaxed ${isDark ? "text-white/80" : "text-gray-700"}`}>
                  {site.valueProp}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    className={`text-lg font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                      isDark
                        ? "bg-white text-gray-900"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    View Projects
                  </button>
                  <a
                    href={`mailto:${site.email}`}
                    className={`text-lg font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                      isDark
                        ? "border border-white/20 hover:bg-white/10 text-white"
                        : "border border-indigo-200 hover:bg-indigo-50 text-indigo-900 bg-white"
                    }`}
                    aria-label="Email me"
                  >
                    <Mail size={20} className={isDark ? "text-white" : "text-indigo-700"} />
                    Email Me
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className={`text-lg font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5 ${
                      isDark ? "text-white/90 hover:text-white" : "text-indigo-900 hover:text-indigo-700"
                    }`}
                    aria-label="Scroll to contact section"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={150}>
              <div
                className={
                  isDark
                    ? "rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 shadow-lg"
                    : "rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-7 shadow-lg text-gray-900"
                }
              >
                <div className={`text-sm font-semibold tracking-wide mb-2 ${isDark ? "text-white/90" : "text-indigo-700"}`}>
                  {site.availability}
                </div>
                <div className={`${isDark ? "text-white/90" : "text-gray-700"} leading-relaxed`}>
                  <div className="mb-2">
                    <span className="font-semibold">Based in:</span> {site.location}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Email:</span> {site.email}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Phone:</span> {site.phone}
                  </div>
                  <div className={`mt-4 text-sm ${isDark ? "text-white/80" : "text-gray-600"}`}>
                    Recruiter-friendly summary: product-focused, performance-minded, and comfortable owning features end-to-end.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

