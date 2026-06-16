"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerFast, lineReveal, fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  headline: string;
  subheadline?: string;
  label?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  variant?: "home" | "inner";
}

export default function HeroSection({
  headline,
  subheadline,
  label,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  variant = "inner",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const words = headline.split(" ");

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${variant === "home" ? "h-screen min-h-[640px]" : "h-[65vh] min-h-[480px]"}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-bark" />
      <div className="absolute inset-0 bg-forest-900/30" />

      <div
        className={`absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 ${
          variant === "home" ? "pb-20 md:pb-28" : "pb-16 md:pb-20"
        }`}
      >
        <div className="max-w-wide mx-auto w-full">
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <SectionLabel light>{label}</SectionLabel>
            </motion.div>
          )}

          <motion.h1
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className={`font-serif font-light text-ivory-100 mb-6 ${
              variant === "home" ? "text-display-xl" : "text-display-lg"
            }`}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span className="inline-block" variants={lineReveal}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {subheadline && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="font-sans text-lg md:text-xl text-ivory-200/80 max-w-2xl mb-8 leading-relaxed"
            >
              {subheadline}
            </motion.p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {ctaLabel && ctaHref && (
                <Button href={ctaHref} variant="filled">{ctaLabel}</Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="ghost">{secondaryCtaLabel}</Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {variant === "home" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-label-sm uppercase tracking-[0.2em] text-ivory-100/50">Discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-ivory-100/50 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
