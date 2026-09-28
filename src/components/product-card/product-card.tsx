"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCategory } from "@/data/products";

interface ProductCardProps {
  category: ProductCategory;
}

export function ProductCard({ category }: ProductCardProps) {
  return (
    <Link href={`/products/${category.slug}`} className="block h-full cursor-pointer">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300 flex flex-col h-full group cursor-pointer"
      >
        {/* Category Image Container */}
        <div className="relative w-full h-36 sm:h-52 bg-gray-100 overflow-hidden">
          <Image
            src={category.image}
            alt={`${category.name} - Professional Audio Equipment Dealer S V ENTERPRISES`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold text-[#171A1D] shadow-xs">
            Audio Gear
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-sm sm:text-xl font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors line-clamp-1">
            {category.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mt-1 sm:mt-2 line-clamp-2 flex-grow">
            {category.shortDescription}
          </p>

          <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-[#1683C7] group-hover:text-[#126fa9]">
            <span className="truncate">Explore {category.name}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
