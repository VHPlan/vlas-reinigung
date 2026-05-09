import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20 flex items-center justify-center">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <div className="text-[120px] font-black text-slate-100 leading-none mb-8">404</div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Diese Seite existiert leider nicht.</h1>
        <p className="text-slate-600 font-medium mb-10 leading-relaxed">
          Die gesuchte Seite wurde möglicherweise verschoben, umbenannt oder gelöscht. Kehren Sie zur Startseite zurück oder kontaktieren Sie uns direkt.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20"
          >
            <Home size={16} /> Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-black text-sm uppercase tracking-widest rounded-xl hover:border-[#0047AB] hover:text-[#0047AB] transition-colors"
          >
            Kontakt aufnehmen <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
