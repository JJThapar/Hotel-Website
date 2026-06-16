"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { DiningVenue } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

interface Props {
  venue: DiningVenue;
}

export default function DiningVenueCard({ venue }: Props) {
  return (
    <motion.article variants={fadeUp} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={venue.imageSrc}
            alt={venue.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/40 transition-colors duration-600" />
      </div>

      <div className="pt-6 pb-8 flex flex-col gap-3">
        <SectionLabel>{venue.concept}</SectionLabel>
        <h3 className="font-serif text-heading-lg font-light text-stone-800">{venue.name}</h3>
        <p className="font-sans text-sm text-stone-500 leading-relaxed line-clamp-3">{venue.description}</p>
        <div className="flex gap-3 flex-wrap mt-1">
          {venue.seats && <Tag>{venue.seats} seats</Tag>}
          <Tag>{venue.reservationRequired ? "Reservation required" : "Walk-ins welcome"}</Tag>
        </div>
      </div>
    </motion.article>
  );
}
