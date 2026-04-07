import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Header = ({ isDark, setIsDark }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-gray-950/70 border-b border-white/10 backdrop-blur"
          : "bg-white/70 border-b border-black/5 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="group flex flex-col leading-tight" aria-label="Go to home section">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-accent">
              Harsimran Singh
            </span>
            <span className={isDark ? "text-xs text-gray-300" : "text-xs text-gray-600"}>
              Full Stack Developer
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`capitalize font-semibold transition-colors relative ${
                  isDark
                    ? "text-indigo-200/90 hover:text-white"
                    : "text-indigo-700 hover:text-indigo-900"
                } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-current after:transition-all hover:after:w-full`}
              >
                {item}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
              style={{ color: "rgb(var(--accent))" }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
              style={{ color: "rgb(var(--accent))" }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
              style={{ color: "rgb(var(--accent))" }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark ? "bg-gray-950/95 border-white/10" : "bg-white/95 border-black/5"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-xl capitalize font-semibold transition-colors ${
                  isDark ? "text-indigo-200/90 hover:bg-white/10" : "text-indigo-700 hover:bg-black/5"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
