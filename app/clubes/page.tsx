'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';

export default function ClubesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              
              {/* Rotating Cube */}
              <Box args={[3, 3, 3]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe />
              </Box>
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              <fog attach="fog" args={['#000000', 10, 30]} />
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
                  Para Clubes de Padel
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-display">
                El software que tu club
                <span className="block text-[#E3FD72]">
                  siempre soñó
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Gestión integral, sin comisiones, con IA. Digitaliza tu club en minutos, 
                no en meses. Sin costos ocultos, sin sorpresas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display"
                >
                  Empezar Prueba Gratuita
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#E3FD72] text-[#E3FD72] rounded-lg font-bold text-lg"
                >
                  Ver Demo en Vivo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
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
                Todo lo que necesitas, nada que no
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Módulos que se adaptan a tu club, no al revés
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '📅',
                  title: 'Reservas Sin Comisiones',
                  description: 'Sistema completo de reservas online. 100% gratuito, para siempre.',
                  features: ['Calendario inteligente', 'App móvil incluida', 'Pagos directos', 'Sin intermediarios']
                },
                {
                  icon: '🏆',
                  title: 'Torneos y Ligas',
                  description: 'Gestiona competiciones de cualquier tamaño con facilidad.',
                  features: ['Hasta 1000+ jugadores', 'Brackets automáticos', 'Rankings en vivo', 'Comunicación masiva']
                },
                {
                  icon: '💰',
                  title: 'Gestión Financiera',
                  description: 'Control total de ingresos y gastos. Facturación automática.',
                  features: ['Dashboard financiero', 'Reportes detallados', 'Integración contable', 'Análisis predictivo']
                },
                {
                  icon: '📊',
                  title: 'Business Intelligence',
                  description: 'Decisiones basadas en datos reales, no en intuiciones.',
                  features: ['Ocupación optimizada', 'Análisis de clientes', 'Predicciones IA', 'KPIs en tiempo real']
                },
                {
                  icon: '👥',
                  title: 'Gestión de Socios',
                  description: 'CRM completo para mantener a tus socios felices.',
                  features: ['Perfiles detallados', 'Comunicación segmentada', 'Programa de lealtad', 'Encuestas automáticas']
                },
                {
                  icon: '🔧',
                  title: 'Mantenimiento',
                  description: 'Controla el estado de tus instalaciones proactivamente.',
                  features: ['Calendario preventivo', 'Gestión de proveedores', 'Historial completo', 'Alertas automáticas']
                }
              ].map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E3FD72]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
                  
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-[#E3FD72]/50 transition-all duration-500 h-full">
                    <div className="text-5xl mb-6">{module.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {module.description}
                    </p>
                    <ul className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#E3FD72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#E3FD72]" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '0€', label: 'Comisiones mensuales' },
                { number: '24/7', label: 'Soporte disponible' },
                { number: '100%', label: 'Datos seguros' },
                { number: '∞', label: 'Actualizaciones gratis' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-[#E3FD72] mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E3FD72]/10 via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              ¿Listo para revolucionar tu club?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Únete a los clubes pioneros que ya están en el futuro
            </p>
            
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl border border-[#E3FD72]/30 p-8 mb-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Beta Exclusiva Puebla
              </h3>
              <p className="text-gray-400 mb-6">
                Solo 4 lugares disponibles. Precio fundador de por vida.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display w-full sm:w-auto"
              >
                Solicitar Acceso Beta
              </motion.button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}