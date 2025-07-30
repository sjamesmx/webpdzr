'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';

export default function ClubesLanding() {
  // Force deployment update
  const [formData, setFormData] = useState({
    clubName: '',
    ownerName: '',
    email: '',
    phone: '',
    courts: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section with Three.js */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E3FD72" />
              
              {/* Multiple rotating cubes */}
              <Box args={[2, 2, 2]} position={[3, 2, 0]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe />
              </Box>
              
              <Box args={[1.5, 1.5, 1.5]} position={[-3, -1, 0]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe />
              </Box>

              <Box args={[3, 3, 3]} position={[0, 0, -5]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.3} transparent />
              </Box>
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} enableRotate={false} />
              <fog attach="fog" args={['#000000', 8, 30]} />
            </Canvas>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 z-5 opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(227, 253, 114, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(227, 253, 114, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-8">
                <div className="w-2 h-2 bg-[#E3FD72] rounded-full animate-pulse" />
                <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">
                  Software para Clubes
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-display leading-tight">
                El software que tu club
                <span className="block text-[#E3FD72] mt-2">
                  siempre soñó
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Gestión integral, sin comisiones, con IA. Digitaliza tu club en minutos, 
                no en meses. Sin costos ocultos, sin sorpresas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display hover:bg-[#d5ed62] transition-colors"
                >
                  Empezar Prueba Gratuita
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#E3FD72] text-[#E3FD72] hover:bg-[#E3FD72] hover:text-black transition-all font-bold text-lg rounded-lg"
                >
                  Ver Demo en Vivo
                </motion.button>
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {[
                  { number: '$0', label: 'Comisiones mensuales' },
                  { number: '24/7', label: 'Soporte disponible' },
                  { number: '100%', label: 'Datos seguros' },
                  { number: '∞', label: 'Actualizaciones gratis' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#E3FD72] mb-2 font-display">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 uppercase tracking-wider text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <style jsx>{`
            @keyframes grid-move {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
          `}</style>
        </section>

        {/* Landing Page - ATTENTION */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E3FD72]/20 via-black to-black" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#E3FD72]/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#E3FD72]/5 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Hook */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-red-400 font-display">
                    ALERTA: ¿Tu club está perdiendo $50,000+ al año?
                  </h2>
                </div>
                <p className="text-gray-300 text-lg">
                  Las plataformas como Playtomic te roban el 20% de cada reserva. 
                  Un club promedio pierde <span className="text-red-400 font-bold">$4,200 mensuales</span> solo en comisiones.
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                ELIMINA las comisiones
                <span className="block text-[#E3FD72]">
                  PARA SIEMPRE
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Oferta de lanzamiento: obtén el módulo de reservas completamente GRATIS para siempre. 
                <span className="text-[#E3FD72] font-bold">Solo válido hasta el 15 de agosto.</span>
              </p>

              <div className="bg-[#E3FD72]/10 border border-[#E3FD72]/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#E3FD72] font-display">GARANTÍA 30 DÍAS:</h3>
                </div>
                <p className="text-gray-300">
                  Si no aumentas tu ocupación 30% en el primer mes, te devolvemos tu dinero + $10,000 por las molestias.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <button 
                  onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-xl font-display hover:bg-[#d5ed62] transition-colors"
                >
                  QUIERO MI DEMO GRATIS AHORA
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Urgency Timer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:text-center"
            >
              <div className="bg-black/80 backdrop-blur-xl border border-[#E3FD72]/30 rounded-3xl p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <svg className="w-8 h-8 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1m0 0V6a2 2 0 112 0v1m0 0V9a2 2 0 00-2 2v5a2 2 0 002 2v1M7 4V2a2 2 0 012-2h6a2 2 0 012 2v2" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white font-display">
                    OFERTA DE LANZAMIENTO
                  </h3>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-[#E3FD72] font-display mb-2">GRATIS</div>
                  <p className="text-gray-300 text-lg">Módulo de Reservas</p>
                  <p className="text-gray-400">Para siempre</p>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E3FD72] font-display">15</div>
                    <div className="text-gray-400 text-sm">DÍAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E3FD72] font-display">08</div>
                    <div className="text-gray-400 text-sm">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E3FD72] font-display">42</div>
                    <div className="text-gray-400 text-sm">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E3FD72] font-display">16</div>
                    <div className="text-gray-400 text-sm">SEG</div>
                  </div>
                </div>

                <div className="bg-[#E3FD72]/10 border border-[#E3FD72]/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Valor normal:</span>
                    <span className="text-2xl text-gray-400 line-through">$2,997/mes</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white font-bold">Tu precio:</span>
                    <span className="text-3xl font-bold text-[#E3FD72]">$0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Agitation - PROBLEM */}
        <section className="py-32 px-6 bg-red-950/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-display">
                ¿Te suena familiar?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Comisiones que te matan',
                    pain: 'Playtomic se lleva $4,200 mensuales de TU trabajo. En un año son $50,400 que deberían estar en tu bolsillo.'
                  },
                  {
                    icon: (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Sistema complicado',
                    pain: 'Tus socios se quejan del sistema. Reservar es un dolor de cabeza. Pierdes clientes por fricciones.'
                  },
                  {
                    icon: (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    ),
                    title: 'Sin control real',
                    pain: 'No sabes cuándo está lleno tu club. No puedes predecir ingresos. Tomas decisiones a ciegas.'
                  }
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-red-900/30 border border-red-500/30 rounded-3xl p-8"
                  >
                    <div className="text-red-400 mb-4 flex justify-center">{problem.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 font-display">
                      {problem.title}
                    </h3>
                    <p className="text-gray-300">
                      {problem.pain}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-red-500/20 border border-red-500/50 rounded-3xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-red-400 mb-4 font-display">
                  LA REALIDAD BRUTAL:
                </h3>
                <p className="text-xl text-gray-300">
                  Mientras pagas comisiones, tu competencia podría estar usando Padelyzer. 
                  Van a tener precios más bajos, mejor servicio y más ganancias. 
                  <span className="text-red-400 font-bold block mt-4">
                    ¿Vas a quedarte atrás o vas a liderar?
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution - SOLUTION */}
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
                La solución que cambiará tu club para siempre
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Padelyzer no es otro software más. Es tu arma secreta para dominar el mercado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: '$0 Comisiones',
                  benefit: 'Para siempre',
                  description: 'Tu club, tus ingresos. Sin intermediarios.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'App de Padelyzer',
                  benefit: 'Con tu marca',
                  description: 'iOS y Android. Tus colores, tu logo, powered by Padelyzer.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: '+30% Ocupación',
                  benefit: 'Garantizado',
                  description: 'O te devolvemos tu dinero + $10,000.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'IA Predictiva',
                  benefit: 'Datos reales',
                  description: 'Saber cuándo estará lleno tu club.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-[#E3FD72]/30 rounded-3xl p-8 text-center hover:border-[#E3FD72]/50 transition-all"
                >
                  <div className="text-[#E3FD72] mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    {feature.title}
                  </h3>
                  <div className="text-[#E3FD72] font-bold mb-3">
                    {feature.benefit}
                  </div>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - CREDIBILITY */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-12 font-display">
                Lo que dicen los pioneros
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 border border-[#E3FD72]/30 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#E3FD72]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Roberto Martínez</h4>
                      <p className="text-gray-400">Dueño, Club Hacienda</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-lg">
                    "En 2 meses recuperé lo que Playtomic me robó en un año. 
                    Mis socios están felices y yo duermo tranquilo. 
                    <span className="text-[#E3FD72] font-bold">$67,000 extras en el primer trimestre.</span>"
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-[#E3FD72]/30 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#E3FD72]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Ana García</h4>
                      <p className="text-gray-400">Directora, Padel Elite</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-lg">
                    "La diferencia es brutal. Antes luchaba por llenar canchas, 
                    ahora tengo lista de espera. 
                    <span className="text-[#E3FD72] font-bold">43% más ocupación en 6 semanas.</span>"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Urgency & Form - CALL TO ACTION */}
        <section id="demo-form" className="py-32 px-6 bg-gradient-to-br from-[#E3FD72]/20 via-black to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                  ÚLTIMAS 72 HORAS - MÓDULO GRATIS
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Después del 15 de agosto, el módulo de reservas costará $2,997/mes. 
                <span className="text-red-400 font-bold">En esta fase beta lo obtienes GRATIS para siempre.</span>
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Value Stack */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 font-display">
                  Tu paquete fundador incluye:
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    { item: 'Módulo de Reservas SIN comisiones', value: '$35,964/año' },
                    { item: 'App móvil con tu marca', value: '$45,000' },
                    { item: 'Instalación y migración completa', value: '$15,000' },
                    { item: 'Soporte 24/7 durante beta', value: '$24,000' },
                    { item: 'Actualizaciones gratuitas', value: '$18,000' },
                    { item: 'Garantía 30 días + $10k', value: 'Sin precio' }
                  ].map((benefit, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-900/50 rounded-lg p-4">
                      <span className="text-gray-300">{benefit.item}</span>
                      <span className="text-[#E3FD72] font-bold">{benefit.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E3FD72]/10 border border-[#E3FD72]/30 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl text-gray-300">Valor total:</span>
                    <span className="text-2xl text-gray-400 line-through">$137,964</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">Tu precio en beta:</span>
                    <span className="text-4xl font-bold text-[#E3FD72]">GRATIS</span>
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-3">
                    Solo pagas módulos adicionales si los necesitas
                  </p>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/80 backdrop-blur-xl border border-[#E3FD72]/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center font-display">
                    🎯 RESERVA TU DEMO GRATIS
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="clubName"
                      placeholder="Nombre de tu club"
                      value={formData.clubName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#E3FD72] focus:outline-none"
                      required
                    />
                    
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="Tu nombre completo"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#E3FD72] focus:outline-none"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#E3FD72] focus:outline-none"
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#E3FD72] focus:outline-none"
                      required
                    />

                    <select
                      name="courts"
                      value={formData.courts}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-[#E3FD72] focus:outline-none"
                      required
                    >
                      <option value="">¿Cuántas canchas tienes?</option>
                      <option value="2-4">2-4 canchas</option>
                      <option value="5-8">5-8 canchas</option>
                      <option value="9-12">9-12 canchas</option>
                      <option value="12+">Más de 12 canchas</option>
                    </select>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-lg font-display hover:bg-[#d5ed62] transition-colors"
                    >
                      AGENDAR MI DEMO AHORA
                    </motion.button>
                  </form>

                  <div className="text-center text-gray-400 text-sm mt-4 space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Demo en vivo de 15 minutos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sin compromiso</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Respuesta inmediata</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                La oferta termina en 15 días. ¿Cuál eliges?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-900/30 border border-red-500/50 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <h3 className="text-xl font-bold text-red-400">Esperar</h3>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Pagar $2,997/mes por reservas después</li>
                    <li>• Seguir perdiendo en comisiones</li>
                    <li>• Ver la competencia adelantarse</li>
                    <li>• Perder la oportunidad GRATIS</li>
                  </ul>
                </div>

                <div className="bg-[#E3FD72]/10 border border-[#E3FD72]/50 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl font-bold text-[#E3FD72]">Aprovechar ahora</h3>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Módulo de reservas GRATIS para siempre</li>
                    <li>• Eliminar comisiones inmediatamente</li>
                    <li>• Ser pionero en tu mercado</li>
                    <li>• Ahorrar $35,964 anuales</li>
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-[#E3FD72] text-black font-bold rounded-lg text-2xl font-display hover:bg-[#d5ed62] transition-colors"
              >
                QUIERO MI MÓDULO GRATIS
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}