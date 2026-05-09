import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Teppichreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Teppich- & Polsterreinigung in Karlsruhe – gründlich, hygienisch und schonend. Für Büros, Praxen und Gewerbe. Kostenlose Erstbesichtigung.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/teppichreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Teppichreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Teppichreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/teppichreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Teppichreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/teppichreinigung-karlsruhe"
      h1="Teppichreinigung Karlsruhe"
      intro="Teppiche und Polster sind Schmutzfallen – sie binden Staub, Allergene und Bakterien, die normale Staubsauger nicht vollständig entfernen. VLAS Gebäudereinigung und Service bietet professionelle Teppich- und Polsterreinigung in Karlsruhe mit moderner Spezialausrüstung."
      sections={[
        { heading: "Professionelle Teppichreinigung für Gewerbe", body: "Gewerbeteppiche in Büros, Empfangsbereichen und Konferenzräumen unterliegen hohem Verschleiß. Regelmäßige professionelle Reinigung verlängert die Lebensdauer deutlich und sorgt für ein hygienisches Raumklima. Wir setzen je nach Teppichart auf Heißwasserextraktion, Trockenschaum- oder Pulverreinigung." },
        { heading: "Fleckenentfernung und Geruchsbeseitigung", body: "Hartnäckige Flecken durch Kaffee, Tinte oder andere Substanzen werden gezielt mit Spezialreinigern vorbehandelt, bevor die Tiefenreinigung beginnt. Auf Wunsch behandeln wir Teppiche auch mit geruchsneutralisierenden Mitteln – wichtig für Praxen, Gastronomiebetriebe oder Büros mit intensiver Nutzung." },
        { heading: "Polsterreinigung für Büromöbel", body: "Bürostühle, Sofas und Empfangsmöbel werden häufig vernachlässigt, obwohl sich dort besonders viele Bakterien und Allergene ansammeln. Unsere Polsterreinigung entfernt tief eingesunkenen Schmutz schonend und hinterlässt Ihre Möbel frisch, hygienisch und optisch ansprechend." },
        { heading: "Kurze Trocknungszeiten", body: "Wir achten darauf, möglichst kurze Trocknungszeiten zu erreichen, damit Sie Ihre Räumlichkeiten schnell wieder nutzen können. Je nach Reinigungsverfahren und Raumklima sind Teppiche nach 2–6 Stunden wieder begehbar. Auf Wunsch führen wir die Reinigung außerhalb Ihrer Betriebszeiten durch." },
      ]}
      benefits={[
        "Heißwasserextraktion für Tiefenreinigung",
        "Fleckenentfernung mit Spezialreinigern",
        "Geruchsneutralisierung auf Wunsch",
        "Polsterreinigung für Bürostühle und Sofas",
        "Kurze Trocknungszeiten",
        "Einsatz außerhalb der Betriebszeiten",
        "Allergiker-freundliche Reinigungsmittel verfügbar",
      ]}
      warum={[
        { title: "Modernes Equipment", desc: "Professionelle Extraktionsgeräte reinigen tiefer und trocknen schneller als haushaltsübliche Geräte." },
        { title: "Hygienestandards", desc: "Besonders für Praxen und Büros mit viel Publikumsverkehr sorgt unsere Reinigung für ein nachweislich hygienisches Raumklima." },
        { title: "Materialschonendes Vorgehen", desc: "Wir wählen das Reinigungsverfahren passend zur Teppichart und vermeiden Beschädigungen durch falsche Chemikalien oder zu viel Feuchtigkeit." },
      ]}
      related={[
        { title: "Grundreinigung Karlsruhe", href: "/leistungen/grundreinigung-karlsruhe" },
        { title: "Unterhaltsreinigung Karlsruhe", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
