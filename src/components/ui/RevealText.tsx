"use client";

import { motion } from "framer-motion";
import { lineReveal, staggerFast, viewportOptions } from "@/lib/animations";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: string;
  className?: string;
  delay?: number;
}

export default function RevealText({ as: Tag = "h2", children, className = "", delay = 0 }: Props) {
  const lines = children.split("\n");

  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              variants={lineReveal}
              custom={i}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
