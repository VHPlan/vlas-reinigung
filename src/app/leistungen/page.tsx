import { Metadata } from "next";
import { CheckCircle2, ArrowRight, Building2, Droplets, Sparkles, Factory, Home, Briefcase, Leaf, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dienstleistungen | VLAS Gebäudereinigung",
  description: "Entdecken Sie unser umfassendes Angebot an professionellen Reinigungsdienstleistungen für Unternehmen und private Haushalte in Karlsruhe.",
};

export default function LeistungenPage() {
  const allServices = [
    {
      id: "unterhaltsreinigung",
      title: "Unterhaltsreinigung",
      subtitle: "Die Basis für ein sauberes Arbeitsumfeld",
      description: "Eine regelmäßige und gründliche Unterhaltsreinigung ist die Visitenkarte Ihres Unternehmens. Wir sorgen für kontinuierliche Sauberkeit in Büros, Kanzleien und Praxen. Unser geschultes Personal arbeitet diskret, zuverlässig und außerhalb Ihrer Kernarbeitszeiten.",
      features: [
        "Reinigung von Arbeitsplätzen und Besprechungsräumen",
        "Hygienische Sanitärreinigung",
        "Bodenpflege (Saugen, Wischen, Polieren)",
        "Müllentsorgung und Trennung",
        "Küchen- und Pausenraumreinigung"
      ],
      icon: <Building2 size={40} className="text-[#0047AB] mb-6" />
    },
    {
      id: "glasreinigung",
      title: "Glas- & Fensterreinigung",
      subtitle: "Streifenfreier Glanz für klare Perspektiven",
      description: "Wir reinigen Fenster, Schaufenster, Glasfassaden und Wintergärten – komplett streifenfrei. Mit professionellem Equipment erreichen wir auch schwer zugängliche Glasflächen sicher und effizient.",
      features: [
        "Rahmen- und Falzreinigung",
        "Reinigung von Schaufenstern und Glasfassaden",
        "Wintergartenreinigung",
        "Beseitigung von hartnäckigen Verschmutzungen",
        "Einsatz von Hubsteigern bei Bedarf"
      ],
      icon: <Droplets size={40} className="text-[#0047AB] mb-6" />
    },
    {
      id: "baureinigung",
      title: "Baureinigung",
      subtitle: "Vom Rohbau bis zur schlüsselfertigen Übergabe",
      description: "Bauprojekte erzeugen viel Schmutz. Wir übernehmen die Baugrobreinigung während der Bauphase und die Baufeinreinigung (Erstreinigung) vor der Übergabe an den Bauherrn oder Mieter.",
      features: [
        "Entfernung von Bauschutt und Grobschmutz",
        "Beseitigung von Farb- und Mörtelspritzern",
        "Staubfreie Reinigung aller Oberflächen",
        "Einpflege der Bodenbeläge",
        "Fachgerechte Entsorgung von Verpackungsmaterial"
      ],
      icon: <Sparkles size={40} className="text-[#0047AB] mb-6" />
    },
    {
      id: "industriereinigung",
      title: "Industriereinigung",
      subtitle: "Sicherheit und Hygiene in Produktionshallen",
      description: "In industriellen Umgebungen gelten höchste Anforderungen an Sauberkeit. Wir reinigen Produktionsanlagen, Maschinen und Hallenböden, um Ausfallzeiten zu minimieren und die Arbeitssicherheit zu gewährleisten.",
      features: [
        "Maschinen- und Anlagenreinigung",
        "Reinigung von Produktions- und Lagerhallen",
        "Beseitigung von Öl- und Schmierstoffen",
        "Hochdruckreinigung",
        "Reinigung von RLT-Anlagen (Raumlufttechnik)"
      ],
      icon: <Factory size={40} className="text-[#0047AB] mb-6" />
    },
    {
      id: "grundreinigung",
      title: "Grundreinigung",
      subtitle: "Tiefenreinigung für höchste Ansprüche",
      description: "Die Grundreinigung ist eine besonders intensive Reinigung, die ein- bis zweimal jährlich durchgeführt wird. Hierbei werden hartnäckige Verschmutzungen und alte Pflegefilme entfernt.",
      features: [
        "Intensive Bodenreinigung (PVC, Linoleum, Stein)",
        "Teppich- und Polsterreinigung",
        "Reinigung schwer zugänglicher Bereiche",
        "Entfernung von alten Versiegelungen",
        "Neubeschichtung von Böden"
      ],
      icon: <Briefcase size={40} className="text-[#0047AB] mb-6" />
    },
    {
      id: "treppenhaus",
      title: "Treppenhausreinigung",
      subtitle: "Der perfekte erste Eindruck",
      description: "Das Treppenhaus ist das Erste, was Besucher, Kunden oder Mieter sehen. Wir übernehmen die regelmäßige Reinigung von Treppenhäusern für Hausverwaltungen und Eigentümergemeinschaften (WEG).",
      features: [
        "Fegen und Wischen der Treppen",
        "Reinigung der Geländer und Handläufe",
        "Briefkasten- und Klingeltableau-Reinigung",
        "Spinnwebenentfernung",
        "Reinigung der Eingangstüren"
      ],
      icon: <Home size={40} className="text-[#0047AB] mb-6" />
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-black text-[#0047AB] tracking-tighter uppercase mb-6">
          Unsere Leistungen
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Professionelle Reinigungslösungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens. 
          Entdecken Sie unser umfassendes Portfolio für kompromisslose Sauberkeit.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white border border-slate-100 rounded-3xl p-10 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,71,171,0.15)] hover:border-[#0047AB]/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-20 h-20 bg-[#0047AB]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0047AB]/10 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h2 className="text-2xl font-black text-slate-800 mt-8 mb-2">
                {service.title}
              </h2>
              <h3 className="text-sm font-bold text-[#0047AB] uppercase tracking-widest mb-6">
                {service.subtitle}
              </h3>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-4 border-t border-slate-100 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0047AB] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight mb-6">
            Ihr gewünschter Service ist nicht dabei?
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
            Wir bieten auch individuelle Reinigungskonzepte an. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch direkt vor Ort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/kontakt" 
              className="px-10 py-5 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3"
            >
              Angebot anfragen <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:+4917655700551" 
              className="px-10 py-5 bg-white text-slate-800 border-2 border-slate-200 font-black text-sm uppercase tracking-widest rounded-xl hover:border-[#0047AB] hover:text-[#0047AB] transition-colors flex items-center justify-center gap-3"
            >
              Kostenfrei anrufen
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
