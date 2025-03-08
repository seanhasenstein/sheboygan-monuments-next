import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function UprightGalleryPage() {
  const images = await getImages('upright-memorials');

  return <Gallery galleryImages={images} galleryName="Upright Memorials" />;
}
