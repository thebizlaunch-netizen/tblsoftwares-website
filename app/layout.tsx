import type { Metadata } from "next";
import Navbar from '@/components/navbar';
import "./globals.css";

export const metadata: Metadata = {
  title: "TBL Softwares | AI-Powered Business Solutions",
  description: "Enterprise-grade AI software products and intelligent agents for modern businesses. Built by The BizLaunch Ltd.",
  openGraph: {
    title: "TBL Softwares | AI-Powered Business Solutions",
    description: "Enterprise-grade AI software products and intelligent agents for modern businesses.",
    type: "website",
    url: "https://tblsoftwares.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/tbl-logo-v2.png" as="image" />
        <link rel="preload" href="/hero-robot.png" as="image" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-[64px]">{children}</main>

        <footer className="border-t border-white/5 bg-[#04040a]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/tbl-logo-v2.png" alt="TBL" className="w-10 h-10 rounded-xl object-contain" />
                  <span className="text-lg font-bold text-white">TBL Softwares</span>
                </div>
                <p className="text-sm text-gray-500 max-w-md mb-4">Enterprise-grade AI software products and intelligent agents. Building the future of business automation.</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>The BizLaunch Ltd &middot; Company No. 16874431</p>
                  <p>Office 7001, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ</p>
                  <p>020 3432 1869 &middot; thebizlaunch@gmail.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
                <div className="space-y-3">
                  <a href="/apps" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Apps</a>
                  <a href="/agents" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">AI Agents</a>
                  <a href="/softwares" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Softwares</a>
                  <a href="/platforms" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Platforms</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <div className="space-y-3">
                  <a href="/about" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">About Us</a>
                  <a href="/contact" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Contact</a>
                  <a href="/privacy" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</a>
                  <a href="/terms" className="block text-sm text-gray-500 hover:text-orange-400 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-xs text-gray-600">&copy; 2026 The BizLaunch Ltd. All rights reserved. UK GDPR Compliant &middot; 256-bit Encryption</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
