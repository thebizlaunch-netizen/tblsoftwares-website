'use client';

import { useState } from 'react';
import type { Product } from '@/lib/api';
import ScrollReveal from '@/components/scroll-reveal';

interface ProductGridProps {
  products: Product[];
  categories: string[];
  sectionLabel: string;
  emptyMessage?: string;
}

function formatPrice(price: number | null): string {
  if (price === null || price === undefined || price === 0) return '';
  return price < 1 ? `${(price * 100).toFixed(0)}p` : `\u00A3${Number(price).toFixed(price % 1 === 0 ? 0 : 2)}`;
}

export default function ProductGrid({ products, categories, sectionLabel, emptyMessage }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => {
        const cats = (p.category || '').split(',').map((c) => c.trim());
        return cats.includes(activeCategory);
      });

  // Only show categories that have products (plus "All")
  const availableCategories = ['All', ...categories.filter((cat) => {
    if (cat === 'All') return false;
    return products.some((p) => {
      const cats = (p.category || '').split(',').map((c) => c.trim());
      return cats.includes(cat);
    });
  })];

  return (
    <div>
      {/* Category filter bar */}
      {availableCategories.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white shadow-lg shadow-[#00d4ff]/20'
                  : 'glass-card text-[#94a3b8] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Products grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="glass-card p-12 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8"/>
              </svg>
            </div>
            <p className="text-[#94a3b8] text-lg mb-2">
              {emptyMessage || `No ${sectionLabel.toLowerCase()} available yet.`}
            </p>
            <p className="text-[#475569] text-sm">
              Abdul is always building. New {sectionLabel.toLowerCase()} will appear here automatically.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 100}>
              <div className="glass-card glass-card-blue overflow-hidden h-full flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                        <span className="text-2xl font-bold gradient-text font-[family-name:var(--font-outfit)]">
                          {product.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold font-[family-name:var(--font-outfit)]">{product.name}</h2>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="badge badge-active">deployed</span>
                          {product.price_gbp && product.price_gbp > 0 && (
                            <span className="text-sm font-semibold text-[#00d4ff]">
                              {formatPrice(product.price_gbp)}
                            </span>
                          )}
                          {product.category && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20">
                              {product.category.split(',')[0]}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#94a3b8] leading-relaxed mb-6 flex-1">
                    {(product.description || '').replace(/Created via Telegram:\s*/i, '').slice(0, 200)}
                    {(product.description || '').length > 200 ? '...' : ''}
                  </p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {product.deployed_url && (
                      <a
                        href={product.deployed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Try it free
                      </a>
                    )}
                    {product.checkout_url && (
                      <a
                        href={product.checkout_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium transition-all hover:bg-[#00d4ff]/10 hover:scale-[1.02]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        Buy {product.price_gbp ? formatPrice(product.price_gbp) : ''}
                      </a>
                    )}
                  </div>

                  <p className="text-[10px] text-[#475569] uppercase tracking-wider">
                    Created {new Date(product.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
