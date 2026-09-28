"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingWidgets() {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredWidget, setHoveredWidget] = useState<"whatsapp" | "call" | null>(null);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#1683C7] text-white p-3 rounded-full shadow-lg hover:bg-[#126fa9] transition-all duration-300 focus:outline-none cursor-pointer"
        aria-label="Open contact options"
      >
        <FaPhone className="w-5 h-5 animate-pulse" />
      </button>
    );
  }

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 select-none">
      {/* Tooltip hint on hover */}
      {/* <AnimatePresence> */}
        {/* {hoveredWidget && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block bg-gray-900/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl border border-gray-700/50 pointer-events-none"
          > */}
          {/* {hoveredWidget === "whatsapp" && "Chat on WhatsApp"} */}
          {/* {hoveredWidget === "call" && `Call Us: ${SITE_CONFIG.phone}`} */}
          {/* </motion.div> */}
        {/* )} */}
      {/* </AnimatePresence> */}

      {/* Main Floating Buttons Group */}
      <div className="flex flex-col gap-3 items-end">
        {/* WhatsApp Button */}
        <motion.a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setHoveredWidget("whatsapp")}
          onMouseLeave={() => setHoveredWidget(null)}
          className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg shadow-emerald-500/30 transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
          aria-label="Chat on WhatsApp with S V Enterprises"
        >
          {/* Online status indicator pulse */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>

          <FaWhatsapp className="w-8 h-8 text-white" />

          {/* Desktop Hover Label */}
          {/* <span className="absolute right-16 bg-[#171A1D] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:inline-block pointer-events-none">
            Chat on WhatsApp
          </span> */}
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setHoveredWidget("call")}
          onMouseLeave={() => setHoveredWidget(null)}
          className="relative group flex items-center justify-center w-14 h-14 bg-[#1683C7] hover:bg-[#126fa9] text-white rounded-full shadow-lg shadow-sky-500/30 transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 cursor-pointer"
          aria-label={`Call S V Enterprises at ${SITE_CONFIG.phone}`}
        >
          <FaPhone className="w-6 h-6 text-white" />

          {/* Desktop Hover Label */}
          {/* <span className="absolute right-16 bg-[#171A1D] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:inline-block pointer-events-none">
            Call {SITE_CONFIG.phone}
          </span> */}
        </motion.a>
      </div>
    </div>
  );
}
