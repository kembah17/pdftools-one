export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  shortDesc: string;
}

export const tools: Tool[] = [
  { name: 'Merge PDF', slug: '/merge-pdf', description: 'Combine multiple PDF files into a single document. Drag and drop to reorder pages before merging.', icon: '📄', shortDesc: 'Combine multiple PDFs into one' },
  { name: 'Split PDF', slug: '/split-pdf', description: 'Extract specific pages or split a PDF into multiple separate files instantly.', icon: '✂️', shortDesc: 'Extract or split PDF pages' },
  { name: 'Compress PDF', slug: '/compress-pdf', description: 'Reduce PDF file size while maintaining quality. Perfect for email attachments.', icon: '📦', shortDesc: 'Reduce PDF file size' },
  { name: 'PDF to JPG', slug: '/pdf-to-jpg', description: 'Convert PDF pages to high-quality JPG images. Download individually or as ZIP.', icon: '🖼️', shortDesc: 'Convert PDF pages to images' },
  { name: 'JPG to PDF', slug: '/jpg-to-pdf', description: 'Convert JPG images into a PDF document. Supports multiple images with reordering.', icon: '📷', shortDesc: 'Convert images to PDF' },
  { name: 'PDF to Word', slug: '/pdf-to-word', description: 'Convert PDF documents to editable Word (.docx) format with text extraction.', icon: '📝', shortDesc: 'Convert PDF to Word document' },
  { name: 'Rotate PDF', slug: '/rotate-pdf', description: 'Rotate PDF pages to any orientation. Rotate individual pages or all at once.', icon: '🔄', shortDesc: 'Rotate PDF pages' },
];
