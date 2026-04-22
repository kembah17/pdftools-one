import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PDFTools.one terms of service. Free PDF tools provided as-is with no warranties.',
  alternates: { canonical: 'https://pdftools.one/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: 'var(--color-text-heading)' }}>
        Terms of Service
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: April 2026</p>

      <div className="space-y-8" style={{ color: 'var(--color-text-secondary)' }}>
        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Acceptance of Terms</h2>
          <p>By accessing and using PDFTools.one, you agree to these Terms of Service. If you do not agree, please do not use the site.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Service Description</h2>
          <p>PDFTools.one provides free, browser-based PDF manipulation tools. All file processing occurs client-side in your browser. We do not store, transmit, or have access to any files you process.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Use of Service</h2>
          <p>You may use our tools for any lawful purpose. You are responsible for ensuring you have the right to modify any documents you process. Do not use the service to process illegal content or to circumvent document security measures.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Disclaimer of Warranties</h2>
          <p>The service is provided &quot;as is&quot; without warranties of any kind. While we strive for accuracy and reliability, we cannot guarantee that the tools will work perfectly for every file or use case. Complex PDFs with unusual formatting may not process as expected.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Limitation of Liability</h2>
          <p>PDFTools.one shall not be liable for any damages arising from the use or inability to use the service. Always keep backup copies of important documents before processing them with any tool.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:hello@pdftools.one" style={{ color: 'var(--color-brand)' }}>hello@pdftools.one</a>.</p>
        </section>
      </div>
    </div>
  );
}
