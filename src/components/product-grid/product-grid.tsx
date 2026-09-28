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
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
    >
      {displayCategories.map((category) => (
        <motion.div
          key={category.id}
          variants={itemVariants}
          className="flex flex-col"
        >
          <ProductCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}
