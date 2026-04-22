export function PrivacyBadge({ className }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${className || ''}`}
      style={{
        backgroundColor: 'var(--color-brand-lightest)',
        color: 'var(--color-brand)',
        border: '1px solid var(--color-brand)',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      100% Private — Files Never Leave Your Browser
    </div>
  );
}

export default PrivacyBadge;
