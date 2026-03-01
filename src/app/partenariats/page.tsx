"use client";

import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Handshake, 
  UserPlus, 
  Users, 
  HeartHandshake, 
  Rocket,
  Target,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

export default function Partenariats() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const opportunities = [
    { icon: <Target size={24} />, title: "Pourquoi nous rejoindre ?", desc: "Un positionnement unique sur un segment délaissé par les acteurs industriels." },
    { icon: <ShieldCheck size={24} />, title: "Pourquoi nous rejoindre ?", desc: "Une structure opérationnelle déjà validée (sourcing, logistique, conformité)." },
    { icon: <Handshake size={24} />, title: "Investissement stratégique", desc: "Participez au financement de notre croissance et au développement de notre marque de référence." },
    { icon: <Users size={24} />, title: "Collaboration artisanale", desc: "Nous recherchons de nouveaux ateliers partageant notre exigence de qualité au Maghreb." },
    { icon: <UserPlus size={24} />, title: "Partenariats média", desc: "Co-création de contenus et visibilité au sein des communautés engagées et qualifiées." },
    { icon: <HeartHandshake size={24} />, title: "Réseau de distribution", desc: "Accès à des points de vente physiques premium sélectionnés avec soin." },
    { icon: <Rocket size={24} />, title: "Accélération & Mentoring", desc: "Apport d’expertise sur les enjeux de branding, logistique ou digital." }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 498 : clientWidth * 0.8;
      
      let nextScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      // Boucle infinie
      if (nextScroll < 0) nextScroll = scrollWidth - clientWidth;
      if (nextScroll >= scrollWidth - clientWidth + 10) nextScroll = 0;

      scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      scroll("right");
    }, 2800); // Augmenté de 0.3s (2500ms -> 2800ms)

    return () => clearInterval(autoPlayInterval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero 
        title="Partenariats & Investissement"
        subtitle="Nous construisons des relations durables avec des partenaires stratégiques et des investisseurs partageant notre vision de l'artisanat premium. Le projet est structuré pour une croissance maîtrisée et une rentabilité pérenne."
        imageUrl="/assets/partnership-hero-final.png"
        animateZoom={true}
        showButton={false}
        titleClassName="lg:whitespace-nowrap pt-12 md:pt-16"
        subtitleClassName="text-2xl md:text-3xl not-italic font-normal mt-8 md:mt-12"
      />

      {/* Section 2: Carousel à Tringle Dorée (Ultra Premium) */}
      <section className="w-full bg-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight whitespace-nowrap">
              Pourquoi nous rejoindre ? <span className="italic text-[#4A3728]">Opportunités de collaboration</span>
            </h2>
          </motion.div>
        </div>

        {/* Zone Carrousel Unifiée */}
        <div className="relative">
          {/* La Tringle */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent z-40" />
          
          {/* Container du Carrousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-proximity px-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+24px))] pb-10 pt-8 gap-12"
          >
            {opportunities.map((opt, i) => (
              <div key={i} className="relative flex-shrink-0 w-[80vw] md:w-[450px] snap-start">
                <motion.div 
                  initial="closed"
                  whileInView="open"
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative h-full w-full"
                >
                  <div className="absolute -top-10 left-0 w-full flex justify-around px-16 z-50">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="w-4 h-4 rounded-full border-2 border-[#D2B48C] bg-white shadow-md" />
                    ))}
                  </div>

                  <motion.div
                    variants={{
                      closed: { 
                        clipPath: "inset(100% 0 0 0)", 
                        opacity: 0 
                      },
                      open: { 
                        clipPath: [
                          "inset(100% 0 0 0)", // En bas
                          "inset(0% 0 0 0)",   // Recouvre tout
                          "inset(0% 0 100% 0)"  // S'efface par le haut
                        ],
                        opacity: [0, 1, 1, 0],
                        transition: { 
                          duration: 3, 
                          times: [0, 0.4, 1],
                          ease: [0.65, 0, 0.35, 1],
                          delay: 0.4 
                        } 
                      }
                    }}
                    className="absolute inset-0 bg-[#CAB8A1] z-30 shadow-2xl flex items-center justify-center overflow-hidden border-l border-white/30"
                  >
                    <div className="absolute inset-0 opacity-5">
                      <svg width="100%" height="100%" className="text-black">
                        <pattern id="cloth" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M0 10 L10 0 M-2 2 L2 -2 M8 12 L12 8" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#cloth)" />
                      </svg>
                    </div>
                    <span className="text-[#3D3C30] font-serif italic text-7xl opacity-10 select-none">{i + 1}</span>
                  </motion.div>

                <Card 
                  title={opt.title}
                  description={opt.desc}
                  delay={1.2}
                  className="h-[460px] flex flex-col justify-between border-charcoal/5 shadow-sm"
                  titleClassName="text-xl md:text-3xl text-black"
                  descriptionClassName="mt-16"
                  accentColor="bg-[#4A3728]"
                  hoverAccentColor="group-hover:text-[#4A3728]"
                >
                  <div className="mb-6 p-5 w-16 h-16 bg-[#4A3728]/5 text-[#4A3728] rounded-full flex items-center justify-center group-hover:bg-[#4A3728] group-hover:text-white transition-all duration-500">
                    {opt.icon}
                  </div>
                </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion Vert */}
      <SectionWrapper className="bg-[#4A3728] text-white text-center [&>div]:py-20 md:[&>div]:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Construisons ensemble la référence du premium artisanal
          </h2>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-light">
              Nous sommes à votre disposition pour échanger sur les modalités de collaboration et vous présenter notre plan de développement détaillé.
            </p>
            <p className="text-2xl md:text-4xl opacity-90 leading-relaxed font-serif italic border-t border-white/10 pt-8 pb-12">
              « Une exécution rigoureuse au service d'une ambition claire : valoriser l'artisanat du Maghreb à travers des objets d'exception. »
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
