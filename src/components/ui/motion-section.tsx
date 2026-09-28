"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { fadeUpVariants, staggerContainerVariants } from "./animation-variants";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export function MotionSection({
  children,
  className = "",
  delay = 0,
  stagger = false,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={stagger ? staggerContainerVariants : fadeUpVariants}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
