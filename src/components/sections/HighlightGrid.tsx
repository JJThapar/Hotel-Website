"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOptions } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import RoomCard from "@/components/sections/RoomCard";
import DiningVenueCard from "@/components/sections/DiningVenueCard";
import type { Room, DiningVenue } from "@/types";

interface RoomGridProps {
  type: "rooms";
  label?: string;
  headline?: string;
  items: Room[];
}

interface DiningGridProps {
  type: "dining";
  label?: string;
  headline?: string;
  items: DiningVenue[];
}

type Props = RoomGridProps | DiningGridProps;

export default function HighlightGrid({ type, label, headline, items }: Props) {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        {(label || headline) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-12 md:mb-16"
          >
            {label && <SectionLabel className="mb-4 block">{label}</SectionLabel>}
            {headline && (
              <h2 className="font-serif text-heading-xl font-light text-stone-800 italic">{headline}</h2>
            )}
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {type === "rooms"
            ? (items as Room[]).map((item) => <RoomCard key={item.id} room={item} />)
            : (items as DiningVenue[]).map((item) => <DiningVenueCard key={item.id} venue={item} />)
          }
        </motion.div>
      </div>
    </section>
  );
}
