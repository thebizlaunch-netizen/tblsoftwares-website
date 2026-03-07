import { fetchBlog } from '@/lib/api';

export const metadata = {
  title: 'Blog | TBL Softwares',
  description: 'Insights on AI-powered software development, enterprise technology, and SaaS.',
};

export default async function BlogPage() {
  const posts = await fetchBlog();

  return (
    <div className="grid-bg min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)]">
              Blog
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Insights from our AI-powered development process.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--text-secondary)]">Blog posts coming soon. Check back later.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const excerpt = post.content
                  .replace(/^#.*$/gm, '')
                  .replace(/\*\*/g, '')
                  .replace(/\n+/g, ' ')
                  .trim()
                  .slice(0, 280);

                return (
                  <article key={post.id} className="p-8 rounded-2xl bg-[var(--bg-card)] glow-border">
                    <div className="flex items-center gap-3 mb-4">
                      {post.product && (
                        <span className="badge badge-progress">{post.product}</span>
                      )}
                      <span className="text-xs text-[var(--text-secondary)]">
                        {new Date(post.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-display)]">
                      {post.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {excerpt}...
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
