import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Steinreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Steinreinigung în Karlsruhe. Wir reinigen Terrassen, Gehwege und Mauern von Moos, Algen und Flecken. Kostenlose Erstbesichtigung anfragen.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/steinreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Steinreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  description: "Professionelle Reinigung von Steinaußenflächen în Karlsruhe.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Steinreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/steinreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Steinreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/steinreinigung-karlsruhe"
      h1="Steinreinigung Karlsruhe"
      intro="Verleihen Sie Ihren Außenanlagen neuen Glanz. VLAS Gebäudereinigung und Service bietet professionelle Steinreinigung mit Heißwasser bis 140 Grad für Terrassen, Gehwege, Auffahrten und Mauern in Karlsruhe und Umgebung. Wir entfernen hartnäckige Verschmutzungen wie Moos, Algen und Flecken porentief, schonend und ohne Chemie."
      sections={[
        {
          heading: "Porentiefe Sauberkeit mit 140°C Heißwasser",
          body: "Über die Jahre setzen sich Witterungseinflüsse, Moos und Algen tief in die Poren von Naturstein, Beton oder Pflastersteinen fest. Durch unsere spezialisierte Heißwasser-Technik (bis 140 Grad) lösen wir Verschmutzungen und organischen Bewuchs effektiv auf, während herkömmliche Kaltwasser-Hochdruckreiniger oft nur oberflächlich arbeiten.",
        },
        {
          heading: "Werterhalt Ihrer Außenanlagen",
          body: "Regelmäßige Steinreinigung schützt nicht nur das optische Erscheinungsbild, sondern beugt auch Frostschäden und Rutschgefahr durch Algenbelag vor. Das Heißwasser-Verfahren ist dabei besonders schonend für die Bausubstanz, da wir mit geringerem Druck arbeiten können, während die Hitze die Arbeit erledigt.",
        },
        {
          heading: "Umweltfreundlich durch thermische Reinigung",
          body: "Dank der hohen Temperaturen von bis zu 140 Grad benötigen wir in den meisten Fällen keinerlei chemische Reinigungsmittel. Die Hitze tötet Moossporen und Algen bis tief in die Wurzel ab, was eine deutlich längere Sauberkeit garantiert als bei herkömmlichen Methoden.",
        },
      ]}
      benefits={[
        "Thermische Unkraut- und Algenvernichtung (140°C)",
        "Reinigung von Terrassen, Balkonen und Gehwegen",
        "Porentiefe Sauberkeit ohne aggressive Chemie",
        "Beseitigung von Öl- und Fettflecken durch Heißwasser",
        "Schonende Reinigung von Natur- und Kunststein",
        "Langfristiger Schutz durch Imprägnierung",
        "Unverbindliche Besichtigung und Probereinigung",
      ]}
      warum={[
        { title: "Professionelles Equipment", desc: "Wir nutzen Industriereiniger und Heißwasser-Hochdruck-Systeme für beste Ergebnisse." },
        { title: "Schonende Verfahren", desc: "Keine Beschädigung der Steine sau Fugen durch unsachgemäße Behandlung." },
        { title: "Faire Festpreise", desc: "Sie erhalten ein transparentes Angebot ohne versteckte Zusatzkosten." },
      ]}
      related={[
        { title: "Fassadenreinigung Karlsruhe", href: "/leistungen/fassadenreinigung-karlsruhe" },
        { title: "Glasreinigung Karlsruhe", href: "/leistungen/glasreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
