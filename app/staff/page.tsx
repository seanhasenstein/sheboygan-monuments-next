import { Metadata } from 'next';

import StaffContent from '@/components/content/StaffContent';

export const metadata: Metadata = {
  title: 'Meet Our Staff | Sheboygan Monument and Stone Works | (920) 452-7995',
  description:
    'Meet our caring staff that is here to  listen to our customers, and relate their personal aspects in life to create a cherishing memory to be remembered by and to share with generations to come.',
};

export default function Staff() {
  return <StaffContent />;
}
