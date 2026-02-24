import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper light>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl font-light text-charcoal">Tapis & Savoir-faire</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Nous proposons une sélection de modèles exclusifs. Les séries limitées sont disponibles et la production est constante. Nos tapis privilégient des matières naturelles nobles pour un confort et une qualité thermique optimale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-olive">Matières</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Laine locale et coton de haute qualité. Nous sélectionnons chaque fibre pour sa douceur, sa résistance et sa capacité à vieillir avec noblesse.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-olive">Design</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Une approche sobre et épurée. Pas de motifs kitsch ou surchargés, mais un focus sur la texture et les nuances naturelles des fibres.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl font-light text-charcoal">Séries disponibles</h2>
            <p className="text-sm text-olive mt-2 italic">Positionnement prix : 45 – 75 €</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            size="md"
            title="Modèle Sable"
            description="Laine écrue, texture grainée. La quintessence de la sobriété pour un intérieur minimaliste."
          >
            <div className="relative w-full h-64 bg-stone-100 mt-4 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1544022613-e87cd276c784?auto=format&fit=crop&q=80&w=1000" 
                alt="Modèle Sable" 
                fill 
                className="object-cover"
              />
            </div>
          </Card>
          
          <Card 
            size="md"
            title="Modèle Terre"
            description="Mélange laine et coton, teintes terreuses. Un confort thermique supérieur pour les saisons fraîches."
          >
            <div className="relative w-full h-64 bg-stone-100 mt-4 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000" 
                alt="Modèle Terre" 
                fill 
                className="object-cover"
              />
            </div>
          </Card>

          <Card 
            size="md"
            title="Série Artisanale Algérie"
            description="Tissage manuel par nos partenaires en Algérie. Petites séries numérotées, chaque pièce est unique."
          >
            <div className="relative w-full h-64 bg-stone-100 mt-4 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1528642463367-125d2b747c48?auto=format&fit=crop&q=80&w=1000" 
                alt="Série Artisanale" 
                fill 
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}
