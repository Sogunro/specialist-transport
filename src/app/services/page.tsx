import Link from "next/link";
import {
  Bus,
  Accessibility,
  Heart,
  Hospital,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  FileCheck,
  AlertTriangle,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { splitFeatureText } from "@/lib/utils";
import type { ServiceDetail } from "@/lib/types";

export const metadata = {
  title: "Our Services | Connect Care Transportation Services",
  description:
    "Connect Care transportation services including SEND school transport, wheelchair accessible vehicles, care home transport, and hospital transfers.",
};

const services: ServiceDetail[] = [
  {
    id: "send",
    icon: Bus,
    title: "SEND School Transport",
    subtitle: "Transportation of SEND Children",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    borderColor: "border-yellow-200",
    description:
      "We deliver dedicated home-to-school and school-to-home transportation services for children and young people with Special Educational Needs and Disabilities (SEND). Our service is designed to support consistent school attendance while addressing each child\u2019s unique physical, behavioural, emotional, and developmental needs.",
    features: [
      "Individual and shared transport options based on assessed needs",
      "Consistent drivers and passenger assistants for routine and familiarity",
      "Staff trained in SEND awareness, safeguarding, and behavioural support",
      "Close coordination with parents, carers, schools, and local authorities",
      "Fully compliant safeguarding procedures and risk assessments",
      "Structured, punctual service supporting attendance and educational outcomes",
      "Calm, supportive, and child-centred travel environment",
      "Incident reporting protocols and management systems",
    ],
    highlight:
      "We prioritise the safety, dignity, and wellbeing of every child, ensuring they are transported in a calm, supportive, and secure environment.",
    images: [
      { src: IMAGES.vanPrivateHire, alt: "SEND school transport vehicle" },
      { src: IMAGES.vanSilverSide, alt: "Child transport vehicle" },
    ],
  },
  {
    id: "wav",
    icon: Accessibility,
    title: "WAV Transportation",
    subtitle: "Wheelchair Accessible Vehicles",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description:
      "We provide specialist Wheelchair Accessible Vehicle (WAV) transportation for individuals with mobility challenges who require accessible and supported transport.",
    features: [
      "Fully accessible vehicles equipped with ramps, lifts, and wheelchair restraints",
      "Safe transport to schools, hospitals, care homes, day centres, and community services",
      "Door-to-door assistance where required",
      "Staff trained in safe wheelchair handling and passenger support",
      "Comfortable, secure, and dignified transport environment",
      "Services for children, adults, and elderly individuals with mobility challenges",
      "Reliable and punctual transport tailored to individual mobility needs",
    ],
    highlight:
      "Our service ensures individuals with mobility needs can travel safely, comfortably, and independently.",
    images: [
      { src: IMAGES.wavRampYellow, alt: "Wheelchair accessible minibus" },
      { src: IMAGES.wavRampAngle, alt: "WAV with ramp deployed" },
    ],
  },
  {
    id: "care",
    icon: Heart,
    title: "Care Home & Elderly Transport",
    subtitle: "Vulnerable Persons Transportation",
    color: "text-rose-500",
    bg: "bg-rose-50",
    borderColor: "border-rose-200",
    description:
      "We provide transportation services for elderly individuals, care home residents, and vulnerable children and adults. Our service is designed to ensure comfort, dignity, and safety, while supporting access to essential services and social engagement.",
    features: [
      "Transport to medical appointments, day centres, and healthcare services",
      "Transfers between care homes, supported living, and residential services",
      "Transport to social activities and wellbeing services",
      "Compassionate and respectful support throughout the journey",
      "Staff trained in safeguarding, vulnerable adult care, and professional conduct",
      "Focus on comfort, dignity, and safety at all times",
      "Hospital appointments and outpatient visits",
    ],
    highlight:
      "Our staff are trained in safeguarding, manual handling awareness, and vulnerable person support, ensuring a respectful and caring experience.",
    images: [
      { src: IMAGES.vanPrivateHire, alt: "Patient transport vehicle" },
      { src: IMAGES.wavInteriorAccess, alt: "Accessible vehicle interior" },
    ],
  },
  {
    id: "hospital",
    icon: Hospital,
    title: "Hospital Transfers",
    subtitle: "Medical Transportation",
    color: "text-violet-600",
    bg: "bg-violet-50",
    borderColor: "border-violet-200",
    description:
      "We provide reliable, non-emergency hospital transfer and medical transportation services, supporting healthcare providers, patients, and care organisations.",
    features: [
      "Hospital discharge transportation",
      "Transfers between hospitals, care homes, and rehabilitation centres",
      "Transport to outpatient appointments, clinics, and specialist treatments",
      "Patient transport for routine and planned healthcare services",
      "Support for patients with mobility challenges or medical vulnerabilities",
      "Reliable and timely transport supporting continuity of care",
      "Safe and comfortable patient handling and assistance",
    ],
    highlight:
      "Our focus is on ensuring safe, timely, and comfortable transfers that support continuity of care and patient wellbeing.",
    images: [
      { src: IMAGES.wavRampAngle, alt: "Vehicle with rear access open" },
      { src: IMAGES.vanSilverSide, alt: "Fleet vehicle" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-white pt-36 pb-16 md:pt-40 md:pb-20 border-b border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-content-primary mb-6 animate-fade-in-up animate-delay-100">
            Connect Care Transportation Services
          </h1>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Comprehensive, person-centred transport solutions delivered by trained,
            vetted, and compassionate staff using fully compliant and accessible vehicles.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <p className={`text-sm font-semibold ${service.color} uppercase tracking-wider mb-2`}>
                  {service.subtitle}
                </p>
                <h2 className="text-3xl font-bold text-content-primary mb-5">
                  {service.title}
                </h2>
                <p className="text-content-secondary text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlight */}
                <div className={`${service.bg} rounded-xl p-6 border-l-4 ${service.borderColor}`}>
                  <p className="text-content-primary font-medium text-sm leading-relaxed italic">
                    &ldquo;{service.highlight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Images + Features */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Vehicle Images */}
                <div className="grid grid-cols-2 gap-4">
                  {service.images.map((img) => (
                    <div key={img.src} className="rounded-2xl overflow-hidden border border-edge-light shadow-soft">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className={`bg-surface-white rounded-2xl overflow-hidden border border-edge-light shadow-soft`}>
                  {/* Colored top strip */}
                  <div className={`h-1.5 ${service.bg.replace('50', '200')}`} />
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg font-bold text-content-primary mb-5 flex items-center gap-3">
                      <div className={`w-8 h-8 ${service.bg} rounded-lg flex items-center justify-center`}>
                        <FileCheck className={`w-4 h-4 ${service.color}`} />
                      </div>
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => {
                        const [bold, rest] = splitFeatureText(feature);
                        return (
                          <li key={feature} className="flex items-start gap-3">
                            <div className={`w-5 h-5 ${service.bg} rounded-full flex items-center justify-center mt-0.5 shrink-0`}>
                              <CheckCircle className={`w-3.5 h-3.5 ${service.color}`} />
                            </div>
                            <span className="text-content-secondary text-sm leading-snug">
                              <strong className="text-content-primary font-semibold">{bold}</strong>
                              {rest ? ` ${rest}` : ''}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-16 bg-surface-white border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              Our Fleet
            </p>
            <h2 className="text-3xl font-bold text-content-primary">
              Fully Accessible, Purpose-Built Vehicles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: IMAGES.vanPrivateHire, alt: "Private hire minibus" },
              { src: IMAGES.wavRampYellow, alt: "Wheelchair ramp deployed with yellow rails" },
              { src: IMAGES.wavRampAngle, alt: "WAV rear access" },
              { src: IMAGES.wavInteriorAccess, alt: "Interior wheelchair access" },
              { src: IMAGES.vanSilverSide, alt: "Silver minibus side view" },
            ].map((img) => (
              <div key={img.src} className="rounded-xl overflow-hidden border border-edge-light shadow-soft group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-surface-white border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3">
              Safety &amp; Compliance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
              Our Commitment to Safety &amp; Quality
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Fully Licensed & Insured", desc: "All vehicles regularly maintained with full insurance and licensing compliance.", bg: "bg-blue-50", color: "text-trust" },
              { icon: Users, title: "DBS Enhanced Staff", desc: "Enhanced DBS-checked drivers and passenger assistants across all services.", bg: "bg-emerald-50", color: "text-emerald-600" },
              { icon: FileCheck, title: "Safeguarding Policies", desc: "Comprehensive safeguarding and child protection policies and procedures.", bg: "bg-amber-50", color: "text-amber-600" },
              { icon: GraduationCap, title: "Staff Training", desc: "Ongoing training in SEND awareness, safeguarding, and vulnerable person support.", bg: "bg-violet-50", color: "text-violet-600" },
              { icon: AlertTriangle, title: "Risk Assessments", desc: "Individual transport plans and risk assessments implemented where required.", bg: "bg-rose-50", color: "text-rose-500" },
              { icon: Stethoscope, title: "Regulatory Compliance", desc: "Full compliance with local authority, NHS, and regulatory standards.", bg: "bg-teal-50", color: "text-teal-600" },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl p-6 border border-edge-light card-hover">
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-bold text-content-primary mb-2">{item.title}</h3>
                <p className="text-content-tertiary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface border-t border-edge-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-4">
            Need transport services?
          </h2>
          <p className="text-xl text-content-secondary mb-10 max-w-2xl mx-auto">
            Get in touch to discuss your requirements. We provide tailored
            transport solutions for every need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-gold text-content-primary font-bold rounded-full hover:bg-brand-gold-dark transition-all btn-primary inline-flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/driver/register"
              className="px-8 py-3.5 border border-edge text-content-primary font-bold rounded-full hover:border-brand-gold hover:text-brand-gold-dark transition-all btn-outline inline-flex items-center justify-center gap-2"
            >
              Join as Driver <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
