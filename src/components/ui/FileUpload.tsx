'use client';

import { useCallback, type ReactNode } from 'react';

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onFiles: (files: File[]) => void;
  label?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function FileUpload({ accept = '.pdf', multiple = true, onFiles, label, description, children, className }: FileUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      if (files.length) onFiles(files);
    },
    [onFiles]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length) onFiles(files);
    },
    [onFiles]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`rounded-xl p-8 text-center cursor-pointer transition-all ${className || ''}`}
      style={{
        border: '2px dashed var(--color-border)',
        backgroundColor: 'var(--color-bg-main)',
      }}
    >
      <label className="cursor-pointer block">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
        {children || (
          <>
            <div className="text-4xl mb-3">📄</div>
            <p className="font-semibold text-base" style={{ color: 'var(--color-text-heading)' }}>
              {label || 'Drop files here or click to browse'}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
              {description || `Accepts ${accept} files`}
            </p>
          </>
        )}
      </label>
    </div>
  );
}

export default FileUpload;
