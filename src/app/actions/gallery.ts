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

export async function uploadImage(formData: FormData) {
  try {
    await ensureDirs();
    const file = formData.get("file") as File;

    if (!file) {
      return { success: false, error: "Keine Datei ausgewählt" };
    }

    const fileType = file.type.startsWith("video/") ? "video" : "image";
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generăm un nume unic
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const path = join(UPLOAD_DIR, filename);

    await writeFile(path, buffer);

    // Actualizăm JSON-ul
    const currentImages = await getGalleryImages();
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      url: `/images/gallery/${filename}`,
      type: fileType,
      createdAt: new Date().toISOString(),
    };

    const updatedImages = [newItem, ...currentImages];
    await writeFile(DATA_FILE, JSON.stringify(updatedImages, null, 2));

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true };
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
