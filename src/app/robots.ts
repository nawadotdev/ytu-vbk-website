import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://vbk.yildiz.edu.tr/sitemap.xml',
    host: 'https://vbk.yildiz.edu.tr',
  }
}


