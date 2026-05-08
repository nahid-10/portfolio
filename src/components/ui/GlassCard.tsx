"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "cyan" | "purple" | "blue" | "none";
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  glowColor = "none",
}: GlassCardProps) {
  const glowStyles = {
    cyan: "hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] hover:border-[rgba(100,255,218,0.3)]",
    purple:
      "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-[rgba(168,85,247,0.3)]",
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-[rgba(59,130,246,0.3)]",
    none: "",
  };

  return (
    <motion.div
      className={`glass-card transition-all duration-300 ${hover ? glowStyles[glowColor] : ""} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
