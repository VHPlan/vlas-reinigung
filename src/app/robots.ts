import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.vlas-reinigung.de'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow pagini care nu trebuie indexate de Google (dacă vei avea pe viitor un admin panel)
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
