import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function BronzeGalleryPage() {
  const images = await getImages('bronze-plaques');

  return <Gallery galleryImages={images} galleryName="Bronze Plaques" />;
}
