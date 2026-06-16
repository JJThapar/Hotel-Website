"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Room } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

const CATEGORY_LABELS: Record<Room["category"], string> = {
  "branch-suite": "Branch Suite",
  "canopy-villa": "Canopy Villa",
  "trunk-penthouse": "Trunk Penthouse",
};

interface Props {
  room: Room;
}

export default function RoomCard({ room }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      className="group flex flex-col"
    >
      <div className={`relative overflow-hidden ${room.featured ? "aspect-[16/9]" : "aspect-[3/4]"}`}>
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={room.imageSrc}
            alt={room.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/40 transition-colors duration-600" />
        {room.featured && (
          <div className="absolute top-4 left-4">
            <span className="font-sans text-label-sm uppercase tracking-[0.15em] bg-gold-500 text-ivory-100 px-3 py-1">
              Signature
            </span>
          </div>
        )}
      </div>

      <div className="pt-6 pb-8 flex flex-col gap-3 flex-1">
        <SectionLabel className="text-gold-500">{CATEGORY_LABELS[room.category]}</SectionLabel>
        <h3 className="font-serif text-heading-lg font-light text-stone-800 leading-tight">
          {room.name}
        </h3>
        <p className="font-sans text-sm text-stone-500 leading-relaxed line-clamp-2">
          {room.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <Tag>{room.size}</Tag>
          <Tag>From SGD {room.priceFrom.toLocaleString()}/night</Tag>
        </div>
        <Link
          href="/rooms"
          className="mt-3 font-sans text-label-sm uppercase tracking-[0.15em] text-gold-500 hover:text-gold-600 transition-colors duration-400 group/link flex items-center gap-2"
        >
          Discover
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
