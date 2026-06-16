"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOptions } from "@/lib/animations";
import Button from "@/components/ui/Button";

interface Props {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function ContactBanner({
  headline = "Begin Your Stay",
  subtext = "Our reservations team is available around the clock to craft your perfect visit.",
  primaryLabel = "Reserve a Room",
  primaryHref = "/rooms",
  secondaryLabel = "Contact Our Concierge",
  secondaryHref = "mailto:stay@vitasingapore.com",
}: Props) {
  return (
    <section className="bg-forest-800 py-20 md:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="max-w-wide mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div>
          <h2 className="font-serif text-heading-xl font-light text-ivory-100 mb-3">{headline}</h2>
          <p className="font-sans text-base text-ivory-200/70 max-w-md leading-relaxed">{subtext}</p>
        </div>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <Button href={primaryHref} variant="filled">{primaryLabel}</Button>
          <Button href={secondaryHref} variant="ghost">{secondaryLabel}</Button>
        </div>
      </motion.div>
    </section>
  );
}
