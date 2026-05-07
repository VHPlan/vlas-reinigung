import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientFeatures from "@/components/ClientFeatures";

// Configuram font-ul Inter ca standard global
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLAS Gebäudereinigung | Professionelle Reinigung in Karlsruhe",
  description: "Professionelle Gebäudereinigung für Büros, Praxen und Industrieanlagen. Qualität, Zuverlässigkeit und Werterhalt für Ihre Immobilien in Karlsruhe und Umgebung.",
  keywords: ["Gebäudereinigung Karlsruhe", "Büroreinigung", "Unterhaltsreinigung", "Fensterreinigung", "Baureinigung", "Reinigungsfirma Karlsruhe"],
  authors: [{ name: "Alexandru Vlas" }],
  openGraph: {
    title: "VLAS Gebäudereinigung | Professionelle Reinigung",
    description: "Ihr zuverlässiger Partner für professionelle Sauberkeit und Werterhalt in Karlsruhe.",
    url: "https://www.vlas-reinigung.de",
    siteName: "VLAS Gebäudereinigung",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ClientFeatures />
      </body>
    </html>
  );
}
