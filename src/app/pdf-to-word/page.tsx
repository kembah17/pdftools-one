import type { Metadata } from 'next';
import PdfToWordTool from './PdfToWordTool';
import { AdSlot } from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/seo/FAQSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'PDF to Word Converter Online Free — Convert PDF to DOCX',
  description: 'Convert PDF files to editable Word documents for free. Extract text and formatting from PDFs. No upload — all processing happens in your browser.',
  alternates: { canonical: 'https://pdftools.one/pdf-to-word' },
  openGraph: {
    title: 'PDF to Word Converter Online Free — Convert PDF to DOCX',
    description: 'Convert PDF files to editable Word documents for free. Extract text and formatting from PDFs. No upload — all processing happens in your browser.',
    url: 'https://pdftools.one/pdf-to-word',
  },
};

const faqs = [
  { question: 'How accurate is the PDF to Word conversion?', answer: 'The tool extracts text content accurately from most PDFs. Simple documents with standard formatting convert very well. Complex layouts with multiple columns or heavy graphics may need minor adjustments after conversion.' },
  { question: 'Can I convert scanned PDFs to Word?', answer: 'This tool works best with text-based PDFs (where you can select and copy text). Scanned PDFs that are essentially images require OCR technology, which is not included in this browser-based tool.' },
  { question: 'What format is the output file?', answer: 'The tool produces a .docx file compatible with Microsoft Word, Google Docs, LibreOffice, and other word processors.' },
  { question: 'Will the formatting be preserved?', answer: 'Basic formatting like bold, italic, headings, and paragraphs is preserved. Complex elements like tables, columns, and embedded graphics may need manual adjustment.' },
  { question: 'Is my document secure during conversion?', answer: 'Yes. Your PDF is processed entirely in your browser using JavaScript. No files are uploaded to any server. Your document content remains completely private.' }
];

export default function PdfToWordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FAQSchema faqs={faqs} />
      <AdSlot slot="tool-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Convert PDF to Word</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Extract text from PDF files and create editable Word documents. Perfect for editing reports, articles, and simple documents — processed locally.</p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <PdfToWordTool />
      </div>

      <AdSlot slot="tool-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>How to Convert PDF to Word Online</h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Converting PDFs to editable Word documents is one of the most requested document tasks. Whether you need to edit a report, update a contract, or repurpose content from a PDF, our free converter extracts text and basic formatting into a .docx file.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Step-by-Step Instructions</h3>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your PDF.</strong> Drag and drop your PDF file or click to browse. The tool analyzes the document structure.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 2: Convert.</strong> Click "Convert to Word" to begin extraction. The tool processes each page, extracting text and identifying formatting.</p>
          <p><strong style={{ color: 'var(--color-text-heading)' }}>Step 3: Download.</strong> The converted .docx file downloads automatically. Open it in any word processor to edit the content.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--color-text-heading)' }}>Tips for Best Results</h3>
          <p>This tool works best with text-based PDFs created from word processors or design software. For scanned documents, consider using a dedicated OCR service first. After conversion, review the document for any formatting that may need adjustment, particularly around tables and multi-column layouts.</p>
        </div>
      </section>

      <AdSlot slot="tool-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools currentTool="/pdf-to-word" />
      </section>

      <AdSlot slot="tool-footer" />
    </div>
  );
}
