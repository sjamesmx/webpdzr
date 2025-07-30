import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient background matching crypto aesthetic */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#E3FD72] rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[#E3FD72] rounded-full filter blur-[128px] opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Minimal floating badge */}
          <div className="inline-block mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/10 backdrop-blur-md rounded-full border border-[#E3FD72]/20">
              <div className="w-2 h-2 bg-[#E3FD72] rounded-full animate-pulse"></div>
              <span className="text-[#E3FD72] text-sm font-medium">Beta Exclusiva • 4 Clubes</span>
            </div>
          </div>

          {/* Bold heading with crypto-style typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter">
            El futuro del
            <span className="block text-[#E3FD72] relative">
              padel
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E3FD72] to-transparent"></div>
            </span>
          </h1>

          {/* Minimal subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light">
            Computer Vision + IA para revolucionar tu juego
          </p>

          {/* Two-column CTA matching crypto design */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {/* Clubs Card */}
            <div className="group">
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E3FD72] rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">🏢</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Para Clubes</h3>
                  <p className="text-gray-400 mb-6 font-light">
                    Digitaliza tu club gratis. Sin comisiones.
                  </p>
                  <Button variant="primary" size="lg" className="w-full font-semibold">
                    Empezar Ahora
                  </Button>
                </div>
              </div>
            </div>

            {/* Players Card */}
            <div className="group">
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E3FD72] rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">🎾</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Para Jugadores</h3>
                  <p className="text-gray-400 mb-6 font-light">
                    Análisis con IA. Mejora cada golpe.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="lg" className="flex-1">
                      iOS
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Android
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto-style stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-[#E3FD72] mb-2">0€</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Comisiones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#E3FD72] mb-2">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Golpes IA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#E3FD72] mb-2">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Analytics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#E3FD72] mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Precisión</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}