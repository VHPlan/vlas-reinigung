import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Häufige Fragen – VLAS Gebäudereinigung und Service Karlsruhe",
  description:
    "Häufig gestellte Fragen zu VLAS Gebäudereinigung und Service: Eigenpersonal, Reinigungsmittel, Kosten, Einsatzgebiet, Versicherung und mehr.",
  alternates: { canonical: "https://www.vlas-reinigung.de/faq" },
};

export default function FaqPage() {
  return <FaqClient />;
}
