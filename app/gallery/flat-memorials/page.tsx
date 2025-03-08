import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function FlatGalleryPage() {
  const images = await getImages('flat-memorials');

  return <Gallery galleryImages={images} galleryName="Flat Memorials" />;
}
