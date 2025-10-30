import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vbk.yildiz.edu.tr'

  const routes = [
    '',
    '/hakkimizda',
    '/etkinlikler',
    '/egitimler',
    '/blog',
    '/mezun-portfoyu',
    '/iletisim',
  ]

  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}


