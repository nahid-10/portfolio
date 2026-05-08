"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Vignette over dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] pointer-events-none" />

      {/* Background gradient orbs — more vibrant */}
      <motion.div
        className="absolute top-1/4 -left-24 w-[480px] h-[480px] rounded-full opacity-35 blur-[100px]"
        style={{ background: "var(--accent-purple)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-24 w-[480px] h-[480px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "var(--accent-cyan)" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-15 blur-[90px]"
        style={{ background: "var(--accent-blue)" }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-cyan)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-cyan)]" />
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-cyan)] bg-[rgba(100,255,218,0.08)] px-4 py-1.5 rounded-full border border-[rgba(100,255,218,0.2)]">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-[1.1]"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Md Nahid Hossain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-[var(--text-muted)] font-light mb-4 max-w-xl mx-auto leading-relaxed"
        >
          AI-Driven Problem Solver
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-3 mb-10 text-sm font-medium"
        >
          {["SQA Engineering", "Data Analysis", "LLM Applications"].map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              <span className="text-[var(--text-primary)]">{tag}</span>
              {i < 2 && <span className="text-[var(--border)] select-none">·</span>}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-bold rounded-lg hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_28px_rgba(100,255,218,0.45)] text-sm tracking-wide"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto px-8 py-3.5 border border-[rgba(100,255,218,0.35)] text-[var(--accent-cyan)] font-semibold rounded-lg hover:bg-[rgba(100,255,218,0.07)] hover:border-[rgba(100,255,218,0.6)] transition-all duration-200 text-sm tracking-wide"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors flex flex-col items-center gap-1"
        onClick={() => handleScroll("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-50">scroll</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
