"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Opportunité", href: "/" },
    { name: "Offre & Avantage Concurrentiel", href: "/produit" },
    { name: "Partenaires & Investissement", href: "/partenariats" },
    { name: "Modèle et exécution", href: "/projet" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-md h-12 lg:h-24 shadow-sm" : "bg-transparent h-14 lg:h-28"
      )}
    >
      <div className={cn(
        "w-full px-6 flex items-center justify-between transition-all duration-500",
        scrolled ? "h-10 lg:h-20" : "h-12 lg:h-24"
      )}>
        <Link 
          href="/" 
          className={cn(
            "text-lg lg:text-2xl font-serif font-semibold tracking-tighter transition-colors duration-500",
            scrolled ? "text-brand-primary" : "text-white"
          )}
        >
          TAPIS MAGHREB
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group",
                scrolled ? "text-charcoal hover:text-brand-primary" : "text-white hover:text-white/80",
                pathname === item.href && (scrolled ? "text-brand-primary" : "text-white")
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                scrolled ? "bg-brand-primary" : "bg-white",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            scrolled ? "text-charcoal hover:bg-charcoal/10" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-brand-primary z-[60] lg:hidden flex flex-col items-center justify-center"
            >
              <button 
                className="absolute top-8 right-6 text-white p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
              
              <nav className="flex flex-col items-center space-y-8 px-6 text-center">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "text-2xl font-serif text-white/80 hover:text-white transition-colors",
                        pathname === item.href && "text-white font-bold italic underline underline-offset-8"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
