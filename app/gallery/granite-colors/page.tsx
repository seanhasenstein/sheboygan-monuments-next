import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Granite Colors Gallery | Sheboygan Monument &amp; Stone Works',
};

export default async function GraniteColorsGalleryPage() {
  const images = await getImages('granite-colors');

  return <Gallery galleryImages={images} galleryName="Granite Colors" />;
}
