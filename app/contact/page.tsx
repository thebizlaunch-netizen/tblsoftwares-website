import ContactForm from '@/components/contact-form';

export const metadata = {
  title: 'Contact | TBL Softwares',
  description: 'Get in touch with TBL Softwares. Tell us about your project.',
};

export default function ContactPage() {
  return (
    <div className="grid-bg min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)]">
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Together</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                Whether you need a bespoke enterprise system, AI integration, or a full SaaS product,
                we&apos;re ready to help. Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-[var(--text-secondary)]">hello@tblsoftwares.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Company</h3>
                  <p className="text-[var(--text-secondary)]">The BizLaunch Ltd</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">Companies House: 16874431</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-[var(--text-secondary)]">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
              <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
