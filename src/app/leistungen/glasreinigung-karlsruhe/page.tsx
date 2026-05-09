import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Glasreinigung Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Professionelle Glasreinigung in Karlsruhe – streifenfreie Fenster, Schaufenster & Fassaden. Auch schwer zugängliche Höhen. Kostenlose Erstbesichtigung.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/glasreinigung-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Glasreinigung Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  description: "Professionelle Glas- und Fensterreinigung für Gewerbe und Privat in Karlsruhe.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Glasreinigung Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/glasreinigung-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Glasreinigung Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/glasreinigung-karlsruhe"
      h1="Glasreinigung Karlsruhe"
      intro="Saubere Fenster und Glasflächen sind das Aushängeschild Ihres Unternehmens. VLAS Gebäudereinigung und Service bietet professionelle Glasreinigung in Karlsruhe – vollständig streifenfrei, schonend und sicher, auch in schwer zugänglichen Höhen."
      sections={[
        {
          heading: "Fenster- und Schaufensterreinigung",
          body: "Wir reinigen Fenster jeder Größe – von einzelnen Bürofenstern bis zu großen Schaufronten und Glasfassaden. Mit professionellen Abziehergeräten und Osmosewasser-Technik erzielen wir ein streifenfreies Ergebnis. Rahmen, Falze und Fensterbänke werden dabei stets mitgereinigt, damit das Gesamtbild stimmt.",
        },
        {
          heading: "Glasfassaden & schwer zugängliche Bereiche",
          body: "Für mehrstöckige Gebäude setzen wir Hubarbeitsbühnen, Leitern und Teleskopstangen ein. Unsere Mitarbeiter sind für Arbeiten in der Höhe geschult und arbeiten nach geltenden Sicherheitsvorschriften. So erreichen wir auch die obersten Glasflächen Ihrer Fassade sicher und gründlich.",
        },
        {
          heading: "Wintergärten & Spezialflächen",
          body: "Wintergärten, Glasdächer und Sonderverglasungen stellen besondere Anforderungen an Reinigungsmittel und -technik. Wir verwenden materialschonende Produkte, die Dichtungen und Rahmen nicht angreifen und Glas dauerhaft vor Kalk- und Schmutzablagerungen schützen.",
        },
        {
          heading: "Regelmäßige Glasreinigung im Vertrag",
          body: "Für Gewerbeobjekte empfehlen wir eine regelmäßige Glasreinigung – monatlich oder quartalsweise, abgestimmt auf Ihre Lage und Verschmutzungsintensität. Mit einem Reinigungsvertrag sichern Sie sich feste Preise und garantierte Termine, ohne sich selbst darum kümmern zu müssen.",
        },
      ]}
      benefits={[
        "Rahmen- und Falzreinigung inklusive",
        "Reinigung von Schaufenstern und Glasfassaden",
        "Wintergartenreinigung",
        "Beseitigung hartnäckiger Kalk- und Verschmutzungen",
        "Einsatz von Hubsteigern bei Bedarf",
        "Osmosewasser-Technik für streifenfreies Ergebnis",
        "Regelmäßige Verträge oder Einzelreinigung möglich",
      ]}
      warum={[
        { title: "Streifenfreie Ergebnisse", desc: "Professionelle Technik und Osmosewasser garantieren saubere Glasflächen ohne Schlieren und Streifen." },
        { title: "Sicherer Höheneinsatz", desc: "Zertifizierte Mitarbeiter, geprüfte Ausrüstung – wir arbeiten sicher auch an schwer zugänglichen Fassaden." },
        { title: "Eigenpersonal", desc: "Kein Subunternehmer. Feste Teams, die Sie kennen und denen Sie vertrauen können." },
      ]}
      related={[
        { title: "Unterhaltsreinigung Karlsruhe", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
        { title: "Grundreinigung Karlsruhe", href: "/leistungen/grundreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
