"use client";

import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  PackageCheck, 
  Zap,
  Factory,
  Package,
  Globe,
  Settings,
  Target,
  Handshake,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

const Infographic = () => {
  const steps = [
    {
      id: "01",
      icon: <Lightbulb size={24} />,
      title: "Sourcing ateliers",
      desc: "Partenaires identifiés au Maghreb, capacité ajustable.",
      angle: -52, // Increased spread
    },
    {
      id: "02",
      icon: <Target size={24} />,
      title: "Production contrôlée",
      desc: "Qualité validée, volumes maîtrisés.",
      angle: -26,
    },
    {
      id: "03",
      icon: <Handshake size={24} />,
      title: "Logistique & import",
      desc: "Flux organisés, coûts anticipés.",
      angle: 0,
    },
    {
      id: "04",
      icon: <Settings size={24} />,
      title: "Distribution directe (D2C)",
      desc: "E-commerce propriétaire, marge préservée.",
      angle: 26,
    },
    {
      id: "05",
      icon: <TrendingUp size={24} />,
      title: "Montée en charge progressive",
      desc: "Croissance par paliers, risque maîtrisé.",
      angle: 52,
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Version Desktop (Cercle et Arc) - visible dès md */}
      <div className="hidden md:flex relative w-full max-w-7xl mx-auto select-none items-center justify-start min-h-[750px] pl-10 md:pl-24 scale-[0.75] lg:scale-[0.85] origin-center">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          className="relative z-50 w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full bg-[#244D2F] border-4 border-[#D2B48C] shadow-2xl flex flex-col items-center justify-center text-center p-12 md:p-16 shrink-0"
        >
          <div className="space-y-6 -translate-y-4 w-full max-w-[280px] md:max-w-[380px] mx-auto">
            <div className="space-y-1">
              <h3 className="text-white font-serif font-bold text-2xl md:text-4xl tracking-tight uppercase shadow-none">
                Business
              </h3>
              <h3 className="text-white font-serif font-bold text-2xl md:text-4xl tracking-tight uppercase shadow-none">
                Infographic
              </h3>
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium shadow-none">
              Production artisanale, distribution directe, montée progressive. <br />
              Chaîne de valeur maîtrisée – Risque contrôlé.
            </p>
          </div>
        </motion.div>

        {/* The Arc and Steps (Right side) */}
        <div className="relative flex-1 h-full min-h-[650px] md:min-h-[750px] flex items-center">
          
          {/* The Arc (Dashed Line) - Centers on the left circle edge */}
          <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="700" height="800" viewBox="0 0 700 800" className="opacity-20">
              <path 
                d="M 50,400 A 400,400 0 0 1 450,50 M 50,400 A 400,400 0 0 0 450,750" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeDasharray="10 10"
              />
            </svg>
          </div>

          {/* Steps along the arc */}
          <div className="absolute left-[-200px] inset-y-0 w-full">
            {/* Arrows from center to dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="5" orientation="auto">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#D2B48C" />
                </marker>
              </defs>
              {steps.map((step, i) => {
                const angle = (step.angle * Math.PI) / 180;
                const radius = 400;
                const x2 = Math.cos(angle) * radius;
                const y2 = Math.sin(angle) * radius + 400;
                
                const startRadius = 220; 
                const x1 = Math.cos(angle) * startRadius;
                const y1 = Math.sin(angle) * startRadius + 400;

                return (
                  <React.Fragment key={`arrows-${step.id}`}>
                    {/* Center to Dot */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#D2B48C"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                    {/* Dot to Icon */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ delay: 1.8 + i * 0.1, duration: 0.4 }}
                      x1={x2 + 8}
                      y1={y2}
                      x2={x2 + 35}
                      y2={y2}
                      stroke="#D2B48C"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                  </React.Fragment>
                );
              })}
            </svg>

            {steps.map((step, i) => {
               const angle = (step.angle * Math.PI) / 180;
               const radius = 400; // Match arc radius
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius + 400; // Vertical center offset

               return (
                 <div 
                   key={step.id} 
                   className="absolute" 
                   style={{ 
                     left: x, 
                     top: y,
                     transform: `translateY(-50%) ${step.id === "01" ? "translateY(-24px)" : ""}`
                   }}
                 >
                    {/* Point on the Arc */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-50 shadow-[0_0_15px_rgba(255,255,255,0.5)] border-4 border-[#D2B48C]/50" />

                    {/* Step Group */}
                    <div className="ml-10 flex items-center gap-4 group">
                      
                      {/* Icon in Dark Circle */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white/10 backdrop-blur-md border-2 border-[#D2B48C] flex items-center justify-center shrink-0 z-40 relative group-hover:bg-white/20 transition-all duration-500"
                      >
                        <div className="text-white scale-90 md:scale-100">
                          {step.icon}
                        </div>
                      </motion.div>

                      {/* Arrow-style Info Box */}
                      <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                        className="relative w-[400px] md:w-[540px] h-auto min-h-[110px] md:min-h-[130px]"
                      >
                        {/* Step Badge (Top Right of box) */}
                        <div className="absolute -top-3 right-6 w-10 h-10 rounded-full bg-white text-charcoal flex items-center justify-center font-bold text-xs z-50 shadow-xl border-2 border-[#D2B48C]">
                          {step.id}
                        </div>

                        {/* Box with arrow shape pointing right */}
                        <div 
                          className="bg-[#4a915c]/70 backdrop-blur-xl p-6 pr-16 border-2 border-[#D2B48C] shadow-2xl group-hover:border-[#D2B48C]/80 transition-all duration-500 h-full flex flex-col justify-center text-left"
                          style={{
                            clipPath: "polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)"
                          }}
                        >
                          <h4 className="text-white font-serif font-bold text-lg md:text-xl tracking-wide mb-1 uppercase transition-colors">{step.title}</h4>
                          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">{step.desc}</p>
                        </div>
                      </motion.div>
                    </div>
                 </div>
               );
            })}
          </div>
        </div>
      </div>

      {/* Version Mobile (Liste verticale) - visible seulement sur mobile */}
      <div className="flex md:hidden flex-col w-full px-4 py-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl bg-[#244D2F] border-2 border-[#D2B48C] p-8 text-center shadow-xl"
        >
          <h3 className="text-white font-serif font-bold text-2xl uppercase mb-4 tracking-tight">
            Business Infographic
          </h3>
          <p className="text-white text-lg leading-relaxed font-medium">
            Production artisanale, distribution directe, montée progressive. <br />
            Chaîne de valeur maîtrisée – Risque contrôlé.
          </p>
        </motion.div>

        <div className="w-full space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-6 border-l-2 border-[#D2B48C]/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#D2B48C]" />
              <div className="bg-[#4a915c]/20 backdrop-blur-sm p-6 rounded-xl border border-[#D2B48C]/30 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#244D2F] border border-[#D2B48C] flex items-center justify-center text-[#D2B48C]">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-serif font-bold text-lg uppercase tracking-wide">
                    {step.id}. {step.title}
                  </h4>
                </div>
                <p className="text-white/80 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bouton Investissement - Adapté pour mobile */}
      <div className="relative md:absolute mt-8 md:mt-0 md:-bottom-10 left-0 md:left-4 z-[60] md:-translate-x-full">
        <Link href="/partenariats" className="block w-full md:w-auto">
          <button className="w-full md:w-auto px-10 py-5 bg-[#DCCBB5] text-charcoal font-bold hover:bg-white active:bg-white transition-all duration-300 rounded-sm uppercase tracking-widest text-sm cursor-pointer shadow-2xl hover:shadow-xl border-2 border-[#D2B48C]">
            Investissement
          </button>
        </Link>
      </div>
    </div>
  );
};

const DonutChart = () => {
  const data = [
    { label: "Production premier lot", value: 30, color: "#1a3d25" },
    { label: "Sourcing & déplacements", value: 20, color: "#DCD7CC" },
    { label: "Logistique & import", value: 15, color: "#A8D5BA" },
    { label: "E-commerce", value: 20, color: "#1A1A1A" },
    { label: "Marketing", value: 15, color: "#A0A0B0" },
  ];

  let cumulativeValue = 0;

  return (
    <div className="flex flex-col items-center lg:items-start gap-8 md:gap-12">
      <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {data.map((item, i) => {
            const radius = 35;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (item.value / 100) * circumference;
            const rotation = (cumulativeValue / 100) * 360;
            cumulativeValue += item.value;

            return (
              <motion.circle
                key={i}
                cx="50"
                cy="50"
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                style={{
                  rotate: rotation,
                  transformOrigin: "center",
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[50%] h-[50%] bg-white rounded-full" />
        </div>
      </div>
      <div className="space-y-3 md:space-y-4 w-full">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
            <span className="text-base md:text-lg text-charcoal/80 font-medium whitespace-nowrap">
              {item.label} <span className="text-charcoal/30 mx-1">–</span> <span className="font-bold text-charcoal">{item.value}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductionBarChart = () => {
  const chartData = [
    { label: "Année 1", value: 100, color: "#E2DED0" },
    { label: "Année 2", value: 250, color: "#829B85" },
    { label: "Année 3", value: 500, color: "#1a3d25" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center px-2">
      <div className="w-full flex items-end justify-between h-64 md:h-80 gap-3 md:gap-8 border-b-2 border-charcoal/10 pb-2 mb-6 relative">
        {chartData.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end group">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.2) }}
              className="text-xs md:text-sm font-bold text-charcoal"
            >
              {item.value} u/m
            </motion.span>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.value / 500) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
              className="w-full max-w-[140px] rounded-t-sm shadow-sm hover:brightness-105 transition-all"
              style={{ backgroundColor: item.color }}
            />
          </div>
        ))}
      </div>
      
      <div className="w-full flex justify-between mb-8 md:mb-16 px-2">
        {chartData.map((item, i) => (
          <div key={i} className="flex-1 text-center font-bold text-charcoal uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">
            {item.label}
          </div>
        ))}
      </div>

      <div className="space-y-2 md:space-y-3 text-center bg-charcoal/[0.02] p-6 md:p-8 rounded-xl w-full border border-charcoal/5">
        <p className="text-[10px] md:text-sm font-bold text-charcoal uppercase tracking-[0.2em] md:tracking-[0.3em] italic mb-1">Unités produites par mois</p>
        <p className="text-base md:text-lg text-charcoal/80 leading-relaxed font-light">
          Production ajustée à la demande.<br />
          Capacité extensible via <span className="font-medium text-charcoal">ateliers partenaires</span> identifiés au Maghreb.
        </p>
      </div>
    </div>
  );
};

export default function Projet() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Standard height like other pages */}
      <Hero 
        title="Modèle structuré, risque maîtrisé"
        subtitle=""
        className="bg-black border-b border-white/10"
        centered={true}
        fullHeight={true}
        showButton={false}
        titleClassName="lg:whitespace-nowrap pt-12 md:pt-16"
      >
        <Infographic />
      </Hero>

      {/* Section Structure Financière */}
      <div className="bg-white w-full py-16 md:py-24 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
                Structure financière & besoin <br />
                <span className="italic text-[#244D2F] font-medium">d’investissement</span>
              </h2>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light leading-relaxed">
                Le lancement nécessite un financement initial compris entre <span className="font-bold text-[#244D2F]">25 000 € et 30 000 €</span>.
              </p>
            </div>
            
            <div className="space-y-10 pt-4 md:pt-2">
              <div className="space-y-6">
                <p className="text-lg font-bold text-charcoal uppercase tracking-[0.3em] opacity-70">Cette enveloppe est dédiée à :</p>
                <ul className="space-y-5">
                  {[
                    "Production premier lot, sourcing & déplacements terrain",
                    "Logistique, import & développement e-commerce",
                    "Lancement marketing initial"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-xl md:text-2xl text-charcoal/80 group">
                      <div className="w-2 h-2 rounded-full bg-[#244D2F] mt-2.5 shrink-0 transition-transform group-hover:scale-125" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-2xl font-serif italic text-charcoal/60 border-l-2 border-[#244D2F]/20 pl-8 py-2">
                Structure légère, exposition maîtrisée, montée en charge progressive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Graphics (Donut & Production) */}
      <SectionWrapper className="bg-[#F1F5F2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Utilisation des fonds */}
          <div className="space-y-12 md:space-y-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal text-center lg:text-left">
              Utilisation des fonds
            </h2>
            <DonutChart />
          </div>

          {/* Right: Projection de production */}
          <div className="space-y-8 md:space-y-12 mt-16 lg:mt-0">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
                Projection de production maîtrisée
              </h2>
              <p className="text-base text-charcoal/60 italic font-light">
                Projection prudente basée sur la capacité atelier existante et extensible.
              </p>
            </div>
            <ProductionBarChart />
          </div>
        </div>
      </SectionWrapper>

      {/* Conclusion Section */}
      <SectionWrapper className="bg-[#244D2F] text-white text-center [&>div]:py-16 md:[&>div]:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Un modèle maîtrisé, un marché réel, une ambition structurée
          </h2>
          <div className="space-y-8 text-xl md:text-2xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto">
            <p>
              Le projet repose sur une production artisanale contrôlée, un positionnement premium clair et une distribution directe à marge préservée.<br />
              La montée en charge est progressive, alignée sur la demande et la capacité atelier existante.
            </p>
            <div className="h-px w-20 bg-white/20 mx-auto" />
            <p>
              L’investissement vise à structurer un acteur de référence sur un segment encore peu organisé.<br />
              Une croissance raisonnée, ancrée dans un savoir-faire authentique et défendable.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
