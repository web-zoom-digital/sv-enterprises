"use client";

import { motion, Variants } from "framer-motion";
import { ProductCard } from "@/components/product-card/product-card";
import { ProductCategory } from "@/data/products";

interface ProductGridProps {
  categories: ProductCategory[];
  limit?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProductGrid({ categories, limit }: ProductGridProps) {
  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 sm:pb-0 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {displayCategories.map((category) => (
        <motion.div
          key={category.id}
          variants={itemVariants}
          className="min-w-[84%] sm:min-w-0 snap-start shrink-0 sm:shrink flex flex-col"
        >
          <ProductCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}
