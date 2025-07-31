'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function RouterPage() {
  useEffect(() => {
    // Check if user already has a preference
    const userType = Cookies.get('padelyzer-user-type');
    
    if (userType === 'player') {
      window.location.href = 'https://padelyzer.com';
    } else if (userType === 'club') {
      window.location.href = 'https://pro.padelyzer.com';
    }
  }, []);

  const handleSelection = (type: 'player' | 'club') => {
    // Save preference for 30 days
    Cookies.set('padelyzer-user-type', type, { expires: 30 });
    
    // Redirect based on selection
    if (type === 'player') {
      window.location.href = 'https://padelyzer.com';
    } else {
      window.location.href = 'https://pro.padelyzer.com';
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <div className="text-3xl font-bold mb-8">Padelyzer</div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            ¿Qué buscas?
          </h1>
          <p className="text-gray-600 text-lg">
            Selecciona tu perfil para continuar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Player Card */}
          <button
            onClick={() => handleSelection('player')}
            className="group relative bg-white border-2 border-gray-200 rounded-3xl p-12 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-left"
          >
            <div className="text-6xl mb-6">🎾</div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Mejorar mi juego
            </h2>
            <p className="text-gray-600 mb-6">
              Para jugadores que quieren analizar y mejorar su técnica con IA
            </p>
            <div className="flex items-center gap-2 text-black">
              <span>Para jugadores</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Club Card */}
          <button
            onClick={() => handleSelection('club')}
            className="group relative bg-white border-2 border-gray-200 rounded-3xl p-12 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-left"
          >
            <div className="text-6xl mb-6">🏢</div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Gestionar mi club
            </h2>
            <p className="text-gray-600 mb-6">
              Para negocios que buscan digitalizar y hacer crecer su club
            </p>
            <div className="flex items-center gap-2 text-black">
              <span>Para negocios</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}