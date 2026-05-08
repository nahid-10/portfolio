"use client";

import { motion } from "framer-motion";
import {
  TestTube,
  Wrench,
  Code,
  Globe,
  Brain,
  Database,
  LucideIcon,
} from "lucide-react";
import SectionWrapper, {
  itemVariants,
} from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  TestTube,
  Wrench,
  Code,
  Globe,
  Brain,
  Database,
};

const tagColors = [
  "bg-[rgba(100,255,218,0.08)] text-[var(--accent-cyan)] border-[rgba(100,255,218,0.2)]",
  "bg-[rgba(168,85,247,0.08)] text-[var(--accent-purple)] border-[rgba(168,85,247,0.2)]",
  "bg-[rgba(59,130,246,0.08)] text-[var(--accent-blue)] border-[rgba(59,130,246,0.2)]",
  "bg-[rgba(100,255,218,0.06)] text-[var(--accent-cyan)] border-[rgba(100,255,218,0.15)]",
  "bg-[rgba(168,85,247,0.06)] text-[var(--accent-purple)] border-[rgba(168,85,247,0.15)]",
  "bg-[rgba(59,130,246,0.06)] text-[var(--accent-blue)] border-[rgba(59,130,246,0.15)]",
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-purple)] mb-3 opacity-70">02 — Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          A comprehensive toolkit for building quality software and intelligent
          systems.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, catIdx) => {
          const Icon = iconMap[cat.icon] || Code;
          const colorClass = tagColors[catIdx % tagColors.length];
          return (
            <motion.div key={cat.category} variants={itemVariants}>
              <GlassCard
                className="p-5 h-full"
                hover
                glowColor={
                  catIdx % 3 === 0
                    ? "cyan"
                    : catIdx % 3 === 1
                      ? "purple"
                      : "blue"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${colorClass.split(" ").slice(0, 2).join(" ")} bg-opacity-10`}
                    style={{
                      background:
                        catIdx % 3 === 0
                          ? "rgba(100,255,218,0.1)"
                          : catIdx % 3 === 1
                            ? "rgba(168,85,247,0.1)"
                            : "rgba(59,130,246,0.1)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color:
                          catIdx % 3 === 0
                            ? "var(--accent-cyan)"
                            : catIdx % 3 === 1
                              ? "var(--accent-purple)"
                              : "var(--accent-blue)",
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item.name}
                      className={`text-xs px-2.5 py-1 rounded-md border font-medium cursor-default ${colorClass}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
