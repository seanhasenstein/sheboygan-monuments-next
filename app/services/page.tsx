import { Metadata } from 'next';

import ServicesContent from '@/components/content/ServicesContent';

export const metadata: Metadata = {
  title: 'Services | Sheboygan Monument and Stone Works | (920) 452-7995',
  description:
    'Our mission is to provide the best quality workmanship for each and every one of our customers. Find a list of the services that we have to offer.',
};

export default function Services() {
  return <ServicesContent />;
}
