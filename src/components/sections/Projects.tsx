"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import SectionWrapper, {
  itemVariants,
} from "@/components/ui/SectionWrapper";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-cyan)] mb-3 opacity-70">03 — Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          A selection of testing, data, and AI projects demonstrating
          end-to-end problem-solving.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group"
          >
            <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_8px_40px_rgba(100,255,218,0.15)] hover:border-[rgba(100,255,218,0.30)] hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[var(--bg-secondary)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="font-bold text-[var(--text-primary)] text-lg leading-snug">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[rgba(100,255,218,0.06)] text-[var(--accent-cyan)] border border-[rgba(100,255,218,0.15)] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors group/link"
                  >
                    <Github size={15} />
                    <span>View on GitHub</span>
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
