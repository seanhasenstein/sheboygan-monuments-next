import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.sheboyganmonuments.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/services',
    '/staff',
    '/gallery/bevel-memorials',
    '/gallery/bronze-plaques',
    '/gallery/flat-memorials',
    '/gallery/granite-benches',
    '/gallery/granite-colors',
    '/gallery/pet-memorials',
    '/gallery/slant-memorials',
    '/gallery/upright-memorials',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
