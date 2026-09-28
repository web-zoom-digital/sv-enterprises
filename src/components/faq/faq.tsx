"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers to common questions about professional audio equipment, ordering, and store services.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        {/* Centered Section Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#6B7280]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Expandable Rounded FAQ Cards List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E5E7EB] rounded-2xl bg-white shadow-xs overflow-hidden transition-all duration-300 hover:border-[#1683C7]/40"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-[#171A1D] text-base focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-all duration-300 ${isOpen ? "bg-[#1683C7]/10 text-[#1683C7]" : "bg-gray-100 text-[#6B7280]"}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB]/60 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
