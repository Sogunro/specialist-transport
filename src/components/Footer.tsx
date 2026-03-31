import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Clock, AlertCircle } from "lucide-react";
import { CONTACT, IMAGES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface-white border-t border-edge-light">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-charcoal rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss your transportation needs. We
            provide tailored solutions for every requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-gold text-content-primary font-bold rounded-full hover:bg-brand-gold-dark transition-all btn-primary"
            >
              Request a Quote
            </Link>
            <Link
              href="/driver/register"
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img
                  src={IMAGES.logo}
                  alt="Connect Care Transportation Services"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-content-tertiary text-sm leading-relaxed">
                Safe, reliable, and person-centred transportation services
                for vulnerable individuals, healthcare providers, and local authorities.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-content-primary font-semibold mb-6 text-sm uppercase tracking-wider">
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  "SEND School Transport",
                  "WAV Transportation",
                  "Care Home Transport",
                  "Hospital Transfers",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-content-tertiary hover:text-brand-gold text-sm transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-content-primary font-semibold mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Driver Registration", href: "/driver/register" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-content-tertiary hover:text-brand-gold text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-content-primary font-semibold mb-6 text-sm uppercase tracking-wider">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-trust mt-0.5 shrink-0" />
                  <span className="text-content-tertiary text-sm">{CONTACT.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-trust mt-0.5 shrink-0" />
                  <span className="text-content-tertiary text-sm">{CONTACT.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-trust mt-0.5 shrink-0" />
                  <span className="text-content-tertiary text-sm">{CONTACT.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-trust mt-0.5 shrink-0" />
                  <span className="text-content-tertiary text-sm">{CONTACT.hours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <a href={CONTACT.emergencyLink} className="text-content-tertiary text-sm hover:text-red-500 transition-colors">
                    Emergency: {CONTACT.emergency}
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-surface-alt flex items-center justify-center text-content-tertiary hover:text-brand-gold hover:bg-trust-light transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-edge-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-content-muted text-xs">
            &copy; {new Date().getFullYear()} Connect Care Transportation Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
              <a key={text} href="#" className="text-content-muted hover:text-brand-gold text-xs transition-colors">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
