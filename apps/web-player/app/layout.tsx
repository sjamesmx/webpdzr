import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Padelyzer - Tu juego apesta... y lo sabes',
  description: 'La IA que analiza tu pádel y te dice exactamente qué mejorar. Mejora tu ranking en 30 días o te devolvemos tu dinero.',
  keywords: 'padel, pádel, app, análisis, IA, inteligencia artificial, mejora, ranking',
  openGraph: {
    title: 'Padelyzer - Mejora tu pádel con IA',
    description: 'Análisis profesional de tu juego por $199 MXN/mes',
    images: ['/og-player.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}