import React from "react";

interface CardProps {
  title: string;
  description: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ title, description, size = "md", className = "", children }: CardProps) => {
  const sizeClass = `card-${size}`;
  
  return (
    <div className={`${sizeClass} bg-stone-50 border border-olive/5 rounded-sm premium-transition hover:border-olive/20 hover:shadow-sm ${className}`}>
      <h3 className="text-lg font-medium text-charcoal mb-3">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;
