"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#3D3C30] pt-24 pb-12 overflow-hidden relative border-t border-black/5">
      {/* Decorative SVG background */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none text-[#3D3C30]">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path d="M0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 60 Q 25 10 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tighter text-[#3D3C30]">
              TAPIS MAGHREB
            </Link>
            <p className="text-[#3D3C30]/60 max-w-sm text-lg leading-relaxed font-light italic">
              « L'art du Maghreb tissé avec noblesse pour votre espace spirituel. »
            </p>
            <div className="flex space-x-6">
              {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest text-[#3D3C30]/40 hover:text-[#D2B48C] transition-colors font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <p className="font-serif text-xl font-medium border-b border-black/10 pb-2 text-[#3D3C30]">Navigation</p>
              <ul className="space-y-4">
                <li><Link href="/" className="text-[#3D3C30]/60 hover:text-[#3D3C30] hover:translate-x-1 transition-all inline-block">Opportunité</Link></li>
                <li><Link href="/produit" className="text-[#3D3C30]/60 hover:text-[#3D3C30] hover:translate-x-1 transition-all inline-block">Offre & Avantage Concurrentiel</Link></li>
                <li><Link href="/partenariats" className="text-[#3D3C30]/60 hover:text-[#3D3C30] hover:translate-x-1 transition-all inline-block">Partenaires & Investissement</Link></li>
                <li><Link href="/projet" className="text-[#3D3C30]/60 hover:text-[#3D3C30] hover:translate-x-1 transition-all inline-block">Modèle et exécution</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="font-serif text-xl font-medium border-b border-black/10 pb-2 text-[#3D3C30]">Légal</p>
              <ul className="space-y-4">
                <li><span className="text-[#3D3C30]/60 cursor-pointer hover:text-[#3D3C30] transition-colors">Mentions légales</span></li>
                <li><span className="text-[#3D3C30]/60 cursor-pointer hover:text-[#3D3C30] transition-colors">Confidentialité</span></li>
                <li><span className="text-[#3D3C30]/60 cursor-pointer hover:text-[#3D3C30] transition-colors">CGV</span></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <p className="font-serif text-xl font-medium border-b border-black/10 pb-2 text-[#3D3C30]">Contact</p>
              <div className="space-y-2">
                <p className="text-[#3D3C30]/60 text-sm leading-relaxed">
                  Des questions sur notre projet ?
                </p>
                <a href="mailto:contact@tapismaghreb.com" className="text-[#3D3C30] font-bold hover:text-[#D2B48C] transition-colors mt-2 inline-block">contact@tapismaghreb.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[#3D3C30]/40 text-sm font-light">
            © {new Date().getFullYear()} TAPIS MAGHREB. Fabriqué avec passion pour l'artisanat.
          </p>
          <div className="flex space-x-8 text-xs text-[#3D3C30]/30 uppercase tracking-widest">
            <span>Algérie</span>
            <span>France</span>
            <span>Maroc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
