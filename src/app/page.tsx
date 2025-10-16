"use client";

import { useState, useEffect } from "react";
import StickyBar from "@/components/StickyBar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StickyBar show={showStickyBar} />
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
