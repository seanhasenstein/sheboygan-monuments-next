import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Granite Benches Gallery | Sheboygan Monument & Stone Works',
  description:
    'Browse our gallery of granite memorial benches, a lasting place to remember and reflect. Custom designs crafted in Sheboygan, Wisconsin.',
};

export default async function BenchesGalleryPage() {
  const images = await getImages('granite-benches');

  return <Gallery galleryImages={images} galleryName="Granite Benches" />;
}
