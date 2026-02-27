import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-50 border-t border-olive/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <p className="text-sm font-medium text-charcoal">TAPIS</p>
          <p className="text-sm text-charcoal/60 max-w-xs mx-auto md:mx-0">
            Objets spirituels sobres, premium et authentiques du Maghreb.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 text-sm items-center md:items-start">
          <div className="space-y-4">
            <p className="font-medium text-charcoal">Navigation</p>
            <ul className="space-y-2">
              <li><Link href="/" className="text-charcoal/60 hover:text-charcoal transition-colors">Opportunité</Link></li>
              <li><Link href="/produit" className="text-charcoal/60 hover:text-charcoal transition-colors">Offre & Avantage Concurrentiel</Link></li>
              <li><Link href="/partenariats" className="text-charcoal/60 hover:text-charcoal transition-colors">Partenariats & Investissement</Link></li>
              <li><Link href="/projet" className="text-charcoal/60 hover:text-charcoal transition-colors">Modèle & Exécution</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="font-medium text-charcoal">Légal</p>
            <ul className="space-y-2">
              <li><span className="text-charcoal/60">Mentions légales</span></li>
              <li><span className="text-charcoal/60">Confidentialité</span></li>
              <li><span className="text-charcoal/60">CGV</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-olive/5">
        <p className="text-xs text-charcoal/40">
          © {new Date().getFullYear()} TAPIS. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
