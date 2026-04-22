'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools } from '@/lib/tools-data';

export function RelatedTools({ currentTool, currentSlug }: { currentTool?: string; currentSlug?: string }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const current = currentTool || currentSlug || '';
  const related = tools.filter((t) => !t.slug.includes(current) && !current.includes(t.slug.replace('/', ''))).slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>
        Related PDF Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.slug}
            className="rounded-xl p-5 no-underline transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: hoveredSlug === tool.slug ? '2px solid var(--color-brand)' : '2px solid var(--color-border)',
              boxShadow: hoveredSlug === tool.slug ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            }}
            onMouseEnter={() => setHoveredSlug(tool.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{tool.icon}</span>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: 'var(--color-text-heading)' }}>
                  {tool.name}
                </h3>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  {tool.shortDesc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedTools;
