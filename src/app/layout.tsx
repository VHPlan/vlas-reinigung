import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientFeatures from "@/components/ClientFeatures";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCtaBar from "@/components/MobileCtaBar";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.vlas-reinigung.de";

export const metadata: Metadata = {
  title: {
    default: "VLAS Gebäudereinigung und Service | Professionelle Reinigung in Karlsruhe",
    template: "%s | VLAS Gebäudereinigung und Service",
  },
  description:
    "Professionelle Gebäudereinigung für Büros, Praxen und Industrieanlagen. Qualität, Zuverlässigkeit und Werterhalt für Ihre Immobilien in Karlsruhe und Umgebung.",
  keywords: [
    "Gebäudereinigung Karlsruhe",
    "Büroreinigung",
    "Unterhaltsreinigung",
    "Fensterreinigung",
    "Baureinigung",
    "Reinigungsfirma Karlsruhe",
    "VLAS Gebäudereinigung und Service",
  ],
  authors: [{ name: "Alexandru Vlas" }],
  openGraph: {
    title: "VLAS Gebäudereinigung und Service | Professionelle Reinigung",
    description:
      "Ihr zuverlässiger Partner für professionelle Sauberkeit und Werterhalt in Karlsruhe.",
    url: baseUrl,
    siteName: "VLAS Gebäudereinigung und Service",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // TODO: create real 1200x630 branded image before launch
        width: 1200,
        height: 630,
        alt: "VLAS Gebäudereinigung und Service – Karlsruhe",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(baseUrl),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VLAS Gebäudereinigung und Service",
  url: baseUrl,
  telephone: "+4917655700551",
  email: "info@vlas-reinigung.de",
  founder: "Alexandru Vlas",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Königsberger Str. 4D",
    addressLocality: "Karlsruhe",
    postalCode: "76139",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.0069,
    longitude: 8.4037,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "€€",
  areaServed: [
    "Karlsruhe",
    "Ettlingen",
    "Bruchsal",
    "Rastatt",
    "Baden-Baden",
    "Pforzheim",
    "Germersheim",
    "Heidelberg",
    "Mannheim",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigungsdienstleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unterhaltsreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Glasreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baureinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industriereinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grundreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppenhausreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teppichreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hausmeisterservice" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ClientFeatures />
        <WhatsAppButton />
        <MobileCtaBar />
      </body>
    </html>
  );
}
