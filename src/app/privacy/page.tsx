import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PDFTools.one privacy policy. Your files never leave your browser. Learn how we protect your privacy.',
  alternates: { canonical: 'https://pdftools.one/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: 'var(--color-text-heading)' }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: April 2026</p>

      <div className="space-y-8" style={{ color: 'var(--color-text-secondary)' }}>
        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>The Short Version</h2>
          <p className="text-lg font-medium" style={{ color: 'var(--color-brand)' }}>
            Your files never leave your device. We do not collect, store, or transmit any documents you process on this site.
          </p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>File Processing</h2>
          <p>All PDF tools on PDFTools.one process files entirely in your browser using client-side JavaScript. When you select a file, it is loaded into your browser&apos;s memory — it is never uploaded to our servers or any third-party service. When you close the browser tab, all file data is removed from memory.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Cookies</h2>
          <p>We use a single cookie to remember your theme preference (light or dark mode) and your cookie consent choice. We do not use tracking cookies. If you accept analytics cookies, we may use Google Analytics to understand how visitors use the site — this collects anonymous usage data only, never file contents.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Advertising</h2>
          <p>This site displays advertisements to support free access to all tools. Ad networks may use cookies to serve relevant ads. You can manage your ad preferences through your browser settings or the cookie consent banner.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Data We Collect</h2>
          <ul className="space-y-2 mt-2">
            <li><strong style={{ color: 'var(--color-text-heading)' }}>Files:</strong> None. Zero. Your documents are never transmitted.</li>
            <li><strong style={{ color: 'var(--color-text-heading)' }}>Personal Information:</strong> We do not require accounts, emails, or any personal data.</li>
            <li><strong style={{ color: 'var(--color-text-heading)' }}>Analytics:</strong> Anonymous page views and tool usage statistics only (if you consent).</li>
          </ul>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:hello@pdftools.one" style={{ color: 'var(--color-brand)' }}>hello@pdftools.one</a>.</p>
        </section>
      </div>
    </div>
  );
}
