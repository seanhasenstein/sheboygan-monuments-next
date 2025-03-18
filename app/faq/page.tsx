import { Metadata } from 'next';

import FaqContent from '@/components/content/FaqContent';

export const metadata: Metadata = {
  title: 'FAQs | Sheboygan Monument and Stone Works | (920) 452-7995',
  description:
    'Find answers to frequently asked questions about Sheboygan Monument and Stone Works and what we can do for you. See the most common topics and more.',
};

export default function Faq() {
  return <FaqContent />;
}
