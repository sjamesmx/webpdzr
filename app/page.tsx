'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Philosophy from '@/components/Philosophy';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

// Dynamic imports for 3D components
const HeroNew = dynamic(() => import('@/components/HeroNew'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
});
const FeaturesNew = dynamic(() => import('@/components/FeaturesNew'), { ssr: false });
const Vision = dynamic(() => import('@/components/Vision'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroNew />
        <Philosophy />
        <Vision />
        <FeaturesNew />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}