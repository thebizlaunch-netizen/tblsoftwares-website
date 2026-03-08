import Link from 'next/link';
import { LogoIcon } from './icons';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Top gradient border */}
      <div className="section-divider" />

      <div className="bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <LogoIcon className="w-9 h-9" />
                <span className="font-semibold text-lg font-[family-name:var(--font-outfit)] tracking-tight">
                  TBL Softwares
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm max-w-md leading-relaxed">
                We build intelligent software systems that transform how businesses operate.
                AI-powered enterprise solutions at startup speed.
              </p>
              <p className="text-[#64748b] text-xs mt-5">
                The BizLaunch Ltd &middot; Companies House: 16874431
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-5 font-[family-name:var(--font-outfit)] uppercase tracking-wider text-[#64748b]">
                Company
              </h4>
              <ul className="space-y-3">
                <li><Link href="/products" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/blog" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-5 font-[family-name:var(--font-outfit)] uppercase tracking-wider text-[#64748b]">
                Services
              </h4>
              <ul className="space-y-3">
                <li className="text-sm text-[#94a3b8]">Enterprise Software</li>
                <li className="text-sm text-[#94a3b8]">AI Integration</li>
                <li className="text-sm text-[#94a3b8]">SaaS Development</li>
                <li className="text-sm text-[#94a3b8]">Technical Consulting</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#64748b]">
              &copy; {new Date().getFullYear()} The BizLaunch Ltd. All rights reserved.
            </p>
            <p className="text-xs text-[#64748b]">
              Built with AI. Powered by Abdul.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
