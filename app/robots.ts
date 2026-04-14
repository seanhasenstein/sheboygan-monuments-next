import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.sheboyganmonuments.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/contact/success',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
