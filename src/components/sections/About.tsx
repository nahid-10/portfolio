"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionWrapper, {
  itemVariants,
} from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-cyan)] mb-3 opacity-70">01 — Introduction</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          A passionate engineer at the intersection of software quality and
          artificial intelligence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Profile Card */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6 flex flex-col items-center text-center gap-4 border-[rgba(100,255,218,0.15)] shadow-[0_0_40px_rgba(100,255,218,0.06)]" glowColor="cyan">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-[rgba(100,255,218,0.5)] ring-offset-4 ring-offset-[rgba(5,8,15,1)]">
              <Image
                src="/assets/profile.jpg"
                alt="Md Nahid Hossain"
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Md Nahid Hossain
              </h3>
              <p className="text-[var(--accent-cyan)] text-sm font-medium mt-1">
                SQA Engineer & AI Developer
              </p>
            </div>
            <div className="w-full border-t border-white/5 pt-4 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-[var(--text-muted)]">
                <MapPin size={14} className="text-[var(--accent-cyan)] shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5 text-[var(--text-muted)]">
                <Mail size={14} className="text-[var(--accent-cyan)] shrink-0" />
                <a
                  href="mailto:nahidhossainmd99@gmail.com"
                  className="hover:text-[var(--accent-cyan)] transition-colors truncate"
                >
                  nahidhossainmd99@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[var(--text-muted)]">
                <Phone size={14} className="text-[var(--accent-cyan)] shrink-0" />
                <a
                  href="tel:+8801704788032"
                  className="hover:text-[var(--accent-cyan)] transition-colors"
                >
                  +880 1704788032
                </a>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/nahid-10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-white/10 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[rgba(100,255,218,0.3)] transition-all text-xs font-medium"
              >
                <Github size={13} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mdnahidhossain26/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-white/10 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[rgba(100,255,218,0.3)] transition-all text-xs font-medium"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right: Bio */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-[var(--text-muted)] leading-relaxed">
            I&apos;m a Computer Science graduate from Comilla University with a
            strong foundation in software quality assurance and a growing
            expertise in AI-driven applications. I believe that{" "}
            <span className="text-[var(--text-primary)] font-medium">
              quality is not an act, it&apos;s a habit
            </span>{" "}
            — and I bring that philosophy to every line of code and test case I
            write.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            My work spans the full testing spectrum: from meticulous manual
            testing and API validation to automated end-to-end frameworks and
            performance benchmarking. I also apply Python and LLM tools to
            extract insights from data and build intelligent systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <GlassCard className="p-4 border-[rgba(100,255,218,0.12)]" hover glowColor="cyan">
              <h4 className="text-[var(--accent-cyan)] font-semibold text-sm mb-2">
                Passionate About
              </h4>
              <ul className="text-[var(--text-muted)] text-sm space-y-1.5">
                {[
                  "Systematic software quality",
                  "Defect detection & bug analysis",
                  "API validation & automation",
                  "AI/LLM applications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--accent-cyan)] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-4 border-[rgba(168,85,247,0.12)]" hover glowColor="purple">
              <h4 className="text-[var(--accent-purple)] font-semibold text-sm mb-2">
                Areas of Interest
              </h4>
              <ul className="text-[var(--text-muted)] text-sm space-y-1.5">
                {[
                  "Test case design & execution",
                  "Performance & load testing",
                  "Data analysis with Python",
                  "LangChain & vector search",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--accent-purple)] mt-0.5">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
