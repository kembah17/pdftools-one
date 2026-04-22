import type { Metadata } from 'next';
import JpgToPdfTool from './JpgToPdfTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter Online Free — Convert Images to PDF',
  description: 'Convert JPG images to PDF documents for free. Combine multiple images into one PDF. No upload — all processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/jpg-to-pdf' },
  openGraph: {
    title: 'JPG to PDF Converter Online Free — Convert Images to PDF',
    description: 'Convert JPG images to PDF documents for free. Combine multiple images into one PDF. No upload — all processing happens in your browser.',
    url: 'https://pdftools.one/jpg-to-pdf',
  },
};

const faqs = [
  { question: 'How do I convert JPG images to PDF?', answer: 'Upload one or more JPG images by dragging and dropping or clicking to browse. Arrange them in your preferred order, then click "Convert to PDF" to create a single PDF document.' },
  { question: 'Can I combine multiple images into one PDF?', answer: 'Yes. Upload as many images as you need, reorder them by dragging, and the tool combines them all into a single PDF document with one image per page.' },
  { question: 'What image formats are supported?', answer: 'The tool supports JPG, JPEG, and PNG images. All common image formats from cameras, phones, and screenshots work perfectly.' },
  { question: 'Can I adjust the page size?', answer: 'The tool automatically sizes each page to fit the image dimensions, ensuring no cropping or distortion. The result looks exactly like your original images.' },
  { question: 'Is this service really free?', answer: 'Yes, completely free with no hidden costs. There is no sign-up, no watermarks, and no limits on usage. The tool runs entirely in your browser.' }
];

export default function JpgToPdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Convert JPG to PDF</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Convert images to PDF documents or combine multiple photos into a single PDF file. Drag and drop to reorder — all processed in your browser.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <JpgToPdfTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Convert JPG to PDF Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Converting images to PDF is essential for creating professional documents from photos, combining scanned pages into a single file, or preparing image collections for easy sharing. Our free converter handles this entirely in your browser.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Images.</strong> Drag and drop your JPG or PNG images, or click to browse. You can select multiple files at once.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Arrange Order.</strong> Drag images to reorder them. Each image becomes one page in the final PDF, arranged in the order shown.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Convert and Download.</strong> Click "Convert to PDF" to create your document. The PDF downloads automatically with all images embedded at full quality.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Common Use Cases</h3>
          <p>Photographers use this to create PDF portfolios. Students convert handwritten notes into shareable PDFs. Businesses combine receipt photos into expense reports. The tool preserves original image quality while creating universally compatible PDF documents.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/jpg-to-pdf" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
