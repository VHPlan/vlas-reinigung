import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Unterhaltsreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Unterhaltsreinigung in Karlsruhe – zuverlässig, diskret, mit Eigenpersonal. Büros, Praxen & mehr. Kostenlose Erstbesichtigung anfragen.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/unterhaltsreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Unterhaltsreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  description: "Regelmäßige Unterhaltsreinigung für Büros, Praxen und Unternehmen in Karlsruhe.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Unterhaltsreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/unterhaltsreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Unterhaltsreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/unterhaltsreinigung-karlsruhe"
      h1="Unterhaltsreinigung Karlsruhe"
      intro="Die Unterhaltsreinigung ist die Grundlage für ein gepflegtes, produktives Arbeitsumfeld. VLAS Gebäudereinigung und Service übernimmt die regelmäßige Reinigung Ihres Büros, Ihrer Praxis oder Ihrer Gewerbefläche in Karlsruhe – zuverlässig, diskret und mit ausschließlich festangestelltem Eigenpersonal."
      sections={[
        {
          heading: "Was ist Unterhaltsreinigung?",
          body: "Unterhaltsreinigung bezeichnet die regelmäßige, tägliche oder wöchentliche Reinigung gewerblicher Objekte. Sie umfasst alle Standardreinigungsarbeiten, die notwendig sind, um ein Gebäude dauerhaft sauber und hygienisch zu halten. Als Ihre Reinigungsfirma in Karlsruhe stellen wir sicher, dass Ihr Objekt stets in einem repräsentativen Zustand ist – für Mitarbeiter, Kunden und Besucher.",
        },
        {
          heading: "Unsere Einsatzbereiche",
          body: "Wir reinigen Büros, Verwaltungsgebäude, Arztpraxen, Kanzleien, Einzelhandelsflächen und mehr. Unser geschultes Personal arbeitet diskret außerhalb Ihrer Kernarbeitszeiten – frühmorgens, abends oder am Wochenende, damit Ihr Betrieb nicht unterbrochen wird. Feste Reinigungsteams sorgen für gleichbleibende Qualität und Vertrautheit.",
        },
        {
          heading: "Warum regelmäßige Reinigung so wichtig ist",
          body: "Studien zeigen, dass ein sauberes Arbeitsumfeld die Produktivität steigert und Krankenstände senkt. Sauberkeit signalisiert Professionalität gegenüber Ihren Kunden und schützt gleichzeitig Ihre Einrichtung vor vorzeitigem Verschleiß. Mit der Unterhaltsreinigung von VLAS investieren Sie in den langfristigen Werterhalt Ihrer Immobilie.",
        },
        {
          heading: "Digitale Qualitätskontrolle",
          body: "Nach jeder Reinigung dokumentieren unsere Teamleiter den Zustand des Objekts digital. Abweichungen werden sofort erkannt und behoben. Sie erhalten auf Wunsch regelmäßige Berichte und haben jederzeit Transparenz über die erbrachten Leistungen – das unterscheidet uns von anonymen Großanbietern.",
        },
      ]}
      benefits={[
        "Reinigung von Arbeitsplätzen und Besprechungsräumen",
        "Hygienische Sanitärreinigung und Desinfektion",
        "Bodenpflege: Saugen, Wischen, Polieren",
        "Müllentsorgung und Mülltrennung",
        "Küchen- und Pausenraumreinigung",
        "Feste Reinigungsteams für Ihr Objekt",
        "Flexible Einsatzzeiten (morgens, abends, Wochenende)",
        "Digitale Qualitätskontrolle nach jeder Reinigung",
      ]}
      warum={[
        { title: "100% Eigenpersonal", desc: "Kein Subunternehmer. Ausschließlich festangestellte Mitarbeiter, die wir persönlich kennen und schulen." },
        { title: "Persönlicher Ansprechpartner", desc: "Sie haben immer denselben Ansprechpartner – kein anonymes Callcenter, keine Weiterleitungen." },
        { title: "Haftpflichtversichert", desc: "VLAS Gebäudereinigung und Service verfügt über eine Betriebs- und Haftpflichtversicherung." },
      ]}
      related={[
        { title: "Grundreinigung Karlsruhe", href: "/leistungen/grundreinigung-karlsruhe" },
        { title: "Glasreinigung Karlsruhe", href: "/leistungen/glasreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
