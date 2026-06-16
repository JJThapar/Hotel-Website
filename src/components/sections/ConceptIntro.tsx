"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, viewportOptions } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  label?: string;
  headline: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
}

export default function ConceptIntro({
  label,
  headline,
  paragraphs,
  imageSrc,
  imageAlt,
  imageRight = false,
}: Props) {
  return (
    <section className="py-24 md:py-36 bg-ivory-100">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${imageRight ? "" : "lg:[&>*:first-child]:order-2"}`}>
          <motion.div
            variants={imageRight ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>

          <motion.div
            variants={imageRight ? slideInRight : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-6"
          >
            {label && <SectionLabel>{label}</SectionLabel>}
            <h2 className="font-serif font-light text-heading-xl text-stone-800 italic">{headline}</h2>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-base md:text-lg text-stone-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
