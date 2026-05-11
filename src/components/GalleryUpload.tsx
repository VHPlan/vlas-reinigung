"use client";

import { useState } from "react";
import { uploadImages } from "@/app/actions/gallery";
import { Upload, Loader2, Image as ImageIcon, Film, X } from "lucide-react";

export default function GalleryUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [previews, setPreviews] = useState<{ url: string; type: "image" | "video"; name: string }[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (previews.length === 0) return;
    
    setIsUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await uploadImages(formData);
      
      if (result.success) {
        setPreviews([]);
        (e.target as HTMLFormElement).reset();
        alert(`Success! ${result.count} fișiere au fost salvate.`);
      } else {
        alert("Eroare: " + (result.error || "Nu s-a putut salva fișierul."));
      }
    } catch (error: any) {
      console.error("Client upload error:", error);
      alert("Eroare: " + (error.message || "Eroare de conexiune sau permisiuni!"));
    } finally {
      setIsUploading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newPreviews = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video/") ? "video" as const : "image" as const,
        name: file.name
      }));
      setPreviews(newPreviews);
    }
  }

  return (
    <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 max-w-4xl mx-auto">
      <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center justify-center gap-3">
        <div className="p-3 bg-blue-50 text-[#0047AB] rounded-2xl">
          <Upload size={24} />
        </div>
        Medien hochladen (Multi-Upload)
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block text-center">
            Wählen Sie ein sau mehrere Dateie(n) aus
          </label>
          
          <div className="relative min-h-[300px] border-2 border-dashed border-slate-100 rounded-[32px] p-8 hover:border-[#0047AB] hover:bg-blue-50/30 transition-all group flex items-center justify-center">
            <input
              type="file"
              name="files"
              multiple
              required
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
            />
            
            {previews.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full z-20 pointer-events-none">
                {previews.map((preview, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white">
                    {preview.type === "image" ? (
                      <img src={preview.url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <video src={preview.url} className="w-full h-full object-cover" muted />
                    )}
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md p-1.5 rounded-lg text-white">
                      {preview.type === "image" ? <ImageIcon size={12} /> : <Film size={12} />}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-300 group-hover:text-[#0047AB] transition-colors">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ImageIcon size={40} />
                </div>
                <span className="text-lg font-black text-slate-400 group-hover:text-[#0047AB]">Dateien hierher ziehen</span>
                <span className="text-[10px] mt-2 uppercase tracking-widest font-bold">Max. 50MB pro Datei</span>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isUploading || previews.length === 0}
          className="w-full py-6 bg-[#0047AB] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-900/20 disabled:opacity-30 flex items-center justify-center gap-3"
        >
          {isUploading ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Încărcare ({previews.length} fișiere)...
            </>
          ) : (
            <>
              Speichern {previews.length > 0 && `(${previews.length} Dateien)`}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
