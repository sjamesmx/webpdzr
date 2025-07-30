import React, { useState } from 'react';
import Button from './Button';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('jugadores');

  const playerPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfecto para jugadores sociales',
      features: [
        'Reserva de canchas',
        'Buscar jugadores cercanos',
        'Partidos sociales',
        'Historial de partidos',
        'Chat con jugadores'
      ],
      cta: 'Descargar App',
      highlight: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/mes',
      description: 'Para jugadores que quieren mejorar',
      features: [
        'Todo lo de Free +',
        'Análisis de 3 videos/mes',
        'Padel IQ básico',
        'Métricas simples',
        'Tips de mejora',
        'Comparación con otros jugadores'
      ],
      cta: 'Empezar Prueba',
      highlight: true
    },
    {
      name: 'Star',
      price: '$19.99',
      period: '/mes',
      description: 'Coach IA completo en tu bolsillo',
      features: [
        'Todo lo de Pro +',
        'Videos ilimitados',
        'Análisis biomecánico completo',
        '+15 golpes analizados',
        'Plan de entrenamiento personalizado',
        'Análisis táctico avanzado',
        'Soporte prioritario'
      ],
      cta: 'Ser Estrella',
      highlight: false
    }
  ];

  const clubModules = [
    {
      name: 'Reservas',
      price: 'GRATIS',
      description: 'Sistema completo de reservas',
      features: [
        'Reservas online ilimitadas',
        'Sin comisiones por transacción',
        'App móvil para jugadores',
        'Panel de administración',
        'Reportes básicos'
      ]
    },
    {
      name: 'Competición',
      price: '$49',
      period: '/mes',
      description: 'Torneos, ligas y clases',
      features: [
        'Torneos hasta 1,000 jugadores',
        'Ligas sociales 200+ usuarios',
        'Gestión de clases',
        'Rankings automáticos',
        'Comunicación masiva'
      ]
    },
    {
      name: 'Finanzas',
      price: '$79',
      period: '/mes',
      description: 'Control financiero total',
      features: [
        'Ingresos y egresos',
        'Facturación automática',
        'Control de caja',
        'Reportes financieros',
        'Exportación contable'
      ]
    },
    {
      name: 'Business Intelligence',
      price: '$99',
      period: '/mes',
      description: 'Decisiones basadas en datos',
      features: [
        'Dashboard ejecutivo',
        'Predicción de ocupación',
        'Análisis de rentabilidad',
        'Segmentación de clientes',
        'Reportes personalizados'
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E3FD72]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E3FD72]/10 rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-6">
            <span className="text-[#E3FD72] text-sm font-medium">Precios justos</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tight">
            Sin letra pequeña.
            <span className="block text-[#E3FD72]">Sin sorpresas.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Empieza gratis, paga solo por lo que necesitas.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-black rounded-full p-1.5 inline-flex shadow-lg border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setActiveTab('jugadores')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'jugadores'
                  ? 'bg-gradient-to-r from-[#E3FD72] to-[#d5ed62] text-black shadow-lg scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              🎾 Para Jugadores
            </button>
            <button
              onClick={() => setActiveTab('clubes')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clubes'
                  ? 'bg-gradient-to-r from-[#E3FD72] to-[#d5ed62] text-black shadow-lg scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              🏢 Para Clubes
            </button>
          </div>
        </div>

        {/* Pricing Content */}
        {activeTab === 'jugadores' ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {playerPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-[#E3FD72] to-[#d5ed62] text-black shadow-2xl'
                    : 'bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}
                
                {/* Decorative gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.highlight ? 'bg-gradient-to-br from-white/20 to-transparent' : 'bg-gradient-to-br from-[#E3FD72]/10 to-transparent'
                }`} />
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg">{plan.period}</span>}
                </div>
                <p className={`mb-6 ${plan.highlight ? 'text-black/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.highlight ? 'text-black/90' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.highlight ? 'dark' : 'primary'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Beta Badge for Clubs */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E3FD72]/20 to-[#E3FD72]/10 border border-[#E3FD72]/30 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold text-black dark:text-white">
                  Beta exclusiva: Solo 4 lugares disponibles en Puebla
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {clubModules.map((module, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                    module.price === 'GRATIS'
                      ? 'bg-gradient-to-br from-[#E3FD72] to-[#d5ed62] text-black shadow-lg'
                      : 'bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {/* Decorative gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    module.price === 'GRATIS' ? 'bg-gradient-to-br from-white/20 to-transparent' : 'bg-gradient-to-br from-[#E3FD72]/10 to-transparent'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold">{module.price}</span>
                    {module.period && <span className="text-sm">{module.period}</span>}
                  </div>
                  <p className={`text-sm mb-4 ${
                    module.price === 'GRATIS' ? 'text-black/80' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {module.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={module.price === 'GRATIS' ? 'text-black/90' : ''}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Combina los módulos que necesites. Sin contratos, cancela cuando quieras.
              </p>
              <Button variant="primary" size="lg">
                Digitaliza tu club gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}