import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper light>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl font-light text-charcoal text-center mb-16">Partenaires & Accès</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              size="sm"
              title="Bloc Clients"
              description="Contactez-nous pour toute demande d'information ou pour commander nos séries limitées."
            >
              <form className="mt-4 space-y-3">
                <input 
                  type="email" 
                  placeholder="votre-email@exemple.com" 
                  className="w-full px-4 py-3 bg-white border border-olive/10 text-sm focus:outline-none focus:border-olive transition-colors"
                />
                <button className="w-full py-3 bg-olive text-white text-xs tracking-widest uppercase hover:bg-charcoal transition-colors">
                  Envoyer
                </button>
              </form>
            </Card>
            
            <Card 
              size="sm"
              title="Artisans"
              description="Vous êtes un artisan ou un atelier au Maghreb ? Nous cherchons des partenaires pour nos prochaines séries."
            >
              <p className="mt-4 text-xs font-semibold text-olive">
                contact@tapis-maghreb.com
              </p>
            </Card>

            <Card 
              size="sm"
              title="Partenaires & Médias"
              description="Pour toute demande professionnelle, dossier de presse ou opportunités d'investissement."
            >
              <p className="mt-4 text-xs font-semibold text-olive">
                pro@tapis-maghreb.com
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
