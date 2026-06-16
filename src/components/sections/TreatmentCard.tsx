"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Treatment } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

interface Props {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: Props) {
  return (
    <motion.article variants={fadeUp} className="group flex flex-col md:flex-row gap-6 border-b border-stone-200 pb-10">
      <div className="relative w-full md:w-56 lg:w-64 aspect-[4/3] md:aspect-[1/1] flex-shrink-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={treatment.imageSrc}
            alt={treatment.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 256px"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <SectionLabel>{treatment.category}</SectionLabel>
        <h3 className="font-serif text-heading-lg font-light text-stone-800">{treatment.name}</h3>
        <p className="font-sans text-sm text-stone-500 leading-relaxed">{treatment.description}</p>
        <Tag className="self-start">{treatment.duration}</Tag>
      </div>
    </motion.article>
  );
}
