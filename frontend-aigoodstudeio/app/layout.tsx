import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import TopNavBar from '@/components/TopNavBar';

const rubik = Rubik({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Election Dashboard',
  description: 'Unified monitoring for the Iraq election platform'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>
        <div className="min-h-screen flex flex-col">
          <TopNavBar />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
