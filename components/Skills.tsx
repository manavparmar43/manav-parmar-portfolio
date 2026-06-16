"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: "⚡",
    name: "Languages",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    icon: "🔧",
    name: "Backend",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    skills: ["Django", "DRF", "FastAPI", "Flask", "Node.js", "Express.js"],
  },
  {
    icon: "🎨",
    name: "Frontend",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: "🗄️",
    name: "Databases",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    icon: "🤖",
    name: "AI & Automation",
    color: "from-blue-500/20 to-violet-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    skills: ["OpenAI API", "Gemini", "LangChain", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    icon: "☁️",
    name: "DevOps & Cloud",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    skills: ["Docker", "AWS EC2", "AWS S3", "Git", "CI/CD", "Linux"],
  },
];

const topSkills = [
  { name: "Python", level: 95, color: "from-yellow-400 to-orange-500" },
  { name: "Django / DRF", level: 92, color: "from-green-400 to-emerald-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-300 to-yellow-500" },
  { name: "React.js", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "FastAPI", level: 85, color: "from-teal-400 to-cyan-500" },
  { name: "TypeScript", level: 80, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
  { name: "Docker", level: 78, color: "from-blue-400 to-cyan-600" },
  { name: "AWS", level: 75, color: "from-orange-400 to-yellow-500" },
];

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const el = barsRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Skills
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            A curated set of tools and technologies I&apos;ve worked with across production systems,
            enterprise SaaS platforms, and AI products.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`group p-5 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} hover:scale-[1.02] transition-all duration-300 card-glow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900/60 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className={`font-semibold text-base ${cat.iconColor}`}>{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/70 text-slate-300 border border-slate-700/50 hover:text-white hover:border-slate-600 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div ref={barsRef}>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Proficiency Levels
            </h3>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {topSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                  <span className="text-slate-400 text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar-fill`}
                    style={{
                      width: barsVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional skills cloud */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-5 text-center">
            Other Tools & Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "REST APIs", "GraphQL", "WebSockets", "Redis", "Celery",
              "Pytest", "JWT", "OAuth2", "Stripe", "Twilio", "SMTP",
              "GitHub Actions", "Nginx", "Gunicorn", "Swagger", "Postman",
              "VS Code", "Linux", "Bash", "Microservices",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-full text-xs text-slate-400 bg-slate-800/60 border border-slate-700/40 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
