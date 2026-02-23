import Link from "next/link";
import {
  GraduationCap,
  ClipboardCheck,
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
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "SEND School Transport",
    description:
      "Safe home-to-school transport for children with Special Educational Needs and Disabilities. Trained, consistent staff every journey.",
    color: "text-blue-soft",
    bg: "bg-blue-50",
  },
  {
    icon: ClipboardCheck,
    title: "Transport Audit & Compliance",
    description:
      "Independent audits ensuring regulatory, safeguarding, and contractual compliance for transport operations.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Accessibility,
    title: "WAV Transportation",
    description:
      "Fully accessible vehicles with ramps, lifts, and restraints. Door-to-door support for wheelchair users.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Heart,
    title: "Care Home & Elderly Transport",
    description:
      "Compassionate transport for elderly individuals and care home residents. Medical appointments and social outings.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Hospital,
    title: "Hospital Transfers",
    description:
      "Non-emergency patient transport, hospital discharges, and inter-facility transfers. Timely and comfortable.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const highlights = [
  {
    icon: UserCheck,
    title: "Choose your service",
    description: "Tailored transport solutions matched to your specific needs and requirements.",
  },
  {
    icon: Clock,
    title: "No waiting times",
    description: "Services can begin quickly. We work to your schedule, not ours.",
  },
  {
    icon: Smile,
    title: "Consistent care",
    description: "The same familiar, friendly staff on every journey for comfort and routine.",
  },
  {
    icon: PoundSterling,
    title: "Cost efficient",
    description: "Competitive pricing without compromising on safety, quality, or care.",
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

export default function Home() {
  return (
    <>
      {/* Hero Section — Elder style */}
      <section className="relative bg-bg-white pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-dark leading-[1.15] tracking-tight">
                Specialist transport{" "}
                <span className="text-gradient">— the safer way</span> to travel
              </h1>

              <p className="text-lg text-text-body leading-relaxed max-w-lg">
                Receive safe, reliable, and person-centred transportation from
                trained, compassionate staff in fully accessible vehicles.
              </p>

              <p className="text-text-light leading-relaxed max-w-lg">
                Supporting SEND children, wheelchair users, elderly individuals,
                and healthcare providers with dignity and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all btn-primary text-center"
                >
                  Find your service
                </Link>
                <a
                  href="tel:08001234567"
                  className="px-8 py-3.5 border border-border rounded-full text-text-dark font-semibold hover:border-primary hover:text-primary transition-all btn-outline text-center"
                >
                  Call us
                </a>
              </div>

              {/* Trust bar */}
              <div className="flex items-center gap-3 pt-4">
                <span className="font-semibold text-text-dark text-sm">Excellent</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-green-trust rounded-sm flex items-center justify-center"
                    >
                      <Star className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <span className="text-text-light text-sm">
                  Trusted by <strong className="text-text-dark">500+ families</strong>
                </span>
              </div>
            </div>

            {/* Right — Image placeholder */}
            <div className="relative animate-fade-in-up animate-delay-200">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-light via-white to-bg-warm aspect-[4/3] shadow-card">
                {/* Replace this div with your actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto bg-blue-light rounded-full flex items-center justify-center">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-text-light text-sm max-w-xs">
                      Add your hero image here — a warm photo of your team,
                      vehicle, or passengers
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative shape */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-soft/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar — like Elder's bottom cards */}
      <section className="bg-bg-white border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border-light card-hover"
              >
                <div className="w-10 h-10 bg-blue-light rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-dark mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-soft font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Our Specialist Services
            </h2>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              Comprehensive transportation solutions delivered with compassion,
              dignity, and the highest safety standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                href="/services"
                key={service.title}
                className={`bg-bg-white rounded-2xl p-8 border border-border-light card-hover group ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-blue-soft text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-primary"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Journeys Completed", icon: TrendingUp },
              { value: "99.8%", label: "On-Time Rate", icon: Clock },
              { value: "500+", label: "Families Served", icon: Users },
              { value: "100%", label: "DBS Checked Staff", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-white/60 mx-auto mb-3" />
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
      <section className="py-20 md:py-24 bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-soft font-semibold text-sm uppercase tracking-wider mb-3">
                Our Commitment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Safety, Compliance &<br />
                Quality Assurance
              </h2>
              <p className="text-text-body text-lg mb-8 leading-relaxed">
                We are committed to delivering services that meet the highest standards
                of safety, compliance, and care. Every journey is planned with
                precision and delivered with compassion.
              </p>
              <ul className="space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-trust mt-0.5 shrink-0" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  title: "DBS Enhanced",
                  desc: "All staff fully vetted",
                  bg: "bg-blue-50",
                  color: "text-blue-soft",
                },
                {
                  icon: Award,
                  title: "Fully Compliant",
                  desc: "Regulatory standards met",
                  bg: "bg-amber-50",
                  color: "text-amber-600",
                },
                {
                  icon: Heart,
                  title: "Person-Centred",
                  desc: "Dignity and respect",
                  bg: "bg-rose-50",
                  color: "text-rose-500",
                },
                {
                  icon: Star,
                  title: "4.9/5 Rating",
                  desc: "Trusted by families",
                  bg: "bg-violet-50",
                  color: "text-violet-600",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-bg rounded-2xl p-6 border border-border-light card-hover"
                >
                  <div
                    className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="font-bold text-text-dark mb-1">{card.title}</h3>
                  <p className="text-text-light text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-24 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-soft font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-8">
            Improving lives through safe transport
          </h2>
          <p className="text-xl text-text-body leading-relaxed max-w-3xl mx-auto">
            Our mission is to provide safe, dependable, and compassionate transportation
            services that improve access to education, healthcare, and essential services
            for vulnerable individuals, while supporting local authorities, schools, and
            healthcare providers with professional, compliant, and high-quality transport
            solutions.
          </p>
        </div>
      </section>

      {/* Driver CTA Section */}
      <section className="py-20 md:py-24 bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg rounded-3xl border border-border-light p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                  Join Our Team
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  Are you a professional driver?
                </h2>
                <p className="text-text-body text-lg mb-6 leading-relaxed">
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
                    <li key={item} className="flex items-center gap-3 text-text-body">
                      <CheckCircle className="w-4 h-4 text-green-trust shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/driver/register"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-accent-hover transition-all btn-primary"
                >
                  Register Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Visual */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-56 h-56 bg-blue-light rounded-full flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
