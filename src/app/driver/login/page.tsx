"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LogIn, Bus, Shield } from "lucide-react";

export default function DriverLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Login functionality will be connected to your backend. Email: " + email);
  }

  const inputClass = "form-input w-full py-3 bg-bg border border-border rounded-xl text-text-dark placeholder-text-muted focus:outline-none focus:border-blue-soft";

  return (
    <section className="min-h-screen bg-bg flex items-center justify-center pt-24 pb-20">
      <div className="w-full max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Bus className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold text-text-dark">SafeRide</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-soft font-semibold">
                Driver Portal
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-text-dark mb-2">Welcome back</h1>
          <p className="text-text-light">Sign in to your driver account</p>
        </div>

        {/* Form */}
        <div className="bg-bg-white rounded-3xl p-8 border border-border-light shadow-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass + " pl-12 pr-4"} placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass + " pl-12 pr-12"} placeholder="Enter your password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-blue-soft" />
                <span className="text-text-light text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-soft hover:text-primary transition-colors font-medium">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="w-full py-3.5 bg-accent text-white font-bold rounded-full hover:bg-accent-hover transition-all btn-primary flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" /> Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border-light text-center">
            <p className="text-text-light text-sm">
              Not registered yet?{" "}
              <Link href="/driver/register" className="text-accent hover:text-accent-hover font-medium transition-colors">
                Apply to join our team
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-text-muted text-xs">
          <Shield className="w-3 h-3" />
          <span>Secure, encrypted connection</span>
        </div>
      </div>
    </section>
  );
}
