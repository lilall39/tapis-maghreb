import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export default function ProjectPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper className="bg-white [&>.section-container]:pb-16 [&>.section-container]:pt-20">
        <div className="max-w-3xl space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-light text-charcoal">Modèle structuré, risque maîtrisé</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Un modèle simple, capital-efficient et progressif. Chaque étape de la chaîne de valeur est identifiée et contrôlée.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="[&>.section-container]:pt-20 [&>.section-container]:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card 
            size="md"
            title="Production maîtrisée"
            description="Volumes ajustables, ateliers identifiés, qualité contrôlée."
          />
          
          <Card 
            size="md"
            title="Distribution directe (D2C)"
            description="E-commerce propriétaire, marge préservée, relation client directe."
          />

          <Card 
            size="md"
            title="Stock non périssable"
            description="Produit durable, rotation saisonnière prévisible."
          />
        </div>

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
            <Card 
              size="lg"
              title="Montée en charge progressive"
              description="Croissance par paliers, sans dépendance à des volumes massifs initiaux."
              className="max-w-none"
            />
            <Card 
              size="lg"
              title="Structure légère & capital-efficient"
              description="Production limitée au démarrage pour maîtriser trésorerie et risque. Ajustement agile des volumes et investissements selon la demande."
              className="max-w-none"
            />
          </div>
        </div>

      </SectionWrapper>

      <SectionWrapper className="bg-white [&>.section-container]:pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
            Structure financière & besoin d’investissement
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-medium">
              Le lancement nécessite un financement initial compris entre 25 000 € et 30 000 €.
            </p>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-charcoal/70">Cette enveloppe est dédiée à :</p>
              <ul className="text-base md:text-lg text-charcoal/80 space-y-2 list-none px-4 md:px-0">
                <li>Production premier lot, sourcing & déplacements terrain</li>
                <li>Logistique, import & développement e-commerce</li>
                <li>Lancement marketing initial</li>
              </ul>
            </div>
            <p className="text-lg md:text-xl text-[#244D2F] font-medium pt-4">
              Structure légère, exposition maîtrisée, montée en charge progressive.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper light className="[&>.section-container]:pt-20 [&>.section-container]:pb-20">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Bloc 1: Utilisation des fonds */}
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                Utilisation des fonds
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                {/* Graphique Donut SVG */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#244D2F" strokeWidth="15" strokeDasharray="30 70" strokeDashoffset="0" pathLength="100" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#D6D3D1" strokeWidth="15" strokeDasharray="20 80" strokeDashoffset="-30" pathLength="100" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A7D7C5" strokeWidth="15" strokeDasharray="15 85" strokeDashoffset="-50" pathLength="100" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1A1A1A" strokeWidth="15" strokeDasharray="20 80" strokeDashoffset="-65" pathLength="100" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#9CA3AF" strokeWidth="15" strokeDasharray="15 85" strokeDashoffset="-85" pathLength="100" />
                    <circle cx="50" cy="50" r="30" fill="#FCFAF7" />
                  </svg>
                </div>

                {/* Légende */}
                <div className="text-left space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#244D2F]"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal/80">Production premier lot – 30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D6D3D1]"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal/80">Sourcing & déplacements – 20%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#A7D7C5]"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal/80">Logistique & import – 15%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#1A1A1A]"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal/80">E-commerce – 20%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#9CA3AF]"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal/80">Marketing – 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloc 2: Montée en charge prévisionnelle */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                  Projection de production maîtrisée
                </h2>
                <p className="mt-2 text-xs md:text-sm text-charcoal/60 italic">Projection prudente basée sur la capacité atelier existante et extensible.</p>
              </div>

              <div className="flex flex-col items-center justify-center pt-4">
                <div className="relative w-full max-w-[280px] sm:max-w-sm h-48 sm:h-64 flex items-end justify-between gap-2 sm:gap-4 px-4 border-b border-charcoal/10">
                  {/* Année 1 */}
                  <div className="relative flex-1 flex flex-col items-center group">
                    <div className="w-full bg-[#9CA3AF]/30 h-12 rounded-t-sm premium-transition group-hover:bg-[#9CA3AF]/50"></div>
                    <span className="mt-4 text-[10px] sm:text-xs font-medium text-charcoal/60">Année 1</span>
                    <span className="absolute -top-6 text-[10px] font-bold text-charcoal/40">100 u/m</span>
                  </div>
                  {/* Année 2 */}
                  <div className="relative flex-1 flex flex-col items-center group">
                    <div className="w-full bg-[#244D2F]/60 h-32 rounded-t-sm premium-transition group-hover:bg-[#244D2F]/80"></div>
                    <span className="mt-4 text-[10px] sm:text-xs font-medium text-charcoal/60">Année 2</span>
                    <span className="absolute -top-6 text-[10px] font-bold text-charcoal/40">250 u/m</span>
                  </div>
                  {/* Année 3 */}
                  <div className="relative flex-1 flex flex-col items-center group">
                    <div className="w-full bg-[#244D2F] h-40 sm:h-60 rounded-t-sm premium-transition"></div>
                    <span className="mt-4 text-[10px] sm:text-xs font-medium text-charcoal/60">Année 3</span>
                    <span className="absolute -top-6 text-[10px] font-bold text-charcoal/40">500 u/m</span>
                  </div>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-[10px] sm:text-xs italic text-charcoal/40">Unités produites par mois</p>
                  <p className="text-[10px] sm:text-xs text-charcoal/60">
                    Production ajustée à la demande.
                    <br />
                    Capacité extensible via ateliers partenaires identifiés au Maghreb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#1B3C24] text-white [&>.section-container]:pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-tight">
            Un modèle maîtrisé, un marché réel, une ambition structurée
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Le projet repose sur une production artisanale contrôlée, un positionnement premium clair et une distribution directe à marge préservée.
              <br />
              La montée en charge est progressive, alignée sur la demande et la capacité atelier existante.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
              L’investissement vise à structurer un acteur de référence sur un segment encore peu organisé.
              <br />
              Une croissance raisonnée, ancrée dans un savoir-faire authentique et défendable.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
