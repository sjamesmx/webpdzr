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
    <section id="pricing" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
            Precios transparentes, sin sorpresas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empieza gratis y paga solo por lo que necesitas. Sin letra pequeña.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('jugadores')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'jugadores'
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Para Jugadores
            </button>
            <button
              onClick={() => setActiveTab('clubes')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'clubes'
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Para Clubes
            </button>
          </div>
        </div>

        {/* Pricing Content */}
        {activeTab === 'jugadores' ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {playerPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white'
                    : 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                
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
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlight 
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Beta Badge for Clubs */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Beta exclusiva: Solo 4 lugares disponibles en Puebla</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {clubModules.map((module, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    module.price === 'GRATIS'
                      ? 'bg-green-100 dark:bg-green-900/30 text-gray-900 dark:text-white border-2 border-green-500'
                      : 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800'
                  }`}
                >
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
              <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                Digitaliza tu club gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}