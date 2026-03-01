"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  imageUrl?: string;
  className?: string;
  overlay?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  centered?: boolean;
  animateZoom?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  titleClassName?: string;
  textContainerClassName?: string;
  subtitleClassName?: string;
  buttonContainerClassName?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  imageUrl, 
  className,
  overlay = true, 
  fullHeight = true, 
  children, 
  centered = false,
  animateZoom = false,
  showButton = true,
  buttonText = "Découvrir l'offre",
  buttonLink = "/produit",
  titleClassName,
  textContainerClassName,
  subtitleClassName,
  buttonContainerClassName
}: HeroProps) => {
  return (
    <div className={cn(
      "relative w-full overflow-hidden flex items-center",
      fullHeight ? "min-h-[85vh]" : "min-h-[60vh]",
      className
    )}>
      {/* Background Image with Optional Zoom Animation */}
      {imageUrl && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={animateZoom ? { scale: 1 } : {}}
          animate={animateZoom ? { scale: 1.8 } : {}}
          style={{ originX: "60%", originY: "65%" }}
          transition={animateZoom ? { duration: 20, ease: "linear", repeat: Infinity, repeatType: "alternate" } : {}}
        >
          <Image
            src={imageUrl}
            alt={typeof title === "string" ? title : "Hero Image"}
            fill
            className="object-cover object-center"
            priority
          />
          {overlay && <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />}
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10 w-full">
        <div className={cn(
          "flex flex-col items-center",
          centered ? "text-center" : "lg:grid-cols-12 lg:grid lg:gap-12 lg:items-center"
        )}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "space-y-8",
              centered ? "max-w-6xl mx-auto mb-16" : "lg:col-span-7",
              textContainerClassName
            )}
          >
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-serif text-[#D2B48C] leading-[1.1] tracking-tight drop-shadow-sm",
              titleClassName
            )}>
              {title}
            </h1>
            {subtitle && (
              <p className={cn(
                "text-lg md:text-xl text-[#F5E6D3] font-medium leading-relaxed italic max-w-2xl",
                centered ? "mx-auto" : "",
                subtitleClassName
              )}>
                {subtitle}
              </p>
            )}
            
            {showButton && (
              <div className={cn(
                "pt-4 flex flex-wrap gap-4",
                centered ? "justify-center" : "",
                buttonContainerClassName
              )}>
                <Link href={buttonLink}>
                  <button className="px-8 py-4 bg-[#DCCBB5] text-charcoal font-bold hover:bg-white active:bg-white transition-all duration-300 rounded-sm uppercase tracking-widest text-xs cursor-pointer shadow-lg hover:shadow-xl">
                    {buttonText}
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "w-full",
              centered ? "flex justify-center" : "lg:col-span-5 flex items-center justify-center lg:justify-end"
            )}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
