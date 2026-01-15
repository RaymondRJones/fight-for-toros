import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intervención Ciudadana - Ley 2385 de 2024',
  description: 'Apoya la protección animal en Colombia. Envía tu intervención ciudadana a la Corte Constitucional para defender la Ley 2385 de 2024.',
  keywords: ['intervención ciudadana', 'Ley 2385', 'protección animal', 'Colombia', 'Corte Constitucional'],
  authors: [{ name: 'Ciudadanos por los Animales' }],
  openGraph: {
    title: 'Intervención Ciudadana - Ley 2385 de 2024',
    description: 'Apoya la protección animal en Colombia. Envía tu intervención ciudadana a la Corte Constitucional.',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intervención Ciudadana - Ley 2385 de 2024',
    description: 'Apoya la protección animal en Colombia',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
