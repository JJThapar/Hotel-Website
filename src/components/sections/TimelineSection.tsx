"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, pathDraw, viewportOptions } from "@/lib/animations";
import type { TimelineEntry } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  label?: string;
  headline?: string;
  entries: TimelineEntry[];
}

export default function TimelineSection({ label, headline, entries }: Props) {
  return (
    <section className="py-24 md:py-36 bg-ivory-100">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        {(label || headline) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-16"
          >
            {label && <SectionLabel className="mb-4 block">{label}</SectionLabel>}
            {headline && <h2 className="font-serif text-heading-xl font-light text-stone-800 italic">{headline}</h2>}
          </motion.div>
        )}

        <div className="relative">
          <motion.svg
            className="absolute left-[3.25rem] md:left-1/2 top-0 bottom-0 w-px h-full hidden sm:block"
            viewBox="0 0 1 100"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            <motion.line
              x1="0.5" y1="0" x2="0.5" y2="100"
              stroke="#d4d4ce"
              strokeWidth="1"
              variants={pathDraw}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            />
          </motion.svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-16"
          >
            {entries.map((entry, i) => (
              <motion.div
                key={entry.year}
                variants={fadeUp}
                className={`relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}
              >
                <div className={`${i % 2 === 0 ? "sm:text-right" : ""}`}>
                  <span className="font-serif text-display-lg font-light text-gold-400/40 leading-none">
                    {entry.year}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="hidden sm:block absolute left-1/2 top-2 w-3 h-3 -translate-x-1/2 bg-gold-500 rounded-full ring-4 ring-ivory-100" />
                  <h3 className="font-serif text-heading-lg font-light text-stone-800">{entry.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
