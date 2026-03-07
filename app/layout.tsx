import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'TBL Softwares | AI-Powered Enterprise Software',
  description: 'We build intelligent software systems that transform how businesses operate. AI-driven enterprise solutions at startup speed.',
  keywords: ['enterprise software', 'AI development', 'SaaS', 'custom software', 'The BizLaunch Ltd'],
  openGraph: {
    title: 'TBL Softwares | AI-Powered Enterprise Software',
    description: 'We build intelligent software systems that transform how businesses operate.',
    url: 'https://tblsoftwares.com',
    siteName: 'TBL Softwares',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
