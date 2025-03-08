import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function PetGalleryPage() {
  const images = await getImages('pet-memorials');

  return <Gallery galleryImages={images} galleryName="Pet Memorials" />;
}
