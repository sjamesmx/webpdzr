import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
          La plataforma definitiva para
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            revolucionar el padel
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          Padelyzer combina IA avanzada, computer vision y analítica para transformar cómo 
          juegas y gestionas el padel. Sin comisiones, sin trucos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
            Descargar Padelyzer
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium">
            Ver demo
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">🎾</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Análisis Inteligente de Padel
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Computer Vision + IA para mejorar tu juego
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}