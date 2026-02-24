"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Produit", href: "/produit" },
    { name: "Projet", href: "/projet" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight text-charcoal">
          TAPIS
        </Link>
        
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide premium-transition ${
                pathname === item.href
                  ? "text-olive font-semibold"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
