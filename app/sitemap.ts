import type { MetadataRoute } from 'next';
import { BLOGS } from './data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://imrandev.in';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/blogs`, lastModified: now },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOGS.map((b) => ({
    url: `${base}/blogs/${b.id}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...blogRoutes];
}

