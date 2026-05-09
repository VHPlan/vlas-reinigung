import { Metadata } from "next";
import { ArrowRight, Building2, Droplets, Sparkles, Factory, Briefcase, Home, Layers, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen | VLAS Gebäudereinigung und Service Karlsruhe",
  description:
    "Alle Reinigungsdienstleistungen von VLAS Gebäudereinigung und Service in Karlsruhe: Unterhalts-, Glas-, Bau-, Industrie-, Grund-, Treppenhausreinigung, Teppichreinigung und Hausmeisterservice.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen" },
};

const services = [
  {
    slug: "unterhaltsreinigung-karlsruhe",
    title: "Unterhaltsreinigung",
    subtitle: "Die Basis für ein sauberes Arbeitsumfeld",
    description:
      "Regelmäßige, zuverlässige Reinigung für Büros, Praxen und Unternehmen. Diskretes Eigenpersonal, flexible Einsatzzeiten.",
    icon: <Building2 size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "glasreinigung-karlsruhe",
    title: "Glasreinigung",
    subtitle: "Streifenfreier Glanz für klare Perspektiven",
    description:
      "Professionelle Fenster-, Schaufenster- und Fassadenreinigung – auch in schwer zugänglichen Höhen.",
    icon: <Droplets size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "baureinigung-karlsruhe",
    title: "Baureinigung",
    subtitle: "Vom Rohbau bis zur schlüsselfertigen Übergabe",
    description:
      "Baugrob- und Baufeinreinigung für Bauprojekte aller Art – für eine reibungslose Schlüsselübergabe.",
    icon: <Sparkles size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "industriereinigung-karlsruhe",
    title: "Industriereinigung",
    subtitle: "Sicherheit und Hygiene in Produktionshallen",
    description:
      "Spezialisierte Reinigung von Industrieanlagen, Maschinen und Produktionshallen mit professionellem Equipment.",
    icon: <Factory size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "grundreinigung-karlsruhe",
    title: "Grundreinigung",
    subtitle: "Tiefenreinigung für höchste Ansprüche",
    description:
      "Intensive Reinigung mit Entfernung hartnäckiger Verschmutzungen und alter Pflegefilme – ein bis zweimal jährlich.",
    icon: <Briefcase size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "treppenhausreinigung-karlsruhe",
    title: "Treppenhausreinigung",
    subtitle: "Der perfekte erste Eindruck",
    description:
      "Regelmäßige Treppenhausreinigung für Hausverwaltungen und Eigentümergemeinschaften (WEG) in Karlsruhe.",
    icon: <Home size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "teppichreinigung-karlsruhe",
    title: "Teppich- & Polsterreinigung",
    subtitle: "Tiefenreinigung für textile Oberflächen",
    description:
      "Professionelle Teppich- und Polsterreinigung mit modernen Maschinen – hygienisch, gründlich und schonend.",
    icon: <Layers size={36} className="text-[#0047AB]" />,
  },
  {
    slug: "hausmeisterservice-karlsruhe",
    title: "Hausmeisterservice",
    subtitle: "Alles aus einer Hand für Ihre Immobilie",
    description:
      "Umfassender Hausmeisterservice für Verwaltung, Pflege und Instandhaltung Ihrer Liegenschaften.",
    icon: <Wrench size={36} className="text-[#0047AB]" />,
  },
];

export default function LeistungenPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-black text-[#0047AB] tracking-tighter uppercase mb-6">
          Unsere Leistungen
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Professionelle Reinigungslösungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens.
          Wählen Sie Ihre gewünschte Dienstleistung für detaillierte Informationen.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,71,171,0.15)] hover:border-[#0047AB]/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#0047AB]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0047AB]/10 transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              
              <h2 className="text-xl font-black text-slate-800 mb-2 group-hover:text-[#0047AB] transition-colors">
                {service.title}
              </h2>
              <p className="text-xs font-bold text-[#0047AB] uppercase tracking-widest mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow text-sm">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-[#0047AB] font-bold text-sm group-hover:gap-4 transition-all">
                Mehr erfahren <ArrowRight size={16} />
              </div>
            </Link>
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
