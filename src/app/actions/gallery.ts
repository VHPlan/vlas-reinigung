"use server";

import { writeFile, readFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { revalidatePath } from "next/cache";

const DATA_FILE = join(process.cwd(), "src/data/gallery.json");
const UPLOAD_DIR = join(process.cwd(), "public/images/gallery");

async function ensureDirs() {
  await mkdir(dirname(DATA_FILE), { recursive: true });
  await mkdir(UPLOAD_DIR, { recursive: true });
}

export type GalleryItem = {
  id: string;
  url: string;
  type: "image" | "video";
  createdAt: string;
};

export async function getGalleryImages(): Promise<GalleryItem[]> {
  try {
    await ensureDirs();
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function uploadImages(formData: FormData) {
  try {
    await ensureDirs();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0 || (files.length === 1 && files[0].size === 0)) {
      return { success: false, error: "Keine Dateien ausgewählt" };
    }

    const currentImages = await getGalleryImages();
    const newItems: GalleryItem[] = [];

    for (const file of files) {
      if (file.size === 0) continue;

      const fileType = file.type.startsWith("video/") ? "video" : "image";
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Generăm un nume unic
      const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}-${file.name.replace(/\s+/g, "-")}`;
      const path = join(UPLOAD_DIR, filename);

      await writeFile(path, buffer);

      const newItem: GalleryItem = {
        id: (Date.now() + Math.random()).toString(),
        url: `/images/gallery/${filename}`,
        type: fileType,
        createdAt: new Date().toISOString(),
      };
      
      newItems.push(newItem);
    }

    const updatedImages = [...newItems, ...currentImages];
    await writeFile(DATA_FILE, JSON.stringify(updatedImages, null, 2));

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true, count: newItems.length };
  } catch (error: any) {
    console.error("Upload error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteImage(id: string) {
  const currentImages = await getGalleryImages();
  const updatedImages = currentImages.filter(img => img.id !== id);
  await writeFile(DATA_FILE, JSON.stringify(updatedImages, null, 2));
  
  // Notă: În producție ar trebui șters și fișierul de pe disc, 
  // dar pentru simplitate acum doar îl scoatem din listă.
  
  revalidatePath("/galerie");
  return { success: true };
}
