import type { Metadata } from 'next';
import CompressPdfTool from './CompressPdfTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce PDF File Size',
  description: 'Compress PDF files to reduce size by up to 70% while maintaining quality. Free, private, no upload required — all processing in your browser.',
  alternates: { canonical: 'https://pdftools.one/compress-pdf' },
  openGraph: {
    title: 'Compress PDF Online Free — Reduce PDF File Size',
    description: 'Compress PDF files to reduce size by up to 70% while maintaining quality. Free, private, no upload required — all processing in your browser.',
    url: 'https://pdftools.one/compress-pdf',
  },
};

const faqs = [
  { question: 'How much can I reduce my PDF file size?', answer: 'Compression results vary depending on the content. PDFs with many images typically see 40-70% size reduction. Text-heavy PDFs with few images may see 10-30% reduction.' },
  { question: 'Does compression reduce the quality of my PDF?', answer: 'Our tool uses smart compression that prioritizes visual quality. Text remains crisp and sharp. Images are compressed using optimized algorithms that minimize visible quality loss.' },
  { question: 'What is the maximum file size I can compress?', answer: 'Since processing happens in your browser, the limit depends on your device. Most modern devices handle PDFs up to 50-100MB comfortably.' },
  { question: 'Can I compress password-protected PDFs?', answer: 'The tool can process PDFs that are not encrypted. If your PDF requires a password to open, you will need to remove the protection first.' },
  { question: 'Is my PDF safe during compression?', answer: 'Yes. Your file never leaves your device. All compression happens locally in your browser. No data is sent to any server, and closing the tab removes all traces.' }
];

export default function CompressPdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Compress PDF Files</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Reduce PDF file size by up to 70% while maintaining visual quality. Perfect for email attachments and uploads — all processing happens locally.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <CompressPdfTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Compress PDF Files Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Large PDF files can be problematic — email services reject attachments over 25MB, upload forms have size limits, and large files are slow to share. Our free PDF compressor solves this by reducing file size while keeping your documents looking professional.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDF.</strong> Drag and drop your PDF file or click to browse. The tool displays the original file size immediately.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Choose Compression Level.</strong> Select your preferred balance between file size and quality. Higher compression means smaller files but slightly lower image quality.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Compress and Download.</strong> Click "Compress PDF" to process. The tool shows the new file size and compression ratio, then downloads the optimized file.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Tips for Best Results</h3>
          <p>For documents you plan to print, use light compression to preserve maximum quality. For email attachments or web uploads, medium or high compression usually provides the best balance. Scanned documents with large images benefit most from compression.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/compress-pdf" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
