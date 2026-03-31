"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bus,
  Accessibility,
  Heart,
  Hospital,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Phone,
  UserCheck,
  Smile,
  PoundSterling,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CONTACT, IMAGES, VIDEOS, CAROUSEL_INTERVAL_MS, STAR_COUNT } from "@/lib/constants";
import type { ServiceCard, Highlight, HeroMedia } from "@/lib/types";

const services: ServiceCard[] = [
  {
    icon: Bus,
    title: "SEND School Transport",
    description:
      "Safe home-to-school transport for children with Special Educational Needs and Disabilities. Trained, consistent staff every journey.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    image: IMAGES.serviceSend,
    imageAlt: "Driver helping child board school transport",
  },
  {
    icon: Accessibility,
    title: "WAV Transportation",
    description:
      "Fully accessible vehicles with ramps, lifts, and restraints. Door-to-door support for wheelchair users.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    image: IMAGES.serviceWav,
    imageAlt: "Carer assisting wheelchair user onto accessible vehicle",
  },
  {
    icon: Heart,
    title: "Care Home & Elderly Transport",
    description:
      "Compassionate transport for elderly individuals and care home residents. Medical appointments and social outings.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    image: IMAGES.serviceCare,
    imageAlt: "Driver helping elderly lady from minibus",
  },
  {
    icon: Hospital,
    title: "Hospital Transfers",
    description:
      "Non-emergency patient transport, hospital discharges, and inter-facility transfers. Timely and comfortable.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    image: IMAGES.serviceHospital,
    imageAlt: "Patient being transported at hospital entrance",
  },
];


const commitments = [
  "Fully licensed, insured, and regularly maintained vehicles",
  "Enhanced DBS-checked drivers and passenger assistants",
  "Comprehensive safeguarding and child protection policies",
  "Staff trained in SEND awareness and vulnerable person support",
  "Risk assessments and individual transport plans",
  "Full compliance with local authority and NHS standards",
];

