"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  delay?: number;
  accentColor?: string;
  hoverAccentColor?: string;
}

const Card = ({ 
  title, 
  description, 
  size = "md", 
  className = "", 
  titleClassName = "",
  descriptionClassName = "",
  children, 
  delay = 0,
  accentColor = "bg-brand-primary",
  hoverAccentColor = "group-hover:text-brand-primary"
}: CardProps) => {
  const sizeClasses = {
    sm: "p-6",
    md: "p-8",
    lg: "p-10",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative overflow-hidden bg-white border border-brand-accent/10 rounded-sm premium-transition hover:shadow-xl",
        className.includes('hover:border-') ? "" : "hover:border-brand-primary/20",
        sizeClasses[size],
        className
      )}
    >
      {/* Decorative background element - Now disappears on hover */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 rounded-bl-full translate-y-0 translate-x-0 group-hover:-translate-y-12 group-hover:translate-x-12 transition-transform duration-700",
        accentColor.replace('bg-', 'bg-').includes('/') ? accentColor : `${accentColor}/5`
      )} />
      
      <div className="relative z-10">
        <h3 className={cn(
          "text-lg md:text-xl font-serif text-charcoal mb-4 transition-colors duration-300 tracking-tight",
          hoverAccentColor,
          titleClassName
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-xl text-charcoal/70 leading-relaxed mb-6 group-hover:text-charcoal transition-colors duration-300",
          descriptionClassName
        )}>
          {description}
        </p>
        {children}
      </div>
      
      {/* Bottom accent line - Now disappears on hover */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-1 transition-all duration-700 group-hover:w-0",
        accentColor
      )} />
    </motion.div>
  );
};

export default Card;
