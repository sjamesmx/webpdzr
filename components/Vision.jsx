'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Libertad Total',
      description: 'Sin comisiones, sin ataduras, sin contratos. Tu club, tus reglas.',
      highlight: true
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Ciencia Real',
      description: 'Cada métrica respaldada por papers científicos y biomecánica deportiva.',
      highlight: true
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tecnología Abierta',
      description: 'Open source friendly. Tu data es tuya, exporta cuando quieras.',
      highlight: true
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovación Constante',
      description: 'Actualizaciones semanales basadas en feedback real de clubes y jugadores.',
      highlight: false
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Precisión Absoluta',
      description: 'Computer Vision + IA para análisis que ningún humano puede igualar.',
      highlight: false
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Velocidad Brutal',
      description: 'Análisis en tiempo real, resultados instantáneos, mejora inmediata.',
      highlight: false
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E3FD72]/5 via-transparent to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #E3FD72 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-8">
            <div className="w-2 h-2 bg-[#E3FD72] rounded-full animate-pulse" />
            <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">
              Nuestra Visión
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Por qué somos
            <span className="block text-[#E3FD72]">
              el futuro inevitable
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No seguimos las reglas del juego. Las reescribimos desde cero.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${benefit.highlight ? 'md:scale-110' : ''}`}
            >
              {benefit.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E3FD72] to-[#d5ed62] rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              )}
              
              <div className={`relative p-8 rounded-3xl transition-all duration-500 ${
                benefit.highlight 
                  ? 'bg-black border-2 border-[#E3FD72]' 
                  : 'bg-gray-900/50 border border-gray-800 hover:border-[#E3FD72]/50'
              }`}>
                <div className="text-[#E3FD72] mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E3FD72]/10 via-[#E3FD72]/5 to-[#E3FD72]/10 blur-3xl" />
          
          <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl border border-[#E3FD72]/30 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E3FD72]/20 rounded-full mb-8"
            >
              <span className="text-[#E3FD72] font-bold">MANIFIESTO</span>
            </motion.div>

            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
              "Creemos en un mundo donde cada jugador conoce su verdadero potencial. 
              Donde cada club opera con eficiencia perfecta. Donde la tecnología 
              <span className="text-[#E3FD72] font-bold"> democratiza la excelencia</span>."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg hover:bg-[#d5ed62] transition-colors text-lg font-display"
              >
                Únete a la Revolución
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#E3FD72] text-[#E3FD72] hover:bg-[#E3FD72] hover:text-black transition-all font-bold text-lg rounded-lg"
              >
                Lee el Manifiesto Completo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}