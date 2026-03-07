import { fetchProducts } from '@/lib/api';

export const metadata = {
  title: 'Products | TBL Softwares',
  description: 'Our product portfolio - enterprise software solutions built with AI.',
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="grid-bg min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)]">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
              Real solutions we&apos;re building. Each product is conceived, designed, and developed
              using our AI-powered pipeline.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--text-secondary)]">Products coming soon. Check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="rounded-2xl bg-[var(--bg-card)] glow-border overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-xl font-bold text-blue-400">
                            {product.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">{product.name}</h2>
                          <span className={`badge mt-1 ${product.status === 'deployed' ? 'badge-active' : product.status === 'in_progress' ? 'badge-progress' : 'badge-draft'}`}>
                            {product.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                      {product.description.replace(/Created via Telegram:\s*/i, '')}
                    </p>

                    {product.content.length > 0 && (
                      <div className="border-t border-[var(--border)] pt-4">
                        <h4 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                          Marketing Content
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.content.map((c, i) => (
                            <span key={i} className="px-3 py-1 text-xs rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)]">
                              {c.type.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-[var(--text-secondary)] mt-4">
                      Created {new Date(product.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
