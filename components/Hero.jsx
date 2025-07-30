import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-display">
          Vendemos ciencia,
          <br />
          <span className="text-[#E3FD72]">
            no especulación
          </span>
        </h1>

        {/* Philosophy */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto font-normal">
          En Padelyzer creemos que el padel merece tecnología real, no promesas vacías. 
          Por eso combinamos Computer Vision, TensorFlow y MediaPipe para crear el primer 
          Padel IQ científico del mundo. Sin mentiras sobre niveles, sin comisiones ocultas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="px-8 py-3 bg-[#E3FD72] text-black rounded-lg hover:bg-[#d5ed62] transition-colors font-medium font-display">
            Unirse a la Beta
          </button>
          <button className="px-8 py-3 border border-[#E3FD72] text-[#E3FD72] rounded-lg hover:bg-[#E3FD72] hover:text-black transition-colors font-medium">
            Ver filosofía completa
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">🎾</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 font-display">
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