import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Hausmeisterservice Karlsruhe – VLAS Gebäudereinigung und Service",
  description: "Hausmeisterservice in Karlsruhe – Gebäudepflege, Instandhaltung & Betreuung aus einer Hand. Für Hausverwaltungen und Eigentümer. Angebot anfordern.",
  alternates: { canonical: "https://www.vlas-reinigung.de/leistungen/hausmeisterservice-karlsruhe" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "LocalBusiness"],
  name: "Hausmeisterservice Karlsruhe",
  provider: { "@type": "LocalBusiness", name: "VLAS Gebäudereinigung und Service" },
  areaServed: "Karlsruhe",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.vlas-reinigung.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.vlas-reinigung.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Hausmeisterservice Karlsruhe", item: "https://www.vlas-reinigung.de/leistungen/hausmeisterservice-karlsruhe" },
    ],
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Hausmeisterservice Karlsruhe – VLAS Gebäudereinigung und Service"
      metaDescription=""
      canonicalPath="/leistungen/hausmeisterservice-karlsruhe"
      h1="Hausmeisterservice Karlsruhe"
      intro="Ein professioneller Hausmeisterservice entlastet Eigentümer und Hausverwaltungen von zeitaufwändigen Aufgaben rund um die Immobilienpflege. VLAS Gebäudereinigung und Service bietet in Karlsruhe einen umfassenden Hausmeisterservice – alles aus einer Hand, persönlich und zuverlässig."
      sections={[
        { heading: "Gebäudepflege und Außenanlagen", body: "Unser Hausmeisterservice umfasst die Pflege von Außenanlagen, Gehwegen, Parkplätzen und Einfahrten. Wir übernehmen Kehrdienste, Schneeräumung im Winter, Streupflicht, Grünpflege und die Kontrolle der Außenbeleuchtung. So bleibt Ihre Liegenschaft das ganze Jahr über in einem gepflegten Zustand." },
        { heading: "Kleinreparaturen und Instandhaltung", body: "Neben der Reinigung bieten wir auch kleinere Instandhaltungsmaßnahmen an: Glühbirnenwechsel, Absperrung defekter Bereiche, Kontrolle von Gemeinschaftsräumen und Meldung von Schäden. Als Ansprechpartner vor Ort erkennen wir Probleme frühzeitig und informieren Sie umgehend." },
        { heading: "Müllmanagement und Entsorgung", body: "Wir übernehmen das Bereitstellen und Zurückstellen von Mülltonnen, die Kontrolle der Mülllagerräume und die Sauberkeit rund um die Entsorgungsanlage. Auf Wunsch koordinieren wir auch die fachgerechte Entsorgung von Sperrmüll oder Sonderabfällen in Abstimmung mit Ihrer Hausverwaltung." },
        { heading: "Verlässlicher Ansprechpartner für Ihre Liegenschaft", body: "Mit VLAS als Hausmeisterservice haben Sie einen persönlichen Ansprechpartner, der Ihre Immobilie kennt und Ihr Vertrauen verdient. Wir erstellen auf Wunsch regelmäßige Begehungsprotokolle und informieren Sie über den Zustand Ihrer Liegenschaften – transparent und proaktiv." },
      ]}
      benefits={[
        "Pflege von Außenanlagen und Gehwegen",
        "Schneeräumung und Winterdienst",
        "Mülltonnen bereitstellen und zurückstellen",
        "Kleinreparaturen und Leuchtmittelwechsel",
        "Gebäudebegehungen mit Protokoll",
        "Kontrolle von Gemeinschaftsbereichen",
        "Koordination mit Hausverwaltungen",
      ]}
      warum={[
        { title: "Alles aus einer Hand", desc: "Reinigung und Hausmeisterservice kombiniert – ein einziger Ansprechpartner für alle Leistungen rund um Ihre Immobilie." },
        { title: "Persönliche Betreuung", desc: "Kein anonymer Großdienstleister. Alexandru Vlas und sein Team kennen Ihre Immobilie persönlich und reagieren schnell auf neue Anforderungen." },
        { title: "Flexible Verträge", desc: "Von der einmaligen Begehung bis zum Jahresvertrag – wir passen uns Ihrem Bedarf an, ohne unnötigen bürokratischen Aufwand." },
      ]}
      related={[
        { title: "Treppenhausreinigung Karlsruhe", href: "/leistungen/treppenhausreinigung-karlsruhe" },
        { title: "Unterhaltsreinigung Karlsruhe", href: "/leistungen/unterhaltsreinigung-karlsruhe" },
      ]}
      schema={schema}
    />
  );
}
