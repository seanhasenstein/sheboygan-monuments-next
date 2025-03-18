import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Bevel Memorials Gallery | Sheboygan Monument &amp; Stone Works',
};

export default async function BevelGalleryPage() {
  const images = await getImages('bevel-memorials');

  return <Gallery galleryImages={images} galleryName="Bevel Memorials" />;
}
