"use client";

import { useState, useEffect } from "react";
import { GalleryItem } from "@/app/actions/gallery";
import { Trash2, Image as ImageIcon, Film, X, Maximize2 } from "lucide-react";
import { deleteImage } from "@/app/actions/gallery";

export default function AdminGalleryGrid({ initialImages }: { initialImages: GalleryItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {initialImages.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-square cursor-pointer">
            {item.type === "image" ? (
              <img src={item.url} alt="" className="w-full h-full object-cover" onClick={() => setSelectedItem(item)} />
            ) : (
              <video src={item.url} className="w-full h-full object-cover" muted onClick={() => setSelectedItem(item)} />
            )}
            
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#0047AB] shadow-sm pointer-events-none">
              {item.type === "image" ? <ImageIcon size={14} /> : <Film size={14} />}
            </div>

            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
              <button 
                onClick={() => setSelectedItem(item)}
                className="w-12 h-12 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg"
              >
                <Maximize2 size={20} />
              </button>
              
              <form action={async () => {
                if (confirm("Möchten Sie dieses Bild wirklich löschen?")) {
                  await deleteImage(item.id);
                  window.location.reload();
                }
              }}>
                <button type="submit" className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                  <Trash2 size={20} />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* ADMIN LIGHTBOX */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 sm:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-slate-300">
            <X size={40} />
          </button>
          
          <div className="relative max-w-full max-h-full" onClick={e => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <img src={selectedItem.url} alt="" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
            ) : (
              <video src={selectedItem.url} controls autoPlay className="max-w-full max-h-[90vh] object-contain rounded-lg" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
