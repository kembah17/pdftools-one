'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
            style={{ color: 'var(--color-text-heading)', backgroundColor: 'transparent', border: 'none' }}
          >
            <span className="font-semibold text-sm md:text-base">{item.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="shrink-0 transition-transform duration-200"
              style={{
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                color: 'var(--color-text-muted)',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {openIndex === i && (
            <div
              className="px-6 pb-4 text-sm leading-relaxed"
              style={{ color: 'var(--color-text-secondary)', borderTop: '1px solid var(--color-border-light)' }}
            >
              <div className="pt-3">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
