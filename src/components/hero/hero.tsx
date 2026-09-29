"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
  FaFileCircleCheck,
  FaChevronLeft,
  FaChevronRight,
  FaLocationDot,
  FaShieldHalved,
  FaVolumeHigh,
} from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    tagline: "AUTHORIZED AHUJA DEALER • CHINTADRIPET, CHENNAI",
    title: "Professional Audio Equipment for Every Sound Environment",
    subtitle:
      "Premier dealer of Ahuja & top professional audio brands in Chennai. High-performance speakers, amplifiers, PA systems, and commercial sound setups.",
    highlight: "Speakers, Amplifiers & PA Systems",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    tagline: "COMMERCIAL & STAGE AUDIO SOLUTIONS",
    title: "Heavy-Duty Stage Speakers & Concert Sound Systems",
    subtitle:
      "Powering auditoriums, places of worship, commercial buildings, and outdoor event venues across Tamil Nadu with crystal-clear audio hardware.",
    highlight: "Commercial PA Systems & Line Arrays",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    tagline: "PREMIUM RACK AMPLIFIERS & MIXERS",
    title: "High-Power Amplifiers & Digital Audio Mixing Consoles",
    subtitle:
      "Get expert consultation, genuine manufacturer warranty, and competitive pricing for all your commercial sound infrastructure needs.",
    highlight: "Direct Showroom Stock & Support",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative w-full min-h-[620px] md:min-h-[700px] flex items-center overflow-hidden bg-gray-950 text-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image Slider with Smooth Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={HERO_SLIDES[currentSlide].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 w-full">
        <div className="max-w-3xl space-y-6 text-center sm:text-left mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
          {/* Tagline Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10  border border-white/20 text-xs sm:text-sm font-semibold text-sky-400"
          >
            <FaLocationDot className="w-3.5 h-3.5 text-sky-400" />
            <span>{HERO_SLIDES[currentSlide].tagline}</span>
          </motion.div>

          {/* Dynamic Headline */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            key={`feat-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap justify-center sm:justify-start items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-gray-300 pt-1"
          >
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <FaVolumeHigh className="text-sky-400" />
              {HERO_SLIDES[currentSlide].highlight}
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <FaShieldHalved className="text-emerald-400" />
              100% Genuine Audio Hardware
            </span>
          </motion.div>

          {/* Action Buttons arranged in 2 Rows (Hidden on mobile per request, visible on sm+) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:flex flex-col gap-3 pt-4 w-full max-w-md sm:max-w-none"
          >
            {/* Row 1: Primary Products & Quote CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Products</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <FaFileCircleCheck className="w-4 h-4 text-sky-400" />
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Row 2: WhatsApp & Call Buttons using react-icons */}
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-[#1683C7] hover:bg-[#126fa9] text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaPhone className="w-4.5 h-4.5 text-white" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
