import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Unterhaltsreinigung vs. Grundreinigung: Was ist der Unterschied? – VLAS",
  description:
    "Unterhaltsreinigung oder Grundreinigung – was brauche ich? VLAS Gebäudereinigung und Service erklärt den Unterschied und wann welche Leistung sinnvoll ist.",
  alternates: { canonical: "https://www.vlas-reinigung.de/ratgeber/unterhaltsreinigung-vs-grundreinigung" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Unterhaltsreinigung vs. Grundreinigung: Was ist der Unterschied?",
  datePublished: "2026-05-08",
  author: { "@type": "Person", name: "Alexandru Vlas" },
  publisher: { "@type": "Organization", name: "VLAS Gebäudereinigung und Service" },
};

export default function Page() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav className="max-w-[800px] mx-auto px-6 lg:px-12 mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest flex-wrap">
          <li><Link href="/" className="hover:text-[#0047AB] transition-colors">Startseite</Link></li>
          <li>/</li>
          <li><Link href="/ratgeber" className="hover:text-[#0047AB] transition-colors">Ratgeber</Link></li>
          <li>/</li>
          <li className="text-[#0047AB]">Unterhaltsreinigung vs. Grundreinigung</li>
        </ol>
      </nav>

      <article className="max-w-[800px] mx-auto px-6 lg:px-12">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">8. Mai 2026 · Alexandru Vlas</p>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8 leading-tight">
          Unterhaltsreinigung vs. Grundreinigung: Was ist der Unterschied?
        </h1>

        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>Zwei Begriffe, die in der Gebäudereinigung häufig durcheinandergebracht werden: Unterhaltsreinigung und Grundreinigung. Beide sind notwendig, aber für unterschiedliche Situationen und Intervalle geeignet. Wir erklären, was genau dahintersteckt und wann Sie welche Leistung benötigen.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Was ist Unterhaltsreinigung?</h2>
          <p>Die Unterhaltsreinigung ist die regelmäßige Reinigung eines Gebäudes – täglich, wöchentlich oder nach einem vereinbarten Rhythmus. Sie umfasst alle Standardarbeiten, die notwendig sind, um ein Objekt sauber und gepflegt zu halten: Böden saugen und wischen, Oberflächen abwischen, Sanitäranlagen reinigen, Müll entleeren und Küchenbereiche pflegen.</p>
          <p>Das Ziel der Unterhaltsreinigung ist es, den täglichen Schmutz zu entfernen und ein dauerhaft ansprechendes Erscheinungsbild zu gewährleisten. Sie ist die Basis jedes Reinigungskonzepts und sollte für alle regelmäßig genutzten Gewerbeflächen selbstverständlich sein.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Was ist Grundreinigung?</h2>
          <p>Die Grundreinigung geht deutlich weiter als die tägliche Unterhaltsreinigung. Sie wird in der Regel ein- bis zweimal jährlich durchgeführt und zielt darauf ab, hartnäckige Verschmutzungen zu entfernen, die sich über die Zeit angesammelt haben – trotz regelmäßiger Unterhaltsreinigung. Alte Wachs- und Versiegelungsschichten auf Böden werden abgetragen, Oberflächen intensiv behandelt und Bereiche gereinigt, die im Alltag schwer zugänglich sind.</p>
          <p>Die Grundreinigung erfordert spezielles Equipment wie Scheuersaugmaschinen, chemisch-mechanische Reiniger und in manchen Fällen auch das Aufbringen neuer Schutzschichten auf Böden. Sie ist aufwändiger, dauert länger und kostet entsprechend mehr – ist aber notwendig, um den Werterhalt des Gebäudes langfristig zu sichern.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Wann brauche ich was?</h2>
          <p><strong>Unterhaltsreinigung</strong> benötigen Sie, wenn Sie eine regelmäßig genutzte Fläche dauerhaft sauber und repräsentativ halten möchten. Sie ist für fast alle gewerblich genutzten Gebäude unverzichtbar: Büros, Praxen, Einzelhandel, Treppenhäuser, Produktionsbereiche.</p>
          <p><strong>Grundreinigung</strong> ist sinnvoll, wenn Böden und Oberflächen trotz regelmäßiger Unterhaltsreinigung matt, stumpf oder hartnäckig verschmutzt wirken – oder wenn ein Objekt nach einer längeren Pause, einem Mieterwechsel oder nach Bauarbeiten in einen einwandfreien Zustand gebracht werden soll.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Wie kombinieren?</h2>
          <p>Das ideale Konzept kombiniert beide Leistungen: Regelmäßige Unterhaltsreinigung hält das tägliche Niveau hoch, während eine jährliche Grundreinigung tief eingedrungenen Schmutz entfernt und den Boden sowie alle Oberflächen wieder in ihren Ausgangszustand versetzt. Fragen Sie uns nach einem auf Ihr Objekt zugeschnittenen Paket – wir beraten Sie gerne kostenlos.</p>

          <div className="bg-[#0047AB] text-white rounded-2xl p-8 mt-10">
            <h3 className="text-xl font-black mb-3">Beides aus einer Hand</h3>
            <p className="mb-6 text-blue-100">VLAS Gebäudereinigung und Service bietet Unterhalts- und Grundreinigung in Karlsruhe – maßgeschneidert auf Ihr Objekt.</p>
            <Link href="/leistungen" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0047AB] font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-colors">
              Alle Leistungen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <h2 className="text-lg font-black text-slate-800 mb-4">Das könnte Sie auch interessieren</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/leistungen/unterhaltsreinigung-karlsruhe" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-[#0047AB] hover:text-white hover:border-[#0047AB] transition-all">
              Unterhaltsreinigung Karlsruhe <ArrowRight size={14} />
            </Link>
            <Link href="/leistungen/grundreinigung-karlsruhe" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-[#0047AB] hover:text-white hover:border-[#0047AB] transition-all">
              Grundreinigung Karlsruhe <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
