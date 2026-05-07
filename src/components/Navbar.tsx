"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavLink = {
    name: string;
    href: string;
    submenu?: string[];
  };

  const navLinks: NavLink[] = [
    { name: "Startseite", href: "/" },
    { name: "Dienstleistungen", href: "/leistungen" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Über uns", href: "/ueber-uns" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 h-24 flex items-center bg-white ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      <div className="max-w-[1440px] w-full mx-auto px-10 flex items-center justify-center gap-20">
        
        {/* 1. LOGO SECTION - CENTERED GROUP */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-4 group flex-shrink-0"
        >
          <div className="text-3xl font-black tracking-tighter text-[#0047AB] whitespace-nowrap uppercase">
            VLAS
          </div>
          <div className="h-6 w-[1px] bg-slate-200 mx-1 flex-shrink-0" />
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 whitespace-nowrap">
            GEBÄUDEREINIGUNG
          </div>
        </Link>

        {/* 2. NAVIGATION + BUTTON CENTERED */}
        <div className="hidden xl:flex items-center gap-12 flex-shrink-0">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group flex-shrink-0">
              <Link 
                href={link.href}
                className="flex items-center gap-1.5 text-[13px] font-bold text-slate-700 hover:text-[#0047AB] transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.submenu && (
                <div className="absolute top-full left-0 mt-6 w-64 bg-white shadow-2xl border border-slate-50 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-5 space-y-3">
                  {link.submenu.map((item) => (
                    <Link key={item} href="#" className="block text-xs font-bold text-slate-500 hover:text-[#0047AB] transition-colors whitespace-nowrap">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 3. ANGEBOT BUTTON & WHATSAPP - PART OF CENTER GROUP */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link 
              href="/kontakt"
              className="px-6 py-3.5 bg-[#0047AB] text-white text-[13px] font-black uppercase tracking-wider rounded-lg hover:bg-blue-800 transition-all shadow-md whitespace-nowrap"
            >
              Angebot anfordern
            </Link>
            
            <a 
              href="https://wa.me/4917655700551?text=Hallo%20VLAS%20Geb%C3%A4udereinigung%2C%20ich%20h%C3%A4tte%20gerne%20weitere%20Informationen."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] text-white text-[13px] font-black uppercase tracking-wider rounded-lg hover:bg-[#128C7E] transition-all shadow-md whitespace-nowrap flex items-center gap-2"
              aria-label="Chat auf WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              WHATSAPP
            </a>
          </div>
        </div>

        {/* 4. MOBILE TRIGGER (Always right for UX) */}
        <button 
          className="xl:hidden absolute right-10 p-2 text-slate-800 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 5. MOBILE MENU - ZERO DEFORMATION */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-24 bg-white z-[999] overflow-y-auto"
          >
            <div className="px-10 py-16 space-y-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-3xl font-black text-slate-800 uppercase tracking-tighter whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10 border-t border-slate-100">
                <Link href="/kontakt" className="block w-full py-5 bg-[#0047AB] text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs">Angebot anfordern</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
