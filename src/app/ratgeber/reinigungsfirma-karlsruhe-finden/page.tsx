import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Karlsruhe finden: Worauf Sie achten sollten – VLAS",
  description:
    "Eigenpersonal, Versicherung, Referenzen, Preistransparenz – so finden Sie die richtige Reinigungsfirma in Karlsruhe. Tipps von VLAS Gebäudereinigung und Service.",
  alternates: { canonical: "https://www.vlas-reinigung.de/ratgeber/reinigungsfirma-karlsruhe-finden" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reinigungsfirma in Karlsruhe finden: Worauf Sie achten sollten",
  datePublished: "2026-05-05",
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
          <li className="text-[#0047AB]">Reinigungsfirma finden</li>
        </ol>
      </nav>

      <article className="max-w-[800px] mx-auto px-6 lg:px-12">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">5. Mai 2026 · Alexandru Vlas</p>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-8 leading-tight">
          Reinigungsfirma in Karlsruhe finden: Worauf Sie achten sollten
        </h1>

        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>Der Markt für Gebäudereinigung in Karlsruhe ist groß – und unübersichtlich. Zwischen seriösen Fachbetrieben und Billiganbietern mit versteckten Problemen zu unterscheiden ist nicht einfach. Dieser Artikel zeigt Ihnen, worauf Sie bei der Wahl einer Reinigungsfirma wirklich achten sollten.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Eigenpersonal vs. Subunternehmer</h2>
          <p>Viele Reinigungsunternehmen vergeben Aufträge an Subunternehmer, ohne dass Sie es bemerken. Das klingt nach einer Kleinigkeit, hat aber erhebliche Auswirkungen: Wer das Personal nicht selbst einstellt, schult und kontrolliert, kann keine gleichbleibende Qualität garantieren. Subunternehmer sind oft nicht ausreichend eingewiesen, kennen Ihr Objekt nicht und tragen eine schwächere Verantwortung.</p>
          <p>Achten Sie deshalb darauf, dass der Anbieter ausdrücklich <strong>ausschließlich Eigenpersonal</strong> einsetzt. Bei VLAS Gebäudereinigung und Service ist das von Anfang an unser Grundprinzip: Alle Mitarbeiter sind festangestellt, persönlich bekannt und regelmäßig geschult.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Versicherungsschutz prüfen</h2>
          <p>Ein seriöser Reinigungsbetrieb verfügt über eine <strong>Betriebs- und Haftpflichtversicherung</strong>. Diese schützt Sie, wenn bei der Reinigung Schäden an Ihrem Eigentum entstehen – zum Beispiel ein zerkratzter Boden, ein beschädigtes Gerät oder ein Wasserschaden. Fragen Sie unbedingt nach einem Versicherungsnachweis, bevor Sie einen Vertrag unterschreiben.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Referenzen und Bewertungen</h2>
          <p>Lassen Sie sich nicht nur von Versprechungen auf der Website überzeugen. Sehen Sie sich Google-Bewertungen an, fragen Sie nach Referenzkunden (auch wenn Datenschutz-NDAs keine detaillierten Angaben erlauben) und achten Sie auf die Qualität der Kommunikation bereits im ersten Kontakt. Ein Anbieter, der schnell reagiert, klar kommuniziert und auf Ihre Fragen eingeht, gibt Ihnen einen guten Vorgeschmack auf die spätere Zusammenarbeit.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Transparente Preisgestaltung</h2>
          <p>Ein gutes Angebot enthält keine versteckten Kosten. Es listet genau auf, welche Leistungen im Preis enthalten sind, wie oft gereinigt wird und was bei Bedarf zusätzlich berechnet wird. Vergleichen Sie Angebote immer auf Basis des gleichen Leistungsumfangs – ein scheinbar günstiger Anbieter, der weniger leistet, ist letztlich teurer.</p>

          <h2 className="text-2xl font-black text-slate-800 mt-8 mb-4">Vertragsbedingungen verstehen</h2>
          <p>Lesen Sie den Vertrag sorgfältig. Achten Sie auf Laufzeiten, Kündigungsfristen, Klauseln zur Preisanpassung und darauf, was bei Nichterfüllung der Leistung passiert. Seriöse Anbieter haben klare, faire Vertragsbedingungen – und erklären diese gerne persönlich. Wenn ein Anbieter Ihnen gegenüber zum Vertragsabschluss drängt, ohne alle Ihre Fragen beantwortet zu haben, ist das ein Warnsignal.</p>

          <div className="bg-[#0047AB] text-white rounded-2xl p-8 mt-10">
            <h3 className="text-xl font-black mb-3">VLAS: Ihre Reinigungsfirma in Karlsruhe</h3>
            <p className="mb-6 text-blue-100">Eigenpersonal, Haftpflichtversicherung, transparente Preise – überzeugen Sie sich bei einem unverbindlichen Gespräch.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0047AB] font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-colors">
              Angebot anfordern <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <h2 className="text-lg font-black text-slate-800 mb-4">Das könnte Sie auch interessieren</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/leistungen/unterhaltsreinigung-karlsruhe" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-[#0047AB] hover:text-white hover:border-[#0047AB] transition-all">
              Unterhaltsreinigung Karlsruhe <ArrowRight size={14} />
            </Link>
            <Link href="/ueber-uns" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-[#0047AB] hover:text-white hover:border-[#0047AB] transition-all">
              Über VLAS <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
