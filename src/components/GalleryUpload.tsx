"use client";

import { useState } from "react";
import { uploadImage } from "@/app/actions/gallery";
import { Upload, Loader2, Image as ImageIcon, Film } from "lucide-react";

export default function GalleryUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<{ url: string; type: "image" | "video" } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await uploadImage(formData);
      
      if (result.success) {
        setPreview(null);
        (e.target as HTMLFormElement).reset();
        alert("Success! Fișierul a fost salvat și adăugat în galerie.");
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
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const type = file.type.startsWith("video/") ? "video" : "image";
      setPreview({ url, type });
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 max-w-2xl mx-auto">
      <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
        <Upload className="text-[#0047AB]" /> Medien hochladen (Foto/Video)
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-500">
            Datei auswählen
          </label>
          <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-4 hover:border-[#0047AB] transition-colors group min-h-[200px] flex items-center justify-center">
            <input
              type="file"
              name="file"
              required
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
            />
            {preview ? (
              preview.type === "image" ? (
                <img
                  src={preview.url}
                  alt="Vorschau"
                  className="w-full h-64 object-cover rounded-xl"
                />
              ) : (
                <video
                  src={preview.url}
                  className="w-full h-64 object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                />
              )
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-[#0047AB]">
                <div className="flex gap-2 mb-2">
                  <ImageIcon size={32} />
                  <Film size={32} />
                </div>
                <span className="text-sm font-bold">Klicken oder Datei hierher ziehen</span>
                <span className="text-[10px] mt-1 uppercase tracking-wider">Bilder & Videos (MP4)</span>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className="w-full py-5 bg-[#0047AB] text-white font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/20 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isUploading ? (
            <>
              <Loader2 className="animate-spin" size={20} /> Übertragung läuft...
            </>
          ) : (
            "Datei jetzt speichern"
          )}
        </button>
      </form>
    </div>
  );
}
