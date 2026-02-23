import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SafeRide Specialist Transport | Safe, Reliable, Person-Centred",
  description:
    "Specialist transportation services for SEND children, wheelchair users, elderly care, hospital transfers, and vulnerable individuals. Fully compliant, compassionate, and professional.",
  keywords: [
    "specialist transport",
    "SEND school transport",
    "wheelchair accessible transport",
    "care home transport",
    "hospital transfers",
    "medical transportation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-bg text-text-body antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
