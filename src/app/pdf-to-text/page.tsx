import type { Metadata } from 'next';
import PdfOcrTool from './PdfOcrTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Extract Text from Scanned PDF Free — PDF OCR Tool',
  description: 'Extract text from scanned PDF documents using OCR. Supports multi-page PDFs with image preprocessing for better accuracy. Free online tool.',
  keywords: ['PDF to text', 'PDF OCR', 'extract text from scanned PDF', 'scanned PDF to text'],
  alternates: { canonical: 'https://pdftools.one/pdf-to-text' },
  openGraph: {
    title: 'Extract Text from Scanned PDF Free — PDF OCR Tool',
    description: 'Extract text from scanned PDF documents using OCR. Supports multi-page PDFs with image preprocessing for better accuracy. Free online tool.',
    url: 'https://pdftools.one/pdf-to-text',
  },
};

const faqs = [
  { question: 'How does PDF OCR work?', answer: 'PDF OCR (Optical Character Recognition) converts scanned PDF pages into editable text. The tool renders each PDF page as an image, applies optional preprocessing like contrast enhancement and noise removal, then uses the Tesseract OCR engine to recognize and extract text from the image. Everything runs in your browser — no files are uploaded to any server.' },
  { question: 'Can I extract text from a scanned PDF?', answer: 'Yes. This tool is specifically designed for scanned PDFs where the text is embedded as images rather than selectable text. The OCR engine analyzes the visual content of each page and converts it into machine-readable text. For best results, use the preprocessing options to enhance image quality before extraction.' },
  { question: 'What do the preprocessing options do?', answer: 'Preprocessing improves OCR accuracy by enhancing the image before text recognition. Grayscale removes color noise. Contrast enhancement makes text stand out from the background. Noise removal eliminates speckles and artifacts. Deskew corrects tilted scans. Binarize converts the image to pure black and white, which often improves recognition of printed text.' },
  { question: 'Are my PDF files kept private?', answer: 'Absolutely. All processing happens entirely in your web browser using JavaScript and WebAssembly. Your PDF files are never uploaded to any server. The OCR engine (Tesseract.js) runs locally on your device. Once you close the page, all data is gone.' },
  { question: 'Is there a page limit for OCR processing?', answer: 'There is no hard page limit. Since OCR runs in your browser, the practical limit depends on your device memory and processing power. Each page typically takes a few seconds to process. Most modern devices can handle PDFs with dozens of pages without issues. For very large documents, processing may take several minutes.' },
];

export default function PdfToTextPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Extract Text from Scanned PDF Free</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Extract text from scanned PDF documents using OCR. Adjust preprocessing settings for better accuracy — all processing happens locally in your browser.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <PdfOcrTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Extract Text from a Scanned PDF</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Scanned PDFs contain images of text rather than actual selectable text. This makes them difficult to search, edit, or copy from. OCR (Optical Character Recognition) technology solves this by analyzing the visual patterns in each page and converting them into machine-readable text that you can copy, edit, and search.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your Scanned PDF.</strong> Drag and drop your scanned PDF file or click to browse. The tool loads and displays thumbnail previews of all pages so you can verify the correct document is selected.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Adjust Preprocessing Settings.</strong> Enable preprocessing options to improve OCR accuracy. For most scanned documents, enabling Grayscale and Contrast Enhancement produces the best results. If your scan has speckles or noise, enable Noise Removal. For tilted scans, enable Deskew Detection.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Select Language and Extract Text.</strong> Choose the language of your document from the dropdown menu. The OCR engine supports eight languages including English, Spanish, French, German, Portuguese, Chinese, Arabic, and Hindi. Click "Extract Text" to begin processing.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 4: Copy or Download the Extracted Text.</strong> Once processing is complete, review the extracted text in combined or per-page view. Check the confidence scores to gauge accuracy. Copy the text to your clipboard or download it as a .txt file.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Tips for Better OCR Accuracy</h3>
          <p>OCR accuracy depends heavily on the quality of the original scan. Higher resolution scans produce better results. For low-quality scans, experiment with different preprocessing combinations. Enabling both Grayscale and Contrast Enhancement at 150% intensity is a good starting point. For documents with colored backgrounds, try enabling Binarize with a threshold around 128 to convert the image to pure black and white before recognition.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/pdf-to-text" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
