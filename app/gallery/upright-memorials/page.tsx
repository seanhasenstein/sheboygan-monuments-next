import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Upright Memorials Gallery | Sheboygan Monument & Stone Works',
  description:
    'Browse our gallery of upright memorials, the traditional vertical monument style. Custom granite headstones crafted in Sheboygan, Wisconsin.',
};

export default async function UprightGalleryPage() {
  const images = await getImages('upright-memorials');

  return <Gallery galleryImages={images} galleryName="Upright Memorials" />;
}
