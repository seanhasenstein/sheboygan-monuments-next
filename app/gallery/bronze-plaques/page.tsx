import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Bronze Plaques Gallery | Sheboygan Monument &amp; Stone Works',
  description:
    'Explore our gallery of bronze memorial plaques, ideal for flat markers and dedication pieces. Custom designs crafted in Sheboygan, Wisconsin.',
};

export default async function BronzeGalleryPage() {
  const images = await getImages('bronze-plaques');

  return <Gallery galleryImages={images} galleryName="Bronze Plaques" />;
}
