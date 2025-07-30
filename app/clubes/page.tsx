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
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Reservas Sin Comisiones',
                  description: 'Sistema completo de reservas online. 100% gratuito, para siempre.',
                  features: ['Calendario inteligente', 'App móvil incluida', 'Pagos directos', 'Sin intermediarios']
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4a6 6 0 0012 0V3M3 7h2m14 0h2m-10 4v10m-4 0h8" />
                    </svg>
                  ),
                  title: 'Torneos y Ligas',
                  description: 'Gestiona competiciones de cualquier tamaño con facilidad.',
                  features: ['Hasta 1000+ jugadores', 'Brackets automáticos', 'Rankings en vivo', 'Comunicación masiva']
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Gestión Financiera',
                  description: 'Control total de ingresos y gastos. Facturación automática.',
                  features: ['Dashboard financiero', 'Reportes detallados', 'Integración contable', 'Análisis predictivo']
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Business Intelligence',
                  description: 'Decisiones basadas en datos reales, no en intuiciones.',
                  features: ['Ocupación optimizada', 'Análisis de clientes', 'Predicciones IA', 'KPIs en tiempo real']
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: 'Gestión de Socios',
                  description: 'CRM completo para mantener a tus socios felices.',
                  features: ['Perfiles detallados', 'Comunicación segmentada', 'Programa de lealtad', 'Encuestas automáticas']
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
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
                    <div className="text-[#E3FD72] mb-6">{module.icon}</div>
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

        {/* StoryBrand Section - Club Transformation */}
        <section className="py-32 px-6 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                De club vacío a potencia regional
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* El Enemigo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-3xl blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8">
                  <div className="text-red-400 mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    El Enemigo de Tu Éxito
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Las plataformas de reservas son parásitos. Te cobran por TU trabajo, complican a TUS socios, 
                    y te hacen dependiente. Por eso el <span className="text-red-400 font-bold">70% de clubes apenas sobrevive</span>.
                  </p>
                </div>
              </motion.div>

              {/* Tu Club Transformado */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E3FD72]/20 to-transparent rounded-3xl blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-[#E3FD72]/30 rounded-3xl p-8">
                  <div className="text-[#E3FD72] mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    Tu Club Transformado
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Imagina tu club lleno cada noche. Socios felices reservando sin fricciones. 
                    Torneos de 1000+ jugadores funcionando solos. Decisiones basadas en datos reales. 
                    <span className="text-[#E3FD72] font-bold block mt-2">Y todo ese dinero de comisiones, en tu bolsillo.</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-black/50 backdrop-blur-xl rounded-3xl border border-[#E3FD72]/30 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Solo 4 clubes serán pioneros en Puebla
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Precio fundador hasta 15/08/25. Agenda tu demo hoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display"
                >
                  Agendar Demo Ahora
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#E3FD72] text-[#E3FD72] hover:bg-[#E3FD72] hover:text-black transition-all font-bold text-lg rounded-lg"
                >
                  Ver Casos de Éxito
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '$0', label: 'Comisiones mensuales' },
                { number: '24/7', label: 'Soporte disponible' },
                { number: '100%', label: 'Datos seguros' },
                { number: '∞', label: 'Actualizaciones gratis' },
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
              <div className="text-[#E3FD72] mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
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