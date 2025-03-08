import type { Metadata } from 'next';
import { Inter, Unna } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';

import Layout from '@/components/Layout';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const unna = Unna({
  weight: ['400', '700'],
  variable: '--font-unna',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sheboygan Monument & Stone Works',
  description:
    'Providing the highest quality memorial services and products to southeastern Wisconsin for over 40 years.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${unna.variable}`}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
