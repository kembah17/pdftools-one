import type { Metadata } from 'next';
import SplitPdfTool from './SplitPdfTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Split PDF Online Free — Extract Pages from PDF',
  description: 'Split PDF files and extract specific pages for free. Select page ranges or individual pages. No upload — all processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/split-pdf' },
  openGraph: {
    title: 'Split PDF Online Free — Extract Pages from PDF',
    description: 'Split PDF files and extract specific pages for free. Select page ranges or individual pages. No upload — all processing happens in your browser.',
    url: 'https://pdftools.one/split-pdf',
  },
};

const faqs = [
  { question: 'How do I split a PDF file?', answer: 'Upload your PDF, then select the pages you want to extract. You can choose individual pages, page ranges, or split the document at specific points. Click "Split PDF" and download your results.' },
  { question: 'Can I extract just one page from a PDF?', answer: 'Yes. After uploading, simply select the single page you need and extract it as a standalone PDF file.' },
  { question: 'Is there a file size limit?', answer: "Since processing happens in your browser, the limit depends on your device's available memory. Most devices handle PDFs up to 100MB without issues." },
  { question: 'Will splitting affect the quality of my PDF?', answer: 'No. The tool extracts pages without re-encoding, so all text, images, and formatting remain exactly as they were in the original document.' },
  { question: 'Are my files secure when splitting PDFs online?', answer: 'Completely. Your PDF never leaves your device. All processing happens locally in your browser using JavaScript. No data is transmitted to any server.' }
];

export default function SplitPdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Split PDF Files</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Extract specific pages or split a PDF into multiple files. Select page ranges, download individual pages, or divide documents — all in your browser.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <SplitPdfTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Split PDF Files Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Splitting PDFs is essential when you need to extract specific pages from a large document, separate chapters, or create smaller files for easier sharing. Our free online PDF splitter handles all of these tasks without uploading your files anywhere.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDF.</strong> Click the upload area or drag and drop your PDF file. The tool will display a preview of all pages.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Select Pages.</strong> Choose which pages to extract. You can click individual pages, enter page ranges (e.g., 1-5, 8, 12-15), or use the "split every N pages" option.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Split and Download.</strong> Click "Split PDF" to process. The selected pages are extracted into a new PDF that downloads automatically.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Common Use Cases</h3>
          <p>Students use PDF splitting to extract relevant chapters from textbooks. Professionals split reports to share only the sections relevant to specific stakeholders. Legal teams extract individual clauses from lengthy contracts. Whatever your need, the process is the same: upload, select, download.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/split-pdf" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
