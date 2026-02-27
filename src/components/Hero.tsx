import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, imageUrl, children }: HeroProps) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-charcoal leading-tight">
            {title}
          </h1>
          {subtitle && (
            <div className="text-lg md:text-xl text-olive/80 font-light max-w-lg mx-auto md:mx-0 space-y-4 whitespace-pre-line">
              {subtitle}
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          {imageUrl ? (
            <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden w-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="w-full">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
