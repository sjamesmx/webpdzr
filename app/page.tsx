'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <Features />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}