import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vlas-reinigung.de'
  const now = new Date()

  return [
    // Homepage
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Leistungen overview + 8 sub-pages
    { url: `${baseUrl}/leistungen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/unterhaltsreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/glasreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/baureinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/industriereinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/grundreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/treppenhausreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/teppichreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/steinreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/fassadenreinigung-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen/hausmeisterservice-karlsruhe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // Core pages
    { url: `${baseUrl}/galerie`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/referenzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/einsatzgebiet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Ratgeber
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ratgeber/unterhaltsreinigung-kosten`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ratgeber/reinigungsfirma-karlsruhe-finden`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ratgeber/unterhaltsreinigung-vs-grundreinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Legal pages
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
