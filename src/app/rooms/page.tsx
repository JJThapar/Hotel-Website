import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HighlightGrid from "@/components/sections/HighlightGrid";
import FullBleedImage from "@/components/sections/FullBleedImage";
import ContactBanner from "@/components/sections/ContactBanner";
import { ROOMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Branch Suites, Canopy Villas and the Trunk Penthouse — extraordinary rooms within the living tree.",
};

export default function RoomsPage() {
  const branchSuites = ROOMS.filter((r) => r.category === "branch-suite");
  const canopyVillas = ROOMS.filter((r) => r.category === "canopy-villa");

  return (
    <>
      <HeroSection
        variant="inner"
        label="Rooms & Suites"
        headline="Life among the branches."
        subheadline="Each room is a private sanctuary woven into the living architecture of Vita's tree."
        imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=85"
        imageAlt="Luxurious branch suite interior with floor-to-ceiling windows and forest views"
      />

      <HighlightGrid
        type="rooms"
        label="Branch Suites"
        headline="Suspended in the canopy."
        items={branchSuites}
      />

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&q=85"
        imageAlt="Grand Canopy Villa infinity pool appearing to merge with the Singapore skyline"
        label="Canopy Villas"
        headline="Above the city.\nBeyond all expectation."
        subtext="Two-storey sanctuaries with private infinity pools that pour into the Singapore skyline. Dedicated butler service. A chef who cooks only for you."
        alignment="left"
        overlayStrength="heavy"
      />

      <HighlightGrid
        type="rooms"
        label="Canopy Villas"
        headline="The heights of luxury."
        items={canopyVillas}
      />

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1920&q=85"
        imageAlt="The Trunk Penthouse panoramic living room with 180-degree views"
        label="The Trunk Penthouse"
        headline="800 square metres.\nOne address in Singapore."
        subtext="Across two floors of the upper trunk. A helipad. A Michelin-starred private kitchen. A level of service that has no category. From SGD 95,000 per night."
        ctaLabel="Enquire About the Penthouse"
        ctaHref="mailto:stay@vitasingapore.com"
        alignment="center"
        overlayStrength="heavy"
      />

      <ContactBanner
        headline="Reserve Your Suite"
        subtext="Our reservations team will guide you to the room that is right for you."
        primaryLabel="Contact Reservations"
        primaryHref="mailto:stay@vitasingapore.com"
        secondaryLabel="Call Us"
        secondaryHref="tel:+6561234567"
      />
    </>
  );
}
