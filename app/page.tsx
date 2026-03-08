import Link from 'next/link';
import { fetchCompany, fetchProducts } from '@/lib/api';
import { ServiceIcon, ArrowRightIcon } from '@/components/icons';
import HeroVisual from '@/components/hero-visual';
import ScrollReveal from '@/components/scroll-reveal';

const serviceAccents = [
  { card: 'glass-card-blue', top: 'glow-top-blue', icon: 'text-[#00d4ff]', iconBg: 'bg-[rgba(0,212,255,0.1)]' },
  { card: 'glass-card-purple', top: 'glow-top-purple', icon: 'text-[#8b5cf6]', iconBg: 'bg-[rgba(139,92,246,0.1)]' },
  { card: 'glass-card-cyan', top: 'glow-top-cyan', icon: 'text-[#06b6d4]', iconBg: 'bg-[rgba(6,182,212,0.1)]' },
  { card: 'glass-card-pink', top: 'glow-top-pink', icon: 'text-[#ec4899]', iconBg: 'bg-[rgba(236,72,153,0.1)]' },
];

const teamGlows = [
  'shadow-[0_0_20px_rgba(0,212,255,0.15)]',
  'shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
  'shadow-[0_0_20px_rgba(236,72,153,0.15)]',
  'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
  'shadow-[0_0_20px_rgba(251,146,60,0.15)]',
  'shadow-[0_0_20px_rgba(99,102,241,0.15)]',
  'shadow-[0_0_20px_rgba(244,114,182,0.15)]',
];

const teamGradients = [
  'from-[#00d4ff] to-[#0ea5e9]',
  'from-[#8b5cf6] to-[#a855f7]',
  'from-[#06b6d4] to-[#14b8a6]',
  'from-[#ec4899] to-[#f43f5e]',
  'from-[#22c55e] to-[#10b981]',
  'from-[#f97316] to-[#fb923c]',
  'from-[#6366f1] to-[#818cf8]',
  'from-[#f472b6] to-[#e879f9]',
];

