"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Car,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Driving Details", icon: Car },
  { id: 3, title: "Documents", icon: FileText },
  { id: 4, title: "Review", icon: CheckCircle },
];

export default function DriverRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", city: "", postcode: "", dateOfBirth: "",
    licenceNumber: "", licenceExpiry: "", licenceCategories: "", yearsExperience: "", vehicleType: "", hasDBS: "", dbsNumber: "", availability: "",
    hasSENDTraining: false, hasSafeguardingTraining: false, hasFirstAid: false, hasManualHandling: false, hasPATS: false,
    previousEmployer: "", whyJoin: "",
    agreeToCriminalCheck: false, agreeToTerms: false,
  });

  function updateField(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "form-input w-full px-4 py-3 bg-bg border border-border rounded-xl text-text-dark placeholder-text-muted focus:outline-none focus:border-blue-soft";
  const selectClass = "form-input w-full px-4 py-3 bg-bg border border-border rounded-xl text-text-dark focus:outline-none focus:border-blue-soft";
  const labelClass = "block text-sm font-medium text-text-dark mb-2";

  if (submitted) {
    return (
      <section className="min-h-screen bg-bg flex items-center justify-center pt-24 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-bg-white rounded-3xl p-12 border border-border-light shadow-card">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-trust" />
            </div>
            <h1 className="text-3xl font-bold text-text-dark mb-4">Application Submitted!</h1>
            <p className="text-text-body text-lg mb-8 leading-relaxed">
              Thank you for your interest in joining SafeRide. We will review your
              application and contact you within 3-5 business days.
            </p>
            <div className="bg-bg rounded-xl p-5 mb-8 text-left border border-border-light">
              <p className="text-sm text-text-body">
                <strong className="text-text-dark">What happens next?</strong>
              </p>
              <ol className="text-sm text-text-light mt-2 space-y-1 list-decimal list-inside">
                <li>Application review (1-2 days)</li>
                <li>Phone interview</li>
                <li>Document verification & DBS check</li>
                <li>Training & onboarding</li>
              </ol>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent-hover transition-all btn-primary"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-white pt-28 pb-10 md:pt-32 md:pb-12 border-b border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
            Driver Portal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-3 animate-fade-in-up animate-delay-100">
            Join our team
          </h1>
          <p className="text-lg text-text-body max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Register as a specialist transport driver. We are looking for compassionate,
            reliable professionals.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="py-6 bg-bg-white border-b border-border-light">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep >= step.id ? "bg-primary text-white shadow-soft" : "bg-bg border border-border text-text-muted"
                  }`}>
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block font-medium ${currentStep >= step.id ? "text-primary" : "text-text-muted"}`}>
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-3 rounded transition-all ${currentStep > step.id ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="bg-bg-white rounded-3xl p-8 md:p-10 border border-border-light shadow-card">

              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-soft" /> Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div><label className={labelClass}>First Name *</label><input type="text" required value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)} className={inputClass} placeholder="First name" /></div>
                    <div><label className={labelClass}>Last Name *</label><input type="text" required value={formData.lastName} onChange={(e) => updateField("lastName", e.target.value)} className={inputClass} placeholder="Last name" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div><label className={labelClass}>Email *</label><input type="email" required value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} placeholder="your@email.com" /></div>
                    <div><label className={labelClass}>Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} placeholder="Phone number" /></div>
                  </div>
                  <div><label className={labelClass}>Date of Birth *</label><input type="date" required value={formData.dateOfBirth} onChange={(e) => updateField("dateOfBirth", e.target.value)} className={inputClass} /></div>
                  <div><label className={labelClass}>Address *</label><input type="text" required value={formData.address} onChange={(e) => updateField("address", e.target.value)} className={inputClass} placeholder="Street address" /></div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div><label className={labelClass}>City *</label><input type="text" required value={formData.city} onChange={(e) => updateField("city", e.target.value)} className={inputClass} placeholder="City" /></div>
                    <div><label className={labelClass}>Postcode *</label><input type="text" required value={formData.postcode} onChange={(e) => updateField("postcode", e.target.value)} className={inputClass} placeholder="Postcode" /></div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <Car className="w-5 h-5 text-blue-soft" /> Driving Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div><label className={labelClass}>Licence Number *</label><input type="text" required value={formData.licenceNumber} onChange={(e) => updateField("licenceNumber", e.target.value)} className={inputClass} placeholder="Licence number" /></div>
                    <div><label className={labelClass}>Licence Expiry *</label><input type="date" required value={formData.licenceExpiry} onChange={(e) => updateField("licenceExpiry", e.target.value)} className={inputClass} /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div><label className={labelClass}>Licence Categories *</label><input type="text" required value={formData.licenceCategories} onChange={(e) => updateField("licenceCategories", e.target.value)} className={inputClass} placeholder="e.g. B, D1, D" /></div>
                    <div>
                      <label className={labelClass}>Experience *</label>
                      <select required value={formData.yearsExperience} onChange={(e) => updateField("yearsExperience", e.target.value)} className={selectClass}>
                        <option value="">Select</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Vehicle *</label>
                    <select required value={formData.vehicleType} onChange={(e) => updateField("vehicleType", e.target.value)} className={selectClass}>
                      <option value="">Select vehicle type</option>
                      <option value="car">Car / MPV</option>
                      <option value="minibus">Minibus</option>
                      <option value="wav">Wheelchair Accessible Vehicle (WAV)</option>
                      <option value="any">Any / No preference</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Enhanced DBS? *</label>
                    <select required value={formData.hasDBS} onChange={(e) => updateField("hasDBS", e.target.value)} className={selectClass}>
                      <option value="">Select</option>
                      <option value="yes">Yes - current and valid</option>
                      <option value="expired">Yes - but expired</option>
                      <option value="no">No - willing to obtain one</option>
                    </select>
                  </div>
                  {formData.hasDBS === "yes" && (
                    <div><label className={labelClass}>DBS Certificate Number</label><input type="text" value={formData.dbsNumber} onChange={(e) => updateField("dbsNumber", e.target.value)} className={inputClass} placeholder="DBS certificate number" /></div>
                  )}
                  <div>
                    <label className={labelClass}>Availability *</label>
                    <select required value={formData.availability} onChange={(e) => updateField("availability", e.target.value)} className={selectClass}>
                      <option value="">Select availability</option>
                      <option value="fulltime">Full-time</option>
                      <option value="parttime">Part-time</option>
                      <option value="weekdays">Weekdays only</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-soft" /> Training & Documents
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-4">
                      Do you hold any of the following?
                    </label>
                    <div className="space-y-3">
                      {[
                        { key: "hasSENDTraining", label: "SEND Awareness Training" },
                        { key: "hasSafeguardingTraining", label: "Safeguarding / Child Protection Training" },
                        { key: "hasFirstAid", label: "First Aid Certificate" },
                        { key: "hasManualHandling", label: "Manual Handling Training" },
                        { key: "hasPATS", label: "Passenger Assistant Training (PATS)" },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center gap-3 p-4 bg-bg rounded-xl border border-border-light cursor-pointer hover:border-blue-soft/30 transition-all">
                          <input type="checkbox" checked={formData[item.key as keyof typeof formData] as boolean} onChange={(e) => updateField(item.key, e.target.checked)} className="w-5 h-5 rounded border-border text-primary focus:ring-blue-soft" />
                          <span className="text-text-body">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-light rounded-xl p-5 border-l-4 border-blue-soft">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-soft mt-0.5 shrink-0" />
                      <div>
                        <p className="text-text-dark font-medium text-sm">Don&apos;t worry if you don&apos;t have all certifications</p>
                        <p className="text-text-light text-sm mt-1">We provide full training and support for all new drivers.</p>
                      </div>
                    </div>
                  </div>
                  <div><label className={labelClass}>Previous Transport Experience</label><textarea rows={3} value={formData.previousEmployer} onChange={(e) => updateField("previousEmployer", e.target.value)} className={inputClass + " resize-none"} placeholder="Brief details of previous roles..." /></div>
                  <div><label className={labelClass}>Why join SafeRide?</label><textarea rows={3} value={formData.whyJoin} onChange={(e) => updateField("whyJoin", e.target.value)} className={inputClass + " resize-none"} placeholder="Tell us what motivates you..." /></div>
                </div>
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-soft" /> Review Your Application
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-bg rounded-xl p-5 border border-border-light">
                      <h3 className="text-sm font-semibold text-blue-soft uppercase tracking-wider mb-3">Personal Details</h3>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm">
                        <div><span className="text-text-light">Name: </span><span className="text-text-dark font-medium">{formData.firstName} {formData.lastName}</span></div>
                        <div><span className="text-text-light">Email: </span><span className="text-text-dark font-medium">{formData.email}</span></div>
                        <div><span className="text-text-light">Phone: </span><span className="text-text-dark font-medium">{formData.phone}</span></div>
                        <div><span className="text-text-light">Location: </span><span className="text-text-dark font-medium">{formData.city}, {formData.postcode}</span></div>
                      </div>
                    </div>
                    <div className="bg-bg rounded-xl p-5 border border-border-light">
                      <h3 className="text-sm font-semibold text-blue-soft uppercase tracking-wider mb-3">Driving Details</h3>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm">
                        <div><span className="text-text-light">Licence: </span><span className="text-text-dark font-medium">{formData.licenceNumber}</span></div>
                        <div><span className="text-text-light">Categories: </span><span className="text-text-dark font-medium">{formData.licenceCategories}</span></div>
                        <div><span className="text-text-light">Experience: </span><span className="text-text-dark font-medium">{formData.yearsExperience} years</span></div>
                        <div><span className="text-text-light">DBS: </span><span className="text-text-dark font-medium">{formData.hasDBS}</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4">
                    <label className="flex items-start gap-3 p-4 bg-bg rounded-xl border border-border-light cursor-pointer hover:border-blue-soft/30 transition-all">
                      <input type="checkbox" required checked={formData.agreeToCriminalCheck} onChange={(e) => updateField("agreeToCriminalCheck", e.target.checked)} className="w-5 h-5 rounded border-border text-primary focus:ring-blue-soft mt-0.5" />
                      <span className="text-text-body text-sm">I consent to an Enhanced DBS criminal record check and understand this is a requirement. *</span>
                    </label>
                    <label className="flex items-start gap-3 p-4 bg-bg rounded-xl border border-border-light cursor-pointer hover:border-blue-soft/30 transition-all">
                      <input type="checkbox" required checked={formData.agreeToTerms} onChange={(e) => updateField("agreeToTerms", e.target.checked)} className="w-5 h-5 rounded border-border text-primary focus:ring-blue-soft mt-0.5" />
                      <span className="text-text-body text-sm">I confirm all information is accurate and agree to the terms and conditions. *</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Nav Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border-light">
                {currentStep > 1 ? (
                  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-text-body hover:border-primary hover:text-primary transition-all btn-outline">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <Link href="/driver/login" className="text-sm text-text-light hover:text-primary transition-colors">
                    Already registered? Sign in
                  </Link>
                )}

                {currentStep < 4 ? (
                  <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all btn-primary">
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent-hover transition-all btn-primary">
                    Submit Application <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
