import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unser Ablauf | VLAS Gebäudereinigung Karlsruhe",
  description: "Transparenz von Anfang an: So einfach ist der Prozess bei VLAS Gebäudereinigung – von der Besichtigung bis zur Qualitätskontrolle.",
};

export default function AblaufPage() {
  const steps = [
    {
      step: "01",
      title: "Kostenlose Besichtigung",
      desc: "Wir besuchen Sie vor Ort în Karlsruhe und Umgebung, um den genauen Bedarf und die Anforderungen Ihres Objekts zu analysieren."
    },
    {
      step: "02",
      title: "Transparentes Angebot",
      desc: "Innerhalb von 24-48 Stunden erhalten Sie ein detailliertes Festpreisangebot ohne versteckte Kosten – maßgeschneidert auf Ihre Wünsche."
    },
    {
      step: "03",
      title: "Professionelle Reinigung",
      desc: "Unser geschultes Personal führt die Reinigung zum vereinbarten Termin gründlich und mit modernstem Equipment aus."
    },
    {
      step: "04",
      title: "Qualitätskontrolle",
      desc: "Nach Abschluss erfolgt eine gemeinsame Abnahme. Wir sind erst zufrieden, wenn Sie es sind. Dauerhafte Betreuung inklusive."
    }
  ];

  return (
    <main className="bg-white">
      <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="section-container">
          <h1 className="h1-german text-center">So arbeiten wir</h1>
          <p className="text-xl text-[var(--text-muted)] text-center max-w-3xl mx-auto font-medium">
            Strukturierte Prozesse für erstklassige Ergebnisse. Bei VLAS wissen Sie immer genau, was passiert.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-10 items-start md:items-center group">
                <div className="text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors shrink-0">
                  {s.step}
                </div>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex-1 hover:border-[var(--blue-brand)] transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-[var(--blue-deep)]">{s.title}</h3>
                  <p className="text-[var(--text-muted)] font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--blue-brand)] text-white">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Bereit für den ersten Schritt?</h2>
            <p className="text-lg opacity-80 mb-10 font-medium">
              Lassen Sie uns noch heute über Ihr Reinigungsprojekt sprechen. Die Erstbesichtigung ist für Sie vollkommen unverbindlich.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="px-8 py-4 bg-white text-[var(--blue-brand)] font-bold rounded-md hover:bg-slate-100 transition-all shadow-lg">
                Termin vereinbaren
              </Link>
              <Link href="tel:+497211234567" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">
                Anrufen: +49 721 123 456
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" alt="Beratung" className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
