import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";

export default function PartenariatsPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper className="bg-white pb-12 [&>.section-container]:pt-20">
        <div className="max-w-3xl space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-light text-charcoal">Partenariats & Investissement</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Nous construisons des relations durables avec des partenaires stratégiques et des investisseurs partageant notre vision de l'artisanat premium.
            <br />
            Le projet est structuré pour une croissance maîtrisée et une rentabilité pérenne.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper light className="pb-12">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-charcoal text-center md:text-left">Opportunités de collaboration</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed text-center md:text-left">
            Nous sommes ouverts à des discussions avec des acteurs pouvant accélérer notre déploiement tout en respectant notre ADN artisanal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-medium text-olive">Investissement</h3>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Modèle capital-efficient avec des besoins de financement ciblés sur le stock et le marketing.
                <br />
                Vision long-terme sur un marché de niche à fort potentiel.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-medium text-olive">Partenariats</h3>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Recherche de relais de distribution sélectifs et de partenaires médias affinitaires.
                <br />
                Co-construction de valeur autour de l'authenticité et du savoir-faire.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
            Pourquoi nous rejoindre ?
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Un positionnement unique sur un segment délaissé par les acteurs industriels.
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Une structure opérationnelle déjà validée (sourcing, logistique, conformité).
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Une marque avec un fort capital sympathie et une légitimité culturelle forte.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#1B3C24] text-white [&>.section-container]:pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-tight">
            Construisons ensemble la référence du premium artisanal
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nous sommes à votre disposition pour échanger sur les modalités de collaboration et vous présenter notre plan de développement détaillé.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
              Une exécution rigoureuse au service d'une ambition claire : valoriser l'artisanat du Maghreb à travers des objets d'exception.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
