import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConceptIntro from "@/components/sections/ConceptIntro";
import TimelineSection from "@/components/sections/TimelineSection";
import SustainabilityPillars from "@/components/sections/SustainabilityPillars";
import FullBleedImage from "@/components/sections/FullBleedImage";
import QuoteBlock from "@/components/sections/QuoteBlock";
import ContactBanner from "@/components/sections/ContactBanner";
import { TIMELINE, SUSTAINABILITY_PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About & The Concept",
  description: "The story of Vita — one tree, one vision, and a hotel unlike anything the world has seen.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        variant="inner"
        label="About Vita"
        headline="One tree. One vision. One hotel."
        subheadline="The story of how an architect's sketch in a Borneo forest became the world's most extraordinary address."
        imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85"
        imageAlt="Aerial view of Vita's tree-shaped structure rising above the Singapore skyline"
      />

      <ConceptIntro
        label="The Architecture"
        headline="Inspired by the Strangler Fig."
        paragraphs={[
          "In 2015, architect Lena Koh was walking through a rainforest in Borneo when she witnessed a Strangler Fig — a tree that begins its life as a seed in another tree's canopy and slowly, gracefully, grows downward until its roots touch earth. The host and the visitor become inseparable. A new kind of living thing is born.",
          "That is Vita. The building is the tree. The tree is the building. There is no skin between architecture and nature — they have grown together into something neither could have become alone.",
          "Designed with sustainable engineering firm BioForm Studio, Vita's structure uses 4,200 tonnes of cross-laminated timber sourced from certified forests, recycled marine steel, and a root-to-canopy living wall system that supports over 87 plant species.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&q=80"
        imageAlt="Architect's sketch of the Vita tree structure overlaid with the completed building"
        imageRight
      />

      <TimelineSection
        label="Our History"
        headline="How a tree is grown."
        entries={TIMELINE}
      />

      <SustainabilityPillars
        label="Sustainability"
        headline="We answer to the earth."
        pillars={SUSTAINABILITY_PILLARS}
      />

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=85"
        imageAlt="Singapore skyline at dusk with Vita's distinctive tree silhouette visible"
        label="Singapore"
        headline="A city that grows.\nA hotel that lives."
        subtext="Singapore has always understood that the urban and the natural are not opposites — they are partners. Vita is our contribution to that vision."
        alignment="center"
        overlayStrength="heavy"
      />

      <QuoteBlock
        quote="We did not build on the land. We grew from it."
        attribution="Lena Koh, Founder & Architect"
        dark
      />

      <ContactBanner
        headline="Come and See"
        subtext="Learn more about our sustainability initiatives or plan your visit to Vita Singapore."
        primaryLabel="Reserve Your Stay"
        primaryHref="/rooms"
        secondaryLabel="Read Our Impact Report"
        secondaryHref="mailto:stay@vitasingapore.com"
      />
    </>
  );
}
