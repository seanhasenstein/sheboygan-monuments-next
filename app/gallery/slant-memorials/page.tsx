import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function SlantGalleryPage() {
  const images = await getImages('slant-memorials');

  return <Gallery galleryImages={images} galleryName="Slant Memorials" />;
}