export default async function Home() {
  const company = await fetchCompany();
  const products = await fetchProducts();
  const featured = products.slice(0, 4);

  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="bg-glow-orb w-[600px] h-[600px] bg-[#00d4ff] top-[-10%] right-[-10%]" />
        <div className="bg-glow-orb w-[400px] h-[400px] bg-[#8b5cf6] bottom-[10%] left-[-5%]" />
        <div className="bg-glow-orb w-[300px] h-[300px] bg-[#7c3aed] top-[40%] right-[20%] opacity-[0.08]" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-xs text-[#94a3b8] mb-8 animate-fade-in-up backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                AI-Powered Enterprise Systems
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight font-[family-name:var(--font-outfit)] animate-fade-in-up animate-delay-100">
                Build Smarter.{' '}
                <span className="gradient-text">Ship Faster.</span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-[#94a3b8] max-w-xl leading-relaxed animate-fade-in-up animate-delay-200">
                We build intelligent software systems that transform how businesses operate.
                Our AI-driven approach delivers enterprise-grade solutions at startup speed.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start a Project <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href="/products" className="btn-ghost inline-flex items-center gap-2">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:block animate-fade-in-up animate-delay-400">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="bg-glow-orb w-[400px] h-[400px] bg-[#8b5cf6] top-[20%] left-[-10%] opacity-[0.08]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="mt-5 text-[#94a3b8] max-w-xl mx-auto text-lg">
                Enterprise-grade solutions powered by AI, delivered at startup speed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(company.services.length > 0 ? company.services : [
              { title: 'Bespoke Enterprise Software', description: 'Custom-built systems from hospital EPR to SaaS platforms. Architecture-first, enterprise-ready.', icon: 'code' },
              { title: 'AI Integration & Automation', description: 'Intelligent automation embedded into existing workflows. From chatbots to full autonomous agents.', icon: 'cpu' },
              { title: 'SaaS Product Development', description: 'End-to-end from concept to revenue. Design, build, deploy, and scale your SaaS product.', icon: 'rocket' },
              { title: 'Technical Consulting', description: 'Architecture reviews, security audits, and strategic advisory for complex technical decisions.', icon: 'briefcase' },
            ]).map((service, i) => {
              const accent = serviceAccents[i % serviceAccents.length];
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`glass-card ${accent.card} ${accent.top} p-8`}>
                    <div className={`w-12 h-12 rounded-xl ${accent.iconBg} flex items-center justify-center mb-5`}>
                      <ServiceIcon name={service.icon} className={`w-6 h-6 ${accent.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-outfit)]">{service.title}</h3>
                    <p className="text-[#94a3b8] leading-relaxed">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PRODUCTS ===== */}
      {featured.length > 0 && (
        <section className="relative py-28 overflow-hidden">
          <div className="bg-glow-orb w-[500px] h-[500px] bg-[#00d4ff] bottom-[-10%] right-[-10%] opacity-[0.06]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-14">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                    Our <span className="gradient-text">Products</span>
                  </h2>
                  <p className="mt-5 text-[#94a3b8] text-lg">
                    Real solutions we&apos;re building right now.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="hidden sm:inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#06b6d4] text-sm font-medium transition-colors"
                >
                  View all <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 100}>
                  <div className="glass-card glass-card-blue p-7 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold gradient-text font-[family-name:var(--font-outfit)]">
                          {product.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] truncate">{product.name}</h3>
                      </div>
                      <span className={`badge shrink-0 ${product.status === 'deployed' ? 'badge-active' : product.status === 'in_progress' ? 'badge-progress' : 'badge-draft'}`}>
                        {product.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-[#94a3b8] flex-1 leading-relaxed line-clamp-3">
                      {product.description.replace(/Created via Telegram:\s*/i, '')}
                    </p>
                    {product.content.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                        <div className="flex flex-wrap gap-2">
                          {product.content.map((c, i) => (
                            <span key={i} className="px-2.5 py-1 text-[10px] rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#64748b] uppercase tracking-wider">
                              {c.type.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-8 sm:hidden text-center">
              <Link href="/products" className="text-[#00d4ff] hover:text-[#06b6d4] text-sm font-medium">
                View all products &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="section-divider" />

      {/* ===== TEAM ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="bg-glow-orb w-[350px] h-[350px] bg-[#8b5cf6] top-[30%] right-[-5%] opacity-[0.07]" />
        <div className="bg-glow-orb w-[250px] h-[250px] bg-[#00d4ff] bottom-[10%] left-[10%] opacity-[0.05]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                The <span className="gradient-text">Leadership</span>
              </h2>
              <p className="mt-5 text-[#94a3b8] max-w-xl mx-auto text-lg">
                An AI-native executive team. Each agent brings deep expertise to every decision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {company.team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`glass-card p-6 text-center ${teamGlows[i % teamGlows.length]}`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${teamGradients[i % teamGradients.length]} mx-auto mb-4 flex items-center justify-center text-xl font-bold font-[family-name:var(--font-outfit)] shadow-lg`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-sm font-[family-name:var(--font-outfit)]">{member.name}</h3>
                  <p className="text-xs text-[#00d4ff] mt-1 font-medium">{member.role}</p>
                  <p className="text-xs text-[#64748b] mt-2.5 leading-relaxed">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CTA ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="bg-glow-orb w-[500px] h-[500px] bg-[#00d4ff] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
        <div className="bg-glow-orb w-[300px] h-[300px] bg-[#8b5cf6] top-[30%] left-[30%] opacity-[0.05]" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
              Ready to Build Something{' '}
              <span className="gradient-text">Extraordinary</span>?
            </h2>
            <p className="mt-6 text-[#94a3b8] max-w-xl mx-auto text-lg leading-relaxed">
              Tell us about your project. We&apos;ll show you what AI-powered development can do.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg !px-10 !py-4">
                Get in Touch <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
