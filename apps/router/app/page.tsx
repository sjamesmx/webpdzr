'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function RouterPage() {
  useEffect(() => {
    // Animate elements on mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
        }, index * 200);
      });
    }, 100);

    // Check if user already has a preference
    // Commented out automatic redirect to always show router first
    // const userType = Cookies.get('padelyzer-user-type');
    // 
    // if (userType === 'player') {
    //   window.location.href = 'https://play.padelyzer.com';
    // } else if (userType === 'club') {
    //   window.location.href = 'https://pro.padelyzer.com';
    // }

    return () => clearTimeout(timer);
  }, []);

  const handleSelection = (type: 'player' | 'club') => {
    // Removed cookie saving to avoid automatic redirects
    // Just redirect based on selection
    if (type === 'player') {
      window.location.href = 'https://play.padelyzer.com';
    } else {
      window.location.href = 'https://pro.padelyzer.com';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(255, 255, 255, 0.05) 100px,
          rgba(255, 255, 255, 0.05) 101px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 100px,
          rgba(255, 255, 255, 0.05) 100px,
          rgba(255, 255, 255, 0.05) 101px
        )`
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto animate-in transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center mb-8 sm:mb-12">
          <Image
            src="/Padelyzer-Logo-Blanco.png"
            alt="Padelyzer - Plataforma Digital de Pádel en México"
            width={200}
            height={50}
            className="h-12 sm:h-16 w-auto mx-auto mb-4 sm:mb-6"
            priority
            loading="eager"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            El ecosistema digital del <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Padel</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Player Card */}
          <div 
            onClick={() => handleSelection('player')}
            className="animate-in group bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-[#C6FF00]/50 hover:shadow-2xl hover:shadow-[#C6FF00]/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col opacity-0 -translate-x-10 cursor-pointer"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C6FF00] to-[#B8E600] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Image
                src="/Padelyzer-Isotipo-Blanco.png"
                alt="Padelyzer App Jugadores - Mejora tu pádel con IA"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#C6FF00] transition-colors">
              Soy Jugador
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Encuentra canchas, organiza partidos, únete a torneos y mejora tu juego con nuestra app.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Reserva canchas al instante</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Conecta con otros jugadores</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Participa en torneos y ligas</span>
              </li>
            </ul>
            <div className="flex-grow"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
              <button className="bg-[#C6FF00] hover:bg-[#B8E600] text-black font-bold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#C6FF00]/50 text-sm sm:text-base">
                Ir a la app
              </button>
              <div className="text-xs sm:text-sm text-gray-400">+50,000 jugadores activos</div>
            </div>
          </div>

          {/* Club Card */}
          <div 
            onClick={() => handleSelection('club')}
            className="animate-in group bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col opacity-0 translate-x-10 cursor-pointer"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Image
                src="/Padelyzer-Isotipo-Blanco.png"
                alt="Padelyzer Pro - Software gestión clubes pádel"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
              Tengo un Club
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Software completo para gestionar tu club, aumentar ingresos y automatizar operaciones.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Gestión completa del club</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Aumenta ingresos +30%</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Automatiza reservas 24/7</span>
              </li>
            </ul>
            <div className="flex-grow"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base">
                Ver soluciones
              </button>
              <div className="text-xs sm:text-sm text-gray-400">Garantía ROI 25%</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 text-gray-400 animate-in transition-all duration-1000 opacity-0 text-sm sm:text-base" style={{ transitionDelay: '600ms' }}>
          <p>¿Necesitas ayuda? Contáctanos en <a href="mailto:info@padelyzer.com" className="text-white hover:text-[#C6FF00] transition-colors">info@padelyzer.com</a></p>
        </div>
      </div>
    </div>
  );
}