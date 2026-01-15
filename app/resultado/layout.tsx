'use client';

import { FormProvider } from '@/context/FormContext';

export default function ResultadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormProvider>{children}</FormProvider>;
}
