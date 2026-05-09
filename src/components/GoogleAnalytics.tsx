"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-HQPH63HDB2";

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Check initial consent
    const stored = localStorage.getItem("vlas-cookie-consent");
    setConsent(stored);

    // Listen for consent changes (when user clicks banner)
    const handleStorage = () => {
      setConsent(localStorage.getItem("vlas-cookie-consent"));
    };
    window.addEventListener("storage", handleStorage);

    // Also poll for changes (same-tab updates don't trigger storage event)
    const interval = setInterval(() => {
      const current = localStorage.getItem("vlas-cookie-consent");
      setConsent((prev) => (prev !== current ? current : prev));
    }, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  // Only load GA if user accepted cookies
  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
