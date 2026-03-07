import Link from 'next/link';
import { fetchCompany, fetchProducts } from '@/lib/api';
import { ServiceIcon, ArrowRightIcon } from '@/components/icons';

export default async function Home() {
  const company = await fetchCompany();
  const products = await fetchProducts();
  const featured = products.slice(0, 3);

  return (
    <div className="grid-bg">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--text-secondary)] mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI-Powered Development
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-[family-name:var(--font-display)] animate-fade-in-up">
              Build Smarter.{' '}
              <span className="gradient-text">Ship Faster.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed animate-fade-in-up animate-delay-100">
              {company.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/20"
              >
                Start a Project <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] hover:border-[var(--text-secondary)] rounded-lg font-medium transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
              What We Build
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
              Enterprise-grade solutions powered by AI, delivered at startup speed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-[var(--bg-card)] glow-border"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 transition-colors">
                  <ServiceIcon name={service.icon} className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      {featured.length > 0 && (
        <section className="py-24 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                  Our Products
                </h2>
                <p className="mt-4 text-[var(--text-secondary)]">
                  Real solutions we&apos;re building right now.
                </p>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View all <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((product) => (
                <div key={product.id} className="p-6 rounded-2xl bg-[var(--bg-card)] glow-border flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-400">
                        {product.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className={`badge ${product.status === 'deployed' ? 'badge-active' : product.status === 'in_progress' ? 'badge-progress' : 'badge-draft'}`}>
                      {product.status.replace('_', ' ')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] flex-1 line-clamp-3">
                    {product.description.replace(/Created via Telegram:\s*/i, '')}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:hidden text-center">
              <Link href="/products" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View all products &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
              The Leadership
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
              An AI-native executive team. Each agent brings deep expertise to every decision.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {company.team.map((member, i) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-amber-500',
                'from-red-500 to-rose-500',
                'from-indigo-500 to-violet-500',
                'from-teal-500 to-cyan-500',
                'from-yellow-500 to-orange-500',
              ];
              return (
                <div key={i} className="p-5 rounded-2xl bg-[var(--bg-card)] glow-border text-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${colors[i % colors.length]} mx-auto mb-4 flex items-center justify-center text-xl font-bold`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-sm">{member.name}</h3>
                  <p className="text-xs text-blue-400 mt-1">{member.role}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
            Ready to Build Something{' '}
            <span className="gradient-text">Extraordinary</span>?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
            Tell us about your project. We&apos;ll show you what AI-powered development can do.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium text-lg transition-all hover:shadow-lg hover:shadow-blue-600/20"
            >
              Get in Touch <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
