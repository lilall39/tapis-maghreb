import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

const SectionWrapper = ({ children, className = "", light = false }: SectionWrapperProps) => {
  return (
    <section className={`w-full ${light ? "bg-stone-50" : "bg-stone-100"} ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
