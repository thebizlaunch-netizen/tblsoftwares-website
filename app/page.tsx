import { fetchApps, fetchAgents } from '@/lib/api';

export default async function Home() {
  const apps = await fetchApps();
  const agents = await fetchAgents();

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[95vh]">
        <div className="absolute inset-0 grid-bg" />
        <div className="hero-orb w-[600px] h-[600px] bg-orange-500/20 top-[5%] right-[10%]" />
        <div className="hero-orb w-[400px] h-[400px] bg-amber-600/10 bottom-[10%] left-[5%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent z-[1]" />

        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:block">
          <img src="/hero-robot.png" alt="" className="absolute bottom-0 right-0 h-[95%] w-auto object-contain object-bottom" style={{ filter: "drop-shadow(0 0 80px rgba(249,115,22,0.15))" }} />
        </div>

        <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[95vh] flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm text-orange-400 font-medium">Autonomous AI Software Factory</span>
            </div>

            <h1 className="animate-fade-up-1 display-font text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] mb-4 tracking-tight uppercase">
              <span className="text-white">The Next Era</span><br />
              <span className="text-white">of </span>
              <span className="gradient-text">Intelligence</span>
            </h1>
            <h2 className="animate-fade-up-2 display-font text-3xl sm:text-4xl font-bold text-white/40 uppercase tracking-wider mb-8">
              Begins Here
            </h2>

            <p className="animate-fade-up-2 text-base text-gray-400 max-w-md mb-10 leading-relaxed">
              AI-powered software products and intelligent agents built autonomously. From concept to deployed product in minutes — not months.
            </p>

            <div className="animate-fade-up-3 flex flex-wrap gap-4">
              <a href="/apps" className="cta-primary">Explore Now <span>&#8594;</span></a>
              <a href="/agents" className="cta-secondary">AI Agents</a>

              <div className="animate-fade-up-4 mt-14 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
                  <div>
                    <p className="text-lg font-bold text-white">7-Gate QA</p>
                    <p className="text-[11px] text-gray-500">Every build validated</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
                  <div>
                    <p className="text-lg font-bold text-white">24/7</p>
                    <p className="text-[11px] text-gray-500">Autonomous operations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
                  <div>
                    <p className="text-lg font-bold text-white">Enterprise</p>
                    <p className="text-[11px] text-gray-500">Production-grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <div className="border-y border-white/5 bg-[#08080d] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="logo-strip justify-center">
            {["Next.js", "Supabase", "Claude AI", "Vercel", "Stripe", "K3s", "Tailwind"].map((t, i) => (
              <span key={i} className="text-sm text-gray-500/60 font-medium tracking-wider flex-shrink-0">
                {i > 0 && <span className="mx-6 text-gray-700">+</span>}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* BEST FUTURE POWERED BY INTELLIGENCE */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.03)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-font text-4xl md:text-5xl font-bold uppercase leading-tight">
                <span className="text-white">Best Future Powered</span><br />
                <span className="text-white">by </span><span className="gradient-text">Intelligence</span>
              </h2>
              <p className="text-gray-400 mt-6 text-base leading-relaxed max-w-lg">
                From smart automation to production-ready software, our AI factory gives you the tools to build without limits. Every product passes 7 quality gates before reaching customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "\u26A1", title: "Autonomous Build", desc: "Describe what you need \u2014 AI builds, tests, and deploys it." },
                { icon: "\uD83D\uDEE1\uFE0F", title: "7-Gate QA", desc: "Runtime, integrity, visual, and AI reviewer validation." },
                { icon: "\uD83D\uDD12", title: "Enterprise Security", desc: "256-bit encryption, GDPR compliant, UK HMRC ready." },
                { icon: "\uD83D\uDE80", title: "Instant Deploy", desc: "Production in 60 seconds with SSL and monitoring." },
              ].map((f, i) => (
                <div key={i} className="card-glow rounded-2xl p-6 group">
                  <div className="feature-icon mb-4">{f.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRODUCTS / APPS */}
      <section className="py-28 relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs text-orange-400 font-medium uppercase tracking-[0.2em]">Products</span>
              <h2 className="display-font text-4xl md:text-5xl font-bold text-white mt-3 uppercase">Software Solutions</h2>
            </div>
            <a href="/apps" className="hidden md:block text-sm text-orange-400 hover:text-orange-300">View all &#8594;</a>
          </div>
          {apps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {apps.slice(0, 6).map((product) => (
                <a key={product.id} href={product.deployed_url || "#"} target="_blank" rel="noopener" className="card-glow rounded-2xl p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="feature-icon"><span className="text-orange-400 font-bold text-xs">{product.name.substring(0, 2)}</span></div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">{product.name}</h3>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">{product.category || "app"}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">{product.description?.substring(0, 100)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-orange-400 font-medium">{(product.price_gbp ?? 0) > 0 ? `\u00A3${product.price_gbp}` : "Free trial"}</span>
                    <span className="text-xs text-gray-600 group-hover:text-orange-400">Launch &#8594;</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 card-glow rounded-2xl">
              <div className="text-4xl mb-3">{"\uD83C\uDFD7\uFE0F"}</div>
              <p className="text-gray-400 font-medium">Products launching soon.</p>
              <p className="text-gray-600 text-sm mt-1">Our AI factory is building intelligent software solutions.</p>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* AI AGENTS */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.03)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs text-orange-400 font-medium uppercase tracking-[0.2em]">AI Agents</span>
              <h2 className="display-font text-4xl md:text-5xl font-bold text-white mt-3 uppercase">Intelligent Agents</h2>
            </div>
            <a href="/agents" className="hidden md:block text-sm text-orange-400 hover:text-orange-300">View all &#8594;</a>
          </div>
          {agents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {agents.slice(0, 6).map((agent) => (
                <a key={agent.id} href={agent.deployed_url || "#"} target="_blank" rel="noopener" className="gradient-border p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="feature-icon"><span className="text-lg">{"\uD83E\uDD16"}</span></div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">{agent.name}</h3>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">{agent.category || "AI Agent"}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">{agent.description?.substring(0, 100)}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-medium border border-green-500/20">Live</span>
                    <span className="text-xs text-orange-400">{(agent.price_gbp ?? 0) > 0 ? `\u00A3${agent.price_gbp}` : "Free trial"}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 card-glow rounded-2xl">
              <div className="text-4xl mb-3">{"\uD83E\uDD16"}</div>
              <p className="text-gray-400 font-medium">AI Agents launching soon.</p>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-font text-4xl md:text-6xl font-bold text-white mb-6 uppercase">Ready to Build<br /><span className="gradient-text">The Future?</span></h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto">AI-powered software that automates operations, reduces costs, and accelerates growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="cta-primary">Get in Touch &#8594;</a>
            <a href="/apps" className="cta-secondary">Browse Products</a>
          </div>
        </div>
      </section>
    </div>
  );
}
