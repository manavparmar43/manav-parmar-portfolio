"use client";

const highlights = [
  {
    icon: "🎓",
    label: "Education",
    value: "MCA — Gujarat University",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ahmedabad, India",
  },
  {
    icon: "💼",
    label: "Experience",
    value: "4+ Years Professional",
  },
  {
    icon: "🚀",
    label: "Status",
    value: "Open to Opportunities",
  },
  {
    icon: "🤖",
    label: "Passion",
    value: "AI & Automation",
  },
  {
    icon: "🌐",
    label: "Domain",
    value: "Backend & Full-Stack",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Building the future,{" "}
              <span className="gradient-text">one line at a time</span>
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p className="text-base sm:text-lg">
                I&apos;m a Software Developer with over{" "}
                <span className="text-slate-200 font-medium">4 years of professional experience</span>{" "}
                building backend systems, REST APIs, and full-stack applications. My journey started with
                Python and Django, and has since expanded into the Node.js/Express ecosystem and modern
                AI tooling.
              </p>

              <p className="text-base sm:text-lg">
                Currently at{" "}
                <span className="text-cyan-400 font-medium">RiseoTech</span>, I lead development of an
                enterprise SaaS suite — HRMS, CRM, and DOV — while also engineering an AI-powered dental
                system that automates patient insurance verification via phone calls using OpenAI, LangChain,
                and RAG pipelines. I&apos;ve shipped production systems for companies including{" "}
                <span className="text-blue-400 font-medium">TATA</span>.
              </p>

              <p className="text-base sm:text-lg">
                I&apos;m drawn to the intersection of{" "}
                <span className="text-slate-200 font-medium">scalable architecture</span> and{" "}
                <span className="text-slate-200 font-medium">AI automation</span>. When I&apos;m not
                writing code, I&apos;m thinking about how intelligent systems can eliminate repetitive
                human tasks and unlock new possibilities — and then building them.
              </p>
            </div>

            {/* Philosophy quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-cyan-500/50">
              <p className="text-slate-300 italic text-base sm:text-lg leading-relaxed">
                &ldquo;Good software is not about the code you write — it&apos;s about the problems you
                solve and the people whose lives you make easier.&rdquo;
              </p>
              <footer className="mt-2 text-cyan-400 text-sm font-medium">— Manav Parmar</footer>
            </blockquote>

            {/* What makes him unique */}
            <div className="mt-8 p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                What makes me different
              </h3>
              <ul className="space-y-2">
                {[
                  "I ship production-grade code, not just prototypes",
                  "Deep focus on performance, security, and maintainability",
                  "Hands-on experience integrating AI into real business workflows",
                  "Strong communicator — I bridge technical and non-technical teams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-cyan-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="space-y-6">
            {/* Avatar / Profile Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

              <div className="flex items-center gap-5 mb-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-cyan-500/20 animate-pulse-glow">
                    MP
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">Manav Parmar</h3>
                  <p className="text-cyan-400 text-sm font-medium">Software Developer</p>
                  <p className="text-slate-500 text-xs mt-1">Ahmedabad, India 🇮🇳</p>
                </div>
              </div>

              {/* Key highlights grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-colors duration-200"
                  >
                    <span className="text-lg leading-none mt-0.5">{h.icon}</span>
                    <div>
                      <p className="text-slate-500 text-xs">{h.label}</p>
                      <p className="text-slate-200 text-xs font-medium leading-tight">{h.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Quick View */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Core Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "Django", "FastAPI", "Node.js", "React.js",
                  "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS",
                  "OpenAI", "LangChain", "Redis", "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick connect */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/manav-parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium hover:bg-blue-600/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:manavparmar43@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
