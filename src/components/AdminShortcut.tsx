"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminShortcut() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Combinația: Ctrl + Shift + A (Admin)
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        router.push("/admin/galerie");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return null; // Componentă invizibilă
}
