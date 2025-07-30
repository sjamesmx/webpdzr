'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}