const heroMedia: HeroMedia[] = [
  { type: "image" as const, src: IMAGES.vanPrivateHire, alt: "Private hire minibus" },
  { type: "image" as const, src: IMAGES.wavRampYellow, alt: "WAV with wheelchair ramp" },
  { type: "image" as const, src: IMAGES.vanSilverSide, alt: "Silver minibus side view" },
  { type: "image" as const, src: IMAGES.wavRampAngle, alt: "WAV rear ramp access" },
  { type: "video" as const, src: VIDEOS.fleet1, poster: IMAGES.vanPrivateHire },
  { type: "video" as const, src: VIDEOS.fleet2, poster: IMAGES.wavRampYellow },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-white pt-36 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-content-primary leading-[1.15] tracking-tight">
                Connect Care{" "}
                <span className="text-gradient">— the safer way</span> to travel
              </h1>

              <p className="text-lg text-content-secondary leading-relaxed max-w-lg">
                Receive safe, reliable, and person-centred transportation from
                trained, compassionate staff in fully accessible vehicles.
              </p>

              <p className="text-content-tertiary leading-relaxed max-w-lg">
                Supporting SEND children, wheelchair users, elderly individuals,
                and healthcare providers with dignity and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/services"
                  className="px-8 py-3.5 bg-brand-gold text-content-primary font-semibold rounded-full hover:bg-brand-gold-dark transition-all btn-primary text-center"
                >
                  Find your service
                </Link>
                <a
                  href={CONTACT.phoneLink}
                  className="px-8 py-3.5 border border-edge rounded-full text-content-primary font-semibold hover:border-brand-gold hover:text-brand-gold-dark transition-all btn-outline text-center"
                >
                  Call us
                </a>
              </div>

              {/* Trust bar */}
              <div className="flex items-center gap-3 pt-4">
                <span className="font-semibold text-content-primary text-sm">Excellent</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: STAR_COUNT }, (_, i) => i).map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-success rounded-sm flex items-center justify-center"
                    >
                      <Star className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <span className="text-content-tertiary text-sm">
                  Trusted by <strong className="text-content-primary">500+ families</strong>
                </span>
              </div>
            </div>

            {/* Right — Media Gallery/Carousel */}
            <div className="relative animate-fade-in-up animate-delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[16/10]">
                {heroMedia.map((media, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <video
                        src={media.src}
                        poster={media.poster}
                        className="w-full h-full object-cover object-center"
                        muted
                        autoPlay={index === currentSlide}
                        loop
                        playsInline
                      />
                    )}
                  </div>
                ))}
                {/* Navigation arrows */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)
                  }
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
                >
                  <ChevronLeft className="w-5 h-5 text-content-primary" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % heroMedia.length)
                  }
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-content-primary" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroMedia.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentSlide ? "bg-white w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative shapes */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-trust/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
              Our Specialist Services
            </h2>
            <p className="text-content-tertiary max-w-2xl mx-auto text-lg">
              Comprehensive transportation solutions delivered with compassion,
              dignity, and the highest safety standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                href="/services"
                key={service.title}
                className="bg-surface-white rounded-2xl overflow-hidden border border-edge-light card-hover group"
              >
                {/* Service photo */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div
                    className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                  >
                    <service.icon className={`w-5 h-5 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-content-primary mb-2 group-hover:text-brand-gold-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-content-tertiary text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-trust text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-charcoal text-white font-semibold rounded-full hover:bg-brand-gray transition-all btn-primary"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Journeys Completed", icon: TrendingUp },
              { value: "99.8%", label: "On-Time Rate", icon: Clock },
              { value: "500+", label: "Families Served", icon: Users },
              { value: "100%", label: "DBS Checked Staff", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Commitment Section */}
      <section className="py-20 md:py-24 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
              Safety, Compliance &amp; Quality Assurance
            </h2>
            <p className="text-content-tertiary max-w-2xl mx-auto text-lg">
              Every journey is planned with precision and delivered with compassion.
              We meet the highest standards of safety, compliance, and care.
            </p>
          </div>

          {/* Photo-driven 2-col layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Left — Large hero photo */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-card group">
              <img
                src={IMAGES.driverHelpingPassenger}
                alt="Connect Care driver helping an elderly passenger"
                className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gold overlay badge */}
              <div className="absolute bottom-6 left-6 bg-brand-gold rounded-2xl px-6 py-4 shadow-card">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-brand-charcoal" />
                  <div>
                    <p className="font-bold text-brand-charcoal text-lg leading-tight">DBS Enhanced</p>
                    <p className="text-brand-charcoal/70 text-sm font-medium">All staff fully vetted &amp; checked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — 3 stacked trust rows */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Row 1 — Seatbelts / Safety Equipment */}
              <div className="flex gap-4 bg-surface rounded-2xl border border-edge-light overflow-hidden card-hover flex-1">
                <div className="w-36 shrink-0">
                  <img
                    src={IMAGES.seatbeltHarness}
                    alt="Vehicle seatbelts and safety harnesses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-5 pr-5">
                  <h3 className="font-bold text-content-primary mb-1">Safety Equipment</h3>
                  <p className="text-content-tertiary text-sm leading-snug">
                    Seatbelts, harnesses, ramps, and restraints — maintained and inspected daily.
                  </p>
                </div>
              </div>

              {/* Row 2 — Driver with ID */}
              <div className="flex gap-4 bg-surface rounded-2xl border border-edge-light overflow-hidden card-hover flex-1">
                <div className="w-36 shrink-0">
                  <img
                    src={IMAGES.driverWithId}
                    alt="Uniformed driver with ID badge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-5 pr-5">
                  <h3 className="font-bold text-content-primary mb-1">Vetted Staff</h3>
                  <p className="text-content-tertiary text-sm leading-snug">
                    Enhanced DBS-checked drivers wearing visible ID at all times.
                  </p>
                </div>
              </div>

              {/* Row 3 — Certificates */}
              <div className="flex gap-4 bg-surface rounded-2xl border border-edge-light overflow-hidden card-hover flex-1">
                <div className="w-36 shrink-0">
                  <img
                    src={IMAGES.certificates}
                    alt="FSB and Care Quality certificates"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-5 pr-5">
                  <h3 className="font-bold text-content-primary mb-1">Fully Compliant</h3>
                  <p className="text-content-tertiary text-sm leading-snug">
                    Accredited and compliant with NHS, local authority, and regulatory standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 bg-brand-charcoal rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "DBS Checked Staff" },
              { value: "4.9/5", label: "Family Rating" },
              { value: "Fully", label: "Licensed & Insured" },
              { value: "NHS", label: "Compliant Standards" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Commitment checklist */}
          <div className="mt-10 bg-trust-light rounded-2xl p-8 border border-trust/20">
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-content-secondary text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              Our Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
              Purpose-built accessible vehicles
            </h2>
            <p className="text-content-tertiary max-w-2xl mx-auto text-lg">
              Our fleet includes wheelchair accessible vehicles with ramps, lifts, and safety
              restraints — fully maintained, licensed, and insured.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: IMAGES.vanPrivateHire, alt: "Private hire minibus", label: "Private Hire Minibus" },
              { src: IMAGES.wavRampYellow, alt: "WAV with wheelchair ramp deployed", label: "Wheelchair Ramp Access" },
              { src: IMAGES.wavRampAngle, alt: "WAV rear ramp angle", label: "Rear Access & Ramp" },
              { src: IMAGES.wavInteriorAccess, alt: "WAV interior access", label: "Interior Wheelchair Access" },
              { src: IMAGES.vanSilverSide, alt: "Silver minibus side view", label: "Silver Fleet Minibus" },
            ].map((img) => (
              <div
                key={img.src}
                className="group rounded-2xl overflow-hidden border border-edge-light shadow-soft card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-surface-white">
                  <p className="text-sm font-semibold text-content-primary">{img.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Showcase */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-content-primary text-center mb-8">
              See Our Vehicles in Action
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-edge-light shadow-soft">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster={IMAGES.vanPrivateHire}
                >
                  <source src={VIDEOS.fleet1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="rounded-2xl overflow-hidden border border-edge-light shadow-soft">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster={IMAGES.wavRampYellow}
                >
                  <source src={VIDEOS.fleet2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-24 bg-brand-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-8">
            Improving lives through safe transport
          </h2>
          <p className="text-xl text-content-secondary leading-relaxed max-w-3xl mx-auto">
            Our mission is to provide safe, dependable, and compassionate transportation
            services that improve access to education, healthcare, and essential services
            for vulnerable individuals, while supporting local authorities, schools, and
            healthcare providers with professional, compliant, and high-quality transport
            solutions.
          </p>
        </div>
      </section>

      {/* Driver CTA Section */}
      <section className="py-20 md:py-24 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-edge-light p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand-gold-dark font-semibold text-sm uppercase tracking-wider mb-3">
                  Join Our Team
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
                  Are you a professional driver?
                </h2>
                <p className="text-content-secondary text-lg mb-6 leading-relaxed">
                  Join our team of dedicated professionals. We are looking for
                  compassionate, reliable drivers with a commitment to safety.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Competitive pay and regular hours",
                    "Full training and development provided",
                    "DBS check support included",
                    "Supportive team environment",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-content-secondary">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/driver/register"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-content-primary font-bold rounded-full hover:bg-brand-gold-dark transition-all btn-primary"
                >
                  Register Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Visual */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={IMAGES.vanPrivateHire}
                    alt="Connect Care fleet vehicle"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
