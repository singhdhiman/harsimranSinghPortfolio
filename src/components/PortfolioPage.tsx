"use client";

import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className={isDark ? "min-h-screen text-white" : "min-h-screen text-gray-900"}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Project isDark={isDark} />
      <Experience isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

