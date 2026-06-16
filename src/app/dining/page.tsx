import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HighlightGrid from "@/components/sections/HighlightGrid";
import FullBleedImage from "@/components/sections/FullBleedImage";
import QuoteBlock from "@/components/sections/QuoteBlock";
import ConceptIntro from "@/components/sections/ConceptIntro";
import ContactBanner from "@/components/sections/ContactBanner";
import { DINING_VENUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dining",
  description: "The Root, Canopy Bar and the Treehouse Table — dining experiences rooted in Singapore's biodiversity.",
};

export default function DiningPage() {
  return (
    <>
      <HeroSection
        variant="inner"
        label="Dining"
        headline="Where the earth feeds the soul."
        subheadline="Three experiences. One philosophy — that the finest ingredients grow closest to home."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
        imageAlt="Elegant fine dining table set in The Root restaurant with candlelight and organic stone walls"
      />

      <ConceptIntro
        label="Our Philosophy"
        headline="Food is not a service here.\nIt is a ceremony."
        paragraphs={[
          "Every kitchen at Vita is guided by a single principle: honour the biodiversity of Singapore and the region around it. Our chefs work directly with forest farmers, fishermen, and seed keepers across Southeast Asia.",
          "No ingredient travels more than 150 kilometres to reach your plate. What grows locally, what grows seasonally, what grows sustainably — that is what we cook.",
          "The result is food that tastes like somewhere specific. Like Singapore. Like this tree. Like now.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
        imageAlt="Chef carefully plating a dish using local botanical ingredients"
      />

      <HighlightGrid
        type="dining"
        label="Our Venues"
        headline="From root to canopy."
        items={DINING_VENUES}
      />

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85"
        imageAlt="Treehouse Table private dining pod with candlelight and Singapore skyline visible through glass"
        label="The Treehouse Table"
        headline="Your own sky.\nYour own menu.\nYour own night."
        subtext="A private dining pod suspended in the upper canopy. Seats two to eight. Available by reservation, the menu built entirely around your preferences by our executive chef."
        ctaLabel="Reserve the Treehouse Table"
        ctaHref="mailto:stay@vitasingapore.com"
        alignment="center"
        overlayStrength="heavy"
      />

      <QuoteBlock
        quote="The twelve courses at The Root were not a meal. They were an argument — that Singapore's natural world is the most interesting kitchen on earth."
        attribution="A guest at The Root"
      />

      <ContactBanner
        headline="Reserve a Table"
        subtext="The Root and The Treehouse Table require advance reservation. The Canopy Bar welcomes walk-ins."
        primaryLabel="Reserve at The Root"
        primaryHref="mailto:dining@vitasingapore.com"
        secondaryLabel="Enquire About Private Dining"
        secondaryHref="mailto:dining@vitasingapore.com"
      />
    </>
  );
}
