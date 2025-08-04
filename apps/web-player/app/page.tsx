'use client';

import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import { useState } from 'react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Mobile-Optimized Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-player-bg-primary/95 backdrop-blur-md border-b border-player-border">
        <div className="px-4 sm:container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Logo variant="player" className="h-8 sm:h-10" />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-player-bg-secondary rounded-lg transition-colors" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/caracteristicas" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Características
              </a>
              <a href="/precio" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Precio
              </a>
              <a href="/blog" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Blog
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <PlayerButton variant="ghost" size="sm">
                Iniciar Sesión
              </PlayerButton>
              <PlayerButton size="sm">
                Descargar
              </PlayerButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-screen pt-14 sm:pt-16 flex items-center">
        <div className="px-4 sm:container py-12 sm:py-20">
          <div className="max-w-5xl">
            <div className="inline-block bg-player-accent text-black text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-4">
              APP JUGADORES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              Tu juego <span className="text-player-accent">apesta</span>...
              <br />y lo sabes
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-player-text-secondary mb-6 sm:mb-8 max-w-3xl">
              La IA que analiza tu pádel y te dice exactamente qué mejorar. 
              Mejora tu ranking en 30 días o te devolvemos tu dinero. 
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-8 sm:mb-12">
              <PlayerButton size="lg" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-3">
                Prueba 14 días gratis
              </PlayerButton>
              <PlayerButton variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-3">
                Ver demo 2 min
              </PlayerButton>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-player-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>+15,000 jugadores activos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Mobile Optimized */}
      <section className="py-12 sm:py-20">
        <div className="px-4 sm:container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16">
            ¿Te suena familiar?
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                title: "Llevas 2 años jugando igual",
                description: "Sigues cometiendo los mismos errores una y otra vez sin saber cuáles son.",
                icon: "📊"
              },
              {
                title: "No sabes qué entrenar",
                description: "Practicas sin dirección, perdiendo tiempo en cosas que no necesitas mejorar.",
                icon: "🎯"
              },
              {
                title: "Pierdes contra jugadores 'peores'",
                description: "Te ganan rivales que juegan peor técnicamente pero son más consistentes.",
                icon: "😤"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 sm:p-8 hover:border-player-accent/50 transition-all"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{problem.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{problem.title}</h3>
                <p className="text-sm sm:text-base text-player-text-secondary">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-player-bg-secondary to-player-bg-primary">
        <div className="px-4 sm:container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            8 de cada 10 usuarios mejoran su ranking en 30 días
          </h2>
          <p className="text-base sm:text-xl text-player-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
            Únete a miles de jugadores que ya están mejorando con datos reales, no opiniones.
          </p>
          <PlayerButton size="lg" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-3">
            Empieza ahora - 14 días gratis
          </PlayerButton>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="py-8 sm:py-12 border-t border-player-border">
        <div className="px-4 sm:container">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <Logo variant="player" className="h-8 sm:h-10" />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacidad" className="text-player-text-secondary hover:text-player-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-player-text-secondary hover:text-player-accent">
                Términos
              </a>
              <a href="https://pro.padelyzer.com" className="text-player-text-secondary hover:text-player-accent">
                ¿Tienes un club?
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gray-900 z-50 md:hidden transform transition-transform duration-300 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-800">
            <Logo variant="player" className="h-8" />
            <button 
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors" 
              aria-label="Cerrar menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-6 overflow-y-auto bg-gray-900">
            <div className="space-y-1">
              <a 
                href="/caracteristicas" 
                className="block py-3 px-4 text-lg text-white hover:text-player-accent hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="/precio" 
                className="block py-3 px-4 text-lg text-white hover:text-player-accent hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precio
              </a>
              <a 
                href="/blog" 
                className="block py-3 px-4 text-lg text-white hover:text-player-accent hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
            </div>
            
            {/* Separator */}
            <div className="my-6 border-t border-player-border"></div>
            
            {/* Footer Links */}
            <div className="space-y-1">
              <a 
                href="/privacidad" 
                className="block py-2 px-4 text-sm text-player-text-secondary hover:text-player-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacidad
              </a>
              <a 
                href="/terminos" 
                className="block py-2 px-4 text-sm text-player-text-secondary hover:text-player-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Términos
              </a>
              <a 
                href="https://pro.padelyzer.com" 
                className="block py-2 px-4 text-sm text-player-text-secondary hover:text-player-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ¿Tienes un club?
              </a>
            </div>
          </nav>
          
          {/* CTA Buttons */}
          <div className="p-6 border-t border-gray-800 bg-gray-800">
            <PlayerButton 
              variant="ghost" 
              size="lg" 
              className="w-full mb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Iniciar Sesión
            </PlayerButton>
            <PlayerButton 
              size="lg" 
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Descargar App
            </PlayerButton>
          </div>
        </div>
      </div>
    </>
  );
}