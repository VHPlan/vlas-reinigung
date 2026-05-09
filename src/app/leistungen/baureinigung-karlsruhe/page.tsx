import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Baureinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Baureinigung in Karlsruhe – Baugrob- & Baufeinreinigung für schlüsselfertige Übergaben. Schnell, gründlich, zuverlässig. Angebot anfordern.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/baureinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Baureinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  description: "Baugrob- und Baufeinreinigung für Bauprojekte in Karlsruhe und Umgebung.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Baureinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/baureinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Baureinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/baureinigung-karlsruhe"
      h1="Baureinigung Karlsruhe"
      intro="Baustellen erzeugen erhebliche Verschmutzungen – von Baustaub und Mörtelresten bis hin zu Farb- und Klebstoffspritzern. VLAS Gebäudereinigung und Service übernimmt die komplette Baureinigung in Karlsruhe: von der Baugrobreinigung während der Bauphase bis zur Baufeinreinigung vor der Schlüsselübergabe."
      sections={[
        {
          heading: "Baugrobreinigung",
          body: "Die Baugrobreinigung findet während oder kurz nach der eigentlichen Bauphase statt. Wir entfernen groben Bauschutt, Verpackungsmaterialien, Staubansammlungen und erste Verschmutzungen. Damit schaffen wir die Grundlage für nachfolgende Gewerke und halten die Baustelle arbeitssicher und geordnet.",
        },
        {
          heading: "Baufeinreinigung (Erstreinigung)",
          body: "Die Baufeinreinigung ist die abschließende Reinigung vor der Übergabe an Bauherr oder Mieter. Wir beseitigen Farb- und Mörtelspritzer, reinigen alle Oberflächen staubfrei, pflegen Böden ein und sorgen dafür, dass das Objekt in makellosem Zustand übergeben werden kann. Schnelligkeit und Termintreue sind dabei für uns selbstverständlich.",
        },
        {
          heading: "Spezialreinigung nach Handwerkern",
          body: "Sanierungen und Umbauten hinterlassen Spuren: Schleifstaub, Silikonreste, Klebefolienrückstände. Unser Team ist auf die Beseitigung dieser typischen Handwerkerhinterlassenschaften spezialisiert. Wir arbeiten mit geeigneten Reinigungsmitteln, die empfindliche neue Oberflächen und Böden nicht beschädigen.",
        },
        {
          heading: "Entsorgung und Protokoll",
          body: "Auf Wunsch übernehmen wir auch die fachgerechte Entsorgung von Verpackungsmaterialien und Kleinmengen an Bauschutt. Nach Abschluss der Baureinigung erhalten Sie auf Wunsch ein Übergabeprotokoll – für eine lückenlose Dokumentation und Ihre Rechtssicherheit bei der Objektübergabe.",
        },
      ]}
      benefits={[
        "Entfernung von Bauschutt und Grobschmutz",
        "Beseitigung von Farb- und Mörtelspritzern",
        "Staubfreie Reinigung aller Oberflächen",
        "Einpflege der Bodenbeläge",
        "Fachgerechte Entsorgung von Verpackungsmaterial",
        "Reinigung nach Handwerkern und Sanierungen",
        "Übergabeprotokoll auf Wunsch",
      ]}
      warum={[
        { title: "Termintreue", desc: "Wir wissen, dass bei Bauprojekten jeder Tag zählt. Unsere Teams sind pünktlich und arbeiten effizient, damit Übergaben nicht verzögert werden." },
        { title: "Erfahrung im Baubereich", desc: "Wir kennen die Anforderungen verschiedener Gewerke und wissen, welche Reinigungsmittel und Methoden für welche Materialien geeignet sind." },
        { title: "Eigenpersonal ohne Subunternehmer", desc: "Kein Risiko durch externe Dritte auf Ihrer Baustelle. Alle Mitarbeiter sind festangestellt und persönlich bekannt." },
      ]}
      related={[
        { title: "Grundreinigung Karlsruhe", href: "/leistungen/grundreinigung-karlsruhe" },
        { title: "Industriereinigung Karlsruhe", href: "/leistungen/industriereinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
