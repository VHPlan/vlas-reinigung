"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Arbeiten Sie ausschließlich mit eigenem Personal?",
    a: "Ja. Wir setzen ausschließlich festangestelltes Eigenpersonal ein – keine Subunternehmer. Das garantiert gleichbleibende Qualität, Diskretion und volle Verantwortung für jede Reinigung.",
  },
  {
    q: "Welche Reinigungsmittel verwenden Sie?",
    a: "Wir setzen auf professionelle, materialschonende und umweltverträgliche Reinigungsmittel von zertifizierten Lieferanten. Auf Wunsch arbeiten wir auch mit allergikerfreundlichen Produkten.",
  },
  {
    q: "Wie kurzfristig können Sie einen Einsatz übernehmen?",
    a: "In der Regel starten wir innerhalb von 48–72 Stunden mit einer kostenlosen Erstbegehung. Bei dringenden Fällen bemühen wir uns um schnellstmögliche Reaktion.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja. VLAS Gebäudereinigung und Service verfügt über eine Betriebs- und Haftpflichtversicherung. Auf Anfrage stellen wir Ihnen gerne einen Versicherungsnachweis zur Verfügung.",
  },
  {
    q: "Gibt es eine Mindestvertragslaufzeit?",
    a: "Für regelmäßige Unterhaltsreinigung arbeiten wir in der Regel mit 12-monatigen Rahmenverträgen. Einzelleistungen wie Baureinigung oder Grundreinigung sind auch ohne Vertragsbindung möglich.",
  },
  {
    q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
    a: "Ja. Wir passen uns Ihren Betriebszeiten an – frühmorgens, spätabends oder am Wochenende, damit Ihr Betrieb nicht unterbrochen wird.",
  },
  {
    q: "Wie funktioniert Ihre digitale Qualitätskontrolle?",
    a: "Nach jeder Reinigung dokumentieren unsere Teamleiter den Zustand des Objekts digital. Bei Abweichungen reagieren wir sofort.",
  },
  {
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir reinigen in Karlsruhe und der gesamten Region: Ettlingen, Bruchsal, Rastatt, Baden-Baden, Pforzheim, Germersheim, Heidelberg und Mannheim.",
  },
  {
    q: "Was kostet eine Unterhaltsreinigung?",
    a: "Die Kosten hängen von Objektgröße, Reinigungsintervall und Leistungsumfang ab. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.",
  },
  {
    q: "Was passiert, wenn ein Mitarbeiter krank ist?",
    a: "Wir haben feste Vertretungsregelungen im Team. Ihre Reinigung findet statt – pünktlich und ohne Unterbrechung.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* BREADCRUMB */}
      <nav className="max-w-[900px] mx-auto px-6 lg:px-12 mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <li><Link href="/" className="hover:text-[#0047AB] transition-colors">Startseite</Link></li>
          <li className="text-slate-200">/</li>
          <li className="text-[#0047AB]">FAQ</li>
        </ol>
      </nav>

      <section className="max-w-[900px] mx-auto px-6 lg:px-12 mb-16">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-6">
          Häufig gestellte Fragen
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          Alles, was Sie über VLAS Gebäudereinigung und Service wissen möchten – kompakt und ehrlich beantwortet.
        </p>
      </section>

      <section className="max-w-[900px] mx-auto px-6 lg:px-12 mb-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left font-black text-slate-800 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#0047AB] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-slate-600 font-medium mb-6">Ihre Frage ist nicht dabei? Rufen Sie uns einfach an – wir helfen Ihnen gerne persönlich weiter.</p>
        <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20">
          Kontakt aufnehmen <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
