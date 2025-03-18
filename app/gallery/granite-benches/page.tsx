import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Granite Benches Gallery | Sheboygan Monument &amp; Stone Works',
};

export default async function BenchesGalleryPage() {
  const images = await getImages('granite-benches');

  return <Gallery galleryImages={images} galleryName="Granite Benches" />;
}
