import type { NavLink, Room, DiningVenue, Treatment, TimelineEntry, SustainabilityPillar } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining",         href: "/dining" },
  { label: "Wellness",       href: "/wellness" },
  { label: "About",          href: "/about" },
];

export const ROOMS: Room[] = [
  {
    id: "branch-suite-canopy",
    name: "The Canopy Branch Suite",
    category: "branch-suite",
    description: "Suspended within the living branches, each suite opens to a private terraced plunge pool framing the Singapore skyline.",
    priceFrom: 8500,
    currency: "SGD",
    size: "85–120 sqm",
    imageSrc: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80",
    imageAlt: "Canopy Branch Suite interior with natural wood and forest views",
    amenities: ["Private plunge pool", "Teak canopy bed", "Forest butler", "Rain shower"],
  },
  {
    id: "branch-suite-morning",
    name: "The Morning Branch Suite",
    category: "branch-suite",
    description: "East-facing suites wake you with dawn light filtering through a canopy of living ferns and orchids.",
    priceFrom: 9200,
    currency: "SGD",
    size: "95–110 sqm",
    imageSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
    imageAlt: "Morning Branch Suite with sunrise light and lush greenery",
    amenities: ["East-facing terrace", "Artisan breakfast ritual", "Soaking tub", "Living plant wall"],
  },
  {
    id: "branch-suite-evening",
    name: "The Dusk Branch Suite",
    category: "branch-suite",
    description: "Designed for sunset immersion, the west-facing terrace transforms the sky into a private theatre each evening.",
    priceFrom: 9800,
    currency: "SGD",
    size: "110–125 sqm",
    imageSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80",
    imageAlt: "Dusk Branch Suite with sunset views from a private terrace",
    amenities: ["Sunset terrace", "Champagne ritual", "Double soaking tub", "Fire feature"],
  },
  {
    id: "canopy-villa-one",
    name: "The Grand Canopy Villa",
    category: "canopy-villa",
    description: "A two-storey sanctuary woven into the upper branches. Your private infinity pool appears to pour into the Singapore skyline.",
    priceFrom: 22000,
    currency: "SGD",
    size: "220–280 sqm",
    imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    imageAlt: "Grand Canopy Villa with private infinity pool above the Singapore skyline",
    amenities: ["Infinity pool", "Dedicated butler", "Private chef", "Cinema room", "Yoga pavilion"],
    featured: true,
  },
  {
    id: "canopy-villa-sky",
    name: "The Sky Canopy Villa",
    category: "canopy-villa",
    description: "The highest inhabited branch in the tree. 180-degree panoramic views, an outdoor steam pavilion and a private helipad.",
    priceFrom: 32000,
    currency: "SGD",
    size: "340–380 sqm",
    imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80",
    imageAlt: "Sky Canopy Villa with panoramic views and outdoor pavilion",
    amenities: ["Helipad", "Steam pavilion", "Two butlers", "Michelin-starred private dining", "Art collection"],
    featured: true,
  },
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "the-root",
    name: "The Root",
    concept: "Ground-Level Fine Dining",
    description: "At the base of the tree, a 32-seat dining room where twelve courses trace the biodiversity of Singapore's forests. Every ingredient is sourced within 150km.",
    imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    imageAlt: "The Root restaurant interior with organic stone and candlelight",
    seats: 32,
    reservationRequired: true,
  },
  {
    id: "canopy-bar",
    name: "Canopy Bar",
    concept: "Suspended Cocktail Lounge",
    description: "Floating at 38 floors, the Canopy Bar serves botanical cocktails distilled from the hotel's living roof garden as Singapore unfolds below you.",
    imageSrc: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=900&q=80",
    imageAlt: "Canopy Bar with floor-to-ceiling views of the Singapore skyline",
    seats: 48,
    reservationRequired: false,
  },
  {
    id: "treehouse-table",
    name: "The Treehouse Table",
    concept: "Private Dining Pod",
    description: "Enclosed within a glass and timber pod in the upper canopy. A private chef, a curated menu built around your preferences, and a sky full of stars.",
    imageSrc: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80",
    imageAlt: "Intimate Treehouse Table dining pod with candlelight and skyline views",
    seats: 8,
    reservationRequired: true,
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: "forest-bathing",
    name: "Forest Bathing Journey",
    category: "Immersive Experience",
    duration: "90 min",
    description: "A guided sensory walk through the hotel's living root system and vertical garden — drawing from Japanese shinrin-yoku practice to reduce cortisol and restore presence.",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
    imageAlt: "Misty forest path through the hotel's living root garden",
  },
  {
    id: "bark-resin-ritual",
    name: "Bark & Resin Ritual",
    category: "Signature Treatment",
    duration: "120 min",
    description: "A full-body ceremony using locally harvested resins, warming bark extracts, and cold-pressed botanical oils. Grounds the nervous system and deeply hydrates.",
    imageSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80",
    imageAlt: "Treatment table surrounded by botanical elements and warm candlelight",
  },
  {
    id: "canopy-pool-meditation",
    name: "Canopy Pool Meditation",
    category: "Mindfulness & Water",
    duration: "60 min",
    description: "Sunrise hydrotherapy in our treetop thermal pool. A guided meditation set to the soundscape of morning birdsong while mist rises through the canopy.",
    imageSrc: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80",
    imageAlt: "Infinity thermal pool at treetop level with mist and morning light",
  },
  {
    id: "bespoke-program",
    name: "Vita Bespoke Programme",
    category: "Immersive Retreat",
    duration: "3 or 7 nights",
    description: "A fully personalised wellness journey curated by our resident nutritionist, movement coach and forest therapist. Designed around your health intentions — not a generic itinerary.",
    imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80",
    imageAlt: "Private wellness consultation in a serene natural setting",
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2015",
    title: "The Vision",
    description: "Architect Lena Koh sketches the first concept after witnessing a Strangler Fig consume and transform a host tree in Borneo. A living building that is itself an ecosystem.",
  },
  {
    year: "2018",
    title: "Ground Broken",
    description: "BioForm Studio begins engineering the tree's structural skeleton — 4,200 tonnes of sustainably sourced cross-laminated timber and recycled marine steel.",
  },
  {
    year: "2021",
    title: "The Canopy Rises",
    description: "The final branch structure is complete. 42,000 living plants are woven into the architecture. The building begins to breathe.",
  },
  {
    year: "2023",
    title: "Vita Opens",
    description: "The world's first living-tree hotel welcomes its first guests. Singapore gains its most extraordinary address.",
  },
];

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    id: "carbon",
    icon: "◯",
    title: "Zero Carbon by 2030",
    description: "Our energy comes entirely from photovoltaic canopy panels and geothermal exchange. We've been carbon-negative since 2024.",
  },
  {
    id: "ecosystem",
    icon: "◈",
    title: "Living Roof Ecosystem",
    description: "11,000 sqm of living roof supports 87 plant species and provides habitat for 24 documented bird species — a sanctuary above the city.",
  },
  {
    id: "water",
    icon: "◇",
    title: "Closed-Loop Water",
    description: "Rainwater harvesting and greywater recycling mean we return more clean water to Singapore's watershed than we consume.",
  },
  {
    id: "community",
    icon: "◻",
    title: "Community Forestry",
    description: "For every night stayed, we plant five native trees in Singapore's Southern Ridges and support two local conservation ranger positions.",
  },
];
