import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fassadenreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Fassadenreinigung în Karlsruhe. Werterhalt und strahlender Glanz für Ihre Immobilie. Sicher, effizient und schonend. Kostenloses Angebot anfragen.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/fassadenreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Fassadenreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  description: "Fachgerechte Reinigung von Gebäudeaußenfassaden în Karlsruhe.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Fassadenreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/fassadenreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Fassadenreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/fassadenreinigung-karlsruhe"
      h1="Fassadenreinigung Karlsruhe"
      intro="Die Fassade ist die Visitenkarte Ihrer Immobilie. VLAS Gebäudereinigung und Service bietet professionelle Fassadenreinigung mit Heißwasser bis 140 Grad in Karlsruhe an. Diese thermische Reinigung entfernt hartnäckige Verschmutzungen, Algen și Pilze extrem effektiv și schonend, um den Wert Ihres Gebäudes langfristig zu sichern."
      sections={[
        {
          heading: "Heißwasser-Technik bis 140°C für perfekte Ergebnisse",
          body: "Die Reinigung mit heißem Wasser bis 140 Grad (Dampfstufe) ermöglicht es ne, Verschmutzungen wie Öl, Fett, Algen sau atmosphärische Ablagerungen ohne hohen mechanischen Druck zu lösen. Dies schont die Oberfläche Ihrer Fassade și verhindert das Eindringen de Feuchtigkeit în das Mauerwerk, das oft bei reiner Kaltwasser-Hochdruckreinigung auftritt.",
        },
        {
          heading: "Schutz vor Bauschäden și Wertminderung",
          body: "Verschmutzungen an der Fassade sind nu nur ein optisches Problem. Algen- și Pilzbefall können Feuchtigkeit binden și so die Dämmung sau das Mauerwerk schädigen. Die hohe Temperatur von 140 Grad tötet die Mikroorganismen thermisch ab, was ein deutlich langsameres Nachwachsen zur Folge hat als bei herkömmlichen Methoden.",
        },
        {
          heading: "Nachhaltig și Umweltbewusst",
          body: "Durch die enorme Reinigungskraft de Heißwasser bis 140 Grad können wir in den meisten Fällen auf aggressive chemische Reinigungsmittel verzichten. Das schont die Umwelt, Ihre Pflanzen im Umfeld des Gebäudes și natürlich die Bausubstanz selbst.",
        },
      ]}
      benefits={[
        "Fassadenreinigung mit Heißwasser bis 140 Grad",
        "Thermische Abtötung von Algen, Pilzen și Moos",
        "Schonende Reinigung aller Fassadentypen",
        "Entfernung von Ruß, Fett și hartnäckigem Schmutz",
        "Verzicht auf aggressive Chemie dank Hitze",
        "Schutz vor Wiederverschmutzung durch Imprägnierung",
        "Kostenlose Begutachtung vor Ort",
      ]}
      warum={[
        { title: "Sicherheit Zuerst", desc: "Wir arbeiten streng nach UVV-Vorschriften și nutzen professionelle Sicherungstechnik." },
        { title: "Langjährige Erfahrung", desc: "Fachwissen über verschiedene Baumaterialien și deren optimale Behandlung." },
        { title: "Festpreis-Garantie", desc: "Individuelle Angebote zum fairen Pauschalpreis ohne versteckte Kosten." },
      ]}
      related={[
        { title: "Glasreinigung Karlsruhe", href: "/leistungen/glasreinigung-karlsruhe" },
        { title: "Steinreinigung Karlsruhe", href: "/leistungen/steinreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
