"use client";

const experiences = [
  {
    company: "RiseoTech",
    initials: "RT",
    role: "Software Developer",
    duration: "Sep 2025 – Present",
    location: "Ahmedabad, India",
    type: "Full-time",
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    dotColor: "bg-cyan-500",
    points: [
      "Engineered a full HRMS, CRM, and DOV enterprise SaaS suite using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Architected DOV as a central authentication and authorization gateway implementing role-based access control (RBAC) across the entire suite",
      "Built an AI dental system for automated patient insurance verification via phone calls using OpenAI, Gemini, and LangChain",
      "Designed and implemented RAG (Retrieval-Augmented Generation) pipelines for intelligent document Q&A and context-aware responses",
      "Delivered real-time chat functionality and AI-powered calling features integrated into the CRM platform",
      "Mentored a team of interns, conducting code reviews and establishing best practices for the engineering team",
    ],
    learned: "AI product development, RBAC architecture, RAG pipelines, real-time systems with WebSockets",
  },
  {
    company: "SolGuruz LLP",
    initials: "SG",
    role: "Python Developer",
    duration: "Jan 2024 – Aug 2025",
    location: "Ahmedabad, India",
    type: "Full-time",
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/30",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dotColor: "bg-violet-500",
    points: [
      "Developed Beenello, a full-featured e-commerce platform, using Django and Django REST Framework (DRF)",
      "Designed and optimized REST API architecture for product, inventory, cart, and order management modules",
      "Implemented advanced filtering, pagination, and full-text search capabilities to improve product discovery",
      "Containerized application with Docker and deployed to AWS (EC2, S3, RDS) with automated CI/CD pipelines",
      "Collaborated cross-functionally with frontend developers, designers, and project managers to deliver milestones on time",
    ],
    learned: "Scalable e-commerce architecture, Docker containerization, AWS deployment, CI/CD automation",
  },
  {
    company: "CitrusBug Technolabs",
    initials: "CB",
    role: "Software Developer",
    duration: "Jan 2022 – Dec 2023",
    location: "Ahmedabad, India",
    type: "Full-time",
    color: "from-orange-500 to-yellow-500",
    borderColor: "border-orange-500/30",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dotColor: "bg-orange-500",
    points: [
      "Built and maintained multiple client projects using Django, DRF, Flask, and JavaScript across diverse industry domains",
      "Integrated payment gateways (Stripe, Razorpay), third-party APIs, and SMTP/email services into production systems",
      "Built IndlyURLs for TATA — a production URL shortening platform using React.js, FastAPI, and DRF with SMS gateway integration",
      "Developed HoneyDeck REST APIs with optimized database queries and comprehensive API documentation",
      "Gained deep experience in client communication, requirement gathering, and agile development cycles",
    ],
    learned: "Full project lifecycle, client collaboration, payment integrations, API design best practices",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Experience
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work{" "}
            <span className="gradient-text">History</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            4+ years of building production-ready systems across startups and product companies,
            shipping features used by real users at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-orange-500/20 lg:left-1/2 lg:-translate-x-px hidden sm:block" />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row gap-6 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full border-2 border-slate-950 items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.dotColor} shadow-lg`} />
                </div>

                {/* Content card — alternates left/right on large screens */}
                <div
                  className={`sm:pl-14 lg:pl-0 w-full ${
                    i % 2 === 0
                      ? "lg:pr-[calc(50%+2rem)] lg:pl-0"
                      : "lg:pl-[calc(50%+2rem)] lg:pr-0"
                  }`}
                >
                  <div
                    className={`group p-6 rounded-2xl bg-slate-900 border ${exp.borderColor} hover:shadow-lg transition-all duration-300 card-glow`}
                  >
                    {/* Card top: company + initials */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0`}
                      >
                        {exp.initials}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${exp.badgeColor}`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <p className="text-slate-300 font-semibold">{exp.company}</p>

                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full ${exp.dotColor} shrink-0`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* What I learned */}
                    <div className="pt-4 border-t border-slate-800">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                        Key Takeaways
                      </p>
                      <p className="text-slate-400 text-sm italic">{exp.learned}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total experience summary */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            { label: "Total Professional Experience", value: "4+ Years" },
            { label: "Companies Worked At", value: "3 Companies" },
            { label: "Technologies Mastered", value: "20+ Tools" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-center"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
              <div className="text-slate-500 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
