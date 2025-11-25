import { getBlogsForSitemap } from '@/lib/sanity';
import type { MetadataRoute } from 'next'
import { SanityBlog } from '@/types/SanityBlog.type';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_DOMAIN?.replace(/\/$/, "");

  const routes = [
    '',
    '/hakkimizda',
    '/etkinlikler',
    '/egitimler',
    '/blog',
    '/mezun-portfoyu',
    '/iletisim',
  ];

  const blogs = await getBlogsForSitemap();

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));

  const blogPages = blogs.map((post: SanityBlog) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
