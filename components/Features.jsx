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
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(227, 253, 114, 0.1) 35px, rgba(227, 253, 114, 0.1) 70px)`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-6">
            <span className="text-[#E3FD72] text-sm font-medium">¿Por qué elegirnos?</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tight">
            La diferencia está en
            <span className="block text-[#E3FD72]">los detalles</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Tecnología de vanguardia, transparencia total y un modelo justo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4">
              La comparación habla por
              <span className="text-[#E3FD72]"> sí sola</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No más fees ocultos. No más promesas vacías.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left py-6 px-8 font-bold text-gray-900 dark:text-white">Característica</th>
                    <th className="text-center py-6 px-8">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#E3FD72] rounded-full animate-pulse"></div>
                        <span className="text-[#E3FD72] font-black text-xl">Padelyzer</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-8 text-gray-500 dark:text-gray-500 font-medium">Playtomic</th>
                    <th className="text-center py-6 px-8 text-gray-500 dark:text-gray-500 font-medium">Otros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Módulo de reservas</td>
                    <td className="text-center py-6 px-8">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-bold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        100% Gratis
                      </span>
                    </td>
                    <td className="text-center py-6 px-8 text-gray-500">€250/mes + fees</td>
                    <td className="text-center py-6 px-8 text-gray-500">€150-300/mes</td>
                  </tr>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Análisis con IA</td>
                    <td className="text-center py-6 px-8">
                      <div className="inline-flex w-10 h-10 bg-[#E3FD72] rounded-full items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Gestión financiera</td>
                    <td className="text-center py-6 px-8">
                      <div className="inline-flex w-10 h-10 bg-[#E3FD72] rounded-full items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="text-center py-6 px-8 text-gray-500">Limitado</td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Business Intelligence</td>
                    <td className="text-center py-6 px-8">
                      <div className="inline-flex w-10 h-10 bg-[#E3FD72] rounded-full items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Coach IA personal</td>
                    <td className="text-center py-6 px-8">
                      <div className="inline-flex w-10 h-10 bg-[#E3FD72] rounded-full items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                    <td className="text-center py-6 px-8">
                      <span className="text-gray-400">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">Verificación de nivel</td>
                    <td className="text-center py-6 px-8">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/20 text-[#E3FD72] dark:text-[#E3FD72] rounded-full font-bold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                        Con IA
                      </span>
                    </td>
                    <td className="text-center py-6 px-8 text-gray-500">Autodeclarado</td>
                    <td className="text-center py-6 px-8 text-gray-500">Autodeclarado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}