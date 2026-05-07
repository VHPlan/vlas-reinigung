"use client";

import { useState, useEffect } from "react";
import { ArrowUp, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientFeatures() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    // Check if cookies were already accepted
    const cookiesAccepted = localStorage.getItem("cookies_accepted");
    if (!cookiesAccepted) {
      // Show after a tiny delay for better UX
      setTimeout(() => setShowCookies(true), 1500);
    }

    // Scroll listener for the Top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const acceptCookies = () => {
    localStorage.setItem("cookies_accepted", "true");
    setShowCookies(false);
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[900] w-14 h-14 bg-[#0047AB] text-white rounded-full shadow-[0_10px_20px_rgba(0,71,171,0.3)] flex items-center justify-center hover:bg-blue-800 transition-colors focus:outline-none"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[999] bg-white border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-6 md:p-8"
          >
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left pr-0 md:pr-10">
                <h4 className="text-lg font-black text-slate-800 mb-2">Ihre Privatsphäre ist uns wichtig</h4>
                <p className="text-sm text-slate-600">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und den Traffic zu analysieren. Mit Klick auf "Akzeptieren" stimmen Sie der Nutzung zu.
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <button 
                  onClick={() => setShowCookies(false)}
                  className="px-6 py-3 text-slate-500 font-bold text-sm hover:text-slate-800 transition-colors"
                >
                  Ablehnen
                </button>
                <button 
                  onClick={acceptCookies}
                  className="px-8 py-3 bg-[#0047AB] text-white font-bold text-sm rounded-lg shadow-md hover:bg-blue-800 transition-colors whitespace-nowrap"
                >
                  Alle Akzeptieren
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
