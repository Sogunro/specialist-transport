import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — derived from logo
        brand: {
          gold: "#FFD700",
          "gold-dark": "#E6C200",
          "gold-light": "#FFF8DC",
          charcoal: "#333333",
          gray: "#4A4A4A",
          silver: "#B0B0B0",
        },
        // Surfaces
        surface: {
          DEFAULT: "#FAFAF7",
          white: "#FFFFFF",
          alt: "#F5F5F0",
        },
        // Text content
        content: {
          primary: "#333333",
          secondary: "#4A4A4A",
          tertiary: "#6B7280",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        // Healthcare trust
        trust: {
          DEFAULT: "#0D9488",
          light: "#F0FDFA",
          dark: "#0F766E",
        },
        // Borders
        edge: {
          DEFAULT: "#E5E5E0",
          light: "#F0F0EB",
        },
        // Semantic
        success: { DEFAULT: "#16A34A", light: "#F0FDF4" },
        error: { DEFAULT: "#DC2626", light: "#FEF2F2" },
        warning: { DEFAULT: "#F59E0B", light: "#FFFBEB" },
        info: { DEFAULT: "#2563EB", light: "#EFF6FF" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(51, 51, 51, 0.06)",
        card: "0 4px 20px rgba(51, 51, 51, 0.08)",
        "card-hover": "0 8px 30px rgba(51, 51, 51, 0.12)",
        nav: "0 1px 3px rgba(51, 51, 51, 0.06)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
