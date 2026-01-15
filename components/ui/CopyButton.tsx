'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function CopyButton({
  text,
  label = 'Copiar',
  className,
  variant = 'outline',
  size = 'md',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Button
      type="button"
      variant={copied ? 'primary' : variant}
      size={size}
      onClick={handleCopy}
      className={cn('min-w-[100px]', className)}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Copiado
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          {label}
        </>
      )}
    </Button>
  );
}
