interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs, items }: { faqs?: FAQItem[]; items?: FAQItem[] }) {
  const data = faqs || items || [];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default FAQSchema;
