import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function GraniteColorsGalleryPage() {
  const images = await getImages('granite-colors');

  return <Gallery galleryImages={images} galleryName="Granite Colors" />;
}
