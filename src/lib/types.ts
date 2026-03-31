import type { LucideIcon } from "lucide-react";

/** A service card displayed on the home page */
export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
  image: string;
  imageAlt: string;
}

/** A highlight item in the benefits bar */
export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** A stat displayed in the stats section */
export interface Stat {
  value: string;
  label: string;
  icon?: LucideIcon;
}

/** A media item in the hero carousel */
export interface HeroMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

/** A detailed service on the services page */
export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  bg: string;
  borderColor: string;
  description: string;
  features: string[];
  highlight: string;
  images: { src: string; alt: string }[];
}

/** A company value displayed on the about page */
export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  color: string;
}

/** A timeline entry */
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

/** Contact info card */
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  subtitle: string;
}

/** Driver registration form data */
export interface DriverFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  licenceType: string;
  yearsExperience: string;
  vehicleType: string;
  hasDBS: string;
  dbsNumber: string;
  availability: string;
  hasSENDTraining: boolean;
  hasSafeguardingTraining: boolean;
  hasFirstAid: boolean;
  hasManualHandling: boolean;
  hasPATS: boolean;
  previousEmployer: string;
  whyJoin: string;
  agreeToCriminalCheck: boolean;
  agreeToTerms: boolean;
}
