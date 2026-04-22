import type { Metadata } from 'next';
import MergePdfTool from './MergePdfTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free — Combine PDFs Instantly',
  description: 'Merge multiple PDF files into one document for free. Drag and drop to reorder pages. No upload required — all processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/merge-pdf' },
  openGraph: {
    title: 'Merge PDF Files Online Free — Combine PDFs Instantly',
    description: 'Combine multiple PDF files into a single document. Free, private, no sign-up required.',
    url: 'https://pdftools.one/merge-pdf',
  },
};

const faqs = [
  { question: 'How do I merge PDF files online?', answer: 'Simply drag and drop your PDF files into the upload area or click to browse. Reorder them as needed, then click "Merge PDFs" to combine them into a single document. The merged file downloads automatically.' },
  { question: 'Is it safe to merge PDFs on this website?', answer: 'Yes, completely safe. All PDF processing happens entirely in your browser using JavaScript. Your files are never uploaded to any server. Once you close the page, all data is gone.' },
  { question: 'Is there a limit on the number of PDFs I can merge?', answer: 'There is no hard limit. Since processing happens in your browser, the practical limit depends on your device\'s memory. Most users can merge dozens of PDFs without any issues.' },
  { question: 'Can I reorder pages before merging?', answer: 'Yes. After uploading your PDF files, you can drag and drop them to change the order. The files will be merged in the order shown on screen.' },
  { question: 'What happens to my files after merging?', answer: 'Nothing — your files exist only in your browser\'s memory during processing. They are never stored, cached, or transmitted anywhere. Closing the tab removes all traces.' },
];

export default function MergePdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Merge PDF Files</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Combine multiple PDF files into a single document. Drag and drop to reorder. Free, private, and works entirely in your browser.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <MergePdfTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Merge PDF Files Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Merging PDF files is one of the most common document tasks, whether you are combining reports for a presentation, assembling scanned documents, or creating a single portfolio from multiple files. Our free online PDF merger makes this process simple, fast, and completely private.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDFs.</strong> Click the upload area or drag and drop your PDF files directly onto the tool. You can select multiple files at once from your file browser.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Arrange the Order.</strong> Your PDFs will be merged in the order they appear on screen. Use the drag handles or arrow buttons to rearrange files into your desired sequence.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Merge and Download.</strong> Click the "Merge PDFs" button to combine all files. The tool processes everything locally in your browser. Once complete, the merged PDF downloads automatically.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Why Use Our PDF Merger?</h3>
          <p>Unlike most online PDF tools that require you to upload files to a remote server, our merger processes everything client-side. This means your sensitive documents — contracts, financial reports, medical records — never leave your computer.</p>
          <p>The tool uses pdf-lib, a robust JavaScript library for PDF manipulation. It preserves all original formatting, fonts, images, and interactive elements in your PDFs.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/merge-pdf" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
