"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions/auth";

export default function Navbar({ initialIsLoggedIn = false }: { initialIsLoggedIn?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sincronizăm starea de logare și scroll-ul
  useEffect(() => {
    setIsLoggedIn(initialIsLoggedIn);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificăm și la mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialIsLoggedIn, pathname]);

  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";

  type NavItem = { name: string; href: string };
  type NavLink = {
    name: string;
    href: string;
    submenu?: NavItem[];
  };

  const navLinks: NavLink[] = [
    { name: "Startseite", href: "/" },
    { 
      name: "Dienstleistungen", 
      href: "/leistungen",
      submenu: [
        { name: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
        { name: "Glasreinigung", href: "/leistungen/glasreinigung-karlsruhe" },
        { name: "Baureinigung", href: "/leistungen/baureinigung-karlsruhe" },
        { name: "Industriereinigung", href: "/leistungen/industriereinigung-karlsruhe" },
        { name: "Steinreinigung", href: "/leistungen/steinreinigung-karlsruhe" },
        { name: "Fassadenreinigung", href: "/leistungen/fassadenreinigung-karlsruhe" },
        { name: "Hausmeisterservice", href: "/leistungen/hausmeisterservice-karlsruhe" },
      ]
    },
    { name: "Galerie", href: "/galerie" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Einsatzgebiet", href: "/einsatzgebiet" },
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
        <div className="hidden xl:flex items-center gap-10 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group z-10 py-1.5">
                <Link 
                  href={link.href}
                  className={`relative px-5 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap z-20 ${
                    isActive ? "text-[#0047AB]" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {link.name}
                  
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white shadow-[0_4px_15px_-5px_rgba(0,71,171,0.15)] border border-slate-100 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                </Link>
                
                {link.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white shadow-2xl border border-slate-50 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-4 space-y-2.5">
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href} className="block text-[11px] font-bold text-slate-500 hover:text-[#0047AB] transition-colors whitespace-nowrap">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

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

            {/* AUTH SECTION */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-1.5 bg-slate-50 border border-slate-100 rounded-full hover:bg-blue-50 hover:border-blue-100 transition-all">
                  <div className="w-8 h-8 bg-[#0047AB] rounded-full flex items-center justify-center text-white text-xs font-black">
                    A
                  </div>
                  <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform mr-1" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-3 w-48 bg-white shadow-2xl border border-slate-50 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
                  <Link 
                    href="/admin/galerie" 
                    className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-slate-600 hover:text-[#0047AB] hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    <LayoutDashboard size={16} /> Admin Panel
                  </Link>
                  <div className="h-px bg-slate-50 my-1 mx-2" />
                  <form action={logout}>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                      <LogOut size={16} /> Logout
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <Link 
                href="/admin/login"
                className="px-6 py-3.5 bg-slate-900 text-white text-[13px] font-black uppercase tracking-wider rounded-lg hover:bg-black transition-all shadow-md whitespace-nowrap"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* 4. MOBILE TRIGGER (Always right for UX) */}
        <button 
          className="xl:hidden absolute right-10 p-2 text-slate-800 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
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
              <div className="pt-10 border-t border-slate-100 space-y-4">
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-5 bg-[#0047AB] text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs">Angebot anfordern</Link>
                {isLoggedIn ? (
                  <form action={logout}>
                    <button className="w-full py-5 bg-red-600 text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs">Logout</button>
                  </form>
                ) : (
                  <Link href="/admin/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-5 bg-slate-900 text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs">Admin Login</Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
