"use server";

import { put, del, list } from "@vercel/blob";
import { revalidatePath } from "next/cache";

// Numele fișierului de metadate în Cloud
const METADATA_FILENAME = "vlas-gallery-metadata.json";

export type GalleryItem = {
  id: string;
  url: string;
  type: "image" | "video";
  createdAt: string;
};

/**
 * Recuperează lista de imagini din Vercel Blob
 */
export async function getGalleryImages(): Promise<GalleryItem[]> {
  try {
    // Verificăm dacă avem token-ul configurat (evităm crash local)
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn("Vercel Blob token not found. Gallery will be empty.");
      return [];
    }

    // Căutăm fișierul de metadate în listă
    const { blobs } = await list();
    const metadataBlob = blobs.find(b => b.pathname === METADATA_FILENAME);
    
    if (!metadataBlob) return [];

    const response = await fetch(metadataBlob.url, { cache: 'no-store' });
    if (!response.ok) return [];
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching gallery metadata:", error);
    return [];
  }
}

/**
 * Încarcă mai multe imagini în Vercel Blob
 */
export async function uploadImages(formData: FormData) {
  try {
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0 || (files.length === 1 && files[0].size === 0)) {
      return { success: false, error: "Keine Dateien ausgewählt" };
    }

    const currentImages = await getGalleryImages();
    const newItems: GalleryItem[] = [];

    for (const file of files) {
      if (file.size === 0) continue;

      const fileType = file.type.startsWith("video/") ? "video" : "image";
      
      // Încărcăm fișierul direct în Vercel Blob
      const blob = await put(file.name, file, {
        access: "public",
        addRandomSuffix: true, // Adaugă un sufix unic pentru a evita conflictele
      });

      const newItem: GalleryItem = {
        id: (Date.now() + Math.random()).toString(),
        url: blob.url,
        type: fileType,
        createdAt: new Date().toISOString(),
      };
      
      newItems.push(newItem);
    }

    const updatedImages = [...newItems, ...currentImages];
    
    // Salvăm lista actualizată înapoi în Cloud
    await put(METADATA_FILENAME, JSON.stringify(updatedImages, null, 2), {
      access: "public",
      addRandomSuffix: false,
      // @ts-ignore
      allowOverwrite: true,
      contentType: "application/json",
    });

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true, count: newItems.length };
  } catch (error: any) {
    console.error("Cloud upload error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Șterge un item din Vercel Blob
 */
export async function deleteImage(id: string) {
  try {
    const currentImages = await getGalleryImages();
    const itemToDelete = currentImages.find(img => img.id === id);
    
    if (!itemToDelete) return { success: false, error: "Item not found" };

    // 1. Ștergem fișierul fizic din Cloud
    await del(itemToDelete.url);

    // 2. Actualizăm lista de metadate
    const updatedImages = currentImages.filter(img => img.id !== id);
    await put(METADATA_FILENAME, JSON.stringify(updatedImages, null, 2), {
      access: "public",
      addRandomSuffix: false,
      // @ts-ignore
      allowOverwrite: true,
      contentType: "application/json",
    });

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true };
  } catch (error: any) {
    console.error("Cloud delete error:", error);
    return { success: false, error: error.message };
  }
}
