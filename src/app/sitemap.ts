import { getBlogsForSitemap, getEventsForSitemap } from '@/lib/sanity';
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_DOMAIN?.replace(/\/$/, "");

  const routes = [
    '',
    '/hakkimizda',
    '/etkinlikler',
    '/egitimler',
    '/bloglar',
    '/mezun-portfoyu',
    '/iletisim',
  ];

  const blogs = await getBlogsForSitemap();
  const events = await getEventsForSitemap();

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));

  const blogPages = blogs.map((post: { slug: { current: string }, publishedAt: string }) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const eventPages = events.map((event: { slug: { current: string }, publishedAt: string }) => ({
    url: `${baseUrl}/etkinlik/${event.slug.current}`,
    lastModified: event.publishedAt ? new Date(event.publishedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...eventPages];
}
