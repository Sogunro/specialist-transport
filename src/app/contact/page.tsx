"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import type { ContactInfo } from "@/lib/types";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo: ContactInfo[] = [
  { icon: Phone, title: "Phone", details: CONTACT.phone, subtitle: "Mon-Fri, 8am-6pm" },
  { icon: Mail, title: "Email", details: CONTACT.email, subtitle: "We reply within 24 hours" },
  { icon: MapPin, title: "Office", details: CONTACT.address, subtitle: "By appointment only" },
  { icon: Clock, title: "Operating Hours", details: CONTACT.hours, subtitle: CONTACT.emergency },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "input-field";

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-content-primary mb-6 animate-fade-in-up animate-delay-100">
            Get in touch
          </h1>
          <p className="text-xl text-content-secondary max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Ready to discuss your transport needs? Contact us today
            for a free consultation and tailored quote.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-surface-white rounded-2xl p-6 text-center border border-edge-light card-hover"
              >
                <div className="w-12 h-12 bg-trust-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-trust" />
                </div>
                <h3 className="font-bold text-content-primary mb-1">{item.title}</h3>
                <p className="text-trust font-medium text-sm">{item.details}</p>
                <p className="text-content-muted text-xs mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-white rounded-3xl p-8 md:p-12 border border-edge-light shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h2 className="text-3xl font-bold text-content-primary mb-4">Message sent!</h2>
                <p className="text-content-secondary text-lg max-w-md mx-auto">
                  Thank you for contacting us. We will get back to you within 24
                  hours to discuss your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 bg-brand-gold text-content-primary font-semibold rounded-full hover:bg-brand-gold-dark transition-all btn-primary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-content-primary mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-content-tertiary">
                    Fill in the form below and we&apos;ll get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Company or organisation"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-content-primary mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option value="send">SEND School Transport</option>
                      <option value="wav">WAV Transportation</option>
                      <option value="care">Care Home &amp; Elderly Transport</option>
                      <option value="hospital">Hospital Transfers</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-content-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className={inputClass + " resize-none"}
                      placeholder="Tell us about your transport requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 bg-brand-gold text-content-primary font-bold rounded-full hover:bg-brand-gold-dark transition-all btn-primary flex items-center justify-center gap-2 mx-auto"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
