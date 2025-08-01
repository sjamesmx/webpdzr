import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Padelyzer ROUTER - Selecciona tu perfil',
  description: 'Plataforma integral de pádel: análisis con IA para jugadores y software de gestión para clubes',
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