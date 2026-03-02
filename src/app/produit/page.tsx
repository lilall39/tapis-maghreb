"use client";

import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Produit() {
  const [activeCard, setActiveCard] = useState(0);
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {
    if (isCardHovered) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, [isCardHovered]);
  const rugImages = [
    "/assets/image-e2e21e68-4a9b-409a-af1f-222d37b081b8.png",
    "/assets/image-bc824a78-7729-428f-965b-a83e646d3c91.png",
    "/assets/image-180b2b43-947f-47be-ba59-47c08912fbcb.png",
    "/assets/image-0755cdb5-2875-4ce3-ab32-f22be0e9d02e.png",
    "/assets/image-1143feef-d38a-4c91-a695-2641608cfd62.png",
    "/assets/image-b2ec453e-4445-4435-801d-c2a1ee18befd.png",
    "/assets/image-8a145e3b-5d43-4cf3-8604-2e0b79cb5388.png"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero 
        title={
          <div className="flex flex-col">
            <span className="lg:whitespace-nowrap">Positionnement cohérent,</span>
            <span className="lg:whitespace-nowrap">et structuré</span>
          </div>
        }
        subtitle="Une offre claire, une production maîtrisée et des éléments différenciants identifiés. Les fondations sont posées pour une exécution progressive et maîtrisée."
        imageUrl="/assets/rugs-collection.png"
        titleClassName="pt-4 md:pt-16"
        textContainerClassName="lg:-ml-24"
        subtitleClassName="text-xl md:text-2xl not-italic font-normal mt-4 md:mt-12"
        buttonContainerClassName="pt-4 md:pt-24"
        buttonText="Pourquoi nous rejoindre"
        buttonLink="/partenariats"
      >
        <div className="relative h-full w-full min-h-[250px] lg:min-h-[650px]">
          <AnimatePresence mode="wait">
            {activeCard === 0 ? (
              /* Première Carte - Vert Foncé */
              <motion.div 
                key="prod-card1"
                initial={{ y: "100%", x: 30, rotate: 2, opacity: 0 }}
                animate={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8 } }}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="absolute inset-0 lg:top-24 lg:-bottom-40 lg:-right-32 lg:left-28 glass-card border-l-4 border-[#D2B48C] backdrop-blur-3xl bg-[#1A1A1A]/20 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-start pt-2 lg:pt-16 px-4 lg:px-12 py-2 lg:py-10 z-10 cursor-default"
              >
                <div className="space-y-1 lg:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pb-1 lg:pb-2 border-b border-white/10 mb-1 lg:mb-2"
                  >
                    <h3 className="text-lg lg:text-3xl font-serif text-[#F5E6D3] italic leading-tight mb-1 lg:mb-2">
                      Des éléments difficilement <span className="italic text-[#D2B48C]">réplicables</span>
                    </h3>
                    <p className="text-sm lg:text-xl text-[#F5E6D3]/90 font-normal leading-tight lg:leading-relaxed">
                      Positionnement clair, ancrage culturel et structure opérationnelle.
                    </p>
                  </motion.div>

                  <div className="space-y-2 lg:space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="flex items-start gap-2 lg:gap-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D2B48C] mt-1.5 lg:mt-2.5 flex-shrink-0" />
                      <p className="text-xs lg:text-xl text-[#F5E6D3]/90 leading-tight lg:leading-relaxed font-light">
                        Production artisanale au Maghreb, ateliers identifiés.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="flex items-start gap-2 lg:gap-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D2B48C] mt-1.5 lg:mt-2.5 flex-shrink-0" />
                      <p className="text-xs lg:text-xl text-[#F5E6D3]/90 leading-tight lg:leading-relaxed font-light">
                        Volumes maîtrisés et qualité constante.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Deuxième Carte - Vert Foncé Overlay */
              <motion.div 
                key="prod-card2"
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
                className="absolute inset-0 lg:top-24 lg:-bottom-40 lg:-right-32 lg:left-28 glass-card border-l-4 border-[#D2B48C] backdrop-blur-3xl bg-[#1A1A1A]/20 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-start pt-2 lg:pt-16 px-4 lg:px-12 py-2 lg:py-10 z-10 cursor-default"
              >
                <div className="space-y-1 lg:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pb-1 lg:pb-2 border-b border-white/10 mb-1 lg:mb-2"
                  >
                    <h3 className="text-lg lg:text-3xl font-serif text-[#F5E6D3] italic leading-tight mb-1 lg:mb-2">
                      Positionnement <span className="italic text-[#D2B48C]">produit</span>
                    </h3>
                    <p className="text-sm lg:text-xl text-[#F5E6D3]/90 font-normal leading-tight lg:leading-relaxed">
                      Aucune marque structurée n’occupe aujourd’hui le segment artisanal haut de gamme.
                    </p>
                  </motion.div>

                  <div className="space-y-2 lg:space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="flex items-start gap-2 lg:gap-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D2B48C] mt-1.5 lg:mt-2.5 flex-shrink-0" />
                      <p className="text-xs lg:text-xl text-[#F5E6D3]/90 leading-tight lg:leading-relaxed font-light">
                        Design sobre et contemporain.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="flex items-start gap-2 lg:gap-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D2B48C] mt-1.5 lg:mt-2.5 flex-shrink-0" />
                      <p className="text-xs lg:text-xl text-[#F5E6D3]/90 leading-tight lg:leading-relaxed font-light">
                        Premium accessible, sans surcharge visuelle.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Hero>

      {/* Section 2: Paysage Concurrentiel */}
      <section className="w-full relative overflow-hidden bg-white py-0 md:py-2">
        {/* Double Rideau Reveal (Ultra Premium) - Vert & Lent */}
        <div className="absolute inset-0 z-30 pointer-events-none flex overflow-hidden">
          <motion.div
            animate={{ x: [0, 0, "-100%", "-100%", 0] }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ 
              duration: 16, 
              times: [0, 0.375, 0.5, 0.875, 1], 
              ease: "easeInOut", 
              repeat: Infinity, 
              delay: 0.3 
            }}
            className="h-full w-1/2 bg-[#CAB8A1] relative overflow-hidden border-r border-black/5"
          >
            {/* Cadres intérieurs - Dégradé vers le centre (Gauche) */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute border-y border-l border-black/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" 
                style={{ 
                  inset: `${(i + 1) * 20}px`,
                  right: 0,
                  backgroundColor: `rgba(255, 255, 255, ${i * 0.1})`,
                  filter: `brightness(${1 - i * 0.02})`
                }} 
              />
            ))}
            
            {/* Texte sur le rideau gauche */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 z-20">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-[#3D3C30] leading-tight font-bold">
                  Origine & production
                </h3>
                <div className="space-y-2 text-charcoal text-lg md:text-2xl font-light leading-relaxed">
                  <p>Production artisanale au Maghreb, avec des ateliers identifiés.</p>
                  <p>Volumes maîtrisés et logique de qualité constante.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-px h-full bg-[#3D3C30]/20" />
          </motion.div>
          
          <motion.div
            animate={{ x: [0, 0, "100%", "100%", 0] }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              duration: 16, 
              times: [0, 0.375, 0.5, 0.875, 1], 
              ease: "easeInOut", 
              repeat: Infinity, 
              delay: 0.3 
            }}
            className="h-full w-1/2 bg-[#CAB8A1] relative overflow-hidden border-l border-black/5"
          >
            {/* Cadres intérieurs - Dégradé vers le centre (Droit) */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute border-y border-r border-black/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" 
                style={{ 
                  inset: `${(i + 1) * 20}px`,
                  left: 0,
                  backgroundColor: `rgba(255, 255, 255, ${i * 0.1})`,
                  filter: `brightness(${1 - i * 0.02})`
                }} 
              />
            ))}

            {/* Texte sur le rideau droit */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 z-20">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-[#3D3C30] leading-tight font-bold">
                  Positionnement produit
                </h3>
                <div className="space-y-2 text-charcoal text-lg md:text-2xl font-light leading-relaxed">
                  <p>Design sobre et contemporain.</p>
                  <p>Premium accessible, sans ostentation ni surcharge visuelle.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-px h-full bg-[#3D3C30]/20" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="space-y-2 w-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-tight whitespace-nowrap relative -left-[3ch]"
              >
                Un paysage concurrentiel <span className="italic text-[#3D3C30]">fragmenté</span>
              </motion.h2>

              <div className="space-y-3 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.0 }}
                  className="space-y-2"
                >
                  <p className="text-2xl md:text-3xl text-charcoal/90 font-light leading-relaxed">
                    Le marché du tapis de prière en Europe s’adresse à une population d’environ <span className="font-medium text-[#3D3C30]">25–30 millions</span> de musulmans, dont une part de <span className="italic font-medium">5–6 millions</span> en France.
                  </p>
                  <p className="text-xs text-charcoal/40 italic uppercase tracking-widest font-bold">
                    Source: Pew Research Center
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-2xl text-charcoal leading-relaxed"
                >
                  Malgré cette audience ample et solvable, l’offre premium spécialisée reste <span className="text-charcoal font-medium">rare et dispersée</span>, principalement constituée de produits importés industriels à bas coût sans identité culturelle marquée.
                </motion.p>
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="h-px w-24 bg-[#3D3C30]/20 mx-auto"
                />
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="text-2xl font-serif italic text-[#3D3C30] leading-relaxed relative -top-[1em]"
                >
                  Aucune marque structurée n’occupe aujourd’hui le segment artisanal haut de gamme du Maghreb en Europe, ce qui laisse un espace concurrentiel significatif pour une marque différenciée.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Différentiation */}
      <SectionWrapper className="bg-[#3D3C30] text-white [&>div]:py-4 md:[&>div]:py-12">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-6">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#D2B48C]">
            Des éléments difficilement <span className="italic text-white">réplicables</span>
          </h2>
          <p className="text-4xl text-white font-light leading-relaxed">
            Positionnement clair, ancrage culturel et structure opérationnelle maîtrisée.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D2B48C]/30 text-white"
            titleClassName="text-xl md:text-3xl"
            descriptionClassName="mt-8"
            accentColor="bg-[#D2B48C]"
            hoverAccentColor="group-hover:text-[#D2B48C]"
            title="Sourcing direct"
            description="Positionnement centré sur l’artisanat du Maghreb, segment encore peu structuré sur le premium."
          />
          <Card 
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D2B48C]/30 text-white"
            titleClassName="text-xl md:text-3xl"
            descriptionClassName="mt-8"
            accentColor="bg-[#D2B48C]"
            hoverAccentColor="group-hover:text-[#D2B48C]"
            title="Accès ateliers"
            description="Relations opérationnelles avec des partenaires de production identifiés. Maîtrise des volumes."
          />
          <Card 
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D2B48C]/30 text-white"
            titleClassName="text-xl md:text-3xl"
            descriptionClassName="mt-8"
            accentColor="bg-[#D2B48C]"
            hoverAccentColor="group-hover:text-[#D2B48C]"
            title="Positionnement"
            description="Design sobre et contemporain. Premium accessible, sans ostentation ni surcharge visuelle."
          />
          <Card 
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D2B48C]/30 text-white"
            titleClassName="text-xl md:text-3xl"
            descriptionClassName="mt-8"
            accentColor="bg-[#D2B48C]"
            hoverAccentColor="group-hover:text-[#D2B48C]"
            title="Relais média"
            description="Relais éditorial et légitimité culturelle au sein d’une audience qualifiée via des partenaires média."
          />
        </div>
      </SectionWrapper>

    </div>
  );
}
