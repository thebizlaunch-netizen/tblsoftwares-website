import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                TBL
              </div>
              <span className="font-semibold text-lg">TBL Softwares</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed">
              AI-powered enterprise software development. We build intelligent systems
              that transform how businesses operate.
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-4">
              The BizLaunch Ltd &middot; Companies House: 16874431
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--text-secondary)]">Enterprise Software</li>
              <li className="text-sm text-[var(--text-secondary)]">AI Integration</li>
              <li className="text-sm text-[var(--text-secondary)]">SaaS Development</li>
              <li className="text-sm text-[var(--text-secondary)]">Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} The BizLaunch Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with AI. Powered by Abdul.
          </p>
        </div>
      </div>
    </footer>
  );
}
