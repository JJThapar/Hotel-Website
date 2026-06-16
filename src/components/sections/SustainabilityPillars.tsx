"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOptions } from "@/lib/animations";
import type { SustainabilityPillar } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  label?: string;
  headline?: string;
  pillars: SustainabilityPillar[];
}

export default function SustainabilityPillars({ label, headline, pillars }: Props) {
  return (
    <section className="py-24 md:py-36 bg-forest-900">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        {(label || headline) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-16 text-center"
          >
            {label && <SectionLabel light className="mb-4 block">{label}</SectionLabel>}
            {headline && (
              <h2 className="font-serif text-heading-xl font-light text-ivory-100 italic">{headline}</h2>
            )}
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory-100/10"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              className="bg-forest-900 p-10 flex flex-col gap-6 hover:bg-forest-800 transition-colors duration-600"
            >
              <span className="text-gold-400 text-3xl">{pillar.icon}</span>
              <h3 className="font-serif text-xl font-light text-ivory-100">{pillar.title}</h3>
              <p className="font-sans text-sm text-ivory-200/60 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
