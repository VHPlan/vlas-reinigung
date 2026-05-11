import { getGalleryImages, deleteImage } from "@/app/actions/gallery";
import { logout } from "@/app/actions/auth";
import GalleryUpload from "@/components/GalleryUpload";
import { Trash2, Film, Image as ImageIcon, ArrowLeft, LogOut, LayoutDashboard, Settings, User } from "lucide-react";
import Link from "next/link";

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

        <div className="max-w-[1200px] mx-auto p-10">
          {/* UPLOAD SECTION */}
          <div className="mb-20 text-center">
             <div className="mb-10">
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-3">VLAS Media Management</h3>
                <div className="h-1 w-20 bg-[#0047AB] mx-auto mb-6 rounded-full" />
                <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                  Îmbogățește-ți portofoliul cu noi realizări de excepție. Încărcările tale vor apărea instantaneu în galeria publică.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                <GalleryUpload />
             </div>
          </div>

          {/* MEDIA GRID */}
          <div>
            <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest">Mediathek</h3>
               <div className="flex gap-2">
                  <span className="px-4 py-2 bg-[#0047AB] rounded-lg text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-blue-900/20">Total ({images.length})</span>
               </div>
            </div>

            {images.length === 0 ? (
              <div className="bg-white rounded-[32px] border-2 border-dashed border-slate-200 p-20 text-center">
                 <ImageIcon size={48} className="text-slate-200 mx-auto mb-4" />
                 <p className="text-slate-400 font-bold">Keine Medien vorhanden.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                {images.map((item) => (
                  <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-square">
                    {item.type === "image" ? (
                      <img src={item.url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <video src={item.url} className="w-full h-full object-cover" muted />
                    )}
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#0047AB] shadow-sm">
                      {item.type === "image" ? <ImageIcon size={14} /> : <Film size={14} />}
                    </div>

                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                      <form action={async () => {
                        "use server";
                        await deleteImage(item.id);
                      }}>
                        <button type="submit" className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                          <Trash2 size={20} />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
