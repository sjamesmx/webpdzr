import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Padelyzer Pro - Software de Gestión para Clubes de Pádel',
  description: 'El único sistema que GARANTIZA +30% más ingresos en 90 días. Sin comisiones ocultas. Con soporte 24/7 en español.',
  keywords: 'software, gestión, clubes, pádel, padel, reservas, torneos',
  openGraph: {
    title: 'Padelyzer Pro - Tu Club Como Negocio Profesional',
    description: 'Software completo de gestión sin comisiones',
    images: ['/og-club.jpg'],
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