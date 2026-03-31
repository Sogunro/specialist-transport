import Link from "next/link";
import { IMAGES } from "@/lib/constants";
import type { Value, TimelineEntry } from "@/lib/types";
import {
  Shield,
  Heart,
  Users,
  Award,
  ArrowRight,
  Target,
  Eye,
  HandHeart,
  Clock,
  Star,
} from "lucide-react";

export const metadata = {
  title: "About Us | Connect Care Transportation Services",
  description:
    "Learn about Connect Care's mission, values, and commitment to safe, reliable, and person-centred transportation services.",
};

const values: Value[] = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every decision prioritises the safety and wellbeing of the individuals we serve.",
    bg: "bg-blue-50",
    color: "text-trust",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every passenger with dignity, respect, and genuine care.",
    bg: "bg-rose-50",
    color: "text-rose-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We continuously improve our services and training to exceed expectations.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: HandHeart,
    title: "Person-Centred",
    description:
      "Every service is tailored to the unique needs of the individual.",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with families, schools, and healthcare providers.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Punctuality and consistency are at the heart of everything we do.",
    bg: "bg-teal-50",
    color: "text-teal-600",
  },
];

const timeline: TimelineEntry[] = [
  {
    year: "Founded",
    title: "Established with Purpose",
    description:
      "Connect Care was founded with a clear mission: to provide safe, dignified, and professional transport for those who need it most.",
  },
  {
    year: "Growth",
    title: "Expanding Services",
    description:
      "We expanded our fleet and services to include SEND transport, WAV transportation, hospital transfers, and care home transport.",
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description:
      "Today, we are a trusted transport partner for local authorities, schools, healthcare providers, and families across the region.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-content-primary mb-6 animate-fade-in-up animate-delay-100">
                Driven by compassion
              </h1>
              <p className="text-xl text-content-secondary leading-relaxed animate-fade-in-up animate-delay-200">
                Connect Care is a transportation provider dedicated to serving
                vulnerable individuals, healthcare providers, educational institutions,
                and local authorities with safe, reliable, and person-centred services.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animate-delay-300">
              {[
                { value: "10,000+", label: "Journeys", icon: Target },
                { value: "99.8%", label: "On-Time", icon: Clock },
                { value: "500+", label: "Families", icon: Users },
                { value: "4.9/5", label: "Rating", icon: Star },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-2xl p-6 text-center border border-edge-light card-hover"
                >
                  <stat.icon className="w-7 h-7 text-trust mx-auto mb-3" />
                  <div className="text-3xl font-bold text-content-primary">{stat.value}</div>
                  <div className="text-sm text-content-tertiary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-white rounded-2xl p-8 md:p-10 border border-edge-light card-hover">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-trust" />
              </div>
              <h2 className="text-2xl font-bold text-content-primary mb-4">Our Mission</h2>
              <p className="text-content-secondary leading-relaxed">
                To provide safe, dependable, and compassionate transportation
                services that improve access to education, healthcare, and essential
                services for vulnerable individuals, while supporting local authorities,
                schools, and healthcare providers with professional, compliant, and
                high-quality transport solutions.
              </p>
            </div>

            <div className="bg-surface-white rounded-2xl p-8 md:p-10 border border-edge-light card-hover">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-content-primary mb-4">Our Vision</h2>
              <p className="text-content-secondary leading-relaxed">
                To be the most trusted transport provider in the UK,
                recognised for our unwavering commitment to safety, dignity, and
                person-centred care. We envision a future where every vulnerable
                individual has access to safe, reliable, and compassionate transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-white border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
              What drives us
            </h2>
            <p className="text-content-tertiary max-w-2xl mx-auto text-lg">
              Our values are the foundation of everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-2xl p-8 border border-edge-light card-hover"
              >
                <div
                  className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mb-5`}
                >
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-content-primary mb-2">{value.title}</h3>
                <p className="text-content-tertiary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface border-t border-edge-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary">Our Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-trust via-brand-gold to-trust" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-8">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-surface-white border-2 border-trust flex items-center justify-center z-10 shadow-soft">
                    <span className="text-xs font-bold text-trust">{item.year}</span>
                  </div>
                  <div className="bg-surface-white rounded-2xl p-6 flex-1 border border-edge-light shadow-soft">
                    <h3 className="text-lg font-bold text-content-primary mb-2">{item.title}</h3>
                    <p className="text-content-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16 bg-surface-white border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
                Our Fleet
              </p>
              <h2 className="text-3xl font-bold text-content-primary mb-6">
                Purpose-built for safety and accessibility
              </h2>
              <p className="text-content-secondary text-lg leading-relaxed mb-6">
                Our fleet includes wheelchair accessible vehicles (WAVs) equipped with ramps,
                lifts, and wheelchair restraints, alongside comfortable minibuses for patient
                and school transport. Every vehicle is fully licensed, insured, and regularly
                maintained to the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-edge-light shadow-soft">
                  <img
                    src={IMAGES.wavInteriorAccess}
                    alt="WAV interior with safety rails and wheelchair tracks"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-edge-light shadow-soft">
                  <img
                    src={IMAGES.wavRampYellow}
                    alt="Wheelchair ramp deployed"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-edge-light shadow-card">
                <img
                  src={IMAGES.vanPrivateHire}
                  alt="Fleet vehicle"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-edge-light shadow-soft">
                  <img
                    src={IMAGES.vanSilverSide}
                    alt="Fleet vehicle side view"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-edge-light shadow-soft">
                  <img
                    src={IMAGES.wavRampAngle}
                    alt="Vehicle rear with ramp"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
            Want to work with us?
          </h2>
          <p className="text-xl text-content-secondary mb-10 max-w-2xl mx-auto">
            Whether you need transport services or want to join our
            team, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-gold text-content-primary font-bold rounded-full hover:bg-brand-gold-dark transition-all btn-primary inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/driver/register"
              className="px-8 py-3.5 border border-edge text-content-primary font-bold rounded-full hover:border-brand-gold hover:text-brand-gold-dark transition-all btn-outline inline-flex items-center justify-center gap-2"
            >
              Join Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
