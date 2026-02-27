"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Opportunité", href: "/" },
    { name: "Offre & Avantage Concurrentiel", href: "/produit" },
    { name: "Partenariats & Investissement", href: "/partenariats" },
    { name: "Modèle & Exécution", href: "/projet" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#244D2F' }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-medium tracking-tight text-white z-50">
          Opportunités-Marché : Tapis de prières
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide premium-transition ${
                pathname === item.href
                  ? "text-stone-100 font-semibold underline underline-offset-8"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`
          fixed inset-0 bg-[#244D2F] transition-transform duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl tracking-wide premium-transition ${
                  pathname === item.href
                    ? "text-white font-semibold underline underline-offset-8"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
