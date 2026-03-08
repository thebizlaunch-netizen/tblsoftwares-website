import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TBL Softwares | AI-Powered Enterprise Systems',
  description: 'We build intelligent software systems that transform how businesses operate. AI-driven enterprise solutions at startup speed.',
  keywords: ['enterprise software', 'AI development', 'SaaS', 'custom software', 'The BizLaunch Ltd'],
  openGraph: {
    title: 'TBL Softwares | AI-Powered Enterprise Systems',
    description: 'We build intelligent software systems that transform how businesses operate.',
    url: 'https://tblsoftwares.com',
    siteName: 'TBL Softwares',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
