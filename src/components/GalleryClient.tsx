"use client";

import { useState } from "react";
import { GalleryItem } from "@/app/actions/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Film, LayoutGrid } from "lucide-react";

export default function GalleryClient({ initialImages }: { initialImages: GalleryItem[] }) {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredImages = initialImages.filter((img) => {
    if (filter === "all") return true;
    return img.type === filter;
  });

  return (
    <div className="space-y-16">
      {/* FILTER TABS */}
      <div className="flex justify-center items-center gap-2 bg-slate-100 p-1.5 rounded-2xl max-w-fit mx-auto shadow-sm">
        <button
          onClick={() => setFilter("all")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            filter === "all" ? "bg-white text-[#0047AB] shadow-md" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <LayoutGrid size={16} /> Alle
        </button>
        <button
          onClick={() => setFilter("image")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            filter === "image" ? "bg-white text-[#0047AB] shadow-md" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <ImageIcon size={16} /> Fotos
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            filter === "video" ? "bg-white text-[#0047AB] shadow-md" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Film size={16} /> Videos
        </button>
      </div>

      {/* GRID SECTION */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-30px_rgba(0,71,171,0.25)] transition-all duration-500 border border-slate-50"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-50">
                {img.type === "image" ? (
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={img.url}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      loop
                    />
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl pointer-events-none group-hover:scale-110 transition-transform">
                       <Film className="text-white" size={24} />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Subtle hover indicator for images */}
              {img.type === "image" && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0047AB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredImages.length === 0 && (
        <div className="text-center py-40 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Keine Einträge in dieser Kategorie.</p>
        </div>
      )}
    </div>
  );
}
