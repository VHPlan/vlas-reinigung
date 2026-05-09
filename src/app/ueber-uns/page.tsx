import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Clock, Users, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns | VLAS Gebäudereinigung und Service",
  description:
    "Erfahren Sie mehr über VLAS Gebäudereinigung und Service – Ihr verlässlicher, inhabergeführter Partner für professionelle Sauberkeit in Karlsruhe und Umgebung.",
  alternates: { canonical: "https://www.vlas-reinigung.de/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Über uns</p>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8">
              Wir setzen neue Standards in der Gebäudereinigung.
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                VLAS Gebäudereinigung und Service ist ein dynamisches, inhabergeführtes Reinigungsunternehmen mit Sitz in Karlsruhe. Wir haben es uns zur Aufgabe gemacht, nicht nur oberflächliche Sauberkeit zu liefern, sondern nachhaltige Werte für unsere Kunden zu schaffen.
              </p>
              <p>
                Egal ob moderne Bürolandschaften, anspruchsvolle medizinische Praxen oder robuste Industriehallen – wir verstehen, dass jedes Gebäude seine eigenen Anforderungen hat. Deshalb bieten wir keine Standardlösungen, sondern individuell auf Sie zugeschnittene Reinigungskonzepte.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#0047AB]/5"></div>
              <div className="relative z-10 text-center">
                <div className="text-[#0047AB] font-black text-6xl mb-2">100%</div>
                <div className="text-slate-800 font-bold uppercase tracking-widest text-sm">Qualitätsversprechen</div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(#0047AB_2px,transparent_2px)] [background-size:16px_16px] opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* UNSER GRÜNDER */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-12">Unser Gründer</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* TODO: replace with real photo before launch */}
          <div
            className="w-[200px] h-[200px] flex-shrink-0 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-sm border border-slate-200"
            aria-label="Foto folgt"
          >
            Foto folgt
          </div>
          <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
            <p>
              VLAS Gebäudereinigung und Service wurde von Alexandru Vlas gegründet – einem Unternehmer mit langjähriger Erfahrung in der Gebäudereinigungsbranche. Als inhabergeführtes Unternehmen stehen wir persönlich für die Qualität unserer Arbeit ein.
            </p>
            <p>
              Kein anonymes Callcenter, kein Subunternehmer – Sie haben immer einen direkten Ansprechpartner. Alexandru Vlas ist persönlich in jeden Auftrag eingebunden und garantiert, dass Ihre Erwartungen nicht nur erfüllt, sondern übertroffen werden.
            </p>
          </div>
        </div>
      </section>

      {/* ZAHLEN & FAKTEN */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 mb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-12 text-center">Zahlen &amp; Fakten</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "Inhabergeführt", label: "Persönliche Verantwortung" },
              { value: "100% Eigenpersonal", label: "Keine Subunternehmer" },
              { value: "48h", label: "Angebot nach Erstbegehung" },
              { value: "5,0 ★", label: "Google Bewertung" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-black text-[#0047AB] mb-2">{stat.value}</div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white border-b border-slate-100 mb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-6">
              Unsere Unternehmenswerte
            </h2>
            <p className="text-slate-600 font-medium text-lg">
              Auf diese Prinzipien können Sie sich verlassen, wenn Sie sich für VLAS entscheiden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <ShieldCheck size={40} className="text-[#0047AB] mb-6" />
              <h3 className="text-xl font-black text-slate-800 mb-4">Verlässlichkeit</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Pünktlichkeit und Diskretion sind für uns selbstverständlich. Wir halten unsere Zusagen ein und arbeiten als unsichtbarer Partner im Hintergrund.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <Users size={40} className="text-[#0047AB] mb-6" />
              <h3 className="text-xl font-black text-slate-800 mb-4">Qualifiziertes Personal</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Unsere Mitarbeiter sind unser größtes Kapital. Durch regelmäßige Schulungen garantieren wir fachgerechte Reinigungsmethoden.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <Clock size={40} className="text-[#0047AB] mb-6" />
              <h3 className="text-xl font-black text-slate-800 mb-4">Flexibilität</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Wir passen uns Ihren Betriebszeiten an. Ob frühmorgens, spätabends oder am Wochenende – wir reinigen dann, wenn es Sie am wenigsten stört.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNSERE ARBEITSWEISE */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-12 text-center">Unsere Arbeitsweise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "1",
              title: "Besichtigung",
              desc: "Wir lernen Ihr Objekt persönlich kennen. Bei einer kostenlosen Erstbegehung analysieren wir Ihren genauen Bedarf und besprechen Ihre Erwartungen direkt vor Ort.",
            },
            {
              num: "2",
              title: "Konzept",
              desc: "Auf Basis der Besichtigung erstellen wir ein maßgeschneidertes Reinigungskonzept für Ihr Objekt – mit klaren Leistungen, Intervallen und transparenten Preisen ohne versteckte Kosten.",
            },
            {
              num: "3",
              title: "Umsetzung",
              desc: "Feste Teams, digitale Qualitätskontrolle und ein direkter Ansprechpartner: So stellen wir sicher, dass jede Reinigung Ihren Anforderungen entspricht – heute und in Zukunft.",
            },
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-[#0047AB]/10 rounded-2xl flex items-center justify-center text-[#0047AB] font-black text-2xl mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
        <div className="bg-[#0047AB] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <Building2 size={48} className="text-white mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
              &ldquo;Sauberkeit ist kein Luxus, sondern die Grundlage für Produktivität, Gesundheit und Wohlbefinden.&rdquo;
            </h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">
              Alexandru Vlas, Gründer – VLAS Gebäudereinigung und Service
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-10">
        <Link 
          href="/kontakt" 
          className="inline-flex px-10 py-5 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20 items-center justify-center gap-3"
        >
          Lernen Sie uns persönlich kennen <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}
