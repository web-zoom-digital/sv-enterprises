"use client";

import Link from "next/link";
import { Layers, Menu } from "lucide-react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E5E7EB] shadow-lg pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-16">
        {/* Call Button with FaPhone react-icon */}
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Call S V Enterprises"
        >
          <FaPhone className="w-5 h-5 text-[#1683C7]" />
          <span className="text-[11px] font-semibold mt-1">Call</span>
        </a>

        {/* WhatsApp Button with FaWhatsapp react-icon */}
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-emerald-600" />
          <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
        </a>

        {/* Products Button */}
        <Link
          href="/products"
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Explore Audio Products"
        >
          <Layers className="w-5 h-5 text-[#1683C7]" />
          <span className="text-[11px] font-semibold mt-1">Products</span>
        </Link>

        {/* Menu / Contact Button */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Get Quote / Contact"
        >
          <Menu className="w-5 h-5 text-[#171A1D]" />
          <span className="text-[11px] font-semibold mt-1">Menu</span>
        </Link>
      </div>
    </div>
  );
}
