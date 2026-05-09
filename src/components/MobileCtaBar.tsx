"use client";

import { usePathname } from "next/navigation";

export default function MobileCtaBar() {
  const pathname = usePathname();

  // Do NOT show on /kontakt page
  if (pathname === "/kontakt") return null;

  return (
    <>
      {/* Sticky mobile CTA bar — hidden on md and above */}
      <div className="fixed bottom-0 left-0 right-0 z-[2000] flex md:hidden">
        <a
          href="tel:+4917655700551"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0047AB] text-white text-sm font-black uppercase tracking-wider"
          aria-label="Jetzt anrufen"
        >
          <span>📞</span> Anrufen
        </a>
        <div className="w-[1px] bg-white/30" />
        <a
          href="https://wa.me/4917655700551"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white text-sm font-black uppercase tracking-wider"
          aria-label="WhatsApp schreiben"
        >
          <span>💬</span> WhatsApp
        </a>
      </div>
      {/* Spacer so page content is not hidden behind the bar on mobile */}
      <div className="h-16 md:hidden" />
    </>
  );
}
