"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOptions } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type Alignment = "left" | "center" | "right";
type Overlay = "light" | "medium" | "heavy";

interface Props {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subtext?: string;
  label?: string;
  ctaLabel?: string;
  ctaHref?: string;
  alignment?: Alignment;
  overlayStrength?: Overlay;
  minHeight?: string;
}

const overlayMap: Record<Overlay, string> = {
  light:  "bg-forest-900/40",
  medium: "bg-forest-900/60",
  heavy:  "bg-forest-900/75",
};

const alignmentMap: Record<Alignment, string> = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
};

export default function FullBleedImage({
  imageSrc,
  imageAlt,
  headline,
  subtext,
  label,
  ctaLabel,
  ctaHref,
  alignment = "left",
  overlayStrength = "medium",
  minHeight = "min-h-[70vh]",
}: Props) {
  return (
    <section className={`relative overflow-hidden ${minHeight}`}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" />
      <div className={`absolute inset-0 ${overlayMap[overlayStrength]}`} />
      <div className="absolute inset-0 bg-gradient-bark" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className={`absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24 ${alignmentMap[alignment]}`}
      >
        <div className="max-w-2xl">
          {label && <SectionLabel light className="mb-4">{label}</SectionLabel>}
          <h2 className="font-serif font-light text-display-lg text-ivory-100 mb-4 italic">
            {headline}
          </h2>
          {subtext && (
            <p className="font-sans text-lg text-ivory-200/80 leading-relaxed mb-8">
              {subtext}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Button href={ctaHref} variant="ghost">{ctaLabel}</Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
