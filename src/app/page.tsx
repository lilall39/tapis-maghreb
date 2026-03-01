"use client";

import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isCardHovered) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, [isCardHovered]);

  // Auto-scroll loop for the marquee
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    const step = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };
    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Pause temporaire pour laisser l'animation de défilement se faire
      setIsPaused(true);
      
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });

      // Reprendre l'auto-scroll après l'animation (1s)
      setTimeout(() => setIsPaused(false), 1000);
    }
  };

  const rugImages = [
    "/assets/rug-loom.png",
    "/assets/image-e2e21e68-4a9b-409a-af1f-222d37b081b8.png",
    "/assets/image-bc824a78-7729-428f-965b-a83e646d3c91.png",
    "/assets/yarn-colors.png",
    "/assets/stacked-rugs.png",
    "/assets/image-0755cdb5-2875-4ce3-ab32-f22be0e9d02e.png",
    "/assets/image-1143feef-d38a-4c91-a695-2641608cfd62.png",
    "/assets/image-b2ec453e-4445-4435-801d-c2a1ee18befd.png",
    "/assets/image-8a145e3b-5d43-4cf3-8604-2e0b79cb5388.png",
    "/assets/rug-pattern.png",
    "/assets/rug-design-2.png"
  ];

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero Immersif */}
      <Hero 
        title={
          <div className="flex flex-col">
            <span className="lg:whitespace-nowrap">L’artisanat du Maghreb,</span>
            <span className="lg:whitespace-nowrap">un fort potentiel à structurer</span>
          </div>
        }
        subtitle="Un marché massif, peu structuré sur le segment premium. Nous redéfinissons le tapis de prière comme un objet d'exception, alliant tradition séculaire et design contemporain."
        imageUrl="/assets/hero-v4.png"
        textContainerClassName="lg:-ml-24"
        titleClassName="pt-12 md:pt-16"
        subtitleClassName="text-2xl md:text-3xl not-italic font-normal mt-8 md:mt-12"
        buttonContainerClassName="pt-12 md:pt-20"
      >
        <div className="relative h-full w-full min-h-[500px] lg:min-h-[650px]">
          <AnimatePresence mode="wait">
            {activeCard === 0 ? (
              /* Première Carte - Chiffres Clés */
              <motion.div 
                key="card1"
                initial={{ y: "100%", x: 30, rotate: 2, opacity: 0 }}
                animate={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8 } }}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3
                }}
                className="absolute inset-0 md:top-0 md:-bottom-32 md:-right-56 md:left-28 glass-card border-l-4 border-brand-primary backdrop-blur-3xl bg-[#1A1A1A]/20 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-center px-12 py-20 z-10 cursor-default"
              >
                <div className="space-y-8 -translate-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pb-4 border-b border-white/10 mb-8"
                  >
                    <p className="text-brand-accent font-bold uppercase tracking-[0.3em] text-base mb-1">Chiffres Clés</p>
                    <h3 className="text-4xl font-serif text-[#F5E6D3] italic">Analyse du Marché</h3>
                  </motion.div>

                  {[
                    { label: "Marché large", value: "30M+", desc: "Consommateurs en Europe" },
                    { label: "Usage", value: "Quotidien", desc: "Forte récurrence & cadeau" },
                    { label: "Segment", value: "Premium", desc: "Offre à structurer" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 + (i * 0.2), ease: "easeOut" }}
                      className="flex flex-col"
                    >
                      <div className="text-5xl font-serif text-[#D2B48C] font-bold origin-left drop-shadow-sm mb-6">
                        {stat.value}
                      </div>
                      <div className="space-y-0">
                        <p className="text-xl font-bold text-[#DCCBB5] uppercase tracking-[0.2em]">
                          {stat.label}
                        </p>
                        <p className="text-xl text-[#F5E6D3]/80 font-medium italic leading-relaxed">
                          {stat.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Deuxième Carte - Overlay */
              <motion.div 
                key="card2"
                initial={{ y: "100%", x: 20, rotate: -1, opacity: 0 }}
                animate={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8 } }}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="absolute inset-0 md:top-0 md:-bottom-32 md:-right-56 md:left-28 glass-card border-l-4 border-brand-primary backdrop-blur-3xl bg-[#1A1A1A]/20 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-center px-12 py-20 z-20 cursor-default"
              >
                <div className="space-y-8 -translate-y-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4"
                  >
                    <Star className="text-[#D2B48C]" size={32} />
                  </motion.div>
                  
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-4xl font-serif text-[#F5E6D3] leading-tight"
              >
                Une opportunité <br />
                <span className="italic text-[#D2B48C]">unique de structuration</span>
              </motion.h3>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-2xl text-[#F5E6D3]/90 leading-relaxed font-light">
                  <p>L’usage est quotidien.</p>
                  <p>La demande qualitative existe.</p>
                  <p>Mais l’offre reste majoritairement industrielle.</p>
                </div>
                
                <p className="text-xl text-[#F5E6D3]/70 font-light">
                  Le marché demeure fragmenté, sans référence claire sur le premium artisanal.
                </p>

                <p className="text-2xl text-[#DCCBB5] font-serif italic border-l-2 border-brand-primary pl-6 mt-12 lg:-ml-6">
                  “Nous construisons la marque de référence du premium artisanal.”
                </p>
              </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Hero>
      
      {/* Section 2: Galerie Défilante avec Navigation */}
      <div className="py-12 bg-white border-y border-brand-accent/10 relative group">
        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all border border-brand-accent/20 cursor-pointer"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all border border-brand-accent/20 cursor-pointer"
            aria-label="Suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Container (Marquee effect + Manual scroll) */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          {/* Duplicate images for infinite scroll loop */}
          {[...rugImages, ...rugImages].map((src, i) => (
            <div key={i} className="relative w-80 h-96 shrink-0 group overflow-hidden shadow-none">
              <Image 
                src={src} 
                alt="Tapis artisanal" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm font-serif italic">Savoir-faire ancestral</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Le décalage structurel */}
      <SectionWrapper className="bg-white pt-0 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center mb-4 mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight flex flex-col items-center">
              <span className="lg:whitespace-nowrap">L’usage est quotidien, la demande qualitative existe,</span>
              <span className="lg:whitespace-nowrap">mais l’offre reste <span className="italic text-brand-primary font-medium">majoritairement industrielle et fragmentée.</span></span>
            </h2>
            <p className="text-2xl text-charcoal/90 font-light max-w-2xl mx-auto italic">
              Un acteur positionné clairement sur l’artisanat haut de gamme peut y construire une marque de référence.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center mt-24">
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-widest rounded-full"
            >
              Le Constat
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
              Un décalage structurel entre <span className="italic text-brand-primary">usage et offre</span>
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              Le tapis de prière est un objet central, pourtant son traitement reste majoritairement industriel et standardisé. Une clientèle urbaine et solvable recherche aujourd'hui des produits sobres, authentiques et durables.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 text-brand-primary font-bold hover:gap-5 transition-all cursor-pointer"
              >
                Détails de l'opportunité <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              size="sm"
              title="Objet central"
              titleClassName="text-xl md:text-2xl text-black font-bold"
              descriptionClassName="mt-8"
              description="Utilisé quotidiennement, l'offre dominante reste pourtant industrielle et peu différenciée."
              delay={0.1}
            />
            <Card 
              size="sm"
              title="Fragmenté"
              titleClassName="text-xl md:text-2xl text-black font-bold"
              descriptionClassName="mt-8"
              description="Absence de marque de référence sur le haut de gamme. Aucun acteur positionné clairement."
              delay={0.2}
            />
            <Card 
              size="sm"
              title="Solvable"
              titleClassName="text-xl md:text-2xl text-black font-bold"
              descriptionClassName="mt-8"
              description="Une demande qualitative forte pour des produits qui portent une âme et une histoire."
              delay={0.3}
              className="md:col-span-2"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Taille du Marché (Detailed & Compact) */}
      <SectionWrapper light={false} className="bg-[#352F36] text-white [&>div]:py-24 md:[&>div]:py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Market Stats Left */}
          <div className="space-y-6 text-xl">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight border-l-2 border-brand-accent pl-6 mb-8">
              Taille de marché <br />
              <span className="text-brand-accent italic">(avec sources)</span>
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-brand-accent font-bold uppercase tracking-wider text-xl">Un marché significatif en Europe</p>
                <p className="text-2xl font-light">
                  L’Europe compte environ <span className="font-bold text-white">30 millions</span> de musulmans.
                </p>
                <p className="text-lg text-white/40 italic">(Source : Pew Research Center)</p>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-light">
                  En France, la population musulmane est estimée entre <span className="font-bold text-white">5 et 6 millions</span> de personnes, soit l’une des plus importantes d’Europe occidentale.
                </p>
                <p className="text-lg text-white/40 italic">(Source : Pew Research Center)</p>
              </div>
              
              <p className="text-2xl font-normal leading-relaxed opacity-90 border-t border-white/5 pt-4">
                L’usage quotidien du tapis de prière et la logique cadeau (Ramadan, Aïd, événements familiaux) rendent la demande structurellement récurrente.
              </p>
            </div>
          </div>

          {/* Conclusion Right */}
          <div className="lg:border-l lg:border-white/10 lg:pl-12 space-y-6 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-serif leading-tight text-brand-accent">
                Construisons ensemble une marque de référence
              </h3>
              <p className="text-2xl opacity-70 leading-relaxed">
                Un acteur positionné sur l’artisanat haut de gamme peut capter un segment de marché durable et fidèle.
              </p>
              <div className="pt-10">
                <Link href="/projet">
                  <button className="w-full md:w-auto px-8 py-3 bg-[#DCCBB5] text-black font-bold rounded-sm uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl cursor-pointer">
                    Découvrir notre modèle
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
