import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Industriereinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Industriereinigung in Karlsruhe – Maschinen, Produktionshallen & Anlagen. Sicherheit, Hygiene, minimale Ausfallzeiten. Angebot anfordern.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/industriereinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Industriereinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Industriereinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/industriereinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Industriereinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/industriereinigung-karlsruhe"
      h1="Industriereinigung Karlsruhe"
      intro="In industriellen Umgebungen gelten höchste Anforderungen an Sauberkeit, Hygiene und Arbeitssicherheit. VLAS Gebäudereinigung und Service bietet spezialisierte Industriereinigung in Karlsruhe – für Produktionshallen, Maschinen und Industrieanlagen aller Art."
      sections={[
        { heading: "Maschinen- und Anlagenreinigung", body: "Verschmutzte Maschinen und Produktionsanlagen sind Sicherheitsrisiken und verringern die Lebensdauer teurer Investitionen. Wir reinigen Maschinen gründlich, ohne die empfindliche Technik zu beschädigen. Unsere Mitarbeiter werden für den Umgang mit industriellen Anlagen geschult und arbeiten nach Ihren Sicherheitsvorgaben." },
        { heading: "Hallenboden und Produktionsflächen", body: "Hallenböden in der Industrie sind oft mit Öl, Schmierstoffen, Metallabrrieb und Staub belastet. Wir setzen professionelle Scheuersaugmaschinen und Hochdruckreiniger ein, um auch hartnäckige Verschmutzungen effizient zu entfernen – ohne Ihre Produktionsprozesse unnötig zu unterbrechen." },
        { heading: "RLT-Anlagen und schwer zugängliche Bereiche", body: "Raumlufttechnische Anlagen (RLT) sind häufig vernachlässigt, obwohl ihre Sauberkeit direkt die Luftqualität am Arbeitsplatz beeinflusst. Wir reinigen Lüftungskanäle, Filter und Klimaanlagenkomponenten fachgerecht und dokumentieren alle durchgeführten Arbeiten." },
        { heading: "Einsatz außerhalb Ihrer Betriebszeiten", body: "Wir passen uns Ihren Schichten und Betriebszeiten an. Industriereinigung findet bei uns häufig nachts, am Wochenende oder in geplanten Wartungspausen statt – damit Ihre Produktion läuft und trotzdem höchste Sauberkeit gewährleistet ist." },
      ]}
      benefits={[
        "Maschinen- und Anlagenreinigung",
        "Reinigung von Produktions- und Lagerhallen",
        "Beseitigung von Öl- und Schmierstoffen",
        "Hochdruckreinigung",
        "Reinigung von RLT-Anlagen",
        "Einsatz außerhalb der Betriebszeiten",
        "Sicherheitsunterwiesenes Personal",
      ]}
      warum={[
        { title: "Industrieerfahrung", desc: "Wir kennen die Anforderungen industrieller Umgebungen und arbeiten nach Ihren Sicherheits- und Hygienestandards." },
        { title: "Minimale Ausfallzeiten", desc: "Reinigungseinsätze werden auf Ihre Produktionspläne abgestimmt, damit Ihre Abläufe nicht gestört werden." },
        { title: "Professionelle Ausrüstung", desc: "Hochdruckreiniger, Scheuersaugmaschinen und professionelle Reinigungsmittel für jede Herausforderung." },
      ]}
      related={[
        { title: "Baureinigung Karlsruhe", href: "/leistungen/baureinigung-karlsruhe" },
        { title: "Grundreinigung Karlsruhe", href: "/leistungen/grundreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
