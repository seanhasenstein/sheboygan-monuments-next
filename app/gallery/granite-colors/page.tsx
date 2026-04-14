import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Granite Colors Gallery | Sheboygan Monument & Stone Works',
  description:
    'Explore the granite colors available for memorials and monuments, from classic grays to rich reds and blacks. Sheboygan Monument & Stone Works.',
};

export default async function GraniteColorsGalleryPage() {
  const images = await getImages('granite-colors');

  return <Gallery galleryImages={images} galleryName="Granite Colors" />;
}
