import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Padelyzer JUGADORES - Tu juego apesta... y lo sabes',
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
      <body>{children}</body>
    </html>
  );
}