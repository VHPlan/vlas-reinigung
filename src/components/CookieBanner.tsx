"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Settings } from "lucide-react";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("vlas-cookie-consent") as ConsentState;
    if (stored) setConsent(stored);
  }, []);

  const accept = () => {
    localStorage.setItem("vlas-cookie-consent", "accepted");
    setConsent("accepted");
  };

  const reject = () => {
    localStorage.setItem("vlas-cookie-consent", "rejected");
    setConsent("rejected");
  };

  // Don't render until mounted (avoid SSR mismatch) or if already decided
  if (!mounted || consent !== null) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6"
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="true"
    >
      <div className="max-w-[900px] mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* Main Banner */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-[#0047AB] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-black text-white mb-2">
                Diese Website verwendet Cookies
              </h2>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                Wir verwenden notwendige Cookies, damit unsere Website ordnungsgemäß funktioniert.
                Weitere Informationen finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#60a5fa] hover:text-blue-300 underline transition-colors"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Details toggle */}
          {showDetails && (
            <div className="mb-6 p-4 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Cookie-Kategorien</h3>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">Notwendige Cookies</p>
                    <p className="text-xs text-slate-400 mt-1">Für den Betrieb der Website erforderlich. Können nicht deaktiviert werden.</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-4 bg-[#0047AB] rounded-full flex items-center justify-end px-0.5">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">Analyse-Cookies</p>
                    <p className="text-xs text-slate-400 mt-1">Helfen uns zu verstehen, wie Besucher die Website nutzen. Derzeit nicht aktiv.</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-4 bg-slate-600 rounded-full flex items-center justify-start px-0.5">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={accept}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#0047AB] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors"
            >
              <Check size={16} /> Alle akzeptieren
            </button>
            <button
              onClick={reject}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors"
            >
              <X size={16} /> Nur notwendige
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
            >
              <Settings size={14} /> {showDetails ? "Weniger" : "Details"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
