"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-muted)] text-sm">
          © 2025 Md Nahid Hossain — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/nahid-10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mdnahidhossain26/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:nahidhossainmd99@gmail.com"
            aria-label="Email"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
