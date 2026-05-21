import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/*.json$', '/api/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://internetid.com/sitemap.xml',
    host: 'https://internetid.com',
  }
}
