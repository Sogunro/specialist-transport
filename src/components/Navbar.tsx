"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Clock, AlertCircle } from "lucide-react";
import { CONTACT, IMAGES } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-brand-charcoal text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-brand-gold" />
              <span className="font-medium">{CONTACT.hours}</span>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <a href={`mailto:${CONTACT.email}`} className="hidden sm:inline text-white/70 hover:text-white transition-colors">
              {CONTACT.email}
            </a>
          </div>
          <a href={CONTACT.emergencyLink} className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition-colors">
            <AlertCircle className="w-3 h-3" />
            Emergency: {CONTACT.emergency}
          </a>
        </div>
      </div>
      {/* Main nav */}
      <div className="bg-surface-white shadow-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={IMAGES.logo} alt="Connect Care Transportation Services" className="h-14 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Register as Driver", href: "/driver/register" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="px-4 py-2 text-sm font-medium text-content-secondary hover:text-brand-gold-dark transition-colors rounded-lg">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={CONTACT.phoneLink} className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-trust" />
              <div>
                <span className="font-bold text-content-primary">{CONTACT.phone}</span>
                <span className="block text-[11px] text-success font-medium">Open 24/7</span>
              </div>
            </a>
            <Link href="/contact" className="px-6 py-2.5 bg-brand-gold text-content-primary font-semibold text-sm rounded-full hover:bg-brand-gold-dark transition-all btn-primary">
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden text-content-primary p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-surface-white border-t border-edge-light animate-fade-in-up">
          <div className="px-4 py-6 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Register as Driver", href: "/driver/register" },
            ].map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-content-secondary hover:text-brand-gold-dark hover:bg-trust-light rounded-lg transition-all font-medium">
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3">
              <a href={CONTACT.phoneLink} className="flex items-center gap-2 text-sm font-bold text-content-primary">
                <Phone className="w-4 h-4 text-trust" />
                {CONTACT.phone}
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 bg-brand-gold text-content-primary font-semibold text-sm rounded-full text-center hover:bg-brand-gold-dark transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
