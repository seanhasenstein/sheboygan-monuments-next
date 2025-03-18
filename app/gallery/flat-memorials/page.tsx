import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Flat Memorials Gallery | Sheboygan Monument &amp; Stone Works',
};

export default async function FlatGalleryPage() {
  const images = await getImages('flat-memorials');

  return <Gallery galleryImages={images} galleryName="Flat Memorials" />;
}
