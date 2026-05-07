"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Afisăm butonul cu o mică întârziere pentru un efect vizual plăcut
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mesajul pre-completat
  const phoneNumber = "4917655700551";
  const message = "Hallo VLAS Gebäudereinigung, ich hätte gerne weitere Informationen zu Ihren Reinigungsdiensten.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-[900] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#128C7E] transition-colors group focus:outline-none"
      aria-label="Chat auf WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2} />
      
      {/* Tooltip text (Apare la hover) */}
      <span className="absolute left-full ml-4 bg-white text-slate-800 text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-slate-100">
        Schnell anfragen!
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-l border-b border-slate-100"></div>
      </span>
    </motion.a>
  );
}
