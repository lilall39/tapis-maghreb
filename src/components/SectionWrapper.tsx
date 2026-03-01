"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  animate?: boolean;
}

const SectionWrapper = ({ children, className = "", light = false, animate = true }: SectionWrapperProps) => {
  const defaultBg = light ? "bg-white" : "bg-[#F5F2EE]";
  
  // Extraire les classes de padding si elles sont passées dans className pour éviter les doublons
  const hasPaddingOverride = className.includes('py-') || className.includes('pt-') || className.includes('pb-');
  
  const content = (
    <div className={cn(
      "max-w-7xl mx-auto px-6 w-full relative z-10",
      !hasPaddingOverride ? "py-16 md:py-32" : "",
      "px-6 md:px-12"
    )}>
      {children}
    </div>
  );

  return (
    <section className={cn("w-full relative overflow-hidden", defaultBg, className)}>
      {animate ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </section>
  );
};

export default SectionWrapper;
