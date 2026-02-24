import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero 
        title="Tapis de prière artisanaux du Maghreb"
        subtitle="Objets spirituels sobres, premium et authentiques."
        imageUrl="/hero-rug.png"
      />
      
      <SectionWrapper>
        <div className="max-w-2xl mb-16">
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Notre marque est active et opérationnelle. Nos séries limitées sont disponibles, s’inscrivant dans une démarche à la fois artisanale et contemporaine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            size="sm"
            title="Origine & sens"
            description="Chaque tapis puise ses racines dans l'héritage spirituel du Maghreb, réinterprété pour le monde d'aujourd'hui."
          />
          <Card 
            size="sm"
            title="Sobriété du design"
            description="Une esthétique minimaliste qui favorise le recueillement, loin de toute distraction visuelle superflue."
          />
          <Card 
            size="sm"
            title="Fabrication artisanale"
            description="Le respect du geste et de la matière pour des objets durables, porteurs d'une histoire humaine."
          />
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-4 bg-olive text-stone-50 text-sm tracking-widest uppercase hover:bg-charcoal transition-colors">
            Faire une demande de contact
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
