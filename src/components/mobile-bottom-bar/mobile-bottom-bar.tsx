"use client";

import Link from "next/link";
import { Layers } from "lucide-react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] shadow-lg pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-3 h-16 divide-x divide-gray-100">
        {/* Call Button */}
        <a
          href={`tel:09940451673`}
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-sky-50 transition-colors cursor-pointer min-h-[44px]"
          aria-label="Call S V Enterprises"
        >
          <FaPhone className="w-5 h-5 text-[#1683C7]" />
          <span className="text-[11px] font-bold mt-1 text-gray-800">Call</span>
        </a>
        {/* Products Button */}
        <Link
          href="/products"
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#1683C7] active:bg-sky-50 transition-colors cursor-pointer min-h-[44px]"
          aria-label="Explore Audio Products"
        >
          <Layers className="w-5 h-5 text-[#1683C7]" />
          <span className="text-[11px] font-bold mt-1 text-gray-800">Products</span>
        </Link>
        {/* WhatsApp Button */}
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#171A1D] hover:text-[#25D366] active:bg-emerald-50 transition-colors cursor-pointer min-h-[44px]"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-emerald-600" />
          <span className="text-[11px] font-bold mt-1 text-gray-800">WhatsApp</span>
        </a>

        
      </div>
    </nav>
  );
}
