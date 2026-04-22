import type { Metadata } from 'next';
import PdfToJpgTool from './PdfToJpgTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'PDF to JPG Converter Online Free — Convert PDF Pages to Images',
  description: 'Convert PDF pages to high-quality JPG images for free. Download individual pages or all pages at once. No upload — processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/pdf-to-jpg' },
  openGraph: {
    title: 'PDF to JPG Converter Online Free — Convert PDF Pages to Images',
    description: 'Convert PDF pages to high-quality JPG images for free. Download individual pages or all pages at once. No upload — processing happens in your browser.',
    url: 'https://pdftools.one/pdf-to-jpg',
  },
};

const faqs = [
  { question: 'How do I convert a PDF to JPG images?', answer: 'Upload your PDF file, and the tool automatically converts each page into a separate JPG image. You can download individual pages or all images at once as a ZIP file.' },
  { question: 'What quality are the JPG images?', answer: 'The tool converts at high resolution by default, producing clear, sharp images suitable for printing and presentations. You can adjust the quality setting if needed.' },
  { question: 'Can I convert a specific page instead of the whole PDF?', answer: 'Yes. After uploading, you can select which pages to convert rather than processing the entire document.' },
  { question: 'Is there a page limit for conversion?', answer: 'No hard limit. Since conversion happens in your browser, the practical limit depends on your device memory. Most devices handle PDFs with hundreds of pages.' },
  { question: 'Are my files private during conversion?', answer: 'Absolutely. Your PDF is processed entirely in your browser. No files are uploaded to any server. The conversion uses JavaScript running on your device.' }
];

export default function PdfToJpgPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Convert PDF to JPG</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Convert each page of your PDF into a high-quality JPG image. Perfect for presentations, social media, and thumbnails — all processed locally.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <PdfToJpgTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Convert PDF to JPG Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Converting PDFs to JPG images is useful for many purposes: creating thumbnails for document previews, sharing individual pages on social media, embedding PDF content in presentations, or extracting images from scanned documents.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDF.</strong> Drag and drop your PDF or click to browse. The tool loads and previews all pages.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Configure Settings.</strong> Choose the output quality and resolution. Higher settings produce larger, sharper images. Select specific pages if you do not need the entire document.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Convert and Download.</strong> Click "Convert to JPG" to process. Download individual images or get all pages as a ZIP archive.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>When to Use PDF to JPG</h3>
          <p>Use this tool when you need to share PDF content on platforms that do not support PDF files, when creating image-based presentations, or when you need to edit individual pages in an image editor. The JPG format is universally supported across all devices and platforms.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/pdf-to-jpg" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
