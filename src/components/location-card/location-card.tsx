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
        className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`text-xs font-extrabold px-2.5 py-1 rounded-md tracking-wide uppercase ${
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
                ? "District Target"
                : "Service Area"}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors">
            {location.name}
          </h3>

          <p className="text-sm text-[#6B7280] mt-2 line-clamp-3 leading-relaxed">
            {location.intro}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1683C7] group-hover:text-[#126fa9] transition-colors">
            <span>Explore {location.name} Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
