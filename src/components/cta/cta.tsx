"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = "Looking for the Right Professional Audio Equipment?",
  description = "Talk to S V Enterprises for professional audio equipment and solutions for your specific requirements. Store consultation, stock checks, and direct dispatch across Tamil Nadu.",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden w-full rounded-3xl border border-gray-800 shadow-xl bg-gray-950 text-white min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
      {/* Background Image with Scale Animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/cta-audio-equipment.jpg"
          alt="Professional Audio Equipment Dealer S V ENTERPRISES"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* High Contrast Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/55 to-black/55 " />
      </motion.div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-12 sm:py-16 px-6 sm:px-12 w-full">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10  border border-white/20 text-xs sm:text-sm font-semibold text-sky-400 uppercase tracking-wider"
        >
          <span>Professional Audio Consultation</span>
        </motion.div>

        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {description}
        </motion.p>

        {/* Centered Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-3"
        >
          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              <span>Call Now: {SITE_CONFIG.phone}</span>
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>WhatsApp Message</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
