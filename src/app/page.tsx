import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Opportunité & Indicateurs */}
      <Hero 
        title="Un marché massif, peu structuré sur le premium"
        subtitle={`Le tapis de prière est un objet d’usage quotidien pour des millions de musulmans dans le monde.\nL’offre actuelle est majoritairement industrielle et peu différenciée.`}
      >
        <div className="flex flex-col gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-olive/10 pt-8 md:pt-0 md:pl-8 mt-8 md:mt-0">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-charcoal tracking-tight">Marché large</h3>
            <p className="text-base text-charcoal/60 leading-relaxed">Des dizaines de millions de consommateurs en Europe</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-charcoal tracking-tight">Usage récurrent</h3>
            <p className="text-base text-charcoal/60 leading-relaxed">Objet quotidien + forte logique cadeau</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-charcoal tracking-tight">Segment premium faible</h3>
            <p className="text-base text-charcoal/60 leading-relaxed">Offre haut de gamme encore peu structurée</p>
          </div>
        </div>
      </Hero>
      
      {/* Section 2: Décalage structurel (Alternée) */}
      <SectionWrapper className="bg-stone-100 [&>.section-container]:pt-4 [&>.section-container]:pb-1 md:[&>.section-container]:pt-16 md:[&>.section-container]:pb-8">
        <div className="max-w-2xl mb-10 md:mb-16 mt-4 md:mt-6">
          <h2 className="text-2xl md:text-3xl font-light text-charcoal tracking-tight">
            Un décalage structurel entre usage et offre
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            size="sm"
            title="Objet central, traitement standardisé"
            description="Le tapis de prière est utilisé quotidiennement. L’offre dominante reste industrielle et peu différenciée."
          />
          <Card 
            size="sm"
            title="Absence de segment premium structuré"
            description="Peu d’acteurs positionnés sur le haut de gamme. Marché fragmenté, sans marque de référence."
          />
          <Card 
            size="sm"
            title="Demande qualitative sous-adressée"
            description="Une clientèle urbaine et solvable recherche des produits sobres, authentiques et durables."
          />
        </div>
        
        <div className="mt-4 md:mt-20 flex justify-center">
          <button className="px-10 py-4 bg-olive text-stone-50 text-sm tracking-widest uppercase hover:bg-charcoal transition-colors">
            Faire une demande de contact
          </button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 pt-2 pb-12 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
            Taille de marché (avec sources)
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-light text-charcoal">Un marché significatif en Europe</h3>
            <p className="text-lg md:text-xl text-charcoal/80 leading-snug">
              L’Europe compte environ 30 millions de musulmans
              <br />
              <span className="text-sm italic opacity-70">
                (<a href="https://www.pewresearch.org/religion/2017/11/29/europes-growing-muslim-population/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#244D2F] font-bold hover:underline">Source : Pew Research Center</a>)
              </span>
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-snug">
              En France, la population musulmane est estimée entre 5 et 6 millions de personnes, soit l’une des plus importantes d’Europe occidentale.
              <br />
              <span className="text-sm italic opacity-70">
                (<a href="https://www.pewresearch.org/religion/2017/11/29/appendix-a-methodology-europes-muslim-population/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#244D2F] font-bold hover:underline">Source : Pew Research Center</a>)
              </span>
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-snug">
              L’usage quotidien du tapis de prière et la logique cadeau (Ramadan, Aïd, événements familiaux) rendent la demande structurellement récurrente.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Conclusion (Blanche / stone-50) */}
      <SectionWrapper className="bg-[#1B3C24] text-white md:-mt-12 [&>.section-container]:py-12 md:[&>.section-container]:pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-tight">
            Un marché large, récurrent et encore peu structuré sur le premium
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              L’usage est quotidien, la demande qualitative existe, mais l’offre reste majoritairement industrielle et fragmentée.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Un acteur positionné clairement sur l’artisanat haut de gamme peut y construire une marque de référence.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
