import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Einsatzgebiet | Gebäudereinigung Karlsruhe & Umgebung – VLAS",
  description:
    "VLAS Gebäudereinigung und Service ist in Karlsruhe und der gesamten Region tätig – Ettlingen, Bruchsal, Rastatt, Baden-Baden und mehr.",
  alternates: { canonical: "https://www.vlas-reinigung.de/einsatzgebiet" },
};

const cities = [
  {
    name: "Karlsruhe",
    body: "Karlsruhe ist unser Haupteinsatzgebiet und Firmensitz. Wir betreuen hier täglich Büros, Praxen, Industrieunternehmen und Hausverwaltungen in allen Stadtteilen – von der Innenstadt über Durlach bis nach Neureut und Mühlburg. Als lokales Unternehmen kennen wir die Anforderungen der Karlsruher Wirtschaft und passen uns flexibel an Ihre Betriebszeiten an.",
  },
  {
    name: "Ettlingen",
    body: "Ettlingen, unmittelbar südlich von Karlsruhe gelegen, zählt zu unseren regelmäßigen Einsatzorten. Wir reinigen dort Gewerbeflächen, Produktionshallen und Wohnimmobilien. Die kurze Anfahrt ermöglicht es uns, kurzfristig auf Anfragen zu reagieren und auch bei Sondereinsätzen schnell vor Ort zu sein.",
  },
  {
    name: "Bruchsal",
    body: "In Bruchsal und dem nördlichen Landkreis Karlsruhe sind wir regelmäßig im Einsatz. Ob Unterhaltsreinigung für Bürokomplexe, Treppenhausreinigung für Wohnanlagen oder Baureinigung nach Sanierungen – VLAS Gebäudereinigung und Service ist Ihr verlässlicher Partner in der Region.",
  },
  {
    name: "Rastatt",
    body: "Rastatt ist eine wichtige Industriestadt in der TechnologieRegion Karlsruhe. Wir bieten hier speziell Industriereinigung, Unterhaltsreinigung und Hausmeisterservices für produzierende Unternehmen und Hausverwaltungen an. Unsere Erfahrung mit industriellen Reinigungsanforderungen macht uns zum idealen Partner in Rastatt.",
  },
  {
    name: "Baden-Baden",
    body: "Die Kurstadt Baden-Baden stellt besondere Anforderungen an Sauberkeit und Repräsentation. Hotels, Praxen, Kanzleien und gehobene Geschäftsräume erwarten diskrete, hochwertige Reinigungsleistungen. VLAS Gebäudereinigung und Service erfüllt diese Anforderungen mit Eigenpersonal und individuell abgestimmten Konzepten.",
  },
  {
    name: "Pforzheim",
    body: "Pforzheim und die angrenzenden Gewerbegebiete gehören zu unserem Einsatzgebiet im östlichen Teil der Region. Wir bieten dort die gesamte Bandbreite unserer Reinigungsdienstleistungen an – von der Unterhaltsreinigung bis zur Industriereinigung für die in Pforzheim ansässige Schmuck- und Uhrenindustrie.",
  },
  {
    name: "Germersheim",
    body: "Germersheim und der Landkreis zählen zu unserem südwestlichen Einsatzgebiet. Auch dort stehen wir für die bewährte VLAS-Qualität: pünktlich, zuverlässig, mit festem Ansprechpartner. Hausverwaltungen und Gewerbetreibende aus Germersheim profitieren von unserer Erfahrung und unseren flexiblen Vertragsmodellen.",
  },
  {
    name: "Heidelberg",
    body: "Die Universitätsstadt Heidelberg ist bekannt für ihre Wissenschaftseinrichtungen, Kliniken und internationalen Unternehmen. Wir reinigen dort Büros, Laborumgebungen, Praxen und Gewerbeflächen mit höchster Sorgfalt. Unsere Diskretion und die Verwendung zertifizierter Reinigungsmittel sind gerade in sensiblen Umgebungen ein entscheidender Vorteil.",
  },
  {
    name: "Mannheim",
    body: "Mannheim als bedeutende Wirtschaftsstadt in der Metropolregion Rhein-Neckar rundet unser Einsatzgebiet ab. Hier reinigen wir große Bürokomplexe, Industrieflächen und Logistikzentren. Die gute Verkehrsanbindung über die Autobahn ermöglicht uns auch für größere Objekte in Mannheim einen zuverlässigen und pünktlichen Service.",
  },
];

export default function EinsatzgebietPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Einsatzgebiet", item: "https://www.vlas-reinigung.de/einsatzgebiet" },
    ],
  };

  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* BREADCRUMB */}
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <li><Link href="/" className="hover:text-[#0047AB] transition-colors">Startseite</Link></li>
          <li className="text-slate-200">/</li>
          <li className="text-[#0047AB]">Einsatzgebiet</li>
        </ol>
      </nav>

      {/* HEADER */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
        <h1 className="text-4xl lg:text-6xl font-black text-[#0047AB] tracking-tighter uppercase mb-6">
          Unser Einsatzgebiet: Karlsruhe &amp; Umgebung
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
          VLAS Gebäudereinigung und Service ist nicht nur in Karlsruhe aktiv, sondern betreut Kunden in der gesamten TechnologieRegion Karlsruhe und darüber hinaus. Von Bruchsal im Norden bis Ettlingen im Süden, von Germersheim im Westen bis Pforzheim im Osten – wir sind für Sie da. Kurze Anfahrtwege bedeuten pünktlichen Service und schnelle Reaktionszeiten.
        </p>
      </section>

      {/* CITIES */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-[#0047AB] flex-shrink-0" />
                <h2 className="text-xl font-black text-slate-800">{city.name}</h2>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">{city.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-2xl font-black text-slate-800 mb-6">Unser Standort</h2>
        <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=K%C3%B6nigsberger+Str.+4D,+76139+Karlsruhe&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="VLAS Gebäudereinigung und Service – Standort Karlsruhe"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center mb-10">
        <h2 className="text-3xl font-black text-slate-800 mb-4">Sie sind in unserer Region?</h2>
        <p className="text-slate-600 font-medium mb-10">Kontaktieren Sie uns für eine kostenlose Erstbesichtigung. Wir sind in Karlsruhe und Umgebung schnell vor Ort.</p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#0047AB] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-xl shadow-blue-900/20"
        >
          Jetzt Angebot anfordern <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
