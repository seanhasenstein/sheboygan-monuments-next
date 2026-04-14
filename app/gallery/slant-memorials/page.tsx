import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Slant Memorials Gallery | Sheboygan Monument & Stone Works',
  description:
    'Browse our gallery of slant memorials, featuring angled faces for improved readability. Custom granite headstones crafted in Sheboygan, Wisconsin.',
};

export default async function SlantGalleryPage() {
  const images = await getImages('slant-memorials');

  return <Gallery galleryImages={images} galleryName="Slant Memorials" />;
}
