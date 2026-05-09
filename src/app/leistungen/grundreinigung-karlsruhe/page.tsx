import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Grundreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Grundreinigung in Karlsruhe – intensive Tiefenreinigung für Böden, Oberflächen & mehr. Hartnäckige Verschmutzungen entfernen. Angebot anfordern.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/grundreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Grundreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Grundreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/grundreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Grundreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/grundreinigung-karlsruhe"
      h1="Grundreinigung Karlsruhe"
      intro="Die Grundreinigung ist eine besonders intensive Reinigung, die deutlich über die normale Unterhaltsreinigung hinausgeht. VLAS Gebäudereinigung und Service führt Grundreinigungen in Karlsruhe durch, um hartnäckige Verschmutzungen, alte Pflegefilme und tief eingedrungenen Schmutz zu entfernen."
      sections={[
        { heading: "Was ist eine Grundreinigung?", body: "Bei einer Grundreinigung werden alle Flächen intensiv gereinigt – mit speziellen Maschinen und Reinigungsmitteln, die über die tägliche Unterhaltsreinigung hinausgehen. Alte Wachs- und Versiegelungsschichten werden abgetragen, Böden neu gepflegt und Oberflächen restauriert. Empfohlen wird eine Grundreinigung ein- bis zweimal jährlich, abhängig von der Nutzungsintensität." },
        { heading: "Bodenreinigung und -versiegelung", body: "Wir führen intensive Bodenreinigungen für alle gängigen Bodenarten durch: PVC, Linoleum, Parkett, Naturstein und Fliesen. Nach der Grundreinigung wird der Boden auf Wunsch mit einer neuen Schutzversiegelung oder einem Pflegemittel behandelt, das Schmutz abweist und die Lebensdauer des Bodens erhöht." },
        { heading: "Schwer zugängliche Bereiche", body: "Bei der Grundreinigung widmen wir uns auch Bereichen, die im Alltag schwer erreichbar sind: hinter Möbeln, in Ecken und Nischen, an Heizkörpern, Lüftungsgittern und Leuchten. Dieser ganzheitliche Ansatz stellt sicher, dass Ihr Objekt nach der Grundreinigung in einem wirklich makellosen Zustand ist." },
        { heading: "Ergänzung zur Unterhaltsreinigung", body: "Die Grundreinigung ersetzt nicht die regelmäßige Unterhaltsreinigung – sie ergänzt sie. Kombiniert mit einem Unterhaltsreinigungsvertrag bei VLAS erhalten Sie ein ganzheitliches Reinigungskonzept für Ihren Gewerbebetrieb. Fragen Sie uns nach einem maßgeschneiderten Paket für Ihr Objekt." },
      ]}
      benefits={[
        "Intensive Bodenreinigung (PVC, Linoleum, Stein, Parkett)",
        "Entfernung alter Versiegelungen und Pflegefilme",
        "Neubeschichtung und Versiegelung von Böden",
        "Reinigung schwer zugänglicher Bereiche",
        "Teppich- und Polsterreinigung auf Wunsch",
        "Hochdruckreinigung für robuste Flächen",
      ]}
      warum={[
        { title: "Tiefenreinigung statt Oberflächenpflege", desc: "Wir gehen in die Tiefe – mit Maschinen und Mitteln, die für intensive Grundreinigungen zugelassen und geeignet sind." },
        { title: "Kein Risiko für Ihre Bodenbeläge", desc: "Materialkenntnis und schonende Methoden schützen empfindliche Böden vor Beschädigungen durch falsche Reiniger." },
        { title: "Auf Wunsch mit Wartungsvertrag", desc: "Kombinieren Sie die Grundreinigung mit einem Unterhaltsreinigungsvertrag für dauerhaft gepflegte Räumlichkeiten." },
      ]}
      related={[
        { title: "Unterhaltsreinigung Karlsruhe", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
        { title: "Teppichreinigung Karlsruhe", href: "/leistungen/teppichreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
