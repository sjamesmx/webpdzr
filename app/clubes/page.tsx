'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';

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
          {/* 3D Padel Courts Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E3FD72" />
              
              {/* Padel Court 1 - Main */}
              <Box args={[6, 0.1, 4]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe />
              </Box>
              
              {/* Net */}
              <Box args={[0.1, 1, 4]} position={[0, 0.5, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.8} transparent />
              </Box>
              
              {/* Side walls */}
              <Box args={[0.1, 2, 4]} position={[3, 1, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.3} transparent />
              </Box>
              <Box args={[0.1, 2, 4]} position={[-3, 1, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.3} transparent />
              </Box>
              
              {/* Back walls */}
              <Box args={[6, 2, 0.1]} position={[0, 1, 2]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.2} transparent />
              </Box>
              <Box args={[6, 2, 0.1]} position={[0, 1, -2]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.2} transparent />
              </Box>
              
              {/* Padel Court 2 - Background */}
              <Box args={[4, 0.1, 3]} position={[8, 0, -3]} rotation={[0, 0.3, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.4} transparent />
              </Box>
              
              {/* Padel Court 3 - Background */}
              <Box args={[4, 0.1, 3]} position={[-8, 0, -2]} rotation={[0, -0.3, 0]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.4} transparent />
              </Box>
              
              {/* Floating elements */}
              <Sphere args={[0.3]} position={[4, 3, 1]}>
                <meshStandardMaterial color="#E3FD72" wireframe />
              </Sphere>
              <Sphere args={[0.2]} position={[-4, 2, -1]}>
                <meshStandardMaterial color="#E3FD72" wireframe opacity={0.6} transparent />
              </Sphere>
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} enableRotate={false} />
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
                Tu club está perdiendo dinero, tiempo
                <span className="block text-red-400 mt-2">
                  y oportunidades
                </span>
                <span className="block text-gray-400 text-2xl md:text-3xl mt-4 font-normal">
                  porque no tienes el control total de tus operaciones
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                El software que trabaja para ti, simple, poderoso y automático. 
                Sin costos ocultos, sin sorpresas.
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

        {/* Alerta y Elimina Comisiones - Redesigned */}
        <section className="relative py-24 px-6 bg-gradient-to-r from-red-900/20 via-black to-[#E3FD72]/10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#E3FD72]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/20 rounded-full animate-ping" style={{animationDuration: '15s'}} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Alert Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-full mb-8">
                <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse" />
                <span className="text-red-400 font-bold text-lg uppercase tracking-wider">
                  🚨 ALERTA CRÍTICA PARA DUEÑOS DE CLUBES
                </span>
                <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display leading-tight">
                ¿Tu club está perdiendo
                <span className="block text-red-400 mt-2">
                  $50,000+ al año?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Hay plataformas que quieren tomar <span className="text-red-400 font-bold">hasta el 20%</span> de cada reserva de tu club. 
                Podrías perder hasta <span className="text-red-400 font-bold text-2xl">$4,200</span> sólo en comisiones.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Side - Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Pain Point */}
                <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/50 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-400 font-display">El Problema Real</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Comisiones anuales:</span>
                      <span className="text-red-400 font-bold text-xl">-$50,400</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Clientes perdidos por fricción:</span>
                      <span className="text-red-400 font-bold text-xl">-35%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Control sobre tu negocio:</span>
                      <span className="text-red-400 font-bold text-xl">0%</span>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-[#E3FD72]/10 backdrop-blur-sm border border-[#E3FD72]/50 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#E3FD72]/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#E3FD72] font-display">La Solución</h3>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 font-display">
                    ELIMINA las comisiones
                    <span className="block text-[#E3FD72]">PARA SIEMPRE</span>
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Oferta de lanzamiento: obtén el módulo de reservas completamente GRATIS para siempre. 
                    <span className="text-[#E3FD72] font-bold">Solo válido hasta el 15 de agosto.</span>
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-4 bg-[#E3FD72] text-black font-bold rounded-lg text-xl font-display hover:bg-[#d5ed62] transition-colors"
                  >
                    QUIERO MI DEMO GRATIS AHORA
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Side - Offer Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#E3FD72] to-[#d5ed62] rounded-3xl blur-lg opacity-30" />
                  
                  <div className="relative bg-black/90 backdrop-blur-xl border border-[#E3FD72]/50 rounded-3xl p-8">
                    {/* Countdown Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/20 rounded-full mb-4">
                        <svg className="w-5 h-5 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#E3FD72] font-bold text-sm uppercase tracking-wider">Oferta de Lanzamiento</span>
                      </div>
                      
                      <div className="text-6xl font-bold text-[#E3FD72] font-display mb-2">GRATIS</div>
                      <p className="text-gray-300 text-xl mb-2">Módulo de Reservas</p>
                      <p className="text-gray-400">Para siempre • Sin letra pequeña</p>
                    </div>

                    {/* Timer */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                      {[
                        { number: '15', label: 'DÍAS' },
                        { number: '08', label: 'HORAS' },
                        { number: '42', label: 'MIN' },
                        { number: '16', label: 'SEG' },
                      ].map((time, index) => (
                        <div key={index} className="text-center bg-[#E3FD72]/10 border border-[#E3FD72]/30 rounded-lg p-3">
                          <div className="text-2xl font-bold text-[#E3FD72] font-display">{time.number}</div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">{time.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Value Comparison */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300">Valor normal:</span>
                        <span className="text-2xl text-gray-400 line-through">$2,997/mes</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-bold">Tu precio beta:</span>
                        <span className="text-4xl font-bold text-[#E3FD72]">$0</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[#E3FD72] font-bold text-sm">Ahorras $35,964 al año</span>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="bg-[#E3FD72]/10 border border-[#E3FD72]/30 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-[#E3FD72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-lg font-bold text-[#E3FD72] font-display">Garantía 30 Días</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Si no aumentas tu ocupación 30% en el primer mes, te devolvemos tu dinero + $10,000 por las molestias.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Te Suena Familiar - Redesigned */}
        <section className="py-32 px-6 bg-gradient-to-br from-red-950/30 via-black to-gray-950 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
            <div className="absolute top-1/2 right-1/4 w-px h-60 bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-full mb-8">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-red-400 font-bold text-lg uppercase tracking-wider">Situaciones que duelen</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                ¿Te suena
                <span className="block text-red-400 mt-2">
                  familiar?
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Si alguna de estas situaciones te ha pasado, no estás solo...
              </p>
            </motion.div>

            {/* Problems Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Comisiones que te matan',
                  pain: 'Ves cómo Playtomic se lleva $4,200 mensuales de TU trabajo.',
                  impact: '$50,400 al año que deberían estar en tu bolsillo',
                  stat: '20% de comisión'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Sistema complicado',
                  pain: 'Tus socios se quejan del sistema. Reservar es un dolor de cabeza.',
                  impact: 'Pierdes clientes por fricciones en la experiencia',
                  stat: '35% abandono'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  ),
                  title: 'Sin control real',
                  pain: 'No sabes cuándo estará lleno tu club. No puedes predecir ingresos.',
                  impact: 'Tomas decisiones importantes completamente a ciegas',
                  stat: '0% visibilidad'
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 h-full hover:border-red-500/50 transition-all duration-500">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                        <div className="text-red-400 group-hover:text-red-300 transition-colors">{problem.icon}</div>
                      </div>
                      <div className="absolute top-0 right-0 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {problem.stat}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-red-100 transition-colors">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                      {problem.pain}
                    </p>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <p className="text-red-300 font-medium text-sm">
                        💸 {problem.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Brutal Reality Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dramatic background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-500/20 rounded-3xl blur-xl" />
              
              <div className="relative bg-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-3xl p-12 max-w-5xl mx-auto text-center">
                {/* Skull emoji or warning icon */}
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-red-400 mb-6 font-display">
                  LA REALIDAD BRUTAL:
                </h3>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                  Mientras tú pagas comisiones y peleas con sistemas obsoletos, 
                  <span className="text-white font-bold"> tu competencia podría estar usando Padelyzer</span>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-black/30 border border-red-500/30 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-400 mb-3">Tu competencia con Padelyzer:</h4>
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>✅ Precios 20% más bajos (sin comisiones)</li>
                      <li>✅ Sistema súper fácil de usar</li>
                      <li>✅ Datos en tiempo real</li>
                      <li>✅ Más ganancias cada mes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 border border-red-500/30 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-400 mb-3">Tú sin Padelyzer:</h4>
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>❌ Pagando comisiones eternas</li>
                      <li>❌ Clientes frustrados</li>
                      <li>❌ Volando a ciegas</li>
                      <li>❌ Perdiendo mercado</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/50 rounded-2xl p-6">
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    ¿Vas a quedarte atrás
                    <span className="block text-red-400 mt-2">
                      o vas a liderar?
                    </span>
                  </p>
                </div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Módulo Clientes',
                  benefit: 'Trato único',
                  description: 'Conoce a tu cliente, conoce sus estadísticas y dales un trato único.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Módulo de Reserva Poderoso',
                  benefit: 'Súper sencillo',
                  description: 'Reserva múltiples canchas de forma sencilla, divide la cuenta entre los jugadores.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Módulo de Torneos',
                  benefit: '+500 participantes',
                  description: 'Organiza torneos de +500 participantes de forma automática.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: 'Ligas',
                  benefit: 'IA automática',
                  description: 'Organiza ligas de forma automática con el poder de la IA.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: 'Clases',
                  benefit: 'Gestión completa',
                  description: 'Gestiona tus profesores y sesiones de forma eficiente.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Finanzas',
                  benefit: 'Rentabilidad clara',
                  description: 'Administra claramente tus ingresos y gastos y vive la rentabilidad de tu negocio.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Módulo BI',
                  benefit: 'Insights sorprendentes',
                  description: 'Encuentra insights sorprendentes de tu club con análisis avanzados.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-[#E3FD72]/30 rounded-3xl p-6 text-center hover:border-[#E3FD72]/50 transition-all group"
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

            {/* Statistics Section - How the system improves your club */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                  Cómo el sistema mejora tu club
                </h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Resultados reales que puedes esperar en los primeros 90 días
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    metric: '+47%',
                    description: 'Incremento en ocupación promedio',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )
                  },
                  {
                    metric: '$35,964',
                    description: 'Ahorro anual eliminando comisiones',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    metric: '73%',
                    description: 'Menos tiempo en tareas administrativas',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    metric: '89%',
                    description: 'Satisfacción de socios mejorada',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E3FD72]/10 to-[#E3FD72]/5 backdrop-blur-sm border border-[#E3FD72]/30 rounded-2xl p-6 text-center hover:border-[#E3FD72]/50 transition-all group"
                  >
                    <div className="text-[#E3FD72] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#E3FD72] mb-2 font-display">
                      {stat.metric}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
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