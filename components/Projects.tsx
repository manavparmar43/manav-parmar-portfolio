"use client";

const projects = [
  {
    name: "HRMS / CRM / DOV",
    tagline: "Enterprise SaaS Suite",
    featured: true,
    description:
      "A comprehensive enterprise SaaS platform with three integrated modules: DOV (central auth gateway), HRMS (HR management), and CRM (customer relationship management).",
    tech: ["Node.js", "React.js", "MongoDB", "Express.js", "TypeScript", "RBAC", "JWT"],
    color: "from-cyan-500/15 to-blue-600/15",
    border: "border-cyan-500/25",
    accent: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    features: [
      "DOV: Central auth hub with role-based access control across all modules",
      "HRMS: Employee onboarding, attendance tracking, payroll, and performance reviews",
      "CRM: Lead pipeline management, sales tracking, and follow-up reminder system",
      "Reusable React component library shared across all three products",
      "Optimized MongoDB queries with indexing for high-throughput operations",
    ],
    github: "#",
    demo: "#",
    company: "RiseoTech",
  },
  {
    name: "AI Dental Insurance System",
    tagline: "AI-Powered Phone Automation",
    featured: true,
    description:
      "An intelligent system that automates patient insurance verification via AI-driven phone calls. Eliminates manual staff calls using voice AI, RAG pipelines, and real-time data extraction.",
    tech: ["OpenAI", "LangChain", "RAG", "Python", "Gemini", "Node.js", "WebSocket"],
    color: "from-violet-500/15 to-purple-600/15",
    border: "border-violet-500/25",
    accent: "text-violet-400",
    badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    features: [
      "Automated insurance verification calls using AI voice agents (OpenAI)",
      "RAG pipeline for context-aware conversation with insurance databases",
      "Real-time transcription and structured data extraction from calls",
      "Gemini integration for multi-modal document processing",
      "Significant reduction in administrative staff workload",
    ],
    github: "#",
    demo: "#",
    company: "RiseoTech",
  },
  {
    name: "IndlyURLs",
    tagline: "TATA Production Platform",
    featured: true,
    description:
      "A production-grade URL shortening platform built for TATA, with SMS gateway integration, analytics dashboard, and enterprise-level reliability.",
    tech: ["React.js", "FastAPI", "Django", "DRF", "PostgreSQL", "SMS Gateway"],
    color: "from-orange-500/15 to-yellow-500/15",
    border: "border-orange-500/25",
    accent: "text-orange-400",
    badgeBg: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    features: [
      "High-throughput URL shortening with custom aliases and expiry support",
      "SMS gateway integration for link delivery and notification campaigns",
      "Analytics dashboard with click-tracking, geographic data, and device stats",
      "Enterprise-grade rate limiting, abuse detection, and API key management",
      "Deployed to production serving real TATA users",
    ],
    github: "#",
    demo: "#",
    company: "CitrusBug Technolabs",
  },
  {
    name: "Beenello",
    tagline: "E-Commerce Platform",
    featured: false,
    description:
      "A full-featured e-commerce backend platform with comprehensive product management, inventory control, and a powerful search and filtering system.",
    tech: ["Django", "DRF", "PostgreSQL", "Docker", "AWS", "Redis"],
    color: "from-green-500/15 to-emerald-600/15",
    border: "border-green-500/25",
    accent: "text-green-400",
    badgeBg: "bg-green-500/10 border-green-500/20 text-green-300",
    features: [
      "Full CRUD APIs for products, categories, variants, and inventory",
      "Advanced filtering, search, and sorting with PostgreSQL full-text search",
      "Cart, wishlist, order management, and payment integration",
      "Containerized with Docker and deployed on AWS EC2 with CI/CD",
      "Redis caching for high-traffic product listing endpoints",
    ],
    github: "#",
    demo: "#",
    company: "SolGuruz LLP",
  },
  {
    name: "HoneyDeck",
    tagline: "REST API Backend",
    featured: false,
    description:
      "Core REST API backend for the HoneyDeck platform, providing robust and performant API endpoints with optimized database interactions.",
    tech: ["Python", "Django", "DRF", "PostgreSQL", "REST API"],
    color: "from-pink-500/15 to-rose-600/15",
    border: "border-pink-500/25",
    accent: "text-pink-400",
    badgeBg: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    features: [
      "Designed and implemented core platform REST API endpoints",
      "Optimized database queries with select_related and prefetch_related",
      "Implemented JWT authentication and permission-based authorization",
      "Comprehensive API documentation with Swagger/OpenAPI",
      "High performance under load with query optimization",
    ],
    github: "#",
    demo: "#",
    company: "CitrusBug Technolabs",
  },
];

const currentWork = {
  name: "AI Calling & Real-Time Chat System",
  status: "In Active Development",
  description:
    "Enhancing the AI dental system with multi-turn conversation capabilities, real-time chat alongside AI phone agents, and a live dashboard for monitoring ongoing AI calls.",
  tech: ["Node.js", "WebSocket", "OpenAI", "LangChain", "React.js", "MongoDB"],
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Projects
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Things I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            A selection of production projects, enterprise systems, and AI products I&apos;ve
            engineered from concept to deployment.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 card-glow`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              )}

              {/* Project header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${project.accent} opacity-70`}>
                    {project.company}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{project.name}</h3>
                <p className={`text-sm font-medium ${project.accent}`}>{project.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5 flex-1">
                {project.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${project.accent}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${project.badgeBg}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-800/60">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className={`flex items-center gap-1.5 text-sm ${project.accent} hover:opacity-80 transition-opacity duration-200`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Working On Now */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/80 border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-white font-bold text-lg">{currentWork.name}</h3>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {currentWork.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {currentWork.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {currentWork.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
