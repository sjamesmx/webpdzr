'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3FD72]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-[#E3FD72]/50 transition-all duration-500">
        <div className="mb-6">
          <span className="text-5xl">{feature.icon}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 font-display">
          {feature.title}
        </h3>
        
        <p className="text-gray-400 mb-6">
          {feature.description}
        </p>
        
        <div className="space-y-3">
          {feature.points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#E3FD72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#E3FD72]" />
              </div>
              <span className="text-sm text-gray-300">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesNew() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: '🧬',
      title: 'IA Biomecánica',
      description: 'Análisis científico de cada movimiento con precisión milimétrica.',
      points: [
        'MediaPipe + TensorFlow integrados',
        'Análisis de 15+ tipos de golpes',
        'Corrección postural en tiempo real',
        'Métricas de potencia y precisión'
      ]
    },
    {
      icon: '🎯',
      title: 'Padel IQ Real',
      description: 'Tu nivel basado en datos, no en opiniones.',
      points: [
        'Escala objetiva 0-100',
        'Comparación con pros',
        'Evolución histórica detallada',
        'Certificación verificable'
      ]
    },
    {
      icon: '💎',
      title: 'Cero Comisiones',
      description: 'Reservas gratis para siempre. Sin letra pequeña.',
      points: [
        'Módulo base 100% gratuito',
        'Sin fees por transacción',
        'Pagos directos al club',
        'Transparencia total'
      ]
    },
    {
      icon: '🚀',
      title: 'Suite Completa',
      description: 'Todo lo que un club moderno necesita.',
      points: [
        'Torneos de 1000+ jugadores',
        'Business Intelligence avanzado',
        'Gestión financiera integrada',
        'APIs abiertas'
      ]
    },
    {
      icon: '🌍',
      title: 'Tecnología Abierta',
      description: 'Sin vendor lock-in. Tu data es tuya.',
      points: [
        'MCP + Ollama local',
        'Exportación completa',
        'Sin dependencias cloud',
        'Open source friendly'
      ]
    },
    {
      icon: '⚡',
      title: 'Beta Exclusiva',
      description: 'Solo 4 clubes pioneros en Puebla.',
      points: [
        'Acceso anticipado',
        'Precio fundador de por vida',
        'Influencia en el roadmap',
        'Soporte prioritario 24/7'
      ]
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E3FD72]/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E3FD72]/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-8"
          >
            <div className="w-2 h-2 bg-[#E3FD72] rounded-full animate-pulse" />
            <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">
              Características 2025
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Tecnología que
            <span className="block text-[#E3FD72]">
              redefine el juego
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No somos otra app de reservas. Somos el salto evolutivo que el padel necesitaba.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            ¿Listo para el futuro? Únete a los pioneros.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#E3FD72] text-black font-bold rounded-lg hover:bg-[#d5ed62] transition-colors text-lg font-display"
          >
            Solicitar Acceso Beta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}