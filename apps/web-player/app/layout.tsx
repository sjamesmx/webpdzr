import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Padelyzer App Jugadores - Mejora tu Pádel con IA | México 2025',
  description: 'App #1 de pádel en México con IA. Análisis profesional, mejora garantizada 30% en ranking. +15,000 jugadores activos. Prueba 14 días gratis.',
  keywords: 'padelyzer app, padel app méxico, aplicación padel gratis, mejorar padel, análisis padel IA, ranking padel amateur, encontrar jugadores padel, reservar pista padel méxico, torneo padel app',
  metadataBase: new URL('https://play.padelyzer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Padelyzer - App de Pádel con IA para Jugadores',
    description: 'Mejora tu juego 30% garantizado. Análisis profesional por $199 MXN/mes',
    url: 'https://play.padelyzer.com',
    siteName: 'Padelyzer Jugadores',
    images: [
      {
        url: '/og-player.jpg',
        width: 1200,
        height: 630,
        alt: 'Padelyzer App - Mejora tu pádel con IA',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padelyzer - Tu juego apesta... y lo sabes',
    description: 'La IA que analiza tu pádel y te dice exactamente qué mejorar',
    images: ['/og-player.jpg'],
    creator: '@padelyzer',
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
    google: 'google-site-verification-code-player',
  },
  other: {
    'apple-itunes-app': 'app-id=123456789',
    'google-play-app': 'app-id=com.padelyzer.player',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Padelyzer Jugadores',
    url: 'https://play.padelyzer.com',
    applicationCategory: 'SportsApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'MXN',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '15000',
    },
    description: 'App de pádel con IA para análisis y mejora de juego',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo funciona el análisis con IA de Padelyzer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Padelyzer utiliza inteligencia artificial avanzada para analizar tu juego, identificar patrones y proporcionar recomendaciones personalizadas para mejorar tu ranking en 30 días.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta la app de Padelyzer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La app cuesta $199 MXN al mes con 14 días de prueba gratis. Garantizamos mejora del 30% en tu ranking o te devolvemos tu dinero.',
        },
      },
    ],
  };

  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="app-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}