import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function BevelGalleryPage() {
  const images = await getImages('bevel-memorials');

  return <Gallery galleryImages={images} galleryName="Bevel Memorials" />;
}
