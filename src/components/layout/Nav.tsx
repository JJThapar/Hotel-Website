"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { navVariant, mobileMenuVariant, staggerContainer, fadeUp } from "@/lib/animations";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] flex items-center px-6 md:px-12"
      >
        <motion.div
          className="absolute inset-0 bg-forest-900/90 backdrop-blur-md"
          style={{ opacity: bgOpacity }}
        />

        <div className="relative z-10 flex items-center justify-between w-full max-w-wide mx-auto">
          <Link href="/" className="font-serif text-2xl font-light tracking-[0.3em] text-ivory-100 uppercase hover:text-gold-400 transition-colors duration-400">
            Vita
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-sans text-label-md uppercase tracking-[0.15em] transition-colors duration-400 ${
                      active ? "text-gold-400" : "text-ivory-200 hover:text-gold-300"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gold-400"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/rooms"
              className="font-sans text-label-md uppercase tracking-[0.15em] text-ivory-100 border border-gold-500/50 px-6 py-2.5 hover:border-gold-400 hover:text-gold-400 transition-all duration-400"
            >
              Reserve
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-ivory-100 origin-center transition-transform"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block w-6 h-px bg-ivory-100"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-ivory-100 origin-center transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-forest-900 flex flex-col items-center justify-center"
          >
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-heading-xl text-ivory-100 hover:text-gold-400 transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={fadeUp}>
                <Link
                  href="/rooms"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 font-sans text-label-md uppercase tracking-[0.18em] text-gold-400 border border-gold-500/50 px-10 py-4 hover:bg-gold-500/10 transition-all duration-400"
                >
                  Reserve a Room
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
