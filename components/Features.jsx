import React from 'react';
import Card from './Card';

export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Padel IQ Preciso',
      description: 'Escala 0-100 basada en ciencia real. No más mentiras sobre niveles de juego.',
      highlight: false
    },
    {
      icon: '🤖',
      title: 'Coach IA Personal',
      description: 'Análisis biomecánico de +15 golpes. Ve lo que coaches humanos no pueden detectar.',
      highlight: true
    },
    {
      icon: '💰',
      title: '100% Gratis',
      description: 'Módulo de reservas sin costo, sin comisiones. Playtomic cobra €250 + fees.',
      highlight: false
    },
    {
      icon: '📊',
      title: 'Suite Completa',
      description: 'Desde reservas hasta BI. Torneos de 1,000+ jugadores, ligas de 200+ usuarios.',
      highlight: false
    },
    {
      icon: '🔬',
      title: 'Computer Vision',
      description: 'TensorFlow + MediaPipe para análisis profesional. Vendemos ciencia, no especulación.',
      highlight: false
    },
    {
      icon: '🚀',
      title: 'Modular y Escalable',
      description: 'Activa solo lo que necesitas. Crece con tu club sin compromisos.',
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Características que marcan la diferencia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnología avanzada diseñada para clubes y jugadores exigentes
          </p>
        </div>

        {/* Two Column Feature Layout */}
        <div className="space-y-24">
          {/* Feature 1 - AI Analysis */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-display">
                Análisis con IA de última generación
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nuestro Coach IA analiza más de 15 tipos de golpes con precisión biomecánica. 
                Detecta patrones que los coaches humanos no pueden ver y te da recomendaciones 
                personalizadas para mejorar tu técnica.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Análisis biomecánico en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Padel IQ preciso basado en ciencia</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Planes de entrenamiento personalizados</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-display">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Golpes analizados con IA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Zero Fees */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">💰</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-display">0€</div>
                  <div className="text-gray-600 dark:text-gray-400">Comisiones por reserva</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-display">
                Gestión de clubes sin comisiones
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Mientras otros cobran hasta 250€/mes + comisiones por transacción, nosotros 
                ofrecemos el módulo de reservas completamente gratis. Activa solo los módulos 
                que necesites y paga un precio justo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Sistema de reservas 100% gratuito</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Módulos opcionales a precio justo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Sin contratos ni permanencia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Complete Suite */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-display">
                Suite completa para profesionales
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Desde torneos de 1000+ jugadores hasta Business Intelligence avanzado. 
                Todo lo que necesitas para gestionar tu club o mejorar tu juego en una 
                sola plataforma integrada.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white font-display">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jugadores en torneos</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white font-display">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Usuarios en ligas</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white font-display">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Analytics en tiempo real</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white font-display">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Datos precisos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-display">Business Intelligence</div>
                  <div className="text-gray-600 dark:text-gray-400">Decisiones basadas en datos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}