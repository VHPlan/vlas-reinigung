import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              [
                "default-src 'self'",
                "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com *.blob.vercel-storage.com",
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                "img-src 'self' blob: data: *.blob.vercel-storage.com https://images.unsplash.com https://source.unsplash.com https://maps.gstatic.com https://maps.googleapis.com https://www.google-analytics.com https://www.googletagmanager.com",
                "font-src 'self' data: https://fonts.gstatic.com",
                "connect-src 'self' *.blob.vercel-storage.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
                "media-src 'self' blob: *.blob.vercel-storage.com",
                "frame-src https://maps.google.com https://www.google.com https://maps.googleapis.com",
              ].join('; ')
          }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.blob.vercel-storage.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/ablauf',
        destination: '/',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
