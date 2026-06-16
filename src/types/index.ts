export interface Room {
  id: string;
  name: string;
  category: "branch-suite" | "canopy-villa" | "trunk-penthouse";
  description: string;
  priceFrom: number;
  currency: "SGD";
  size: string;
  imageSrc: string;
  imageAlt: string;
  amenities: string[];
  featured?: boolean;
}

export interface DiningVenue {
  id: string;
  name: string;
  concept: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  seats?: number;
  reservationRequired: boolean;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface SustainabilityPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}
