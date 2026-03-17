'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LogoIcon, MenuIcon, XIcon } from './icons';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: 'https://agents.tblsoftwares.com', label: 'AI Agents', external: true },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[#050508]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoIcon className="w-9 h-9 transition-transform group-hover:scale-110" />
          <span className="font-semibold text-lg font-[family-name:var(--font-outfit)] tracking-tight hidden sm:block">
            TBL Softwares
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label, external }) => {
            const isActive = !external && pathname === href;
            const cls = `text-sm font-medium transition-colors relative ${
              isActive ? 'text-white' : 'text-[#94a3b8] hover:text-white'
            }`;

            return external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className={cls}>
                {label}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary text-sm !py-2 !px-5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#94a3b8] hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.06)] bg-[#050508]/95 backdrop-blur-2xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              const cls = `text-sm font-medium transition-colors ${
                isActive ? 'text-white' : 'text-[#94a3b8]'
              }`;

              return external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm text-center !py-2.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
