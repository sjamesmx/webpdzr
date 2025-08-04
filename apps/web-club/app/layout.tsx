import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Padelyzer Pro - Software Gestión Clubes Pádel México | Sin Comisiones 2025',
  description: 'Software #1 gestión clubes pádel México. GARANTIZA +30% ingresos 90 días. Sin comisiones. Reservas automáticas, control accesos, CRM. +400 clubes activos.',
  keywords: 'padelyzer pro, software gestión clubes pádel, software administración padel méxico, gestionar centro pádel, app reserva pistas pádel, sistema reservas padel, software clubes deportivos, padel manager méxico, gestión torneos padel',
  metadataBase: new URL('https://pro.padelyzer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Padelyzer Pro - Software Profesional para Clubes de Pádel',
    description: 'Garantía +30% más ingresos. Sin comisiones ocultas. Soporte 24/7',
    url: 'https://pro.padelyzer.com',
    siteName: 'Padelyzer Pro',
    images: [
      {
        url: '/og-club.jpg',
        width: 1200,
        height: 630,
        alt: 'Padelyzer Pro - Software de Gestión para Clubes',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padelyzer Pro - Tu Club Como Negocio Profesional',
    description: 'Software completo de gestión sin comisiones. ROI garantizado.',
    images: ['/og-club.jpg'],
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
    google: 'google-site-verification-code-club',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Padelyzer Pro',
    url: 'https://pro.padelyzer.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      description: 'Software de gestión completo sin comisiones',
      price: '0',
      priceCurrency: 'MXN',
      seller: {
        '@type': 'Organization',
        name: 'Padelyzer',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '400',
      bestRating: '5',
    },
    description: 'Software profesional de gestión para clubes de pádel sin comisiones',
    featureList: [
      'Reservas automáticas 24/7',
      'Control de accesos con QR',
      'Gestión de torneos y ligas',
      'CRM completo',
      'Pagos integrados',
      'Sin comisiones ocultas',
      'Soporte 24/7 en español',
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Padelyzer Pro Software',
    description: 'Software de gestión integral para clubes de pádel',
    brand: {
      '@type': 'Brand',
      name: 'Padelyzer',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'MXN',
      highPrice: '0',
      lowPrice: '0',
      offerCount: '1',
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Pro Sin Comisiones',
          description: 'Acceso completo sin comisiones por transacción',
        },
      ],
    },
  };

  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="software-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="product-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}