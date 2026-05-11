import { getGalleryImages, deleteImage } from "@/app/actions/gallery";
import { logout } from "@/app/actions/auth";
import GalleryUpload from "@/components/GalleryUpload";
import { Trash2, Film, Image as ImageIcon, ArrowLeft, LogOut, LayoutDashboard, Settings, User } from "lucide-react";
import Link from "next/link";
import AdminGalleryGrid from "@/components/AdminGalleryGrid";

export default async function AdminGaleriePage() {
  const images = await getGalleryImages();
  const photoCount = images.filter(i => i.type === "image").length;
  const videoCount = images.filter(i => i.type === "video").length;

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* CONTENT AREA - FULL WIDTH */}
      <div className="w-full pb-20">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Link href="/galerie" className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h2 className="font-bold text-slate-800">Galerie-Verwaltung</h2>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Stats */}
            <div className="hidden sm:flex gap-4 mr-4">
               <div className="text-center px-4">
                 <div className="text-lg font-black text-slate-800">{photoCount}</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fotos</div>
               </div>
               <div className="text-center px-4 border-l border-slate-100">
                 <div className="text-lg font-black text-slate-800">{videoCount}</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Videos</div>
               </div>
            </div>

            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#0047AB] font-black border-2 border-white shadow-sm flex-shrink-0">
              AV
            </div>
          </div>
        </header>

        <div className="p-10 max-w-[1200px] mx-auto">
          {/* UPLOAD SECTION - CENTERED & PREMIUM */}
          <div className="mb-20 text-center">
             <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-[#0047AB] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <LayoutDashboard size={14} /> Admin Bereich
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-tight">
                  Medien <span className="text-[#0047AB]">Verwaltung</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                  Verwalten Sie Ihre Projektergebnisse und aktualisieren Sie Ihr Portfolio für Ihre Kunden.
                </p>
             </div>
             <GalleryUpload />
          </div>

          {/* MEDIA GRID */}
          <div>
            <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest">Mediathek</h3>
               <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#0047AB] rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Gesamt ({images.length})</span>
               </div>
            </div>

            {images.length === 0 ? (
              <div className="bg-white rounded-[32px] border-2 border-dashed border-slate-200 p-20 text-center">
                 <ImageIcon size={48} className="text-slate-200 mx-auto mb-4" />
                 <p className="text-slate-400 font-bold">Keine Medien vorhanden.</p>
              </div>
            ) : (
              <AdminGalleryGrid initialImages={images} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
