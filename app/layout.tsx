import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Padelyzer - La revolución del padel con IA",
  description: "La primera plataforma que combina IA, computer vision y ciencia para revolucionar cómo juegas y gestionas el padel. Análisis biomecánico, Padel IQ preciso y gestión completa para clubes.",
  keywords: "padel, tenis padel, padel puebla, inteligencia artificial padel, análisis padel, gestión clubes padel, padel IQ, computer vision padel",
  openGraph: {
    title: "Padelyzer - La revolución del padel con IA",
    description: "Análisis biomecánico con IA, Padel IQ preciso y gestión completa para clubes. Únete a la beta exclusiva.",
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Padelyzer - La revolución del padel con IA",
    description: "Análisis biomecánico con IA, Padel IQ preciso y gestión completa para clubes.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
