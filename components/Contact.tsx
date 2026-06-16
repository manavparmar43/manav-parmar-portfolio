const quickConnect = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Send an Email",
    value: "manavparmar43@gmail.com",
    href: "mailto:manavparmar43@gmail.com",
    color: "text-cyan-400",
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    bg: "hover:bg-cyan-500/5",
    badge: "Fastest response",
    badgeColor: "text-cyan-400 bg-cyan-500/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "Connect on LinkedIn",
    value: "linkedin.com/in/manav-parmar",
    href: "https://linkedin.com/in/manav-parmar",
    color: "text-blue-400",
    border: "border-blue-500/30 hover:border-blue-500/60",
    bg: "hover:bg-blue-500/5",
    badge: "Professional network",
    badgeColor: "text-blue-400 bg-blue-500/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call / WhatsApp",
    value: "+91 9662771526",
    href: "tel:+919662771526",
    color: "text-green-400",
    border: "border-green-500/30 hover:border-green-500/60",
    bg: "hover:bg-green-500/5",
    badge: "IST (UTC+5:30)",
    badgeColor: "text-green-400 bg-green-500/10",
  },
];

const openTo = [
  { icon: "💼", text: "Full-time Software Developer roles" },
  { icon: "🤖", text: "AI / ML product development" },
  { icon: "🔧", text: "Backend & API architecture consulting" },
  { icon: "🌐", text: "Full-stack freelance projects" },
  { icon: "🚀", text: "Startup & early-stage product builds" },
  { icon: "🧑‍🏫", text: "Tech mentorship & team collaboration" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-b from-cyan-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Have a project in mind, an interesting role, or just want to say hello?
            My inbox is always open. I&apos;ll try to get back to you within 24 hours.
          </p>
        </div>

        {/* Open to Work badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          Open to Work — Available for full-time & freelance opportunities
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Why Work With Me + Availability */}
          <div className="space-y-6">
            {/* Why Work With Me */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">Why Work With Me?</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "⚡",
                    title: "Ship Fast, Ship Right",
                    desc: "4+ years of delivering production-grade systems on time. I write clean, maintainable code that scales — not just code that works today.",
                    color: "border-cyan-500/30 bg-cyan-500/5",
                  },
                  {
                    icon: "🤖",
                    title: "AI-Native Developer",
                    desc: "Hands-on experience building RAG pipelines, integrating OpenAI & Gemini APIs, and shipping real AI automation products into production.",
                    color: "border-blue-500/30 bg-blue-500/5",
                  },
                  {
                    icon: "🔗",
                    title: "Full-Stack Ownership",
                    desc: "From database schema design to React UI — I own the full lifecycle. No handoff gaps, no silos. One developer who sees the whole picture.",
                    color: "border-purple-500/30 bg-purple-500/5",
                  },
                  {
                    icon: "🛠️",
                    title: "DevOps Ready",
                    desc: "Docker, AWS EC2/S3, CI/CD pipelines — I don't just write code, I deploy and maintain it. Your infra is in good hands.",
                    color: "border-green-500/30 bg-green-500/5",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-xl border ${item.color} transition-all duration-200`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability info */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <h4 className="text-white font-semibold text-sm mb-3">⏰ Availability</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Response Time</span>
                  <span className="text-green-400 font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time Zone</span>
                  <span className="text-slate-300">IST (UTC+5:30)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Work Type</span>
                  <span className="text-slate-300">Remote / Hybrid / On-site</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Notice Period</span>
                  <span className="text-slate-300">Negotiable</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quick Connect + Open To */}
          <div className="space-y-6">
            {/* Quick Connect cards */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Connect</h3>
              <div className="space-y-3">
                {quickConnect.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border ${item.border} ${item.bg} transition-all duration-200 group`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className={`text-xs mt-0.5 truncate ${item.color}`}>{item.value}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <svg className={`w-4 h-4 ${item.color} group-hover:translate-x-1 transition-transform duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* What I'm Open To */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="text-lg">🎯</span> What I&apos;m Open To
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {openTo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
