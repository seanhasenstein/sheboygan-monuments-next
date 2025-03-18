import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Upright Memorials Gallery | Sheboygan Monument &amp; Stone Works',
};

export default async function UprightGalleryPage() {
  const images = await getImages('upright-memorials');

  return <Gallery galleryImages={images} galleryName="Upright Memorials" />;
}
