"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileCircleCheck, FaWhatsapp, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Breadcrumb, BreadcrumbItem } from "@/components/breadcrumb/breadcrumb";

export interface PageHeroCTA {
  text: string;
  href: string;
  icon?: "arrow" | "quote" | "whatsapp" | "call";
  variant?: "primary" | "secondary" | "whatsapp" | "call";
  external?: boolean;
}

export interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  breadcrumbItems: BreadcrumbItem[];
  badgeText?: string;
  primaryCTA?: PageHeroCTA;
  secondaryCTA?: PageHeroCTA;
}

export function PageHero({
  title,
  description,
  backgroundImage,
  breadcrumbItems,
  badgeText,
  primaryCTA,
  secondaryCTA,
}: PageHeroProps) {
  const renderCTAIcon = (icon?: string) => {
    switch (icon) {
      case "arrow":
        return <FaArrowRight className="w-4 h-4" />;
      case "quote":
        return <FaFileCircleCheck className="w-4 h-4 text-sky-400" />;
      case "whatsapp":
        return <FaWhatsapp className="w-4.5 h-4.5 text-white" />;
      case "call":
        return <FaPhone className="w-4 h-4 text-white" />;
      default:
        return null;
    }
  };

  const getButtonClass = (variant?: string) => {
    switch (variant) {
      case "whatsapp":
        return "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-500/25";
      case "call":
        return "bg-[#1683C7] hover:bg-[#126fa9] text-white shadow-lg shadow-sky-500/25";
      case "secondary":
        return "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md";
      case "primary":
      default:
        return "bg-[#1683C7] hover:bg-[#126fa9] text-white shadow-lg shadow-sky-500/25";
    }
  };

  return (
    <section className="relative w-full min-h-[530px] sm:min-h-[530px] lg:min-h-[660px] flex items-center overflow-hidden bg-gray-950 text-white shadow-md">
      {/* Background Image with Entrance Scale */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-fit"
        />
        {/* Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171A1D]/90 via-[#171A1D]/65 to-[#171A1D]/35" />
      </motion.div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 w-full">
        <div className="max-w-3xl space-y-5 text-center sm:text-left mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
          {/* Breadcrumb inside Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Breadcrumb items={breadcrumbItems} variant="hero" />
          </motion.div>

          {/* Badge Tagline if provided */}
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-400"
            >
              <FaLocationDot className="w-3.5 h-3.5 text-sky-400" />
              <span>{badgeText}</span>
            </motion.div>
          )}

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl"
          >
            {description}
          </motion.p>

          {/* CTA Buttons (Hidden on mobile per request, visible on sm+) */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden sm:flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5 pt-3 w-full max-w-md sm:max-w-none"
            >
              {primaryCTA && (
                <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  {primaryCTA.external ? (
                    <a
                      href={primaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${getButtonClass(
                        primaryCTA.variant
                      )}`}
                    >
                      <span>{primaryCTA.text}</span>
                      {renderCTAIcon(primaryCTA.icon)}
                    </a>
                  ) : (
                    <Link
                      href={primaryCTA.href}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${getButtonClass(
                        primaryCTA.variant
                      )}`}
                    >
                      <span>{primaryCTA.text}</span>
                      {renderCTAIcon(primaryCTA.icon)}
                    </Link>
                  )}
                </motion.div>
              )}

              {secondaryCTA && (
                <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  {secondaryCTA.external ? (
                    <a
                      href={secondaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${getButtonClass(
                        secondaryCTA.variant
                      )}`}
                    >
                      {renderCTAIcon(secondaryCTA.icon)}
                      <span>{secondaryCTA.text}</span>
                    </a>
                  ) : (
                    <Link
                      href={secondaryCTA.href}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${getButtonClass(
                        secondaryCTA.variant
                      )}`}
                    >
                      {renderCTAIcon(secondaryCTA.icon)}
                      <span>{secondaryCTA.text}</span>
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
