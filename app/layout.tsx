import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AthleteX | Where Champions Are Found',
  description: 'A two-sided sports talent discovery and community platform linking grassroots athletes with scouts worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Defaulting to dark theme class on HTML tag for 'Dark mode as default' requirement
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
