import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import Divider from "@/components/ui/Divider";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-ivory-200">
      <div className="max-w-wide mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <p className="font-serif text-3xl font-light tracking-[0.3em] text-ivory-100 uppercase mb-4">Vita</p>
            <p className="font-sans text-label-sm uppercase tracking-[0.15em] text-ivory-300/60 mb-6">
              Singapore&apos;s living tree hotel
            </p>
            <p className="font-sans text-sm text-ivory-200/50 leading-relaxed">
              1.3521° N, 103.8198° E
            </p>
          </div>

          <div>
            <p className="font-sans text-label-sm uppercase tracking-[0.18em] text-gold-500 mb-6">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ivory-200/70 hover:text-gold-400 transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-label-sm uppercase tracking-[0.18em] text-gold-500 mb-6">Contact</p>
            <ul className="flex flex-col gap-3 font-sans text-sm text-ivory-200/70">
              <li>1 Arboris Boulevard</li>
              <li>Singapore 018999</li>
              <li className="pt-2">
                <a href="tel:+6561234567" className="hover:text-gold-400 transition-colors duration-400">
                  +65 6123 4567
                </a>
              </li>
              <li>
                <a href="mailto:stay@vitasingapore.com" className="hover:text-gold-400 transition-colors duration-400">
                  stay@vitasingapore.com
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-gold-500/20 p-8 flex flex-col gap-4">
            <p className="font-serif text-xl font-light text-ivory-100">Reserve your stay</p>
            <p className="font-sans text-sm text-ivory-200/60 leading-relaxed">
              Our reservations team is available 24 hours a day.
            </p>
            <Link
              href="/rooms"
              className="mt-auto inline-block font-sans text-label-sm uppercase tracking-[0.15em] text-gold-400 border border-gold-500/40 px-6 py-3 hover:bg-gold-500/10 transition-all duration-400 text-center"
            >
              View Rooms
            </Link>
          </div>
        </div>

        <Divider light className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-label-sm text-ivory-200/40 uppercase tracking-[0.12em]">
          <p>© {new Date().getFullYear()} Vita Singapore. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-ivory-200/70 transition-colors duration-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-ivory-200/70 transition-colors duration-400">Sustainability Report</Link>
            <Link href="#" className="hover:text-ivory-200/70 transition-colors duration-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
