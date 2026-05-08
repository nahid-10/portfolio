"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import SectionWrapper, {
  itemVariants,
} from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-purple)] mb-3 opacity-70">04 — Background</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          Academic foundation in Computer Science and Engineering.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu) => (
          <motion.div key={edu.institution} variants={itemVariants}>
            <GlassCard className="p-6 md:p-8" hover glowColor="purple">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.2)] flex items-center justify-center">
                    <GraduationCap size={26} className="text-[var(--accent-purple)]" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--accent-purple)] font-semibold text-sm mb-3">
                    {edu.institution} — {edu.department}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-5">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[var(--accent-cyan)]" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[var(--accent-cyan)]" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={14} className="text-[var(--accent-cyan)]" />
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                        Relevant Coursework
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2.5 py-1 rounded-md border border-[rgba(168,85,247,0.2)] bg-[rgba(168,85,247,0.06)] text-[var(--accent-purple)] font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
