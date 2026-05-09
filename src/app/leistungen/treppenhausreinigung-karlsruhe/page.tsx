import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Treppenhausreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Treppenhausreinigung in Karlsruhe für Hausverwaltungen & WEG – zuverlässig, regelmäßig, sauber. Erster Eindruck für Mieter & Besucher. Angebot anfordern.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/treppenhausreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Treppenhausreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Treppenhausreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/treppenhausreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Treppenhausreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/treppenhausreinigung-karlsruhe"
      h1="Treppenhausreinigung Karlsruhe"
      intro="Das Treppenhaus ist der erste Eindruck, den Mieter, Besucher und Kunden von Ihrem Gebäude bekommen. VLAS Gebäudereinigung und Service übernimmt die regelmäßige Treppenhausreinigung für Hausverwaltungen, Eigentümergemeinschaften und Privatvermieter in Karlsruhe."
      sections={[
        { heading: "Regelmäßige Treppenhausreinigung für WEG", body: "Eigentümergemeinschaften und Hausverwaltungen profitieren besonders von einem verlässlichen Reinigungspartner. Wir reinigen Treppenhäuser wöchentlich, zweiwöchentlich oder monatlich – je nach Bedarf und Nutzungsintensität. Feste Teams und klare Verträge sorgen für Planungssicherheit und keine bösen Überraschungen." },
        { heading: "Vollständige Reinigung aller Bereiche", body: "Treppenhausreinigung bedeutet für uns mehr als nur das Fegen der Stufen. Wir reinigen Geländer und Handläufe, Briefkästen und Klingeltableaus, Eingangstüren innen und außen, Fensterflächen im Treppenhaus sowie Kellerabgänge und Gemeinschaftsbereiche – alles aus einer Hand." },
        { heading: "Spinnwebenentfernung und Grundreinigung", body: "Zu unserem Leistungsumfang gehört auch die regelmäßige Entfernung von Spinnweben, das Abstauben von Lichtschaltern und die Grundreinigung der Treppenstufen und Podeste. Auf Wunsch führen wir zusätzlich eine jährliche Grundreinigung durch, bei der Wände, Heizkörper und alle Gemeinschaftsflächen intensiv gereinigt werden." },
        { heading: "Zuverlässig und pünktlich", body: "Mieter und Eigentümer erwarten ein gepflegtes Treppenhaus. Wir liefern das – pünktlich und verlässlich. Bei Ausfall eines Mitarbeiters greifen unsere Vertretungsregelungen: Die Reinigung findet statt, ohne dass Sie sich darum kümmern müssen. Auf Wunsch erhalten Sie eine Bestätigung nach jeder Reinigung." },
      ]}
      benefits={[
        "Fegen und Wischen der Treppen und Podeste",
        "Reinigung der Geländer und Handläufe",
        "Briefkasten- und Klingeltableau-Reinigung",
        "Spinnwebenentfernung",
        "Reinigung der Eingangstüren",
        "Wöchentliche, 14-tägige oder monatliche Einsätze",
        "Reinigungsprotokoll auf Wunsch",
      ]}
      warum={[
        { title: "Erster Eindruck zählt", desc: "Ein sauberes Treppenhaus steigert den Immobilienwert und erhöht die Zufriedenheit von Mietern und Eigentümern." },
        { title: "Verlässliche Vertretungsregelung", desc: "Kein Ausfall, keine Entschuldigungen – unsere festen Vertretungsregelungen garantieren, dass die Reinigung stattfindet." },
        { title: "Rundumsorglos für Verwalter", desc: "Hausverwaltungen profitieren von einem einzigen Ansprechpartner für alle Objekte – mit einheitlichen Standards und transparenten Abrechnungen." },
      ]}
      related={[
        { title: "Unterhaltsreinigung Karlsruhe", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
        { title: "Hausmeisterservice Karlsruhe", href: "/leistungen/hausmeisterservice-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
