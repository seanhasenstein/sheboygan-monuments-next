import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Pet Memorials Gallery | Sheboygan Monument &amp; Stone Works',
  description:
    'Browse our gallery of pet memorials, honoring beloved companions with custom granite markers. Crafted in Sheboygan, Wisconsin.',
};

export default async function PetGalleryPage() {
  const images = await getImages('pet-memorials');

  return <Gallery galleryImages={images} galleryName="Pet Memorials" />;
}
