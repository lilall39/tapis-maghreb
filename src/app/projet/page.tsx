import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export default function ProjectPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper light>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl font-light text-charcoal">Démarche & Fiabilité</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Notre vision est de construire la marque de référence du tapis de prière artisanal du Maghreb. Nous privilégions une croissance maîtrisée pour garantir l'excellence de chaque pièce.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            size="md"
            title="Sourcing & Fabrication"
            description="Le sourcing est actif. Nos partenariats avec les ateliers en Algérie assurent une production authentique et de haute qualité."
          >
            <div className="mt-4 px-3 py-1 bg-olive/10 text-olive text-xs font-medium inline-block rounded-full">
              Actif
            </div>
          </Card>
          
          <Card 
            size="md"
            title="Contrôle & Conformité"
            description="Chaque série subit un contrôle qualité rigoureux. Le dépôt de marque et la conformité aux normes textiles européennes sont déjà validés."
          >
            <div className="mt-4 px-3 py-1 bg-olive text-white text-xs font-medium inline-block rounded-full">
              Validé
            </div>
          </Card>

          <Card 
            size="md"
            title="Logistique & SAV"
            description="La logistique est opérationnelle. Le stockage et la distribution sont organisés pour assurer des délais de livraison fiables et un service après-vente réactif."
          >
            <div className="mt-4 px-3 py-1 bg-olive text-white text-xs font-medium inline-block rounded-full">
              Opérationnel
            </div>
          </Card>
        </div>
        
        <div className="mt-24 p-12 bg-charcoal text-stone-50 rounded-sm">
          <h3 className="text-2xl font-light mb-6">Notre Vision</h3>
          <p className="text-stone-100/70 max-w-2xl leading-relaxed">
            Construire une marque qui allie spiritualité, artisanat et design contemporain. Nous voulons offrir des objets qui durent et qui portent en eux la noblesse du travail manuel du Maghreb.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
