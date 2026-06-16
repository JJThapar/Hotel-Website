"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOptions } from "@/lib/animations";
import Divider from "@/components/ui/Divider";

interface Props {
  quote: string;
  attribution?: string;
  dark?: boolean;
}

export default function QuoteBlock({ quote, attribution, dark }: Props) {
  return (
    <section className={`py-24 md:py-36 ${dark ? "bg-forest-900" : "bg-ivory-200"}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        <Divider light={dark} className="mb-12" />
        <blockquote>
          <p className={`font-serif text-heading-xl md:text-display-lg font-light italic leading-[1.3] ${dark ? "text-ivory-100" : "text-stone-800"}`}>
            &ldquo;{quote}&rdquo;
          </p>
          {attribution && (
            <footer className={`mt-8 font-sans text-label-md uppercase tracking-[0.15em] ${dark ? "text-gold-400" : "text-gold-500"}`}>
              — {attribution}
            </footer>
          )}
        </blockquote>
        <Divider light={dark} className="mt-12" />
      </motion.div>
    </section>
  );
}
