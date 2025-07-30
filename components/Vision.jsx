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
      icon: '💚',
      title: 'Libertad Total',
      description: 'Sin comisiones, sin ataduras, sin contratos. Tu club, tus reglas.',
      highlight: true
    },
    {
      icon: '🔬',
      title: 'Ciencia Real',
      description: 'Cada métrica respaldada por papers científicos y biomecánica deportiva.',
      highlight: true
    },
    {
      icon: '🌍',
      title: 'Tecnología Abierta',
      description: 'Open source friendly. Tu data es tuya, exporta cuando quieras.',
      highlight: true
    },
    {
      icon: '🚀',
      title: 'Innovación Constante',
      description: 'Actualizaciones semanales basadas en feedback real de clubes y jugadores.',
      highlight: false
    },
    {
      icon: '🎯',
      title: 'Precisión Absoluta',
      description: 'Computer Vision + IA para análisis que ningún humano puede igualar.',
      highlight: false
    },
    {
      icon: '⚡',
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
                <div className="text-5xl mb-4">{benefit.icon}</div>
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