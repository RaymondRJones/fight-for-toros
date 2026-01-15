'use client';

import { FormProvider } from '@/context/FormContext';

export default function FormularioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormProvider>{children}</FormProvider>;
}
