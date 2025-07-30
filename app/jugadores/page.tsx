'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function JugadoresPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E3FD72" />
              
              {/* Animated Sphere */}
              <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                  color="#E3FD72"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  roughness={0.1}
                  metalness={0.8}
                />
              </Sphere>
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              <fog attach="fog" args={['#000000', 5, 15]} />
            </Canvas>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-8">
                <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">
                  Para Jugadores Pro
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-display">
                Tu coach IA personal
                <span className="block text-[#E3FD72]">
                  en cada golpe
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Análisis biomecánico profesional que antes costaba miles. 
                Ahora en tu bolsillo, en cada partido.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display"
                >
                  Descargar para iOS
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display"
                >
                  Descargar para Android
                </motion.button>
              </div>

              <p className="text-gray-500 text-sm">
                Gratis para siempre • Sin anuncios • Sin trucos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Tecnología que te hace invencible
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                15+ tipos de golpes analizados con precisión milimétrica
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {[
                {
                  title: 'Análisis Biomecánico Completo',
                  description: 'MediaPipe + TensorFlow analizan cada movimiento en tiempo real.',
                  features: [
                    'Postura y equilibrio',
                    'Velocidad de raqueta',
                    'Ángulo de impacto',
                    'Eficiencia del movimiento'
                  ],
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: 'Padel IQ Científico',
                  description: 'Tu nivel real basado en datos, no en opiniones.',
                  features: [
                    'Escala objetiva 0-100',
                    'Comparación con pros',
                    'Progreso medible',
                    'Certificación verificable'
                  ],
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: 'Coach IA Personalizado',
                  description: 'Recomendaciones específicas para tu estilo de juego.',
                  features: [
                    'Ejercicios personalizados',
                    'Correcciones en tiempo real',
                    'Plan de mejora adaptativo',
                    'Videos comparativos'
                  ],
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Estadísticas Profundas',
                  description: 'Métricas que ningún humano puede calcular.',
                  features: [
                    'Heatmaps de precisión',
                    'Análisis de consistencia',
                    'Patrones de juego',
                    'Predicción de lesiones'
                  ],
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-[#E3FD72]/50 transition-all duration-500">
                    <div className="text-[#E3FD72] mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#E3FD72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#E3FD72]" />
                          </div>
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Golpes Analizados */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-display">
                Cada golpe, una ciencia
              </h2>
              <p className="text-xl text-gray-400">
                Análisis profesional de todos los golpes del padel
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Derecha', 'Revés', 'Volea', 'Bandeja',
                'Víbora', 'Smash', 'Globo', 'Dejada',
                'Pared', 'Contrapared', 'Saque', 'Resto',
                'Bajada', 'Por 3', 'Por 4', 'Gancho'
              ].map((golpe, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 text-center hover:border-[#E3FD72]/50 transition-all"
                >
                  <span className="text-white font-medium">{golpe}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 px-6 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                Invierte en tu evolución
              </h2>
              <p className="text-xl text-gray-400">
                Planes diseñados para cada tipo de jugador
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  description: 'Para jugadores sociales',
                  features: [
                    'Reserva de canchas',
                    'Buscar jugadores',
                    'Historial básico',
                    'Chat con jugadores'
                  ],
                  cta: 'Empezar Gratis',
                  highlight: false
                },
                {
                  name: 'Pro',
                  price: '$9.99',
                  period: '/mes',
                  description: 'Para jugadores serios',
                  features: [
                    'Todo lo de Free +',
                    '3 análisis de video/mes',
                    'Padel IQ completo',
                    'Plan de entrenamiento',
                    'Estadísticas avanzadas'
                  ],
                  cta: 'Volverse Pro',
                  highlight: true
                },
                {
                  name: 'Elite',
                  price: '$19.99',
                  period: '/mes',
                  description: 'Para futuros campeones',
                  features: [
                    'Todo lo de Pro +',
                    'Análisis ilimitados',
                    'Coach IA 24/7',
                    'Análisis de rivales',
                    'Soporte prioritario'
                  ],
                  cta: 'Ser Elite',
                  highlight: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.highlight ? 'scale-105' : ''}`}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E3FD72] to-[#d5ed62] rounded-3xl blur-lg opacity-50" />
                  )}
                  
                  <div className={`relative p-8 rounded-3xl ${
                    plan.highlight 
                      ? 'bg-black border-2 border-[#E3FD72]' 
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#E3FD72] font-display">{plan.price}</span>
                      {plan.period && <span className="text-gray-400">{plan.period}</span>}
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#E3FD72] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-bold transition-all ${
                        plan.highlight 
                          ? 'bg-[#E3FD72] text-black hover:bg-[#d5ed62]' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-display">
              ¿Listo para conocer tu verdadero nivel?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Únete a miles de jugadores que ya están mejorando con ciencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display"
              >
                Descargar App Gratis
              </motion.button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}