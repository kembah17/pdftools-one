import type { Metadata } from 'next';
import RotatePdfTool from './RotatePdfTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free — Fix PDF Orientation',
  description: 'Rotate PDF pages by 90, 180, or 270 degrees for free. Fix sideways scans and adjust page orientation. No upload — processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/rotate-pdf' },
  openGraph: {
    title: 'Rotate PDF Pages Online Free — Fix PDF Orientation',
    description: 'Rotate PDF pages by 90, 180, or 270 degrees for free. Fix sideways scans and adjust page orientation. No upload — processing happens in your browser.',
    url: 'https://pdftools.one/rotate-pdf',
  },
};

const faqs = [
  { question: 'How do I rotate pages in a PDF?', answer: 'Upload your PDF, then select the pages you want to rotate. Choose the rotation angle (90°, 180°, or 270° clockwise) and click "Rotate" to apply. Download the corrected PDF.' },
  { question: 'Can I rotate just one page in a multi-page PDF?', answer: 'Yes. After uploading, you can select individual pages to rotate while leaving others unchanged. This is perfect for fixing a single sideways scan in a larger document.' },
  { question: 'What rotation angles are available?', answer: 'You can rotate pages 90° clockwise, 90° counter-clockwise (270°), or 180° to flip upside-down pages. Apply different rotations to different pages in the same document.' },
  { question: 'Will rotating affect the content quality?', answer: 'No. Rotation is a lossless operation — it changes the page orientation metadata without re-encoding any content. Text, images, and formatting remain identical.' },
  { question: 'Is this tool free to use?', answer: 'Yes, completely free. No sign-up, no watermarks, no usage limits. All processing happens in your browser with complete privacy.' }
];

export default function RotatePdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Rotate PDF Pages</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Rotate individual pages or entire PDF documents by 90°, 180°, or 270°. Fix sideways scans and adjust orientation — all in your browser.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <RotatePdfTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Rotate PDF Pages Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Incorrectly oriented PDF pages are a common frustration, especially with scanned documents. Our free PDF rotation tool lets you fix page orientation quickly without installing any software.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDF.</strong> Drag and drop your PDF or click to browse. The tool displays thumbnail previews of all pages.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Select and Rotate.</strong> Click on individual pages to select them, or use "Select All" for the entire document. Choose your rotation angle: 90° left, 90° right, or 180°.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Download.</strong> Click "Apply Rotation" to process. The corrected PDF downloads automatically with all selected pages rotated to the correct orientation.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>When You Need PDF Rotation</h3>
          <p>The most common scenario is fixing scanned documents where pages were fed sideways into the scanner. It is also useful for adjusting landscape pages in portrait documents, fixing photos embedded in PDFs, or correcting documents received from others with orientation issues.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/rotate-pdf" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
