import { Metadata } from "next";
import { getGalleryImages } from "@/app/actions/gallery";
import { Camera } from "lucide-react";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Galerie | VLAS Gebäudereinigung",
  description: "Sehen Sie sich die Ergebnisse unserer Arbeit an. Fotogalerie professioneller Reinigungsdienstleistungen in Karlsruhe.",
};

export default async function GaleriePage() {
  const images = await getGalleryImages();

  // Date structurate pentru Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "VLAS Gebäudereinigung Referenzen",
    "description": "Galerie profesionistă de curățenie în Karlsruhe",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "VLAS Gebäudereinigung"
    },
    "image": images.map(img => `https://www.vlas-reinigung.de${img.url}`)
  };

  return (
    <main className="bg-white min-h-screen pt-48 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-[#0047AB] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
          <Camera size={14} /> Unser Portfolio
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1]">
          Ein Blick auf unsere <br /> <span className="text-[#0047AB]">exzellente Arbeit.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Von der Glasreinigung bis zur Baureinigung – wir zeigen Ihnen echte Ergebnisse. Filtern Sie nach Fotos oder Videos, um sich einen Eindruck zu verschaffen.
        </p>
      </section>

      {/* INTERACTIVE GALLERY */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <GalleryClient initialImages={images} />
      </section>
    </main>
  );
}
