"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Developer",
  "Backend Engineer",
  "AI Product Builder",
  "Full-Stack Engineer",
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
  { value: "∞", label: "AI Products Built" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = roles[currentRole];

    if (!isDeleting && charIndex < target.length) {
      const timeout = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === target.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((r) => (r + 1) % roles.length);
    }
  }, [charIndex, isDeleting, currentRole]);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-950/20 to-transparent rounded-full blur-2xl" />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${10 + (i * 8) % 85}%`,
              top: `${15 + (i * 13) % 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Manav Parmar</span>
          </h1>

          {/* Typing Effect */}
          <div className="flex items-center gap-2 mb-8 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300">
              I&apos;m a{" "}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text min-w-[280px]">
              {displayed}
              <span className="animate-blink text-cyan-400">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: "400ms" }}>
            I build{" "}
            <span className="text-cyan-400 font-medium">scalable backend systems</span> and{" "}
            <span className="text-blue-400 font-medium">AI-powered products</span> that solve
            real-world problems. With 4+ years across Python, Django, FastAPI, Node.js, and
            React — I ship things that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: "500ms" }}>
            <button
              onClick={handleScrollToProjects}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="https://drive.google.com/file/d/1BviUgvoLoCklP8u8565UX2cUqRDsonJe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 animate-fadeInUp" style={{ animationDelay: "700ms" }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
