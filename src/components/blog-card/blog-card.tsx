"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full cursor-pointer">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group cursor-pointer"
      >
        <div className="relative w-full h-32 sm:h-48 bg-gray-100 overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold text-[#171A1D] shadow-xs">
            Audio Guide
          </div>
        </div>

        <div className="p-3.5 sm:p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-[#6B7280] mb-2 sm:mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1683C7]" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#1683C7]" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xs sm:text-lg font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[11px] sm:text-sm text-[#6B7280] mt-1 sm:mt-2 line-clamp-2 flex-grow leading-relaxed">
            {post.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
