import { Metadata } from "next";
import { ArrowRight, Star, Building2, Stethoscope, Factory, Home, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referenzen | VLAS Gebäudereinigung und Service",
  description:
    "Entdecken Sie unsere Branchenerfahrung. Wir reinigen erfolgreich Büros, Praxen, Industriehallen und Immobilien in Karlsruhe.",
  alternates: { canonical: "https://www.vlas-reinigung.de/referenzen" },
};

const GOOGLE_PROFILE_URL = "https://g.page/r/CfA0094zg-tAEAE/review";

export default function ReferenzenPage() {
  const industries = [
    {
      title: "Büros & Verwaltung",
      desc: "Diskretion und Gründlichkeit für einen professionellen Arbeitsalltag. Wir sorgen dafür, dass sich Ihre Mitarbeiter und Kunden wohlfühlen.",
      icon: <Building2 size={36} className="text-[#0047AB] transition-colors" />,
    },
    {
      title: "Medizinische Praxen",
      desc: "Höchste Hygienestandards für Arztpraxen und Kanzleien. Wir reinigen streng nach aktuellen Desinfektionsrichtlinien.",
      icon: <Stethoscope size={36} className="text-[#0047AB] transition-colors" />,
    },
    {
      title: "Industrie & Logistik",
      desc: "Robuste Reinigung für Produktionshallen und Lager. Wir entfernen hartnäckige Verschmutzungen sicher und effizient.",
      icon: <Factory size={36} className="text-[#0047AB] transition-colors" />,
    },
    {
      title: "Hausverwaltungen (WEG)",
      desc: "Zuverlässige Treppenhausreinigung und Objektbetreuung für einen makellosen ersten Eindruck Ihrer Immobilien.",
      icon: <Home size={36} className="text-[#0047AB] transition-colors" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Wir haben lange nach einem zuverlässigen Partner gesucht. VLAS überzeugt durch Pünktlichkeit, extreme Gründlichkeit und sehr freundliches Personal. Die beste Entscheidung für unser Bürogebäude.",
      author: "Michael S.",
      role: "Facility Manager",
      initial: "M",
      isPlaceholder: false,
    },
    {
      quote: "[Platzhalter – echte Google-Bewertung folgt]", // TODO: replace with real Google review before launch
      author: "[Name]",
      role: "[Branche]",
      initial: "?",
      isPlaceholder: true,
    },
    {
      quote: "[Platzhalter – echte Google-Bewertung folgt]", // TODO: replace with real Google review before launch
      author: "[Name]",
      role: "[Branche]",
      initial: "?",
      isPlaceholder: true,
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      
      {/* HEADER */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center">
        <p className="text-[#0047AB] font-bold uppercase tracking-widest text-sm mb-4">Referenzen &amp; Branchen</p>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8">
          Erfahrung, der Sie vertrauen können.
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Aus Gründen der Diskretion und des Datenschutzes (NDA) veröffentlichen wir keine detaillierten Kundennamen online. Wir betreuen jedoch täglich erfolgreich Kunden aus den folgenden Branchen in Karlsruhe und Umgebung:
        </p>
      </section>

      {/* METRICS BAR */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "5,0 ★", label: "Google Bewertung" },
            { value: "8 Branchen", label: "Erfolgreich betreut" },
            { value: "100%", label: "Eigenpersonal" },
            { value: "Karlsruhe & Region", label: "Einsatzgebiet" },
          ].map((metric, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
              <div className="text-2xl font-black text-[#0047AB] mb-1">{metric.value}</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
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
                <h2 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-[#0047AB] transition-colors">
                  {industry.title}
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed">{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KUNDENSTIMMEN */}
      <section className="bg-slate-50 py-24 border-y border-slate-100 mb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-12 text-center">Kundenstimmen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden ${t.isPlaceholder ? "opacity-60" : ""}`}
              >
                <div className="flex gap-1 text-[#0047AB] mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#0047AB] font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE BEWERTUNGEN CTA */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center mb-24">
        <Star size={48} className="text-[#0047AB] mx-auto mb-6" />
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-6">Google Bewertungen</h2>
        <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
          Überzeugen Sie sich selbst – lesen Sie unsere Bewertungen auf Google.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20"
          >
            Bewertungen auf Google ansehen <ExternalLink size={16} />
          </a>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 font-black text-sm uppercase tracking-widest rounded-xl hover:border-[#0047AB] hover:text-[#0047AB] transition-colors"
          >
            Jetzt selbst bewerten <Star size={16} />
          </a>
        </div>
      </section>

      {/* QUALITY PROOF */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
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
              "Flexible Anpassung bei Bedarf",
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
