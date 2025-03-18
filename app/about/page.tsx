import { Metadata } from 'next';

import AboutContent from '@/components/content/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Sheboygan Monument and Stone Works | (920) 452-7995',
  description:
    "Sheboygan Monument & Stone Works has been in business for more than 50 years and was founded back in the early 1950's.",
};

export default function About() {
  return <AboutContent />;
}
