import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConceptIntro from "@/components/sections/ConceptIntro";
import TreatmentCard from "@/components/sections/TreatmentCard";
import FullBleedImage from "@/components/sections/FullBleedImage";
import ContactBanner from "@/components/sections/ContactBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import { TREATMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wellness & Spa",
  description: "Nature-based healing at Vita Singapore — forest bathing, botanical rituals, and bespoke wellness programmes.",
};

export default function WellnessPage() {
  return (
    <>
      <HeroSection
        variant="inner"
        label="Wellness & Spa"
        headline="Restore within the tree."
        subheadline="The forest has always known how to heal. We have simply learned to listen to it."
        imageSrc="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=85"
        imageAlt="Serene treetop thermal pool at dawn with mist rising through the canopy"
      />

      <ConceptIntro
        label="The Philosophy"
        headline="The forest as healer."
        paragraphs={[
          "Vita's approach to wellness is rooted in biophilic science — the proven connection between the natural world and human health. We draw from Japanese shinrin-yoku (forest bathing), Ayurvedic botanical tradition, and Singapore's own rich heritage of plant medicine.",
          "Our treatments do not separate body and mind. They do not separate you from nature. They return you to it — gently, deliberately, profoundly.",
          "Every programme is designed with one outcome in mind: that you leave Vita more alive than when you arrived.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&q=80"
        imageAlt="Forest wellness treatment space with natural light and botanical elements"
        imageRight
      />

      <section className="py-24 md:py-36 bg-ivory-100">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="mb-12">
            <SectionLabel className="mb-4 block">Treatments & Experiences</SectionLabel>
            <h2 className="font-serif text-heading-xl font-light text-stone-800 italic">
              Every ritual, a homecoming.
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {TREATMENTS.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      <FullBleedImage
        imageSrc="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&q=85"
        imageAlt="Infinity thermal pool at canopy level with sunrise light and forest mist"
        label="Canopy Pool"
        headline="Sunrise at the top of the world."
        subtext="The treetop hydrotherapy pool opens at 6am for private morning sessions. The water is warm. The mist is cool. Singapore is still asleep below you."
        alignment="left"
        overlayStrength="heavy"
      />

      <ContactBanner
        headline="Book a Treatment"
        subtext="Our wellness team will build the right programme around your intentions. Every treatment is personalised."
        primaryLabel="Book a Treatment"
        primaryHref="mailto:wellness@vitasingapore.com"
        secondaryLabel="Enquire About Retreats"
        secondaryHref="mailto:wellness@vitasingapore.com"
      />
    </>
  );
}
