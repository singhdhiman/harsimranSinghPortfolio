const Footer = ({isDark}:any)=> {
    return (
        <footer className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={
                isDark
                  ? "rounded-2xl border border-white/10 bg-gray-950/40 backdrop-blur p-8 text-center shadow-lg"
                  : "rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-8 text-center shadow-lg"
              }
            >
              <p className={isDark ? "text-xl font-bold text-gray-100 mb-2" : "text-xl font-bold text-gray-900 mb-2"}>
                Let&apos;s build something great.
              </p>
              <p className={isDark ? "text-gray-300 mb-6" : "text-gray-600 mb-6"}>
                Scalable, accessible, and fast web applications—end to end.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
                <a
                  href="mailto:idhiman666@gmail.com"
                  className={isDark ? "text-indigo-200 font-semibold hover:underline" : "text-indigo-700 font-semibold hover:underline"}
                >
                  idhiman666@gmail.com
                </a>
                <span className={isDark ? "hidden sm:inline text-white/20" : "hidden sm:inline text-black/15"}>•</span>
                <a
                  href="tel:+918360253186"
                  className={isDark ? "text-indigo-200 font-semibold hover:underline" : "text-indigo-700 font-semibold hover:underline"}
                >
                  +91 8360253186
                </a>
              </div>

              <p className={isDark ? "text-sm text-gray-400" : "text-sm text-gray-500"}>
                © {new Date().getFullYear()} Harsimran Singh · Full Stack Developer
              </p>
            </div>
          </div>
        </footer>
    )
}
export default Footer;