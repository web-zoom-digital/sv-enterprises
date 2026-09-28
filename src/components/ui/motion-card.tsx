"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { cardHoverVariants } from "./animation-variants";

interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function MotionCard({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: MotionCardProps) {
  return (
    <motion.div
      variants={hoverEffect ? cardHoverVariants : undefined}
      initial="rest"
      whileHover={hoverEffect ? "hover" : undefined}
      whileTap={hoverEffect ? "tap" : undefined}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
