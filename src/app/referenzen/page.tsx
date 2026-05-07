import { Metadata } from "next";
import { ArrowRight, Star, Building2, Stethoscope, Factory, Home, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referenzen | VLAS Gebäudereinigung",
  description: "Entdecken Sie unsere Branchenerfahrung. Wir reinigen erfolgreich Büros, Praxen, Industriehallen und Immobilien in Karlsruhe.",
};

export default function ReferenzenPage() {
  const industries = [
    {
      title: "Büros & Verwaltung",
      desc: "Diskretion und Gründlichkeit für einen professionellen Arbeitsalltag. Wir sorgen dafür, dass sich Ihre Mitarbeiter und Kunden wohlfühlen.",
      icon: <Building2 size={36} className="text-[#0047AB] transition-colors" />
    },
    {
      title: "Medizinische Praxen",
      desc: "Höchste Hygienestandards für Arztpraxen und Kanzleien. Wir reinigen streng nach aktuellen Desinfektionsrichtlinien.",
      icon: <Stethoscope size={36} className="text-[#0047AB] transition-colors" />
    },
    {
      title: "Industrie & Logistik",
      desc: "Robuste Reinigung für Produktionshallen und Lager. Wir entfernen hartnäckige Verschmutzungen sicher und effizient.",
      icon: <Factory size={36} className="text-[#0047AB] transition-colors" />
    },
    {
      title: "Hausverwaltungen (WEG)",
      desc: "Zuverlässige Treppenhausreinigung und Objektbetreuung für einen makellosen ersten Eindruck Ihrer Immobilien.",
      icon: <Home size={36} className="text-[#0047AB] transition-colors" />
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      
      {/* HEADER */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Referenzen & Branchen</h1>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8">
          Erfahrung, der Sie vertrauen können.
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Aus Gründen der Diskretion und des Datenschutzes (NDA) veröffentlichen wir keine detaillierten Kundennamen online. Wir betreuen jedoch täglich erfolgreich Kunden aus den folgenden Branchen in Karlsruhe und Umgebung:
        </p>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,71,171,0.15)] transition-all duration-500 group flex gap-8 items-start"
            >
              <div className="w-20 h-20 bg-slate-50 group-hover:bg-[#0047AB]/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                {industry.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-[#0047AB] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY PROOF */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <Star size={48} className="text-[#0047AB] mx-auto mb-8" />
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8">
            Was unsere Kunden schätzen
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
            {[
              "Immer pünktlich und zuverlässig",
              "Ein festes Reinigungsteam vor Ort",
              "Geprüftes und diskretes Personal",
              "Kurze Kommunikationswege",
              "Transparente und faire Preisgestaltung",
              "Flexible Anpassung bei Bedarf"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 size={20} className="text-[#0047AB] flex-shrink-0" />
                <span className="font-bold text-sm text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/kontakt" 
            className="inline-flex px-10 py-5 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20 items-center justify-center gap-3"
          >
            Lassen Sie sich überzeugen <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
