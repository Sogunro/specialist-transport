"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bus, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDriverMenu, setShowDriverMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-white shadow-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Bus className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-text-dark tracking-tight">
                SafeRide
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-soft font-semibold">
                Specialist Transport
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-text-body hover:text-primary transition-colors rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm font-medium text-text-body hover:text-primary transition-colors rounded-lg"
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-text-body hover:text-primary transition-colors rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-text-body hover:text-primary transition-colors rounded-lg"
            >
              Contact
            </Link>

            {/* Driver Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDriverMenu(true)}
              onMouseLeave={() => setShowDriverMenu(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-text-body hover:text-primary transition-colors rounded-lg flex items-center gap-1">
                For Drivers <ChevronDown className="w-3 h-3" />
              </button>
              {showDriverMenu && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-bg-white rounded-xl shadow-card border border-border-light overflow-hidden animate-fade-in-up">
                  <Link
                    href="/driver/register"
                    className="block px-4 py-3 text-sm text-text-body hover:text-primary hover:bg-blue-light transition-all"
                  >
                    Register as Driver
                  </Link>
                  <Link
                    href="/driver/login"
                    className="block px-4 py-3 text-sm text-text-body hover:text-primary hover:bg-blue-light transition-all"
                  >
                    Driver Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-blue-soft" />
              <div>
                <span className="font-bold text-text-dark">0800 123 4567</span>
                <span className="block text-[11px] text-green-trust font-medium">
                  Lines are open
                </span>
              </div>
            </a>
            <Link
              href="/driver/login"
              className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-text-dark hover:border-primary hover:text-primary transition-all btn-outline"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full hover:bg-accent-hover transition-all btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-bg-white border-t border-border-light animate-fade-in-up">
          <div className="px-4 py-6 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-text-body hover:text-primary hover:bg-blue-light rounded-lg transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border-light pt-3 mt-3">
              <Link
                href="/driver/register"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-accent font-semibold hover:bg-blue-light rounded-lg transition-all"
              >
                Register as Driver
              </Link>
              <Link
                href="/driver/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-text-body hover:text-primary hover:bg-blue-light rounded-lg transition-all"
              >
                Driver Sign In
              </Link>
            </div>
            <div className="px-4 pt-4 space-y-3">
              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-sm font-bold text-text-dark"
              >
                <Phone className="w-4 h-4 text-blue-soft" />
                0800 123 4567
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 bg-accent text-white font-semibold text-sm rounded-full text-center hover:bg-accent-hover transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
