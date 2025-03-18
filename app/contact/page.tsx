import { Metadata } from 'next';

import ContactContent from '@/components/content/ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Sheboygan Monument and Stone Works | (920) 452-7995',
  description:
    'How can we help you? Please let us know if you have any questions or if you would like to schedule an appointment.',
};

export default function Contact() {
  return <ContactContent />;
}
