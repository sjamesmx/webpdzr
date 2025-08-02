'use client';

import { ClubButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import { useState } from 'react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Mobile-Optimized Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-club-border shadow-sm">
        <div className="px-4 sm:container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Logo variant="club" className="h-8 sm:h-10" />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6 text-club-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/soluciones" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Precios
              </a>
              <a href="/casos-de-exito" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Casos de Éxito
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <ClubButton variant="ghost" size="sm">
                Iniciar Sesión
              </ClubButton>
              <ClubButton size="sm">
                Agenda Demo
              </ClubButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-[500px] sm:min-h-[600px] pt-14 sm:pt-16 flex items-center">
        <div className="px-4 sm:container py-12 sm:py-20">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="bg-club-accent text-white px-2 sm:px-3 py-1 rounded-full font-medium">APP CLUBES</span>
              <span className="bg-club-success text-white px-2 sm:px-3 py-1 rounded-full font-medium">NUEVO</span>
              <span className="text-club-text-secondary">Primeros 100 clubes: 2 meses gratis</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-club-text-primary mb-4 sm:mb-6 leading-tight">
              Tu Club de Pádel Funcionando<br />
              Como <span className="text-club-accent">Negocio Profesional</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-club-text-secondary mb-6 sm:mb-8 max-w-3xl">
              El único sistema que GARANTIZA +30% más ingresos en 90 días. 
              Sin comisiones ocultas. Con soporte 24/7 en español.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-8 sm:mb-12">
              <ClubButton size="lg" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-3">
                Agenda Demo de 20 min
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-3">
                Ver video de 5 min
              </ClubButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-xs sm:text-sm text-club-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>400+ clubes activos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>60,000+ jugadores</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>#1 en México</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-club-bg-secondary">
        <div className="px-4 sm:container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Sitio completo próximamente</h2>
          <p className="text-sm sm:text-base text-club-text-secondary">
            Estamos trabajando en el sitio completo para clubes. Mientras tanto, agenda una demo.
          </p>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="py-8 sm:py-12 border-t border-club-border">
        <div className="px-4 sm:container">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <Logo variant="club" className="h-8 sm:h-10" />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacidad" className="text-club-text-secondary hover:text-club-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-club-text-secondary hover:text-club-accent">
                Términos
              </a>
              <a href="https://padelyzer.com" className="text-club-text-secondary hover:text-club-accent">
                App para jugadores
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-club-border">
            <Logo variant="club" className="h-8" />
            <button 
              className="p-2" 
              aria-label="Cerrar menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 p-6">
            <a href="/soluciones" className="block py-3 text-lg text-club-text-primary hover:text-club-accent transition-colors">
              Soluciones
            </a>
            <a href="/precios" className="block py-3 text-lg text-club-text-primary hover:text-club-accent transition-colors">
              Precios
            </a>
            <a href="/casos-de-exito" className="block py-3 text-lg text-club-text-primary hover:text-club-accent transition-colors">
              Casos de Éxito
            </a>
          </nav>
          
          <div className="p-6 border-t border-club-border">
            <ClubButton variant="ghost" size="lg" className="w-full mb-3">
              Iniciar Sesión
            </ClubButton>
            <ClubButton size="lg" className="w-full">
              Agenda Demo
            </ClubButton>
          </div>
        </div>
      </div>
    </>
  );
}