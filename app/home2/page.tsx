'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';

// Dynamic imports for 3D components
const HeroNew = dynamic(() => import('@/components/HeroNew'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
});

// New sections for Home 2
const TransformYourGame = dynamic(() => import('@/components/TransformYourGame'), { ssr: false });
const TransformYourClub = dynamic(() => import('@/components/TransformYourClub'), { ssr: false });
const CTAFinal = dynamic(() => import('@/components/CTAFinal'), { ssr: false });

export default function Home2() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroNew />
        <Philosophy />
        <TransformYourGame />
        <TransformYourClub />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}