import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

const SectionWrapper = ({ children, className = "", light = false }: SectionWrapperProps) => {
  const defaultBg = light ? "bg-stone-50" : "bg-stone-100";
  const hasBgInClassName = className.includes("bg-");
  
  return (
    <section className={`w-full ${hasBgInClassName ? "" : defaultBg} ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
