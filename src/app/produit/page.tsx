import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper className="bg-white pb-12 [&>.section-container]:pt-20">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-charcoal">Un positionnement cohérent et structuré</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Une offre claire, une production maîtrisée et des éléments différenciants identifiés.
            <br />
            Les fondations sont posées pour une exécution progressive et maîtrisée.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper light className="pb-12">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-charcoal">Une offre positionnée sur le premium artisanal du Maghreb</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Nous développons une offre structurée sur le segment premium des tapis de prière artisanaux.
            <br />
            Production maîtrisée, séries limitées et positionnement clair sur la qualité et l’origine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-olive">Origine & production</h3>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Production artisanale au Maghreb, avec des ateliers identifiés.
                <br />
                Volumes maîtrisés et logique de qualité constante.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-olive">Positionnement produit</h3>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Design sobre et contemporain.
                <br />
                Premium accessible, sans ostentation ni surcharge visuelle.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
            Un paysage concurrentiel fragmenté
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Le marché du tapis de prière en Europe s’adresse à une population d’environ 25–30 millions de musulmans (Pew Research Center, 2017), dont une part de 5–6 millions en France.
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Malgré cette audience ample et solvable, l’offre premium spécialisée reste rare et dispersée, principalement constituée de produits importés industriels à bas coût sans identité culturelle marquée.
            </p>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Aucune marque structurée n’occupe aujourd’hui le segment artisanal haut de gamme du Maghreb en Europe, ce qui laisse un espace concurrentiel significatif pour une marque différenciée.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="[&>.section-container]:pb-20">
        <div className="flex flex-col items-center text-center mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-light text-charcoal">Des éléments difficilement réplicables</h2>
            <p className="text-lg text-olive mt-2">Positionnement clair, ancrage culturel et structure opérationnelle maîtrisée.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            size="md"
            title="Origine Maghreb encore peu représentée"
            description="Positionnement centré sur l’artisanat du Maghreb, segment encore peu structuré sur le premium."
          />
          
          <Card 
            size="md"
            title="Accès direct aux ateliers artisanaux"
            description="Relations opérationnelles avec des partenaires de production identifiés. Maîtrise des volumes et de la qualité."
          />

          <Card 
            size="md"
            title="Partenaire média communautaire structurant"
            description="Relais éditorial et légitimité culturelle au sein d’une audience qualifiée."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#1B3C24] text-white [&>.section-container]:pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
            Un positionnement cohérent et structuré
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-white/90 leading-relaxed">
              L’offre repose sur une production artisanale maîtrisée au Maghreb, un design sobre et un positionnement premium accessible.
              <br />
              La structure d’offre est volontairement limitée et claire, avec des séries maîtrisées et un ancrage culturel identifiable.
            </p>
            <p className="text-xl text-white/90 leading-relaxed font-light italic">
              Les éléments différenciants — origine, accès ateliers et relais communautaire — constituent des bases défendables pour construire une marque durable sur un segment encore peu structuré.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
