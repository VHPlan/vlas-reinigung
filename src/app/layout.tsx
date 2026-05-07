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
  description: "Professionelle Gebäudereinigung. Qualität, Zuverlässigkeit und Werterhalt für Ihre Immobilien.",
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
