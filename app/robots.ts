import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://imrandev.in/sitemap.xml',
    host: 'https://imrandev.in',
  };
}

