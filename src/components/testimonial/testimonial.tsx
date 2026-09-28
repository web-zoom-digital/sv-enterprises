"use client";

import { motion } from "framer-motion";
import { Building, Star } from "lucide-react";
import { PLACEHOLDER_TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-8">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
          <span>Client Testimonials</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
          Client Feedback & Project References
        </h2>
        <p className="text-sm text-[#6B7280]">
          Verified feedback and project references from auditoriums, places of worship, educational institutions, and commercial clients across Tamil Nadu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLACEHOLDER_TESTIMONIALS.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1683C7] bg-[#1683C7]/10 px-2.5 py-1 rounded-md">
                  <Building className="w-3.5 h-3.5" />
                  {item.clientCategory}
                </span>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#6B7280] italic leading-relaxed">
                &ldquo;{item.feedbackPlaceholder}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
              <span className="font-bold text-[#171A1D]">{item.clientName}</span>
              <span className="text-[#6B7280]">📍 {item.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
