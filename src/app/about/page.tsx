import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About PDFTools.one — Free Privacy-First PDF Tools',
  description: 'Learn about PDFTools.one, our mission to provide free, private PDF tools that work entirely in your browser. No uploads, no accounts, no tracking.',
  alternates: { canonical: 'https://pdftools.one/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: 'var(--color-text-heading)' }}>
        About PDFTools.one
      </h1>

      <div className="space-y-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <p className="text-lg">
          PDFTools.one provides free online PDF tools that work entirely in your browser. We believe working with PDFs should be simple, fast, and private — without requiring software installations, account sign-ups, or file uploads to remote servers.
        </p>

        <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>Our Mission</h2>
          <p>
            Every day, millions of people need to merge, split, compress, or convert PDF files. Most online tools require uploading sensitive documents to unknown servers — creating privacy risks for personal, financial, and business documents.
          </p>
          <p className="mt-3">
            We built PDFTools.one to eliminate that risk entirely. Every tool on this site processes files using JavaScript running in your browser. Your documents never leave your device, and closing the tab removes all traces.
          </p>
        </div>

        <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How It Works</h2>
          <p>
            Our tools use modern JavaScript libraries like <strong style={{ color: 'var(--color-text-heading)' }}>pdf-lib</strong> and <strong style={{ color: 'var(--color-text-heading)' }}>PDF.js</strong> to manipulate PDF files directly in your browser. When you upload a file, it is loaded into your browser&apos;s memory — not transmitted over the internet.
          </p>
          <p className="mt-3">
            This approach has two major advantages: <strong style={{ color: 'var(--color-text-heading)' }}>complete privacy</strong> (your files stay on your device) and <strong style={{ color: 'var(--color-text-heading)' }}>instant processing</strong> (no waiting for server uploads and downloads).
          </p>
        </div>

        <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>Our Tools</h2>
          <ul className="space-y-2 mt-3">
            {[
              ['Merge PDF', 'Combine multiple PDF files into a single document'],
              ['Split PDF', 'Extract specific pages or divide PDFs into multiple files'],
              ['Compress PDF', 'Reduce file size while maintaining visual quality'],
              ['PDF to JPG', 'Convert PDF pages into high-quality JPG images'],
              ['JPG to PDF', 'Convert images into PDF documents'],
              ['PDF to Word', 'Extract text from PDFs into editable Word documents'],
              ['Rotate PDF', 'Fix page orientation by rotating pages'],
            ].map(([name, desc]) => (
              <li key={name} className="flex gap-2">
                <span style={{ color: 'var(--color-brand)' }}>•</span>
                <span><strong style={{ color: 'var(--color-text-heading)' }}>{name}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>Contact</h2>
          <p>
            Have questions, feedback, or suggestions? We would love to hear from you. Reach out at{' '}
            <a href="mailto:hello@pdftools.one" style={{ color: 'var(--color-brand)' }}>hello@pdftools.one</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
