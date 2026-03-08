import { fetchProducts } from '@/lib/api';
import ScrollReveal from '@/components/scroll-reveal';

export const metadata = {
  title: 'Products | TBL Softwares',
  description: 'Our product portfolio - enterprise software solutions built with AI.',
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="bg-glow-orb w-[500px] h-[500px] bg-[#8b5cf6] top-[5%] right-[-10%] opacity-[0.08]" />
      <div className="bg-glow-orb w-[400px] h-[400px] bg-[#00d4ff] bottom-[10%] left-[-10%] opacity-[0.06]" />

      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="mt-5 text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
                Real solutions we&apos;re building. Each product is conceived, designed, and developed
                using our AI-powered pipeline.
              </p>
            </div>
          </ScrollReveal>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="glass-card p-12 max-w-md mx-auto">
                <p className="text-[#94a3b8]">Products coming soon. Check back later.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 100}>
                  <div className="glass-card glass-card-blue overflow-hidden h-full">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                            <span className="text-2xl font-bold gradient-text font-[family-name:var(--font-outfit)]">
                              {product.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold font-[family-name:var(--font-outfit)]">{product.name}</h2>
                            <span className={`badge mt-1.5 ${product.status === 'deployed' ? 'badge-active' : product.status === 'in_progress' ? 'badge-progress' : 'badge-draft'}`}>
                              {product.status.replace('_', ' ')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-[#94a3b8] leading-relaxed mb-6">
                        {product.description.replace(/Created via Telegram:\s*/i, '')}
                      </p>

                      {product.content.length > 0 && (
                        <div className="border-t border-[rgba(255,255,255,0.06)] pt-5">
                          <h4 className="text-[10px] font-semibold text-[#64748b] uppercase tracking-widest mb-3">
                            Marketing Content
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.content.map((c, i) => (
                              <span key={i} className="px-3 py-1 text-[10px] rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#94a3b8] uppercase tracking-wider">
                                {c.type.replace('_', ' ')}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-[10px] text-[#475569] mt-5 uppercase tracking-wider">
                        Created {new Date(product.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
