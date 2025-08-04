import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Padelyzer - El ecosistema digital del Padel en México | App y Software 2025',
  description: 'Plataforma #1 de pádel en México: App con IA para jugadores que mejoran 30% y software de gestión sin comisiones para clubes. +60,000 usuarios activos.',
  keywords: 'padelyzer, padel méxico, pádel app, software gestión clubes pádel, padel manager méxico, aplicación padel gratis, reservar pista padel, torneo padel méxico',
  metadataBase: new URL('https://padelyzer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Padelyzer - Ecosistema Digital del Padel México',
    description: 'La plataforma más completa: App IA para jugadores y software profesional para clubes',
    url: 'https://padelyzer.com',
    siteName: 'Padelyzer',
    images: [
      {
        url: '/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Padelyzer - Plataforma de Padel',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padelyzer - El ecosistema digital del Padel',
    description: 'App IA para jugadores y software de gestión para clubes',
    images: ['/og-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Padelyzer',
    url: 'https://padelyzer.com',
    logo: 'https://padelyzer.com/Padelyzer-Logo-Negro.png',
    description: 'Ecosistema digital del padel: App con IA para jugadores y software de gestión para clubes',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://facebook.com/padelyzer',
      'https://instagram.com/padelyzer',
      'https://twitter.com/padelyzer',
    ],
  };

  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C6FF00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
