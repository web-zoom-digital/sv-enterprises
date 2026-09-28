"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LocationItem } from "@/data/locations";

interface LocationCardProps {
  location: LocationItem;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Link href={`/locations/${location.slug}`} className="block h-full cursor-pointer">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-3.5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
            <span
              className={`text-[10px] sm:text-xs font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md tracking-wide uppercase ${
                location.type === "primary"
                  ? "bg-[#1683C7]/15 text-[#1683C7]"
                  : location.type === "district"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-[#6B7280]"
              }`}
            >
              {location.type === "primary"
                ? "Base Store"
                : location.type === "district"
                ? "District"
                : "Service Area"}
            </span>
          </div>

          <h3 className="text-sm sm:text-xl font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors line-clamp-1">
            {location.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B7280] mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
            {location.intro}
          </p>
        </div>

        <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-[#E5E7EB]">
          <div className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold text-[#1683C7] group-hover:text-[#126fa9] transition-colors">
            <span className="truncate">Explore {location.name}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
