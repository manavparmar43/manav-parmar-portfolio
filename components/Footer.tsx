const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20">
                MP
              </div>
              <span className="font-semibold text-white">Manav Parmar</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Software Developer specializing in Backend Engineering, Full-Stack
              Development, and AI Product Development. Based in Ahmedabad, India.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:manavparmar43@gmail.com"
                className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                manavparmar43@gmail.com
              </a>
              <a
                href="tel:+919662771526"
                className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9662771526
              </a>
              <a
                href="https://linkedin.com/in/manav-parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                linkedin.com/in/manav-parmar
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/60 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Manav Parmar. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with
            <span className="text-slate-400 font-medium">Next.js 14</span>
            &amp;
            <span className="text-slate-400 font-medium">Tailwind CSS</span>
            — Deployed on
            <span className="text-slate-400 font-medium">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
