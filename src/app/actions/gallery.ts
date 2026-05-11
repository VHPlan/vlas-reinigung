"use server";

import { put, del, list } from "@vercel/blob";
import { revalidatePath } from "next/cache";

// Prefixul pentru fișierele de metadate
const METADATA_PREFIX = "gallery-metadata-";

export type GalleryItem = {
  id: string;
  url: string;
  type: "image" | "video";
  createdAt: string;
};

/**
 * Recuperează cea mai recentă listă de imagini
 */
export async function getGalleryImages(): Promise<GalleryItem[]> {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) return [];

    // 1. Listăm toate fișierele din Blob
    const { blobs } = await list();
    
    // 2. Filtrăm după prefixul de metadate și sortăm după data încărcării (cele mai noi primele)
    const metadataFiles = blobs
      .filter(b => b.pathname.startsWith(METADATA_PREFIX))
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
    
    if (metadataFiles.length === 0) return [];

    // 3. Citim conținutul celui mai nou fișier
    const response = await fetch(`${metadataFiles[0].url}?t=${Date.now()}`, { 
      cache: 'no-store',
      headers: { 'Pragma': 'no-cache' }
    });
    
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

/**
 * Încarcă imagini și salvează o nouă versiune a metadatelor
 */
export async function uploadImages(formData: FormData) {
  try {
    const files = formData.getAll("files") as File[];
    if (!files || files.length === 0) return { success: false, error: "Keine Dateien" };

    const currentImages = await getGalleryImages();
    const newItems: GalleryItem[] = [];

    for (const file of files) {
      if (file.size === 0) continue;
      const blob = await put(file.name, file, { access: "public" });
      newItems.push({
        id: Math.random().toString(36).substring(7),
        url: blob.url,
        type: file.type.startsWith("video/") ? "video" : "image",
        createdAt: new Date().toISOString(),
      });
    }

    const updatedImages = [...newItems, ...currentImages];
    
    // Creăm un fișier NOU de metadate (cu timestamp în nume)
    const newMetadataName = `${METADATA_PREFIX}${Date.now()}.json`;
    await put(newMetadataName, JSON.stringify(updatedImages), {
      access: "public",
      contentType: "application/json",
    });

    // Opțional: Curățăm fișierele de metadate vechi pentru a nu aglomera
    const { blobs } = await list();
    const oldMetadata = blobs
      .filter(b => b.pathname.startsWith(METADATA_PREFIX) && b.pathname !== newMetadataName);
    for (const old of oldMetadata) {
      await del(old.url);
    }

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true, count: newItems.length };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Șterge o imagine și creează o nouă versiune a metadatelor
 */
export async function deleteImage(id: string) {
  try {
    const currentImages = await getGalleryImages();
    const itemToDelete = currentImages.find(img => img.id === id);
    if (!itemToDelete) return { success: false };

    await del(itemToDelete.url);

    const updatedImages = currentImages.filter(img => img.id !== id);
    const newMetadataName = `${METADATA_PREFIX}${Date.now()}.json`;
    
    await put(newMetadataName, JSON.stringify(updatedImages), {
      access: "public",
      contentType: "application/json",
    });

    revalidatePath("/galerie");
    revalidatePath("/admin/galerie");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
