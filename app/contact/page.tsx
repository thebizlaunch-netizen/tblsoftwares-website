import ContactForm from '@/components/contact-form';
import ScrollReveal from '@/components/scroll-reveal';

export const metadata = {
  title: 'Contact | TBL Softwares',
  description: 'Get in touch with TBL Softwares. Tell us about your project.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="hero-orb w-[400px] h-[400px] bg-[#8b5cf6] top-[15%] left-[-10%] opacity-[0.08]" />
      <div className="hero-orb w-[300px] h-[300px] bg-[#00d4ff] bottom-[20%] right-[-5%] opacity-[0.06]" />

      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-outfit)] tracking-tight leading-[1.1]">
                  Let&apos;s Build Something{' '}
                  <span className="gradient-text">Together</span>
                </h1>
                <p className="mt-7 text-lg text-[#94a3b8] leading-relaxed">
                  Whether you need a bespoke enterprise system, AI integration, or a full SaaS product,
                  we&apos;re ready to help. Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="mt-14 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-[family-name:var(--font-outfit)]">Email</h3>
                      <p className="text-[#94a3b8]">hello@tblsoftwares.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(139,92,246,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-[family-name:var(--font-outfit)]">Company</h3>
                      <p className="text-[#94a3b8]">The BizLaunch Ltd</p>
                      <p className="text-sm text-[#64748b] mt-1">Companies House: 16874431</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(6,182,212,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-[family-name:var(--font-outfit)]">Location</h3>
                      <p className="text-[#94a3b8]">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card p-8 sm:p-10">
                <h2 className="text-xl font-semibold mb-7 font-[family-name:var(--font-outfit)]">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
