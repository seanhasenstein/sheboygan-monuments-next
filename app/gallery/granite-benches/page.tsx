import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function BenchesGalleryPage() {
  const images = await getImages('granite-benches');

  return <Gallery galleryImages={images} galleryName="Granite Benches" />;
}
