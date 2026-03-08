import { fetchBlog } from '@/lib/api';
import ScrollReveal from '@/components/scroll-reveal';

export const metadata = {
  title: 'Blog | TBL Softwares',
  description: 'Insights on AI-powered software development, enterprise technology, and SaaS.',
};

export default async function BlogPage() {
  const posts = await fetchBlog();

  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="bg-glow-orb w-[400px] h-[400px] bg-[#00d4ff] top-[10%] right-[-5%] opacity-[0.06]" />

      <section className="relative py-24 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="mt-5 text-lg text-[#94a3b8]">
                Insights from our AI-powered development process.
              </p>
            </div>
          </ScrollReveal>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="glass-card p-12 max-w-md mx-auto">
                <p className="text-[#94a3b8]">Blog posts coming soon. Check back later.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post, idx) => {
                const excerpt = post.content
                  .replace(/^#.*$/gm, '')
                  .replace(/\*\*/g, '')
                  .replace(/\n+/g, ' ')
                  .trim()
                  .slice(0, 280);

                return (
                  <ScrollReveal key={post.id} delay={idx * 100}>
                    <article className="glass-card glass-card-purple p-8">
                      <div className="flex items-center gap-3 mb-5">
                        {post.product && (
                          <span className="badge badge-progress">{post.product}</span>
                        )}
                        <span className="text-xs text-[#64748b]">
                          {new Date(post.created_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-outfit)]">
                        {post.title}
                      </h2>
                      <p className="text-[#94a3b8] leading-relaxed">
                        {excerpt}...
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
