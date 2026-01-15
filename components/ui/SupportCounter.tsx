'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export default function SupportCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/counter');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching count:', error);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, []);

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium animate-pulse">
        <Users className="w-4 h-4" />
        <span>Cargando...</span>
      </div>
    );
  }

  if (count === null || count === 0) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
      <Users className="w-4 h-4" />
      <span>
        <strong>{count.toLocaleString('es-CO')}</strong> ciudadanos han apoyado
      </span>
    </div>
  );
}
