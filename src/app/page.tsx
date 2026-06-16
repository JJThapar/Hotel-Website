import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConceptIntro from "@/components/sections/ConceptIntro";
import HighlightGrid from "@/components/sections/HighlightGrid";
import FullBleedImage from "@/components/sections/FullBleedImage";
import QuoteBlock from "@/components/sections/QuoteBlock";
import ContactBanner from "@/components/sections/ContactBanner";
import { ROOMS, DINING_VENUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vita Singapore — A Living Tree Hotel",
  description: "Singapore's most extraordinary address. A hyper-luxury hotel built within a living tree.",
};

export default function HomePage() {
  const highlightRooms = ROOMS.slice(0, 3);
  const highlightDining = DINING_VENUES;

  return (
    <>
      <HeroSection
        variant="home"
        headline="Above the Ground. Among the Leaves."
        subheadline="Singapore's most extraordinary address — where luxury and the living world become one."
        ctaLabel="Explore Vita"
        ctaHref="/rooms"
        secondaryCtaLabel="Our Story"
        secondaryCtaHref="/about"
        imageSrc="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=85"
        imageAlt="Aerial view of a tree-shaped luxury hotel at golden hour surrounded by Singapore's skyline"
      />

      <ConceptIntro
        label="A Living Architecture"
        headline="We did not build on the land.\nWe grew from it."
        paragraphs={[
          "Vita is the world's first hotel conceived as a living tree. The trunk rises through the lobby — a vast atrium of ancient timber and filtered light. The branches extend outward and upward, each one home to suites and villas that open onto private terraces among the living canopy.",
          "Every material, every system, every experience has been designed in harmony with Singapore's extraordinary ecosystem. We are not a building that happens to be sustainable. We are a living part of the city's natural world.",
          "Here, luxury and nature are not in conflict. They are inseparable.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=900&q=80"
        imageAlt="The soaring atrium lobby inside the trunk of Vita hotel"
        imageRight
      />

      <HighlightGrid
        type="rooms"
        label="Rooms & Suites"
        headline="Life among the branches."
        items={highlightRooms}
      />

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=85"
        imageAlt="Canopy villa at night with city lights below and stars above"
        label="Canopy Villas"
        headline="Every room,\na world unto itself."
        subtext="From 220 to 800 square metres. Private pools suspended above Singapore. A butler who knows your name before you arrive."
        ctaLabel="View All Rooms"
        ctaHref="/rooms"
        alignment="left"
        overlayStrength="heavy"
      />

      <QuoteBlock
        quote="Vita does not feel like a hotel. It feels like waking up inside a dream of what a hotel could be."
        attribution="A guest"
        dark={false}
      />

      <HighlightGrid
        type="dining"
        label="Dining"
        headline="Feed the soul, root to canopy."
        items={highlightDining}
      />

      <ContactBanner
        headline="Begin Your Stay"
        subtext="Our reservations team is available around the clock to craft your perfect visit to Vita."
        primaryLabel="Reserve a Room"
        primaryHref="/rooms"
        secondaryLabel="Contact Our Concierge"
        secondaryHref="mailto:stay@vitasingapore.com"
      />
    </>
  );
}
