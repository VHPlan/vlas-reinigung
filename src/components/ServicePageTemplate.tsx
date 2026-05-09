import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";

interface ServicePageProps {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  benefits: string[];
  warum: { title: string; desc: string }[];
  related: { title: string; href: string }[];
  canonicalPath: string;
  schema: object;
}

export default function ServicePageTemplate({
  title,
  h1,
  intro,
  sections,
  benefits,
  warum,
  related,
  schema,
}: ServicePageProps) {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* BREADCRUMB */}
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest flex-wrap">
          <li><Link href="/" className="hover:text-[#0047AB] transition-colors">Startseite</Link></li>
          <li className="text-slate-200">/</li>
          <li><Link href="/leistungen" className="hover:text-[#0047AB] transition-colors">Leistungen</Link></li>
          <li className="text-slate-200">/</li>
          <li className="text-[#0047AB]">{h1}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <h1 className="text-4xl lg:text-6xl font-black text-[#0047AB] tracking-tighter uppercase mb-6">
          {h1}
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">{intro}</p>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 grid md:grid-cols-2 gap-10">
        {sections.map((s, i) => (
          <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-4">{s.heading}</h2>
            <p className="text-slate-600 font-medium leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>

      {/* LEISTUNGSÜBERSICHT */}
      {benefits.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
          <h2 className="text-2xl font-black text-slate-800 mb-8">Leistungsübersicht</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <CheckCircle2 size={18} className="text-[#0047AB] mt-0.5 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* WARUM VLAS */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 mb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-black text-slate-800 mb-10 text-center">Warum VLAS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {warum.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-[#0047AB]/10 rounded-xl flex items-center justify-center text-[#0047AB] font-black text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-black text-slate-800 mb-3">{w.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center mb-20">
        <h2 className="text-3xl font-black text-slate-800 mb-4">Jetzt kostenloses Angebot anfordern</h2>
        <p className="text-slate-600 font-medium mb-10">Kontaktieren Sie uns – kostenlose Erstbesichtigung, Angebot in 48h, kein Risiko.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20">
            Angebot anfordern <ArrowRight size={16} />
          </Link>
          <a href="tel:+4917655700551" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-black text-sm uppercase tracking-widest rounded-xl hover:border-[#0047AB] hover:text-[#0047AB] transition-colors">
            <Phone size={16} /> 0176 55700551
          </a>
          <a href="https://wa.me/4917655700551" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-[#128C7E] transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-xl font-black text-slate-800 mb-6">Das könnte Sie auch interessieren</h2>
        <div className="flex flex-wrap gap-4">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-[#0047AB] hover:text-white hover:border-[#0047AB] transition-all">
              {r.title} <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
