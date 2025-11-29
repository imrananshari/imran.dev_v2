import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://imrandev.in/services' },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

