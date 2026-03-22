import { fetchSoftwares, fetchCategories } from '@/lib/api';
import ScrollReveal from '@/components/scroll-reveal';
import ProductGrid from '@/components/product-grid';

export const metadata = {
  title: 'Softwares | TBL Softwares',
  description: 'Enterprise software solutions for modern businesses.',
};

export default async function SoftwaresPage() {
  const [products, categories] = await Promise.all([
    fetchSoftwares(),
    fetchCategories(),
  ]);

  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#8b5cf6] top-[5%] right-[-10%] opacity-[0.08]" />
      <div className="hero-orb w-[400px] h-[400px] bg-[#00d4ff] bottom-[10%] left-[-10%] opacity-[0.06]" />

      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                Enterprise <span className="gradient-text">Softwares</span>
              </h1>
              <p className="mt-5 text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
                Professional-grade software solutions for legal, finance, recruitment,
                and more. Built to scale with your business needs.
              </p>
            </div>
          </ScrollReveal>

          <ProductGrid
            products={products}
            categories={categories}
            sectionLabel="Softwares"
            emptyMessage="No softwares available yet."
          />
        </div>
      </section>
    </div>
  );
}
